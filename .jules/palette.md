## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## EATEN — merged in PR #108 (2026-06-15)
A11y tooltips, title attributes, and focus-visible styles applied to lantern icon and YouTube iframe. Future Palette a11y PRs for these same elements are auto-rejected — the work is done. Do not re-propose lantern tooltips or iframe title changes for this repo.

## 2024-10-25 - Fix Silent Validation Failure on Hidden Input and Orphaned Label
**Learning:** In the RSVP form, using the `required` attribute on a hidden input (like `name="attending"`) causes a silent validation failure where the browser blocks submission without displaying an error bubble since the hidden input can't be focused. Also, custom toggle buttons styled to mimic radio buttons must use `role="group"` with `aria-labelledby` rather than an orphaned `<label>` tag, because `<label>` is only valid for form controls like inputs, selects, and textareas.
**Action:** Remove `required` attributes from `type="hidden"` inputs if handled by custom validation scripts. Connect group labels to `role="group"` containers via `aria-labelledby` instead of using standard `<label>` tags.
