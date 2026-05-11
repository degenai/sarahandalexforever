## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2024-10-25 - Dual-Labeling and Iframe Accessibility
**Learning:** For icon-only interactive elements, adding a `title` attribute alongside an `aria-label` creates a native tooltip that benefits both sighted users and screen readers (dual-labeling). Additionally, screen readers require a descriptive `title` attribute on `iframe` elements to announce the content correctly.
**Action:** Always implement dual-labeling (`aria-label` and `title`) for icon-only links/buttons. Always ensure `iframe` elements have a descriptive `title` attribute to provide clear context to assistive technologies.
