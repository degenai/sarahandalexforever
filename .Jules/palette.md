## 2024-06-01 - Dual-labeling icon-only links and iframe accessibility
**Learning:** Icon-only elements (like the hidden "lantern" link) may have an `aria-label` for screen readers but lack a native tooltip for sighted mouse-users. Iframes embedding external content (like YouTube videos) must have a descriptive `title` attribute for screen reader context (WCAG 4.1.2).
**Action:** When creating icon-only interactive elements, apply dual-labeling: use both `aria-label` and `title` attributes. Always add descriptive `title` attributes to `iframe` elements.
