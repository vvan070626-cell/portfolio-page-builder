---
name: "Personal Portfolio"
description: "A three-page portfolio for Wang Hanzhi that presents finance cases, data-informed research, project execution, and contact details through a digital-paper visual system."
colors:
  background: "oklch(0.992 0.002 95)"
  foreground: "oklch(0.18 0.004 80)"
  card: "oklch(0.992 0.002 95)"
  card-foreground: "oklch(0.18 0.004 80)"
  popover: "oklch(0.992 0.002 95)"
  popover-foreground: "oklch(0.18 0.004 80)"
  primary: "oklch(0.74 0.18 64)"
  primary-foreground: "oklch(0.18 0.004 80)"
  secondary: "oklch(0.955 0.004 95)"
  secondary-foreground: "oklch(0.18 0.004 80)"
  muted: "oklch(0.955 0.004 95)"
  muted-foreground: "oklch(0.48 0.01 80)"
  accent: "oklch(0.94 0.035 70)"
  accent-foreground: "oklch(0.18 0.004 80)"
  destructive: "oklch(0.58 0.21 28)"
  border: "oklch(0.86 0.006 95)"
  input: "oklch(0.86 0.006 95)"
  ring: "oklch(0.74 0.18 64)"
  sidebar-ring: "oklch(0.74 0.18 64)"
  sidebar-border: "oklch(0.86 0.006 95)"
  sidebar-accent-foreground: "oklch(0.18 0.004 80)"
  sidebar-accent: "oklch(0.94 0.035 70)"
  sidebar-primary-foreground: "oklch(0.18 0.004 80)"
  sidebar-primary: "oklch(0.74 0.18 64)"
typography:
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, \"Liberation Mono\", monospace"
rounded:
  sm: "calc(var(--radius) * 0.6)"
  md: "calc(var(--radius) * 0.8)"
  lg: "0.75rem"
  xl: "calc(var(--radius) * 1.4)"
  2xl: "calc(var(--radius) * 1.8)"
  3xl: "calc(var(--radius) * 2.2)"
  4xl: "calc(var(--radius) * 2.6)"
---

<!-- Generated from .project/DESIGN_SYSTEM.md + app/globals.css by the engine. Tokens above are normative and mirror the CSS; edit the CSS and DESIGN_SYSTEM.md, not this file. -->

## Overview

Digital paper: an almost-white canvas, dense black typography, sparse black-line illustrations, open spacing, and one orange action signal.

## Colors

- Background: near-white paper
- Foreground: soft near-black
- Muted surfaces: pale neutral grey
- Primary accent: clear orange
- Borders: light graphite grey

Declared in `globals.css` as `--color-*` and mirrored in the frontmatter. Use the token, never a raw hex.

## Typography

- Display headings: self-hosted Montserrat variable family
- Navigation and body: self-hosted Lato
- Supporting labels: system monospace stack with reference-matched sizing and spacing

- Mono: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`

## Shapes

Radii: `sm` calc(var(--radius) * 0.6), `md` calc(var(--radius) * 0.8), `lg` 0.75rem, `xl` calc(var(--radius) * 1.4), `2xl` calc(var(--radius) * 1.8), `3xl` calc(var(--radius) * 2.2), `4xl` calc(var(--radius) * 2.6)

## Do's and Don'ts

- Do load faces through Fontsource, not `next/font/google`.
- Don't introduce a colour or radius that isn't a token above.
- Don't use gradient text, or a purple/violet gradient as the brand signal.
- Don't use bounce or elastic easing; real objects decelerate smoothly.
