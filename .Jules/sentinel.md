## 2026-05-31 - Enforce Least Privilege on External Iframes
**Vulnerability:** External embedded content (like YouTube videos) loaded via `iframe` without a `sandbox` attribute.
**Learning:** By default, iframes have significant permissions (like navigating the top-level browsing context). Even trusted third-party providers could potentially have their embeds compromised, or a developer might inadvertently embed a less-trusted source in the future.
**Prevention:** Always apply the `sandbox` attribute to external iframes. For rich media players like YouTube, use `sandbox="allow-scripts allow-same-origin allow-presentation allow-popups allow-forms"` to ensure the player functions correctly while preventing riskier actions like `allow-top-navigation`.
