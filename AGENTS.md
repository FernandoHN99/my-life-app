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

## Project structure

```
src/
  assets/        # static assets (icons as SVGs via vite-plugin-svgr)
  components/    # generic reusable primitives; ui/ is shadcn-managed, never hand-edit
  core-components/ # feature composites; compose shadcn here
  hooks/         # data hooks (use-<domain>) and page hooks (use-<page>-page)
  models/        # domain types and schemas
  pages/         # route-level components, keep thin
  helpers/       # pure utility functions
  lib/           # third-party wrappers (e.g. cn())
```

## Patterns

**Two-layer hooks**  
- *Data hook* (`use-<domain>.tsx`) — wraps `useLocalStorage`, owns CRUD + derived queries for a domain.  
- *Page hook* (`use-<page>-page.ts`) — owns page-level UI state, composes data hooks. One per page. Returns a flat object; no nested objects.  
Pages call one page hook. Prefer named handlers over passing raw setState.

**State escalation rule**  
Keep state local until two or more unrelated components need it, then extract to a data hook — not a context.

**Fallback selection**  
Default to the last item in a list when nothing is explicitly selected. Avoids empty states on first load.

**Hover visibility**  
Toggle `opacity-0 → opacity-100` via `use-hover.ts`. Prefer opacity transitions over conditional rendering to avoid layout shifts.

**React Compiler**  
Enabled — do not add manual `useMemo`/`useCallback`.

## Conventions

- `date-fns` for all date arithmetic. No custom date logic.
- `generateRandomId()` from `src/helpers/utils.ts` for IDs.
- `cn()` from `src/lib/utils.ts` for conditional Tailwind classes.
- shadcn: install via CLI, never hand-edit generated files.
- Dates from `localStorage` serialize to strings — always re-wrap with `new Date()` on read.

## Code style

Biome: 3-space indent, single quotes, no semicolons, trailing commas, 80-char line width.  
Run `pnpm check` before committing.

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
