# Contributing

## Setup

```bash
npm install
npm run dev     # dev server at http://localhost:3000
npm test        # run unit tests
npm run lint    # check for lint errors
npm run format  # auto-format with Prettier
```

## Workflow

- Branch off `main` using a descriptive name (e.g. `feat/menu-updates`, `fix/nav-mobile`)
- All PRs require 1 approval before merging
- PRs are squash-merged — keep commit messages clear
- CI must pass (lint + format + tests + build) before merge

## Standards

- TypeScript for all source files — no `any` unless unavoidable
- Tailwind CSS for all styles — no inline styles or CSS modules unless necessary
- Vitest + Testing Library for unit/component tests
- No secrets committed — use `.env.local` (gitignored)
