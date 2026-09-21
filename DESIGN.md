---
name: "workspace"
description: "请根据我提供的参考网站设计并实现一个个人网站页面。 目标: 还原参考网站的视觉语言和动态体验，而不是复刻参考网站的内容。 要求: 1.根据截图还原页面的视觉风格:版式、留白、字体气质、颜色、层级、材质感 和整体氛围。 2.根据录屏还原动态效果:滚动节奏、页面切换、鼠标移动、点击反馈、悬停状 态、元素入场和交互动效。 3.参考网站中属于他人的内容，全部替换为留白占位、占位卡片或通用占位文 案，方便我后续自行填充。 参考网站：https://www.awwwards.com/sites/dev 这是参考网站：<网址> 请先告诉我你是否能成功访问并分析这个页面。 如果你能访问，请总结： 1. 首屏布局 2. 导航结构 3. 配色和字体感觉 4. 卡片/按钮/间距风格 5. 动效和交互特征 如果你不能访问，请直接说“无法访问”，我会改用截图。"
typography:
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, \"Liberation Mono\", monospace"
rounded:
  sm: "calc(var(--radius) * 0.6)"
  md: "calc(var(--radius) * 0.8)"
  lg: "0.625rem"
  xl: "calc(var(--radius) * 1.4)"
  2xl: "calc(var(--radius) * 1.8)"
  3xl: "calc(var(--radius) * 2.2)"
  4xl: "calc(var(--radius) * 2.6)"
---

<!-- Generated from .project/DESIGN_SYSTEM.md + app/globals.css by the engine. Tokens above are normative and mirror the CSS; edit the CSS and DESIGN_SYSTEM.md, not this file. -->

## Overview

**No visual direction has been committed for workspace yet.** The project is still on the starter's placeholder palette — shadcn's default neutral, every colour zero-chroma — so it is deliberately NOT listed above as a token set to respect. Treat this project as greenfield: decide the world, then write the palette into `globals.css`, and this file will state it from the next turn onward.

## Colors

| Token | Value |

## Typography

- Headings:
- Body:

- Mono: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`

## Layout

- Radius / shadow / spacing rhythm:
- Shared components:

## Shapes

Radii: `sm` calc(var(--radius) * 0.6), `md` calc(var(--radius) * 0.8), `lg` 0.625rem, `xl` calc(var(--radius) * 1.4), `2xl` calc(var(--radius) * 1.8), `3xl` calc(var(--radius) * 2.2), `4xl` calc(var(--radius) * 2.6)

## Do's and Don'ts

- Do load faces through Fontsource, not `next/font/google`.
- Do write the direction's palette into `globals.css` as the token block; keep the token NAMES, replace the values.
- Don't use gradient text, or a purple/violet gradient as the brand signal.
- Don't use bounce or elastic easing; real objects decelerate smoothly.
