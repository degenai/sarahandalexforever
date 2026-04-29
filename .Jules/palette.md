## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2026-04-29 - Dual-Labeling and Iframe Accessibility
**Learning:** Found that icon-only interactive elements (like the lantern link) need dual-labeling (`aria-label` for screen readers and `title` for sighted users' native tooltips) to ensure an inclusive experience. Additionally, iframe elements (like YouTube embeds) require descriptive `title` attributes for better context and screen reader support.
**Action:** Always implement dual-labeling on icon-only buttons/links and ensure all `iframe` tags have a descriptive `title` attribute.
