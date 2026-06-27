💡 **What:** Added `pointer-events: none` to the `.star` class.
🎯 **Why:** Hundreds of animating, layered DOM elements force the browser to continually perform hit-testing against them during scroll and mouse movements, causing Main Thread CPU overhead.
📊 **Impact:** Significantly reduces CPU usage and jank during user interactions (scroll, hover).
🔬 **Measurement:** Verify with Chrome DevTools Performance tab; observe reduced hit-testing and style recalculation overhead during mouseover and scroll.
