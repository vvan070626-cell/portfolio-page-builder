# PersonalSite Specification

## Overview
- Target: personal portfolio page component
- Screenshots: desktop.png and mobile.png in the page design-reference folder
- Interaction model: native scroll with fixed navigation, hover feedback, one-time reveal, and subtle pointer-responsive hero art

## DOM Structure
- Main page
  - Fixed header
  - Hero section
  - Practice section with three articles
  - Contact section
  - Footer

## Computed Style Targets
### Page
- Background: near-white paper tone
- Foreground: near-black
- Maximum content width: approximately 1240px
- Header maximum width: approximately 1440px

### Header
- Position: fixed
- Desktop height: approximately 64px
- Desktop navigation text: approximately 20px in the reference; slightly reduced locally to preserve spacing
- Transition: 180–240ms opacity and background changes

### Hero
- Desktop layout: two columns with the title occupying slightly less than half the width
- Mobile layout: single column
- Title: very heavy sans-serif with tight negative tracking and compact line-height
- Supporting line: monospaced, widely spaced, restrained size
- Illustration: black-and-white original asset on transparent-looking white ground

### Practice
- Desktop: three equal columns
- Mobile: single column with large vertical gaps
- Headings: bold compact sans-serif
- Descriptions: relaxed line-height with selected bold phrases avoided because copy remains generic

### Contact
- Large rounded outline using the orange primary token
- Hover: scale to approximately 1.02 and increase line emphasis
- Active: translate by approximately 1px

## States and Behaviors
### Header scroll state
- Trigger: window scroll above 24px
- Before: transparent border and nearly opaque background
- After: visible light border and subtle shadow
- Transition: 240ms decelerating

### Section reveal
- Trigger: IntersectionObserver at approximately 16% visibility
- Before: opacity 0 and translateY 24px
- After: opacity 1 and translateY 0
- Transition: 650–800ms decelerating; disabled for reduced motion

### Hero pointer response
- Trigger: pointer movement over hero artwork on fine-pointer devices
- State: artwork translates no more than 8px in either axis
- Transition: frame-synced CSS custom properties; disabled for reduced motion and touch input

### Hover states
- Navigation links: opacity 1 to approximately 0.45
- Practice rows: title shifts slightly right while the number shifts slightly left
- Contact control: scale 1 to 1.02

## Assets
- Original generic black-and-white working-at-laptop illustration stored locally
- Lucide icons for menu, search/jump, and directional arrows

## Text Content
- All content is generic placeholder copy written for later replacement.
- No reference-site identity, service wording, or contact information is reproduced.

## Responsive Behavior
- Desktop: fixed top navigation, two-column hero, three-column practice area
- Tablet: reduced gaps while retaining two-column hero where space permits
- Mobile: menu sheet, single-column hero, illustration below title, stacked practice blocks, full-width contact control
- Primary layout switch: 768px
