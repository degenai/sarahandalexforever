## 2024-10-24 - Iframe Sandbox Restrictions
**Vulnerability:** Found a YouTube iframe embed without the `sandbox` attribute. While YouTube is generally safe, third-party iframes without a sandbox can potentially run malicious scripts or redirect the top-level window.
**Learning:** External content embeds via `<iframe>` should enforce the principle of least privilege using the `sandbox` attribute.
**Prevention:** Always add `sandbox="allow-scripts allow-same-origin allow-presentation allow-popups allow-forms"` to iframes embedding external content like YouTube videos.
