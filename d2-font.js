/* Bitmap D2 display text based on the character atlases and advance widths
   used by the Harrogath D2 Font Generator. Kept separate from the app bundle. */
(() => {
  const base = 'images/d2font/';
  const specs = {
    small: { file: 'font16.webp', key: 'font16', w: 14, h: 16, scale: 1.18 },
  };
  const images = {};
  const GOLD = 4;

  function loadImage(file) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = base + file;
    });
  }

  function drawText(text, spec, advances, atlas, maxWidth) {
    const lines = text.split('\n');
    if ([...text].some(ch => ch.charCodeAt(0) > 255)) return null;
    const widths = lines.map(line => [...line].reduce((w, ch) => w + advances[ch.charCodeAt(0)], 0));
    const widest = Math.max(1, ...widths);
    const scale = Math.min(spec.scale, maxWidth > 0 ? maxWidth / widest : spec.scale);
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.ceil(widest * scale));
    canvas.height = Math.max(1, Math.ceil(lines.length * spec.h * scale));
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.imageSmoothingEnabled = false;
    const colorRow = GOLD === 0 ? 0 : GOLD + 1;
    lines.forEach((line, row) => {
      let x = 0;
      for (const ch of line) {
        const code = ch.charCodeAt(0);
        ctx.drawImage(atlas, code * spec.w, colorRow * spec.h, spec.w, spec.h,
          Math.round(x * scale), Math.round(row * spec.h * scale),
          Math.ceil(spec.w * scale), Math.ceil(spec.h * scale));
        x += advances[code];
      }
    });
    canvas.className = 'd2-bitmap-heading';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.display = 'inline-block';
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
    canvas.style.maxWidth = '100%';
    canvas.style.objectFit = 'contain';
    canvas.style.verticalAlign = 'middle';
    return canvas;
  }

  function renderHeading(el, metrics) {
    if (el.dataset.d2Bitmap === '1') return;
    const textNode = [...el.childNodes].find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    const text = (textNode ? textNode.textContent : el.textContent).trim();
    if (!text) return;
    const spec = specs.small;
    const atlas = images.small;
    const advances = metrics[spec.key];
    if (!advances || [...text].some(ch => ch.charCodeAt(0) > 255)) return;
    const canvas = drawText(text, spec, advances, atlas, el.clientWidth || 0);
    if (!canvas) return;
    const readable = document.createElement('span');
    readable.textContent = text;
    readable.style.cssText = 'position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important';
    const frag = document.createDocumentFragment();
    frag.append(readable, canvas);
    if (textNode) textNode.replaceWith(frag);
    else el.replaceChildren(readable, canvas);
    el.dataset.d2Bitmap = '1';
  }

  async function start() {
    try {
      const [metricsResponse, small] = await Promise.all([
        fetch(base + 'metrics.json'), loadImage(specs.small.file),
      ]);
      if (!metricsResponse.ok) return;
      const metrics = await metricsResponse.json();
      images.small = small;
      const scan = (root = document) => root.querySelectorAll([
        '#hp .weapon-tabs button', '#hp .merc-sheet-title', '#hp .merc-fact span', '#hp .merc-bottom span'
      ].join(',')).forEach(el => renderHeading(el, metrics));
      window.__d2FontScan = scan;
      scan();
    } catch (_) {
      /* Keep the site's existing text styles if local font assets are unavailable. */
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
