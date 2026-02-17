# Changelog

All notable changes to the Alliance website redesign project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [0.3.0] — 2026-02-17

### Added
- **About page** (`about.html`) — first interior page with 9 sections: interior hero, who we are, 10 constitutional principles grid, quote banner, full party history (1991–2026), photo banner, leadership, join CTA, footer
- Interior page CSS patterns in `sections.css`: `.interior-hero`, `.prose-section`, `.principles` grid, `.history-era` timeline, `.leadership` grid
- Responsive rules for all new interior page patterns
- Active nav state (`aria-current="page"`) styling in `nav.css`

### Changed
- Navigation links in `index.html` updated for multi-page navigation (About → `about.html`)

---

## [0.2.0] — 2026-02-17

### Added
- CHANGELOG.md for tracking project changes
- CONTRIBUTING.md with development workflow and conventions
- CSS modularisation: 11 standalone CSS files extracted from monolithic prototype
- JavaScript extracted to `js/main.js`
- Component library (`component-library.html`) — browsable reference for all design system components
- Design system spec expansion: animation, responsive behaviour, and form pattern documentation

### Changed
- `homepage-prototype.html` renamed to `index.html` with external CSS/JS links
- Root `index.html` redirect updated to point to new filename

### Fixed
- Header "Join The Alliance" button text invisible due to `.header-nav a` specificity override on `.btn-primary`
- Secondary-on-dark button border changed from `rgba(255,255,255,0.7)` to solid white for contrast compliance
- Join input focus border changed to solid white for contrast compliance

---

## [0.1.0] — 2026-02-15

### Added
- Initial homepage prototype (`homepage-prototype.html`) — single-file HTML with all CSS/JS inline
- Design system overview with colour palette, typography, spacing, and component specs
- Alliance tone of voice guide
- Project brief and current state analysis
- Root redirect to prototype
