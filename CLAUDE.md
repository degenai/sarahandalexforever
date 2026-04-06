# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static wedding website for Sarah & Alex (March 6, 2027, 5 PM). Venue: Butterfly Pavilion. No build step, no dependencies, no package manager — open any HTML file directly in a browser.

## Architecture

- `index.html` — UA sniff router: redirects to `desktop.html` or `mobile.html`
- `desktop.html` — signpost layout, GSAP entrance animations, 210 stars
- `mobile.html` — card layout, 2x2 countdown grid, 130 stars
- `pages/` — inner pages (story, details, gallery, rsvp, registry), all responsive single files
- `private/index.html` — placeholder for future password-protected planning space (linked via hidden lantern icon)
- `assets/css/shared.css` — design tokens, reset, sky, stars, nav, nails, placeholders, dividers, footer
- `assets/js/stars.js` — star generation, configurable via `data-stars` attribute on `#sky` div

## Shared assets

Design tokens and common styles live in `assets/css/shared.css`. Each page links to this and only defines page-specific overrides inline. Star count is set per-page via `<div id="sky" data-stars="210">`.

## Countdown target

`new Date('2027-03-06T17:00:00')` — local time, intentionally no timezone. Defined in both `desktop.html` and `mobile.html`.

## Linking

- Inner pages link HOME to `../index.html` (routes through the mobile/desktop detector)
- Inner pages link to each other as siblings (e.g., `story.html`, `details.html`)
- Landing pages link to inner pages via `pages/story.html` etc.

## Registry

Cash-only. No store registries. Venmo/Cash App details TBD.
