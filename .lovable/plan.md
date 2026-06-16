## What happened
Cloudflare is trying to deploy `main = ".output/server/index.mjs"`, but this TanStack Start build is configured to use a custom server entry (`src/server.ts`). That output file path does not exist, so Cloudflare stops before deploying.

## Plan
1. Update the Cloudflare config so `main` points to the correct Worker entry: `src/server.ts`.
2. Update the deploy instructions to use npm/npx on Windows instead of Bun commands.
3. Add a note that these commands must be run from a local clone or from a configured GitHub Action, not typed into GitHub.com file pages.

## Technical details
- Change `wrangler.toml` from:
  ```toml
  main = ".output/server/index.mjs"
  ```
  to:
  ```toml
  main = "src/server.ts"
  ```
- Keep the existing assets config:
  ```toml
  [assets]
  directory = ".output/public"
  binding = "ASSETS"
  ```
- Keep `vite.config.ts` as-is because it already has:
  ```ts
  server: { entry: "server" }
  ```