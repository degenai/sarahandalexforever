## 2024-05-18 - [Iframe Security]
**Vulnerability:** Iframe element lacking `sandbox` attribute
**Learning:** Iframes embedding external content (like YouTube) should include the `sandbox` attribute with permissions `allow-scripts allow-same-origin allow-presentation allow-popups allow-forms` to enforce the principle of least privilege.
**Prevention:** Always add `sandbox="allow-scripts allow-same-origin allow-presentation allow-popups allow-forms"` when embedding external iframes to minimize risk.
