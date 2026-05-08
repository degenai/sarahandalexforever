## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## 2024-05-08 - Dual Labeling and Iframe Accessibility
**Learning:** Adding `aria-label` alone is not enough for fully accessible UX. Icon-only elements benefit from a native tooltip via the `title` attribute for sighted users (dual-labeling). Additionally, `iframe` elements like embedded videos must have a descriptive `title` attribute to provide context to screen readers before they navigate into the frame.
**Action:** Always implement dual-labeling (`aria-label` + `title`) on icon-only interactive elements, and always ensure `iframe` elements have descriptive `title` attributes.
