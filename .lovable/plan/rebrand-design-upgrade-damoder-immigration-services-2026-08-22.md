# Rebrand + Design Upgrade: Damoder Immigration Services

## The direction

Ditch the generic navy/gold corporate look. The brand blue from your logo becomes the whole personality of the site — deep, confident, trustworthy. Orange stays a *rare* signal colour (never a big bright block): small badges, an arrow inside a button, an underline, a progress bar. Everything else is blue, off-white and ink.

## Colour system (from your logo palette)

| Role | Value | Use |
| --- | --- | --- |
| Brand Blue (primary) | `#375CA6` | Buttons, headings on light, nav pill |
| Deep Blue (surface) | `#1D2F55` (darkened from brand) | Hero band, footer, dark sections |
| Sky Blue (support) | `#4586BF` | Links, icons, borders, subtle fills |
| Ember (accent, sparing) | `#F26E22` | Only micro-accents: badge dot, arrow chip, active underline, stat bar |
| Paper | `#F6F7FA` | Section backgrounds |
| Ink | `#14192B` | Body text |

Gold is removed entirely. No gradients across the whole hero, no rainbow of the five logo colours at once — just blue with one ember touch per screen.

## Layout language (from the reference kit you sent)

The uploaded kit shows the composition style to adopt:

- **Rounded hero band** — the top of every page sits in a deep-blue block with a `28px` bottom radius, with a floating pill-shaped nav (rounded-full, hairline border) inside it instead of the current flat bar.
- **Oversized editorial headline** — two-line, tight leading, light weight, with a short supporting paragraph and CTA sitting to the right, bottom-aligned.
- **Image card with floating stat panel** — a large rounded photo under the hero with a glass stat card overlaid (e.g. "12,000+ workers mobilised", progress bar in ember).
- **Logo marquee** — a slow scrolling strip of client/partner and destination-authority marks right under the hero.
- **Two-column "Who We Are"** — one tinted rounded card (image + floating tag pills) beside a large statement paragraph.
- **Pill tags and chip buttons** everywhere instead of square boxes: rounded-full labels, arrow-in-circle buttons.

## What changes, page by page

1. **Design tokens** (`src/styles.css`) — replace navy/gold tokens with the blue scale + ember accent, larger radius scale (`0.875rem` base, plus `rounded-[28px]` surfaces).
2. **SiteHeader** — becomes the floating pill nav inside the hero band; dropdowns restyled as soft rounded panels. Mobile drawer follows the same rounded language.
3. **SiteFooter** — deep-blue block, rounded top corners, ember dot accents on column headings.
4. **PageShell / Hero / Section / CTA** — rewritten to the rounded-band + editorial-headline pattern so all 10 pages inherit it.
5. **Home** — new order: hero band → partner/authority marquee → "Who We Are" two-column → 6-stage protocol as a numbered rail → industries as pill-tag cards → anti-fraud dark band → CTA.
6. **Remaining 9 pages** — same shell, recoloured, with pill tags and rounded cards replacing the current boxy sections. Content stays as-is.
7. **Logo** — your Damoder mark placed in the nav and footer (I'll need the logo file; until then a clean type-lockup in brand blue).

## Technical notes

- Tokens defined as `oklch` in `src/styles.css` under `:root` + `@theme inline`; no hardcoded hex in components.
- The uploaded zip is a Tailwind v3 / React Router project — it is used as **visual reference only**. Nothing is copied in; components are rewritten against this project's TanStack Start + Tailwind v4 setup.
- Fonts: keep the current display/sans pairing but shift headline weight to medium with tight tracking to match the reference; if you want the reference's Poppins feel exactly, say so and I'll swap it.
- Reference images in the zip are not reused; existing/AI-generated corridor imagery stays.

## Open item

I don't have the logo as a usable file yet — only the palette screenshot. Send the PNG/SVG and I'll wire it into the header, footer and favicon.
