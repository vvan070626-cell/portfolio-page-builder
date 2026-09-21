# Behaviors

## Interaction Model
- Primary model: static editorial page with fixed navigation and lightweight transitions.
- Scroll: native vertical scrolling; no scroll snap, parallax, or smooth-scroll library.
- Navigation: desktop links remain visible; mobile navigation collapses into a menu.
- Hover: links reduce emphasis through opacity; primary action uses restrained scale and color response.
- Entrance: short opacity and vertical-position transitions, without bounce or elastic motion.

## Measured Motion
- Most reference controls use transitions in the 180–375ms range.
- Navigation remains fixed at the top while content scrolls beneath it.
- Mobile menu content fades and slides with a short decelerating transition.

## Implementation
- Preserve native scrolling and fixed navigation.
- Use IntersectionObserver for one-time section reveal.
- Use pointer position only for a subtle hero artwork drift on fine-pointer devices.
- Respect reduced-motion preferences by disabling transforms and smooth scrolling.
