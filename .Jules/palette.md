## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2024-10-24 - Screen Reader Clutter from Decorative Characters
**Learning:** Screen readers announce text-based decorative characters (like "♥" and "✦"), which clutters the auditory experience and makes scanning content difficult.
**Action:** Always add `aria-hidden="true"` to containers holding purely decorative characters to hide them from assistive technologies.
