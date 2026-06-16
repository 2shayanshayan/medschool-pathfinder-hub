# Deploying to Cloudflare Workers

This app is a TanStack Start SSR app. It deploys as a Cloudflare **Worker**
(not a static Pages site). The Lovable preview keeps working — these steps
only affect your self-hosted copy.

## One-time setup

### 1. Get the code locally
In Lovable: Plus (+) menu → GitHub → Connect project → Create Repository.
Then:
```bash
git clone <your-repo-url>
cd <repo>
bun install
bun add -d wrangler
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

### 3. Deploy
```bash
bunx wrangler login
bun run build
bunx wrangler deploy
```

You'll get a `https://future-doctor-site.<your-subdomain>.workers.dev` URL.

### 4. Attach your custom domain
Cloudflare dashboard → Workers & Pages → `future-doctor-site` → Settings →
Domains & Routes → **Add Custom Domain** → enter your domain.

Cloudflare auto-provisions SSL and the DNS record (your domain must be on
a Cloudflare zone you own).

## Ongoing updates

1. Edit in Lovable as usual → it auto-pushes to GitHub.
2. Locally: `git pull && bun run build && bunx wrangler deploy`.

Or wire up a GitHub Action that runs `wrangler deploy` on push.

## Notes

- No backend currently — no secrets to configure. If you later add server
  env vars, use `bunx wrangler secret put NAME`.
- Lovable-only runtime integrations (preview banner, error reporter) are
  dev-only and won't run in production on Cloudflare.