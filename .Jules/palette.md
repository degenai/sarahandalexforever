## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## 2026-04-21 - Dual-Labeling and Iframe Accessibility
**Learning:** While `aria-label` provides necessary context for screen readers, it does not display native tooltips for sighted users. Dual-labeling icon-only elements with both `aria-label` and `title` improves usability for all. Additionally, missing `title` attributes on `iframe` elements makes embedded content inaccessible to screen readers.
**Action:** Consistently apply both `aria-label` and `title` to icon-only interactive elements. Ensure every `iframe` includes a descriptive `title` attribute for embedded content context.