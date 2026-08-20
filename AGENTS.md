# This is NOT the Next.js you know

This project runs Next.js 16 with the App Router and Turbopack. APIs, conventions and
file structure differ from older versions. Read the relevant guide in
`node_modules/next/dist/docs/` before writing any code, and heed deprecation notices.

## This site

One static page: the landing page for High-Up!, a Slush side event run by STUHI and
Aalto University. `output: "export"`, so there is no server at runtime.

- `app/page.tsx` — all the markup. Server component; keep it that way.
- `app/globals.css` — the whole stylesheet. Hand-written, no Tailwind.
- `components/SunsetSky.tsx` — client component that paints the hero background on a
  canvas (fBm value noise). Fixed seed, so the composition never changes between loads.
- `components/Reveal.tsx` — client component; adds `.in` to `.rv` elements on scroll.
- Brand: black base, orange (`--ember`) ignites, warm bone text. Display type is
  Inter Tight, body is Inter, both self-hosted via `next/font/google`.
- Copy voice: second person, short sentences, no corporate speak
  ("stakeholder", "ecosystem" and the like are out).
