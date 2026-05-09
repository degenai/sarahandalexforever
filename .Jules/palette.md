## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## 2024-10-25 - Dual-Labeling for Icon-Only Elements
**Learning:** While `aria-label` makes icon-only buttons accessible to screen readers, sighted users navigating with a mouse often have no context for what an obscure icon does since `aria-label` isn't visually rendered.
**Action:** Implement dual-labeling for icon-only interactive elements: use `aria-label` for screen reader support and the native `title` attribute to provide tooltips for sighted users.