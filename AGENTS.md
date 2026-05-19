# AGENTS.md

Guidance for AI coding agents working in this repository.

## Commands

```bash
pnpm dev      # start dev server
pnpm build    # tsc -b && vite build
pnpm check    # biome check --write (lint + format)
```

No test suite configured yet.

## Stack

React 19, React Router 7 (declarative/BrowserRouter), Tailwind CSS v4, shadcn/ui.
State lives exclusively in `localStorage` — no backend.
Path alias: `@/` → `src/`.

## Agent capabilities

### Subagents (invoke via Task tool)
- **frontend-dev** — React/TypeScript implementation (components, hooks, pages, routing).
- **designer** — UI/UX decisions, color, typography, spacing, visual hierarchy.
- **explore** — fast codebase exploration and code search.
- **general** — multi-step research and parallel workloads.

### Skills (invoke via Skill tool when task matches)
Skills live in `.agents/skills/`. Load the relevant one before starting the task.

| Skill | When to use |
|---|---|
| `react-2026` | Starting or modernizing a React project |
| `react-composition-2026` | Designing component APIs or refactoring prop-heavy components |
| `hooks-pattern` | Extracting shared stateful logic into custom hooks |
| `compound-pattern` | Building coordinated components (tabs, accordions, dropdowns) |
| `react-render-optimization` | Diagnosing or fixing unnecessary re-renders |
| `react-design-patterns-browser-optimization` | Complex UI interactions and client-side rendering performance |

### MCPs
Configured in `opencode.json`. Currently no MCP servers registered — update `opencode.json` to add any.
