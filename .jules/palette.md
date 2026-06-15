## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## EATEN — merged in PR #108 (2026-06-15)
A11y tooltips, title attributes, and focus-visible styles applied to lantern icon and YouTube iframe. Future Palette a11y PRs for these same elements are auto-rejected — the work is done. Do not re-propose lantern tooltips or iframe title changes for this repo.
