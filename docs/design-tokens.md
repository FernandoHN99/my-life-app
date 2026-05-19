# Design Tokens

Visual language reference for this project. All spacing, typography, and sizing decisions must use these tokens — never arbitrary Tailwind values like `text-[0.8rem]` or `gap-[13px]`.

## Colors

Colors are defined in `src/index.css` in three layers:

1. **Named palette** (`@theme`) — raw hex values with readable names (`--color-green-base`, `--color-amber-base`, etc.)
2. **Semantic tokens** (`:root` / `.dark`) — map palette to shadcn roles (`--primary`, `--accent`, etc.)
3. **Tailwind bridge** (`@theme inline`) — exposes semantic tokens as Tailwind classes

Always use semantic Tailwind classes (`text-primary`, `bg-accent`, `text-muted-foreground`). Never use palette names directly in components.

## Spacing

Spacing follows Tailwind's default scale (1 unit = 0.25rem = 4px).

| Token | Value | Use case |
|---|---|---|
| `gap-1` | 4px | Tight groupings (icon + label) |
| `gap-1.5` | 6px | Form: label → input |
| `gap-2` | 8px | Sidebar items, inline groups |
| `gap-3` | 12px | Compact card internals |
| `gap-4` | 16px | Inside cards |
| `gap-6` | 24px | Between page sections |

| Token | Value | Use case |
|---|---|---|
| `p-2` | 8px | Sidebar items, compact UI |
| `p-3` | 12px | Small cards |
| `p-4` | 16px | Default cards |
| `p-8` | 32px | Page-level sheet/panel padding |
| `px-2.5` | 10px | Button/input horizontal padding |
| `py-6` | 24px | Page top/bottom padding |

## Typography

Font: **Geist Variable** for everything.

| Token | Size | Weight | Use case |
|---|---|---|---|
| `text-xs` | 12px | `font-medium` | Captions, stat labels |
| `text-sm` | 14px | `font-medium` | Labels, buttons |
| `text-sm` | 14px | `font-normal` | Secondary body text |
| `text-base` | 16px | `font-medium` | Card titles, section headers |
| `text-xl` | 20px | `font-semibold` | Page titles (h1) |

Color: always `text-foreground` for primary, `text-muted-foreground` for secondary. Never raw `text-gray-*`.
Tracking: `tracking-tight` for headings. Never `tracking-wide`.
Weight: `font-medium`, `font-semibold`. Never `font-bold`.

## Component sizes

### Buttons (shadcn-managed, do not edit)
| Size | Height | Use case |
|---|---|---|
| `xs` | h-6 | Inline tight actions |
| `sm` | h-7 | Secondary compact actions |
| `default` | h-8 | Standard actions |
| `lg` | h-9 | Primary prominent actions |
| `icon` | size-8 | Icon-only buttons |

### Inputs
| Token | Value |
|---|---|
| Height | `h-8` |
| Horizontal padding | `px-2.5` |

### Cards
| Variant | Padding | Gap |
|---|---|---|
| Default | `p-4` | `gap-4` |
| Compact | `p-3` | `gap-3` |

## Border radius

Use Tailwind tokens only, never raw `rounded-[Xpx]`.

| Token | Use case |
|---|---|
| `rounded-md` | Inputs, compact buttons |
| `rounded-lg` | Buttons (default), cards |
| `rounded-xl` | Larger surface containers |

## Shadows

Defined in `src/index.css` as `--shadow-sm` and `--shadow-md`. Use `shadow-sm` for cards and panels. Never use values heavier than `shadow-md`.

## Container

Page content max-width: `max-w-200` (50rem / 800px) — valid Tailwind v4 numeric scale value.

## Rules

- Never use arbitrary values: `text-[x]`, `gap-[x]`, `rounded-[x]`, `p-[x]`
- Never edit files under `src/components/ui/` — shadcn-managed
- When a token doesn't exist for your use case, pick the closest one in the scale and document the decision here
