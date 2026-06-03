## 2025-06-03 - DOM Queries in High-Frequency Loops
**Learning:** Found a codebase-specific pattern where repeated `document.getElementById` and `new Date()` coercion occurred inside a `setInterval` loop for countdown calculations. The logic was also duplicated across multiple HTML files.
**Action:** Always extract shared JS logic into `assets/js/*.js` files wrapped in IIFEs, and ensure that DOM element references and static values (like target timestamps) are cached outside of high-frequency loops (like `setInterval` or `requestAnimationFrame`).
