/**
 * Highlight alignment harness for diagram explorers (network types + IME).
 * Measures the marigold highlight box vs calibrated ground-truth bands.
 *
 * Usage:
 *   node scripts/highlight-alignment.mjs [baseUrl]
 * Exit 0 = all pass, 1 = failures.
 */
import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "screenshots", "highlight-test");
const BASE = process.argv[2] || process.env.HIGHLIGHT_TEST_URL || "http://127.0.0.1:8080/";

/** Max absolute error (percentage points) allowed on each edge. */
const TOL = 2.0;
/** Minimum IoU between rendered highlight and expected band. */
const MIN_IOU = 0.82;

/**
 * Ground-truth bands as % of the diagram image (calibrated against source art).
 * Network diagram: title ends ~13.1%; Public / Restricted / DDIL are the three rows.
 */
const NETWORK_EXPECTED = {
  overview: { left: 1, top: 9, width: 98, height: 88 },
  public: { left: 1, top: 13.1, width: 98, height: 25.4 }, // 13.1 → 38.5
  restricted: { left: 1, top: 39.2, width: 98, height: 27.3 }, // 39.2 → 66.5
  ddil: { left: 1, top: 67.2, width: 98, height: 29.5 }, // 67.2 → 96.7
};

/**
 * IME layer boxes in unscaled image space (1920×1080).
 * Bands: title 0–16, use cases 17–31, app 31–58, integration 60–77, deploy 81–95.
 */
const IME_EXPECTED = {
  overview: null, // no border box on overview
  "use-cases": { left: 3.5, top: 17.0, width: 93, height: 13.5 },
  application: { left: 3.5, top: 31.5, width: 93, height: 26.5 },
  integration: { left: 3.5, top: 60.0, width: 93, height: 17.0 },
  deployment: { left: 3.5, top: 81.0, width: 93, height: 14.5 },
  security: { left: 54, top: 81.0, width: 42.5, height: 14.5 },
};

function iou(a, b) {
  const ax2 = a.left + a.width;
  const ay2 = a.top + a.height;
  const bx2 = b.left + b.width;
  const by2 = b.top + b.height;
  const ix1 = Math.max(a.left, b.left);
  const iy1 = Math.max(a.top, b.top);
  const ix2 = Math.min(ax2, bx2);
  const iy2 = Math.min(ay2, by2);
  const iw = Math.max(0, ix2 - ix1);
  const ih = Math.max(0, iy2 - iy1);
  const inter = iw * ih;
  const union = a.width * a.height + b.width * b.height - inter;
  return union <= 0 ? 0 : inter / union;
}

function edgeErrors(actual, expected) {
  return {
    left: Math.abs(actual.left - expected.left),
    top: Math.abs(actual.top - expected.top),
    width: Math.abs(actual.width - expected.width),
    height: Math.abs(actual.height - expected.height),
    right: Math.abs(actual.left + actual.width - (expected.left + expected.width)),
    bottom: Math.abs(actual.top + actual.height - (expected.top + expected.height)),
  };
}

function checkBox(name, actual, expected, tol = TOL) {
  const errors = [];
  if (!actual) {
    errors.push(`${name}: missing highlight box`);
    return errors;
  }
  if (!expected) return errors;
  const e = edgeErrors(actual, expected);
  const overlap = iou(actual, expected);
  for (const [edge, val] of Object.entries(e)) {
    if (val > tol) {
      errors.push(
        `${name}: ${edge} off by ${val.toFixed(2)}pp (actual=${edgeValue(actual, edge).toFixed(2)}, expected≈${edgeValue(expected, edge).toFixed(2)}, tol=${tol})`,
      );
    }
  }
  if (overlap < MIN_IOU) {
    errors.push(
      `${name}: IoU ${overlap.toFixed(3)} < ${MIN_IOU} (actual=${fmt(actual)} expected=${fmt(expected)})`,
    );
  }
  return errors;
}

function edgeValue(box, edge) {
  if (edge === "right") return box.left + box.width;
  if (edge === "bottom") return box.top + box.height;
  return box[edge];
}

function fmt(b) {
  return `L${b.left.toFixed(1)} T${b.top.toFixed(1)} W${b.width.toFixed(1)} H${b.height.toFixed(1)}`;
}

async function measureNetworkHighlight(page) {
  return page.evaluate(() => {
    const section = document.querySelector("#networks");
    if (!section) return { error: "no #networks section" };
    const img = section.querySelector("img");
    if (!img) return { error: "no diagram image" };
    const candidates = [...section.querySelectorAll("div.pointer-events-none")];
    const hl = candidates.find((d) => {
      const st = d.getAttribute("style") || "";
      return (
        st.includes("left:") &&
        st.includes("top:") &&
        st.includes("width:") &&
        st.includes("height:") &&
        d.className.includes("absolute")
      );
    });
    if (!hl) return { error: "no highlight box" };
    const ir = img.getBoundingClientRect();
    const hr = hl.getBoundingClientRect();
    // Prefer CSS % (stable) when available
    const style = hl.style;
    if (style.left && style.top && style.width && style.height) {
      return {
        left: parseFloat(style.left),
        top: parseFloat(style.top),
        width: parseFloat(style.width),
        height: parseFloat(style.height),
        source: "css",
      };
    }
    return {
      left: ((hr.left - ir.left) / ir.width) * 100,
      top: ((hr.top - ir.top) / ir.height) * 100,
      width: (hr.width / ir.width) * 100,
      height: (hr.height / ir.height) * 100,
      source: "dom",
    };
  });
}

async function measureImeHighlight(page) {
  return page.evaluate(() => {
    const stage = document.querySelector("[data-ime-stage]");
    if (!stage) return { error: "no ime stage" };
    const boxes = [...stage.querySelectorAll("div")];
    const hl = boxes.find((d) => {
      const st = d.getAttribute("style") || "";
      return (
        st.includes("left:") &&
        st.includes("top:") &&
        st.includes("width:") &&
        st.includes("height:") &&
        d.className.includes("absolute") &&
        d.className.includes("border")
      );
    });
    if (!hl) return { missing: true };
    const style = hl.style;
    return {
      left: parseFloat(style.left),
      top: parseFloat(style.top),
      width: parseFloat(style.width),
      height: parseFloat(style.height),
      source: "css",
    };
  });
}


async function visualNetworkCheck(page, id, expected) {
  // Sample pixels: center of expected band should be relatively bright (not fully dimmed),
  // and marigold border should exist near expected top edge.
  return page.evaluate(({ expected, id }) => {
    const section = document.querySelector("#networks");
    const img = section?.querySelector("img");
    const wrap = img?.parentElement;
    if (!img || !wrap) return { error: "no img" };
    const canvas = document.createElement("canvas");
    const ir = img.getBoundingClientRect();
    canvas.width = Math.round(ir.width);
    canvas.height = Math.round(ir.height);
    const ctx = canvas.getContext("2d");
    // draw only the visible composite via screenshot-like approach won't work for CORS;
    // instead inspect the highlight DOM geometry vs image geometry (already done)
    // Visual proxy: highlight rect must cover expected band center and not cover other band centers.
    const hl = [...wrap.querySelectorAll("div")].find((d) => {
      const st = d.getAttribute("style") || "";
      return st.includes("left:") && st.includes("width:") && d.className.includes("absolute") && d.className.includes("border");
    });
    if (!hl) return { error: "no hl" };
    const hr = hl.getBoundingClientRect();
    const centers = {
      public: { x: 0.5, y: (13.1 + 38.5) / 2 / 100 },
      restricted: { x: 0.5, y: (39.2 + 66.5) / 2 / 100 },
      ddil: { x: 0.5, y: (67.2 + 96.7) / 2 / 100 },
    };
    const contains = (cx, cy) => {
      const x = ir.left + cx * ir.width;
      const y = ir.top + cy * ir.height;
      // account for border inset (~3px)
      return x >= hr.left - 2 && x <= hr.right + 2 && y >= hr.top - 2 && y <= hr.bottom + 2;
    };
    const results = {};
    for (const [band, c] of Object.entries(centers)) {
      results[band] = contains(c.x, c.y);
    }
    // Selected band (if not overview) must be inside; others outside
    const errs = [];
    if (id === "overview") {
      // all centers should be inside overview box
      for (const [band, ok] of Object.entries(results)) {
        if (!ok) errs.push(`overview missing ${band} center`);
      }
    } else {
      if (!results[id]) errs.push(`selected ${id} center NOT inside highlight`);
      for (const [band, ok] of Object.entries(results)) {
        if (band !== id && ok) errs.push(`other band ${band} center incorrectly inside ${id} highlight`);
      }
    }
    return { results, errs, hr: { t: ((hr.top-ir.top)/ir.height)*100, b: ((hr.bottom-ir.top)/ir.height)*100 } };
  }, { expected, id });
}

async function clickTab(page, sectionSel, label) {
  await page.evaluate(
    ({ sectionSel, label }) => {
      const root = document.querySelector(sectionSel);
      const tabs = [...(root?.querySelectorAll("[role=tab]") || [])];
      const tab = tabs.find((t) => t.textContent?.trim() === label);
      if (!tab) throw new Error(`Tab not found: ${label} in ${sectionSel}`);
      tab.click();
    },
    { sectionSel, label },
  );
}

async function run() {
  mkdirSync(OUT, { recursive: true });
  const failures = [];
  const report = [];

  const browser = await chromium.launch({
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  // Run at mobile + desktop — highlights are % based so both must match.
  for (const [vpName, viewport] of [
    ["mobile", { width: 390, height: 844 }],
    ["desktop", { width: 1280, height: 900 }],
  ]) {
    const page = await browser.newPage({ viewport });
    page.setDefaultTimeout(30000);
    await page.goto(BASE, { waitUntil: "load", timeout: 60000 });
    await page.waitForTimeout(1200);

    // Pause network autoplay
    await page.evaluate(() => {
      const s = document.querySelector("#networks");
      if (s) s.dispatchEvent(new Event("mouseenter", { bubbles: true }));
    });

    // --- Network types ---
    await page.evaluate(() =>
      document.querySelector("#networks")?.scrollIntoView({ block: "start" }),
    );
    await page.waitForTimeout(400);

    const networkTabs = [
      { label: "All networks", id: "overview" },
      { label: "Public", id: "public" },
      { label: "Restricted", id: "restricted" },
      { label: "DDIL", id: "ddil" },
    ];

    for (const { label, id } of networkTabs) {
      await clickTab(page, "#networks", label);
      // Wait for CSS transition (700ms) + paint
      await page.waitForTimeout(850);
      const box = await measureNetworkHighlight(page);
      const expected = NETWORK_EXPECTED[id];
      let errs = box.error
        ? [`network/${vpName}/${id}: ${box.error}`]
        : checkBox(`network/${vpName}/${id}`, box, expected);
      if (!box.error) {
        const vis = await visualNetworkCheck(page, id, expected);
        if (vis.error) errs.push(`network/${vpName}/${id}: visual ${vis.error}`);
        else errs.push(...(vis.errs || []).map((e) => `network/${vpName}/${id}: ${e}`));
      }
      report.push({ module: "network", vp: vpName, id, box, expected, errs });
      failures.push(...errs);
      await page
        .locator("#networks img")
        .screenshot({ path: join(OUT, `network-${vpName}-${id}.png`) })
        .catch(() => {});
    }

    // --- IME ---
    await page.evaluate(() =>
      document.querySelector("#ime")?.scrollIntoView({ block: "center" }),
    );
    await page.waitForTimeout(400);
    // Pause IME autoplay by hovering
    await page.evaluate(() => {
      const s = document.querySelector("#ime");
      if (s) s.dispatchEvent(new Event("mouseenter", { bubbles: true }));
    });

    const imeTabs = [
      { label: "Overview", id: "overview" },
      { label: "Use cases", id: "use-cases" },
      { label: "Application", id: "application" },
      { label: "Integration", id: "integration" },
      { label: "Deployment", id: "deployment" },
      { label: "Security", id: "security" },
    ];

    for (const { label, id } of imeTabs) {
      await clickTab(page, "#ime", label);
      // IME pan is slow (3.45s) but box % is applied immediately — short wait is enough for box
      await page.waitForTimeout(200);
      const box = await measureImeHighlight(page);
      const expected = IME_EXPECTED[id];
      let errs = [];
      if (box.error) {
        errs = [`ime/${vpName}/${id}: ${box.error}`];
      } else if (expected === null) {
        // Overview should not show a tight border (or shows near-full)
        if (box.missing) {
          // ok
        } else if (box.width < 90 || box.height < 90) {
          errs = [
            `ime/${vpName}/${id}: overview should not show a tight highlight (got ${fmt(box)})`,
          ];
        }
      } else if (box.missing) {
        errs = [`ime/${vpName}/${id}: expected highlight box missing`];
      } else {
        errs = checkBox(`ime/${vpName}/${id}`, box, expected);
      }
      report.push({ module: "ime", vp: vpName, id, box, expected, errs });
      failures.push(...errs);
      await page
        .locator("[data-ime-stage]")
        .screenshot({ path: join(OUT, `ime-${vpName}-${id}.png`) })
        .catch(() => {});
    }

    await page.close();
  }

  await browser.close();

  const summary = {
    base: BASE,
    tol: TOL,
    minIou: MIN_IOU,
    passed: failures.length === 0,
    failureCount: failures.length,
    failures,
    report,
  };
  writeFileSync(join(OUT, "report.json"), JSON.stringify(summary, null, 2));

  console.log("\n=== Highlight alignment test ===");
  console.log(`URL: ${BASE}`);
  console.log(`Tolerance: ±${TOL}pp  Min IoU: ${MIN_IOU}`);
  if (failures.length === 0) {
    console.log("ALL MODULES PASSED\n");
    for (const r of report) {
      if (r.box && !r.box.error && !r.box.missing && r.expected) {
        console.log(`  ✓ ${r.module}/${r.vp}/${r.id}: ${fmt(r.box)}`);
      } else {
        console.log(`  ✓ ${r.module}/${r.vp}/${r.id}`);
      }
    }
    process.exit(0);
  } else {
    console.log(`FAILED (${failures.length} errors)\n`);
    for (const f of failures) console.log(`  ✗ ${f}`);
    console.log(`\nReport: ${join(OUT, "report.json")}`);
    process.exit(1);
  }
}

run().catch((err) => {
  console.error("Highlight test crashed:", err);
  process.exit(1);
});
