# Conventions

Coding patterns and style rules for this project.

## Patterns

**Two-layer hooks**
- *Data hook* (`use-<domain>.tsx`) — wraps `useLocalStorage`, owns CRUD + derived queries for a domain.
- *Page hook* (`use-<page>-page.ts`) — owns page-level UI state, composes data hooks. One per page. Returns a flat object; no nested objects.
- Pages call one page hook. Prefer named handlers over passing raw setState.

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
