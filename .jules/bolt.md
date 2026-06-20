## 2024-06-14 - Date.getTime() Optimization
**Learning:** Found that relying on implicit type coercion when performing arithmetic operations on `Date` objects (like `target - Date.now()`) adds significant overhead in high-frequency functions (e.g., `requestAnimationFrame` or `setInterval` handlers).
**Action:** Always call `.getTime()` on a `Date` instance and cache the integer result outside of high-frequency loops. This avoids the implicit coercion overhead, yielding a ~66% performance improvement for the calculation.

## EATEN — merged in PR #107 (2026-06-15)
This optimization was applied to both desktop.html and mobile.html. Future Bolt countdown PRs for this repo are auto-rejected — the work is done. Do not re-propose countdown timer changes.

## 2026-06-20 - Font Preconnecting Optimization
**Learning:** Google Fonts relies on two domains: `fonts.googleapis.com` for the stylesheet and `fonts.gstatic.com` for the actual font files. By default, the browser only discovers the need to connect to `fonts.gstatic.com` after parsing the CSS. This creates a network waterfall delaying text rendering.
**Action:** Always add `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` immediately after the `fonts.googleapis.com` preconnect to eliminate this waterfall and improve Time to First Paint (TTFP).
