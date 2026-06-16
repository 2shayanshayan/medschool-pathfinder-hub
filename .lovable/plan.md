
# Self-Host on Cloudflare Workers

This is a TanStack Start SSR app (not static), so it needs a server runtime. Cloudflare **Workers** (not plain Pages static hosting) is the right target — TanStack Start builds a Nitro bundle with a Cloudflare preset out of the box.

## Steps you'll do (outside Lovable)

### 1. Get the code onto GitHub
- In Lovable: Plus (+) menu → GitHub → Connect project → Create Repository.
- Clone locally: `git clone <your-repo-url> && cd <repo>`
- `bun install` (or `npm install`).

### 2. Add Cloudflare Workers config
Create `wrangler.toml` at the repo root:

```toml
name = "future-doctor-site"
main = ".output/server/index.mjs"
compatibility_date = "2024-11-01"
compatibility_flags = ["nodejs_compat"]

[assets]
directory = ".output/public"
binding = "ASSETS"
```

### 3. Tell TanStack Start to build for Cloudflare
In `vite.config.ts`, set the TanStack Start `target` to `cloudflare-module`:

```ts
tanstackStart({ target: 'cloudflare-module' })
```

### 4. Build and deploy
```bash
bun add -d wrangler
bun run build
bunx wrangler login
bunx wrangler deploy
```

First deploy gives you a `*.workers.dev` URL.

### 5. Attach your custom domain
In Cloudflare dashboard → Workers & Pages → your worker → Settings → Domains & Routes → **Add Custom Domain** → enter your domain. Cloudflare auto-provisions SSL and DNS (domain must be on a Cloudflare zone you own).

## Things to know before you start

- **No backend in this app today** — confirmed. No Lovable Cloud, no Supabase, no server-side env vars needed. If you later add those, you'd configure secrets via `wrangler secret put NAME`.
- **Lovable-specific runtime integrations** (error reporter, preview banner) are dev-only and won't run on Cloudflare — safe to ignore.
- **Ongoing edits**: keep editing in Lovable → it auto-pushes to GitHub → you run `bunx wrangler deploy` (or set up a GitHub Action) to ship updates to Cloudflare.
- **Lovable preview still works** independently — self-hosting doesn't break it.

## What I'll do in this project (after you approve)

Self-hosting setup is mostly outside Lovable, but I can prep the repo so deployment "just works":

1. Add `wrangler.toml` with the config above.
2. Update `vite.config.ts` to target `cloudflare-module`.
3. Add a short `DEPLOY.md` with the exact commands.
4. Add `wrangler` as a dev dependency.

After that, you connect GitHub, pull the repo, and run `bun run build && bunx wrangler deploy`.
