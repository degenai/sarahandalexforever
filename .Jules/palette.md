## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2024-11-20 - Supplemental Context for Screen Readers and Sighted Users
**Learning:** Icon-only elements and iframes often lack sufficient context for all user groups. An `aria-label` is great for screen readers, but a `title` attribute adds a native tooltip for sighted users. Furthermore, embedded content like iframes absolutely requires a `title` attribute to inform assistive technology users of its contents before they enter the frame.
**Action:** Consistently employ dual-labeling (`aria-label` + `title`) on icon-only interactive elements and enforce descriptive `title` attributes on all `iframe` elements across the codebase.
