# Behaviors

## Interaction Model
- Primary model: a three-state editorial page with fixed navigation and a sticky illustration stage on desktop.
- Scroll: native vertical scrolling; no scroll snap, parallax library, or custom smooth-scroll engine.
- Navigation: desktop links remain visible; mobile navigation collapses into a sheet.
- Illustration states: profile, solutions, and contact each activate a corresponding original female line illustration.
- Hover: links reduce emphasis through opacity; service rows shift slightly; the contact control fills orange.
- Entrance: short opacity and vertical-position transitions, without bounce or elastic motion.

## Scroll Coordination
- An IntersectionObserver tracks which of the three content sections occupies the central viewport band.
- The active illustration crossfades, moves upward, and scales from 0.965 to 1 over 700ms.
- The active navigation label gains weight and the left-side section counter increases opacity.
- Mobile layouts place each illustration directly after its section introduction instead of using sticky positioning.

## Pointer Response
- On fine-pointer devices, the sticky illustration stage follows the pointer by no more than 6px from center.
- The response returns to center on pointer leave.
- Pointer drift, scroll transforms, and smooth scrolling are disabled for reduced-motion preferences.
