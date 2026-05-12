## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2026-05-12 - Dual-labeling and Iframe Titles
**Learning:** Screen readers and sighted users both benefit from dual-labeling icon-only interactive elements (using both `aria-label` and `title` attributes). Additionally, embedding content via iframes without a descriptive `title` attribute severely degrades screen reader experience, as the context of the embedded content is lost.
**Action:** Implement dual-labeling for all icon-only interactive elements to provide screen reader support and native tooltips. Ensure all `iframe` elements have descriptive `title` attributes for better context.
