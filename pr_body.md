💡 What
Added dual-labeling (`title` attribute in addition to `aria-label`) to the icon-only `.lantern` anchor tags on both `desktop.html` and `mobile.html`. Also added a `title="YouTube video"` attribute to the YouTube `iframe` in `pages/story.html`.

🎯 Why
By adding a `title` attribute to the `.lantern` links, sighted users can hover over the icon-only links to read a native tooltip ("Private access"), making the UI more intuitive. For the `iframe`, providing a `title` attribute ensures that screen readers can properly announce the context/content of the embedded frame.

📸 Before/After
*Before:*
Lanterns had only `aria-label`, so sighted users had no hover context. The YouTube iframe had no title, making it ambiguous to screen readers.
*After:*
Hovering over the lantern displays a native tooltip. Screen readers announce "YouTube video" when navigating to the iframe.

♿ Accessibility
- Implemented dual-labeling for icon-only interactive elements to provide context for both sighted users and screen readers.
- Added descriptive titles to iframe elements.
