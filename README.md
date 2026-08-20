# High-Up!

Landing page for High-Up! — an official Slush side event where 500+ high school
students from across Finland build for two days at Aalto University,
19–20 November 2026. Run by STUHI and Aalto University.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into ./out
```

`output: "export"` in `next.config.ts`, so the build is plain HTML/CSS/JS in `out/`
and needs no server.

## Deploying

Vercel detects Next.js and needs no configuration:

```bash
npx vercel        # preview deploy
npx vercel --prod # production
```

Set `NEXT_PUBLIC_SITE_URL` to the live origin (e.g. `https://highup.fi`) so the
Open Graph tags carry absolute URLs.

## Notes

- The hero background is painted on a canvas from noise, not a photograph
  (`components/SunsetSky.tsx`). Fixed seed, so the composition never changes.
- `app/opengraph-image.png` is that same scene, pre-rendered with the wordmark.
- Logos in `public/` are the official white Aalto and STUHI marks, unmodified.
- Booking link goes to Google Calendar; student signups go to the STUHI Launchpad.
