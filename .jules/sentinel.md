## 2024-10-24 - External Iframe Sandboxing Pattern
**Vulnerability:** External content (like YouTube videos) embedded via `iframe` without constraints could potentially execute malicious scripts or redirect the parent page.
**Learning:** Found that external iframes in the static pages lacked the `sandbox` attribute, violating the principle of least privilege.
**Prevention:** Always include the `sandbox` attribute (e.g., `sandbox="allow-scripts allow-same-origin allow-presentation allow-popups allow-forms"`) on iframes embedding external content to restrict potential impact.
