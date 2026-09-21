# PersonalSite Specification

## Overview
- Target: personal portfolio page component
- Screenshots: home-detail.png, solutions-detail.png, contact-detail.png, desktop.png, and mobile.png
- Interaction model: native scrolling with fixed navigation, three scroll-driven content states, sticky illustration crossfades, hover feedback, and subtle pointer response

## DOM Structure
- Main page
  - Fixed header
  - Two-column story wrapper
    - Left content column
      - Profile section
      - Solutions section
      - Contact section
    - Desktop sticky illustration stage
  - Fixed desktop section counter
  - Footer

## Typography Targets
- Brand and desktop navigation: Lato, 20px, normal; active item bold
- Primary first line: Montserrat, 80px, weight 900, line-height 96px
- Primary second line: Montserrat, 64px, weight 600, line-height 76.8px
- Section headings: Montserrat, 45.333px, weight 700, line-height approximately 54.4px
- Supporting monospaced line: 18–21.333px, relaxed 32px line-height
- Large body/contact values: Lato, 24px, line-height 28.8–36px

## Layout Targets
### Header
- Position: fixed
- Height: 56px
- Maximum width: 1440px
- Background: near-white paper tone

### Story Grid
- Maximum width: approximately 1310px
- Desktop columns: flexible content column plus 430–560px illustration column
- Mobile: single column

### Profile
- Minimum desktop height: viewport minus header
- Display title aligned to the left
- Illustration visually occupies approximately 460–560px width

### Solutions
- Six service groups in three columns on wide screens
- Service titles use bold display type; list items use large body type
- Orange punctuation provides the only strong color signal

### Contact
- Three contact columns
- Large orange outlined pill action
- Phone illustration active in the sticky stage

## States and Behaviors
### Active section
- Trigger: IntersectionObserver using the middle viewport band
- Values: profile, practice, contact
- Effects: navigation weight, section counter opacity, and illustration state update together

### Illustration transition
- Before: opacity 0, translateY 20px, scale 0.965, blur 1px
- After: opacity 1, translateY 0, scale 1, blur 0
- Transition: 700ms decelerating

### Pointer response
- Trigger: fine-pointer movement over the illustration stage
- Movement: maximum 6px from center in either axis
- Reset: returns to center on pointer leave

### Header scroll state
- Trigger: window scroll greater than 24px
- Before: transparent border
- After: visible light border and small shadow
- Transition: 300ms decelerating

### Section reveal
- Trigger: approximately 14% intersection
- Before: opacity 0 and translateY 24px
- After: opacity 1 and translateY 0
- Transition: 700ms decelerating

### Reduced motion
- Disables smooth scrolling, pointer translation, reveal transforms, and crossfade transforms

## Assets
- Original generic working illustration: illustration-working.webp
- Original generic approval illustration: illustration-approval.webp
- Original generic contact illustration: illustration-contact.webp
- Lucide icons for menu and directional arrows

## Text Content
- All identity, offer, service, contact, and profile information remains generic placeholder copy.
- No source-site identity or service copy is reproduced.

## Responsive Behavior
- Desktop: sticky right illustration stage and scroll-driven crossfades
- Tablet: two columns with reduced gaps and illustration width
- Mobile: each illustration appears inline after its section introduction; service groups stack or form two columns where space allows
- Primary layout switch: 768px
