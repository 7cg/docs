# 7CG Docs

Public documentation for [7CG](https://docs.7cg.io) — a broadcast graphics controller for Seventh-day Adventist productions built on CasparCG.

Built with [Docusaurus 3](https://docusaurus.io/). Supports English, Portuguese, and Spanish.

## Getting Started

```bash
npm ci
npm start
```

Opens a local dev server at `http://localhost:3000` with live reload.

## Build

```bash
npm run build
```

Generates static output to `build/`.

## Deploy

```bash
npm run deploy
```

Builds and deploys to [docs.7cg.io](https://docs.7cg.io). Requires SSH access to the remote.

## Content

| Path | Description |
|------|-------------|
| `docs/intro.md` | Introduction and overview |
| `docs/quickstart.md` | Quick start guide |
| `docs/configuration/` | Configuration reference |
| `docs/modules/` | Module documentation |
| `docs/templates/` | CasparCG template docs |

Node 20+ required.
