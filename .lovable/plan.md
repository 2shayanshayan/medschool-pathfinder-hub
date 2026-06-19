## Why you're still seeing the Squarespace icon

Search engines (Google in particular) cache favicons aggressively — often for weeks. Even after we replace the file, your search result will keep showing the old icon until Google re-crawls the site. The fix is two parts: replace the icon correctly now, then wait for the cache to refresh.

## Plan

1. **Upload the Medentra logo as a CDN asset** (`src/assets/medentra-logo.png.asset.json`) using `lovable-assets` from the uploaded file.
2. **Generate proper favicon files** from that logo:
   - `public/favicon.ico` (multi-size 16/32/48) — overwrites the existing one
   - `public/favicon-32.png`, `public/favicon-16.png`
   - `public/apple-touch-icon.png` (180×180)
3. **Register icons in `src/routes/__root.tsx`** by adding to the `links` array:
   - `rel="icon"` (ico + png variants)
   - `rel="apple-touch-icon"`
   - This forces browsers and crawlers to pick up the new icon instead of guessing.
4. **Tell you what to do next**: after publishing, Google's search result favicon can take 1–4 weeks to update. You can speed it up by requesting a re-crawl of your homepage in Google Search Console.

No other site code or content changes.
