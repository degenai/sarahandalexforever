🚨 Severity: MEDIUM
💡 Vulnerability: External content embedded via iframe lacked constraints, potentially allowing malicious scripts or parent page redirection.
🎯 Impact: Could compromise user security or disrupt the site experience if the external source is compromised.
🔧 Fix: Added sandbox attribute with strict permissions (`allow-scripts allow-same-origin allow-presentation allow-popups allow-forms`) to the YouTube iframe in `pages/story.html` and documented the pattern in `.jules/sentinel.md`.
✅ Verification: Verified the iframe still renders visually and correctly locally using a Python Playwright screenshot test.
