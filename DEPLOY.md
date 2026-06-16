# Deploying to Cloudflare Workers

This app is a TanStack Start SSR app. It deploys as a Cloudflare **Worker**
(not a static Pages site). The Lovable preview keeps working — these steps
only affect your self-hosted copy.

## One-time setup

### 1. Get the code locally
These commands run on YOUR computer in a terminal (PowerShell, Terminal, etc.) —
not in the GitHub.com web editor.

In Lovable: Plus (+) menu → GitHub → Connect project → Create Repository.
Then on your machine:
```bash
git clone <your-repo-url>
cd <repo>
git checkout -b deploy
npm install
npm install -D wrangler
```

### 2. Switch the build target to Cloudflare
Edit `vite.config.ts` **locally only** (don't push this back to Lovable's
main branch — use a `deploy` branch, otherwise it will break the Lovable
preview):

```ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    target: "cloudflare-module",
    server: { entry: "server" },
  },
  vite: { plugins: [] },
});
```

This repo already has `wrangler.toml` pointing `main` at `src/server.ts`,
which is the Worker entry the Vite plugin bundles.

### 3. Deploy
```bash
npx wrangler login
npm run build
npx wrangler deploy
```

You'll get a `https://future-doctor-site.<your-subdomain>.workers.dev` URL.

### 4. Attach your custom domain
Cloudflare dashboard → Workers & Pages → `future-doctor-site` → Settings →
Domains & Routes → **Add Custom Domain** → enter your domain.

Cloudflare auto-provisions SSL and the DNS record (your domain must be on
a Cloudflare zone you own).

## Ongoing updates

1. Edit in Lovable as usual → it auto-pushes to GitHub `main`.
2. Locally on your `deploy` branch: `git merge main && npm run build && npx wrangler deploy`.

Or wire up a GitHub Action that runs `wrangler deploy` on push.

## Notes

- No backend currently — no secrets to configure. If you later add server
  env vars, use `npx wrangler secret put NAME`.
- The Cloudflare dashboard's "Connect to Git" deploy flow will fail because
  it expects a static site output. Deploy with `wrangler deploy` from your
  machine (or a GitHub Action) instead.
- Lovable-only runtime integrations (preview banner, error reporter) are
  dev-only and won't run in production on Cloudflare.