"use client";

import { useEffect, useRef } from "react";

/**
 * The hero background: a sunset cloudscape over a wheat field with a lone tree,
 * painted procedurally so the page carries no photograph.
 *
 * Clouds and field are computed at low resolution and scaled up — they are soft,
 * so the upscale is invisible and it keeps the paint under a frame. The tree is
 * drawn afterwards at full resolution. The seed is fixed, so every visitor sees
 * the same composition.
 */

const SEED = 20260821;
const HZ = 0.735; // horizon, as a fraction of height
const SHADOW: [number, number, number] = [44, 13, 5];
const LIT: [number, number, number] = [255, 186, 104];

type Stop = [number, number, number, number];

const SKY: Stop[] = [
  [0, 22, 8, 5],
  [0.14, 72, 19, 7],
  [0.34, 152, 48, 10],
  [0.54, 208, 88, 24],
  [0.74, 240, 140, 52],
  [0.86, 242, 168, 92],
  [0.95, 182, 176, 172],
  [1, 148, 164, 180],
];

const FIELD: Stop[] = [
  [0, 214, 158, 66],
  [0.1, 192, 132, 40],
  [0.4, 144, 92, 22],
  [1, 50, 28, 7],
];

const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);

function smoothstep(a: number, b: number, t: number) {
  const k = clamp((t - a) / (b - a), 0, 1);
  return k * k * (3 - 2 * k);
}

function ramp(stops: Stop[], t: number): [number, number, number] {
  for (let i = 1; i < stops.length; i++) {
    if (t <= stops[i][0] || i === stops.length - 1) {
      const a = stops[i - 1];
      const b = stops[i];
      const k = clamp((t - a[0]) / (b[0] - a[0]), 0, 1);
      return [
        a[1] + (b[1] - a[1]) * k,
        a[2] + (b[2] - a[2]) * k,
        a[3] + (b[3] - a[3]) * k,
      ];
    }
  }
  return [0, 0, 0];
}

export default function SunsetSky() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let seed = SEED;
    const rnd = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };

    const GS = 256;
    const lat = new Float32Array(GS * GS);
    const fillLattice = () => {
      seed = SEED;
      for (let i = 0; i < GS * GS; i++) lat[i] = rnd();
    };
    const L = (a: number, b: number) =>
      lat[((b & (GS - 1)) * GS) + (a & (GS - 1))];

    const vn = (x: number, y: number) => {
      const xi = Math.floor(x);
      const yi = Math.floor(y);
      const xf = x - xi;
      const yf = y - yi;
      const u = xf * xf * (3 - 2 * xf);
      const v = yf * yf * (3 - 2 * yf);
      const a = L(xi, yi);
      const b = L(xi + 1, yi);
      const c = L(xi, yi + 1);
      const d = L(xi + 1, yi + 1);
      return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
    };

    const fbm = (x: number, y: number, oct: number) => {
      let sum = 0;
      let amp = 0.5;
      let f = 1;
      for (let o = 0; o < oct; o++) {
        sum += amp * vn(x * f, y * f);
        f *= 2.03;
        amp *= 0.5;
      }
      return sum;
    };

    const drawTree = (w: number, h: number) => {
      const sc = Math.min(w * 0.052, h * 0.1);
      const bx = w * 0.545;
      const by = h * HZ + h * 0.012;
      seed = 99127; // the canopy is one fixed arrangement

      ctx.save();
      ctx.fillStyle = "rgba(48,16,6,.96)";
      ctx.beginPath();
      ctx.moveTo(bx - sc * 0.05, by);
      ctx.lineTo(bx - sc * 0.028, by - sc * 0.46);
      ctx.lineTo(bx + sc * 0.028, by - sc * 0.46);
      ctx.lineTo(bx + sc * 0.05, by);
      ctx.closePath();
      ctx.fill();

      const cy = by - sc * 0.68;
      const rx = sc * 0.46;
      const ry = sc * 0.3;

      for (let i = 0; i < 34; i++) {
        const a = rnd() * Math.PI * 2;
        const rr = Math.sqrt(rnd());
        const rad = sc * (0.09 + rnd() * 0.1);
        ctx.fillStyle = rnd() > 0.72 ? "rgba(96,34,12,.92)" : "rgba(52,18,7,.92)";
        ctx.beginPath();
        ctx.arc(bx + Math.cos(a) * rx * rr, cy + Math.sin(a) * ry * rr, rad, 0, Math.PI * 2);
        ctx.fill();
      }
      for (let i = 0; i < 7; i++) {
        const a = Math.PI * (1.05 + rnd() * 0.7);
        ctx.fillStyle = "rgba(226,118,44,.4)";
        ctx.beginPath();
        ctx.arc(
          bx + Math.cos(a) * rx * 0.8,
          cy + Math.sin(a) * ry * 0.85,
          sc * (0.05 + rnd() * 0.05),
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }
      ctx.restore();
    };

    const paintScene = (w: number, h: number) => {
      const sw = 760;
      const sh = Math.max(220, Math.round(760 * h / w));
      const off = document.createElement("canvas");
      off.width = sw;
      off.height = sh;
      const octx = off.getContext("2d");
      if (!octx) return;

      const img = octx.createImageData(sw, sh);
      const px = img.data;
      const hzp = sh * HZ;
      let o = 0;

      for (let y = 0; y < sh; y++) {
        for (let x = 0; x < sw; x++, o += 4) {
          let r: number;
          let g: number;
          let b: number;

          if (y < hzp) {
            const ty = y / hzp;
            const c = ramp(SKY, ty);
            r = c[0];
            g = c[1];
            b = c[2];

            const nx = (x / sw) * 2.5 + ty * 1.35; // shear: bands sweep diagonally
            const ny = ty * 9.5; // squashed in y = streaky
            const warp = fbm(nx * 0.45, ny * 0.4, 3);
            const n = fbm(nx + warp * 1.15, ny, 6);
            const nUp = fbm(nx + warp * 1.15, ny - 0.42, 4);
            const env = smoothstep(0, 0.07, ty) * (1 - smoothstep(0.8, 0.965, ty));
            const d = smoothstep(0.36, 0.62, n) * env;
            const lit = clamp((n - nUp) * 6, 0, 1) * Math.pow(d, 0.7);

            r += (SHADOW[0] - r) * d * 0.82;
            g += (SHADOW[1] - g) * d * 0.82;
            b += (SHADOW[2] - b) * d * 0.82;
            r += (LIT[0] - r) * lit * 0.62;
            g += (LIT[1] - g) * lit * 0.62;
            b += (LIT[2] - b) * lit * 0.62;

            const gx = x / sw - 0.42; // low sun, left of centre
            const gy = ty - 1;
            const glow = Math.exp(-(gx * gx * 4 + gy * gy * 150)) * 54;
            r += glow;
            g += glow * 0.6;
            b += glow * 0.26;
          } else {
            const tf = (y - hzp) / (sh - hzp);
            const f = ramp(FIELD, tf);
            r = f[0];
            g = f[1];
            b = f[2];

            const persp = 0.1 + Math.pow(tf, 1.5) * 1.9; // stalks coarsen toward the viewer
            const stalk = vn(x * persp * 0.9, y * 0.05 * persp + 40);
            const patch = vn(x * 0.018, y * 0.026 + 11);
            const amp = 0.1 + smoothstep(0, 0.35, tf) * 0.2;
            const k = 1 - amp * 0.5 + stalk * amp + (patch - 0.5) * 0.14;
            r *= k;
            g *= k;
            b *= k;

            const haze = (1 - smoothstep(0, 0.22, tf)) * 26;
            r += haze;
            g += haze * 0.74;
            b += haze * 0.5;

            const far = (1 - smoothstep(0, 0.055, tf)) * 0.5; // atmospheric fade
            r += (152 - r) * far;
            g += (162 - g) * far;
            b += (174 - b) * far;
          }

          px[o] = clamp(r, 0, 255);
          px[o + 1] = clamp(g, 0, 255);
          px[o + 2] = clamp(b, 0, 255);
          px[o + 3] = 255;
        }
      }

      octx.putImageData(img, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(off, 0, 0, sw, sh, 0, 0, w, h);
      drawTree(w, h);
    };

    let lastW = 0;
    const render = () => {
      const rect = cv.getBoundingClientRect();
      const w = Math.max(320, Math.round(rect.width));
      const h = Math.max(360, Math.round(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      fillLattice();
      paintScene(w, h);
      lastW = w;
    };

    render();

    let t: ReturnType<typeof setTimeout>;
    const onResize = () => {
      if (Math.abs(cv.getBoundingClientRect().width - lastW) < 48) return;
      clearTimeout(t);
      t = setTimeout(render, 180);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, []);

  return <canvas ref={ref} className="hero__sky" aria-hidden="true" />;
}
