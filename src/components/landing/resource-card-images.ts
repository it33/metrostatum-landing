/**
 * Resource card imagery for About page.
 * Inline SVG data URLs in Denim + Marigold so the module has no external file deps.
 * (Previous base64 webp modules were truncated/empty on GitHub and broke CI.)
 */

function cardSvg(label: string, accentX: number, accentY: number): string {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="640" viewBox="0 0 960 640">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
    `<stop stop-color="#1E325C"/><stop offset="1" stop-color="#152442"/></linearGradient></defs>` +
    `<rect width="960" height="640" fill="url(#g)"/>` +
    `<circle cx="${accentX}" cy="${accentY}" r="140" fill="#FFBC1F" opacity="0.28"/>` +
    `<circle cx="${accentX - 180}" cy="${accentY + 120}" r="70" fill="#FFBC1F" opacity="0.16"/>` +
    `<text x="56" y="560" fill="#FFBC1F" font-family="Barlow, system-ui, sans-serif" font-size="52" font-weight="700">${label}</text>` +
    `</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export const RESOURCE_CARD_IMAGES = {
  press: cardSvg("Press", 760, 160),
  blog: cardSvg("Blog", 700, 220),
  community: cardSvg("Community", 780, 140),
  careers: cardSvg("Careers", 720, 200),
  partners: cardSvg("Partners", 740, 180),
  sales: cardSvg("Sales", 760, 210),
} as const;
