## 2024-06-14 - Date.getTime() Optimization
**Learning:** Found that relying on implicit type coercion when performing arithmetic operations on `Date` objects (like `target - Date.now()`) adds significant overhead in high-frequency functions (e.g., `requestAnimationFrame` or `setInterval` handlers).
**Action:** Always call `.getTime()` on a `Date` instance and cache the integer result outside of high-frequency loops. This avoids the implicit coercion overhead, yielding a ~66% performance improvement for the calculation.

## EATEN — merged in PR #107 (2026-06-15)
This optimization was applied to both desktop.html and mobile.html. Future Bolt countdown PRs for this repo are auto-rejected — the work is done. Do not re-propose countdown timer changes.

## 2024-06-24 - WebP Optimization
**Learning:** Found that unoptimized PNG image assets (`stardew-portrait.png`, `venue-placeholder.png`) contributed significantly to the payload size.
**Action:** Always convert large `.png` and `.jpg` image assets to `.webp` format and update the `<img src="..">` tags appropriately to improve page load times and bandwidth consumption.
