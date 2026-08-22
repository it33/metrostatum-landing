/**
 * Guard: every About-page leader must have a hosted headshot file that exists
 * on disk (and, when a preview is up, returns HTTP 200 and paints in the DOM).
 *
 * History: LinkedIn/unavatar hotlinks broke; we switched to public/images/leaders.
 * Several JPGs were never committed to GitHub Pages, so cards fell back to initials.
 */
import { readFileSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PHOTOS_TS = join(ROOT, "src/components/landing/leader-photos.ts");
const DATA_TS = join(ROOT, "src/components/landing/leadership-data.ts");
const LEADERS_DIR = join(ROOT, "public/images/leaders");
const BASE = process.env.LEADER_TEST_URL || process.env.HIGHLIGHT_TEST_URL || "http://127.0.0.1:8080/";

export function parsePhotoMap(src) {
  const map = new Map();
  const re = /(?:["']([\w.-]+)["']|(\w+))\s*:\s*`\$\{base\}([^`]+)`/g;
  let m;
  while ((m = re.exec(src))) {
    map.set(m[1] || m[2], m[3].replace(/^\//, ""));
  }
  return map;
}

export function parseLeaders(src) {
  const leaders = [];
  const blocks = src.split(/\{\s*name:/).slice(1);
  for (const block of blocks) {
    const name = block.match(/^\s*"((?:\\.|[^"\\])*)"/)?.[1]?.replace(/\\"/g, '"');
    const vanity = block.match(/vanity:\s*"([^"]+)"/)?.[1];
    const photoKey = block.match(/LEADER_PHOTOS\["([^"]+)"\]/)?.[1];
    const initials = block.match(/initials:\s*"([^"]+)"/)?.[1];
    if (name && vanity) leaders.push({ name, vanity, photoKey, initials });
  }
  return leaders;
}

export function checkLeaderPhotos({ photosSrc, dataSrc, leadersDir }) {
  const errors = [];
  const photos = parsePhotoMap(photosSrc);
  const leaders = parseLeaders(dataSrc);

  if (leaders.length < 10) {
    errors.push(`expected 10+ leaders in leadership-data.ts, found ${leaders.length}`);
  }

  for (const l of leaders) {
    if (!l.photoKey) {
      errors.push(`${l.name}: missing LEADER_PHOTOS lookup`);
      continue;
    }
    if (l.photoKey !== l.vanity) {
      errors.push(`${l.name}: photo key "${l.photoKey}" does not match vanity "${l.vanity}"`);
    }
    const rel = photos.get(l.photoKey);
    if (!rel) {
      errors.push(`${l.name}: LEADER_PHOTOS["${l.photoKey}"] is undefined`);
      continue;
    }
    const abs = join(leadersDir, rel.replace(/^images\/leaders\//, ""));
    if (!existsSync(abs)) {
      errors.push(`${l.name}: missing file public/${rel}`);
      continue;
    }
    const size = statSync(abs).size;
    if (size < 8_000) {
      errors.push(`${l.name}: ${rel} is only ${size} bytes — likely not a real headshot`);
    }
    const head = readFileSync(abs).subarray(0, 3);
    if (head[0] !== 0xff || head[1] !== 0xd8) {
      errors.push(`${l.name}: ${rel} is not a JPEG`);
    }
  }

  return { errors, leaders, photos };
}

async function serverUp(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(2500) });
    return res.ok;
  } catch {
    return false;
  }
}

async function checkHttpAndDom(baseUrl, photos, leaders) {
  const errors = [];
  const origin = baseUrl.replace(/\/$/, "");
  for (const rel of photos.values()) {
    const url = `${origin}/${rel}`;
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
      if (!res.ok) errors.push(`HTTP ${res.status} for ${url}`);
      else {
        const type = res.headers.get("content-type") || "";
        if (!type.includes("jpeg") && !type.includes("jpg") && !type.includes("octet-stream")) {
          errors.push(`${url} content-type ${type}`);
        }
      }
    } catch (e) {
      errors.push(`fetch failed ${url}: ${e.message}`);
    }
  }

  try {
    const { chromium } = await import("playwright");
    const browser = await chromium.launch({ headless: true, args: ["--no-sandbox", "--disable-dev-shm-usage"] });
    const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
    const about = `${origin}/about`;
    await page.goto(about, { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.waitForTimeout(800);
    for (const l of leaders) {
      const img = page.getByAltText(l.name, { exact: true }).first();
      const count = await img.count();
      if (!count) {
        errors.push(`${l.name}: no <img alt> on /about (fell back to initials?)`);
        continue;
      }
      await img.scrollIntoViewIfNeeded();
      await img.evaluate((el) => {
        if (el instanceof HTMLImageElement && !el.complete) {
          el.loading = "eager";
        }
      });
      await page.waitForTimeout(150);
      const ok = await img.evaluate((el) => el instanceof HTMLImageElement && el.complete && el.naturalWidth > 20);
      if (!ok) errors.push(`${l.name}: photo did not paint (naturalWidth=0) — 404 or broken JPEG`);
    }
    await browser.close();
  } catch (e) {
    if (e && (e.code === "ERR_MODULE_NOT_FOUND" || /Cannot find package 'playwright'/.test(String(e)))) {
      // File + HTTP checks still ran; skip DOM paint check when Playwright isn't installed.
    } else {
      errors.push(`browser check failed: ${e.message}`);
    }
  }

  return errors;
}

export async function runLeaderPhotoCheck({ live = true } = {}) {
  const photosSrc = readFileSync(PHOTOS_TS, "utf8");
  const dataSrc = readFileSync(DATA_TS, "utf8");
  const { errors, leaders, photos } = checkLeaderPhotos({ photosSrc, dataSrc, leadersDir: LEADERS_DIR });
  if (live && (await serverUp(BASE))) {
    errors.push(...(await checkHttpAndDom(BASE, photos, leaders)));
  }
  return { errors, leaders };
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  const { errors, leaders } = await runLeaderPhotoCheck({ live: true });
  if (errors.length) {
    console.error(`Leader photo check FAILED (${errors.length} error(s), ${leaders.length} leaders):`);
    for (const e of errors) console.error(" -", e);
    process.exit(1);
  }
  console.log(`Leader photo check passed — ${leaders.length} headshots present`);
}
