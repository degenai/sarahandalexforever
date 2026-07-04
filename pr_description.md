💡 What: Added an invisible `::after` pseudo-element to `.nav a` links to expand their physical tap target area.
🎯 Why: Navigation links had physical tap targets limited to their text height (~14px), failing WCAG 2.5.5 target size standards. This makes them significantly easier to tap accurately on mobile devices.
📸 Before/After: Visual layout is unchanged, but interactive area is now 44x44px+.
♿ Accessibility: Passes WCAG target size standards.
