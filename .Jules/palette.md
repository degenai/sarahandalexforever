## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2024-11-20 - Dual-Labeling and Iframe Titles
**Learning:** Icon-only interactive elements benefit from dual-labeling (`aria-label` for screen readers and `title` for sighted users to provide a native tooltip). Embedded external content like iframes require descriptive `title` attributes for context when using screen readers.
**Action:** Consistently apply both `aria-label` and `title` to icon-only links/buttons. Always add a descriptive `title` to `iframe` elements.
