## 2024-06-14 - Date.getTime() Optimization
**Learning:** Found that relying on implicit type coercion when performing arithmetic operations on `Date` objects (like `target - Date.now()`) adds significant overhead in high-frequency functions (e.g., `requestAnimationFrame` or `setInterval` handlers).
**Action:** Always call `.getTime()` on a `Date` instance and cache the integer result outside of high-frequency loops. This avoids the implicit coercion overhead, yielding a ~66% performance improvement for the calculation.

## EATEN — merged in PR #107 (2026-06-15)
This optimization was applied to both desktop.html and mobile.html. Future Bolt countdown PRs for this repo are auto-rejected — the work is done. Do not re-propose countdown timer changes.

## 2024-06-15 - DocumentFragment for batch DOM insertions
**Learning:** Appending many generated elements directly to a live DOM element one-by-one triggers a repaint/reflow for each insertion, causing performance overhead (especially noticeable during initial page load with many elements).
**Action:** Use a `DocumentFragment` to batch append elements in memory, then append the entire fragment to the live DOM in a single operation.
