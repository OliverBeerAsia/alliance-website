# Contributing — Alliance Website Implementation

Quick-start guide for working on the Alliance website prototype and component library.

---

## Quick Start

1. Clone the repository
2. Open `index.html` in a browser — no build tools required
3. Open `component-library.html` to browse all components in isolation

All CSS and JS files are plain, static assets. No compilation, bundling, or package manager needed.

---

## File Organisation

```
06-Implementation/
├── index.html                  Main homepage prototype
├── component-library.html      Browsable component reference
├── CONTRIBUTING.md             This file
├── css/
│   ├── tokens.css              :root custom properties (colours, spacing, typography, etc.)
│   ├── reset.css               Box-sizing, base html/body, img/a/ul resets, .container
│   ├── typography.css          Type scale classes, base heading/paragraph defaults
│   ├── utilities.css           .reveal, .overline, :focus-visible, ::selection
│   ├── buttons.css             All .btn variants + .mobile-toggle
│   ├── forms.css               .join-form, .join-input, .footer-newsletter-*
│   ├── cards.css               .pillar-card, .pillar-title, .pillar-arrow
│   ├── nav.css                 .header, .header-logo, .header-nav, mobile drawer/overlay
│   ├── footer.css              .footer and all sub-components
│   ├── sections.css            Hero, pillars, quote-banner, conference, stats, manifesto, photo-banner, join
│   └── responsive.css          All @media queries, consolidated
└── js/
    └── main.js                 Mobile nav toggle, scroll reveal, smooth scroll
```

### Cascade order matters

CSS files are loaded in a specific order. The `<link>` tags in the HTML must follow this sequence:

1. **Foundation**: tokens → reset → typography → utilities
2. **Components**: buttons → forms → cards → nav → footer
3. **Layout & Responsive**: sections → responsive

Adding a new CSS file? Insert it at the correct cascade position.

---

## Making Changes

### Workflow

1. Create a branch from `main` with the appropriate prefix
2. Make changes in small, focused commits
3. Verify visually at 375px (mobile), 768px (tablet), and 1280px (desktop)
4. Merge back to `main`

### Branch prefixes

| Prefix | Purpose | Example |
|--------|---------|---------|
| `feature/` | New functionality or components | `feature/about-page` |
| `fix/` | Bug fixes | `fix/mobile-nav-overlap` |
| `docs/` | Documentation changes | `docs/animation-spec` |
| `refactor/` | Code restructuring (no behaviour change) | `refactor/footer-grid` |
| `chore/` | Tooling, config, process | `chore/update-changelog` |

### Commit messages

```
type(scope): short description

Optional explanation of why (not what).
```

**Types:** `feat`, `fix`, `refactor`, `docs`, `style`, `chore`

**Scopes:** `css`, `html`, `js`, `design-system`, `component-library`

**Examples:**
```
feat(css): add news card component styles
fix(nav): mobile drawer not closing on link click
docs(design-system): add icon sizing spec
refactor(css): split footer newsletter into forms.css
```

---

## Design System Rules

### Tokens first

Never use raw colour values, pixel sizes, or font stacks in component CSS. Always reference tokens from `tokens.css`:

```css
/* Good */
color: var(--burgundy-700);
padding: var(--space-6);
font-family: var(--font-heading);

/* Bad */
color: #821918;
padding: 24px;
font-family: 'Montserrat', sans-serif;
```

### Component isolation

Each CSS file should only contain styles for its named component. If a style applies to multiple components, it belongs in `utilities.css` or `typography.css`.

### Responsive styles

All `@media` queries go in `responsive.css`, not in individual component files. This keeps breakpoint logic in one place and prevents specificity conflicts.

### Accessibility

- All interactive elements must have visible `:focus-visible` states
- Colour combinations must meet WCAG 2.1 AA contrast (4.5:1 normal text, 3:1 large text)
- Touch targets must be at least 44×44px
- See `02-Design-System/Design-System-Overview.md` for the full contrast verification matrix

---

## Verification Checklist

Before merging any branch:

- [ ] `index.html` renders correctly at 375px, 768px, and 1280px
- [ ] All hover states and animations work
- [ ] Mobile navigation opens, closes, and links work
- [ ] `component-library.html` shows all components correctly
- [ ] No raw colour/size values — all using design tokens
- [ ] Commit messages follow the convention
- [ ] CHANGELOG.md updated

---

## WordPress Mapping

These prototype files map directly to a future WordPress/Astra child theme:

| Prototype | WordPress destination |
|-----------|----------------------|
| `tokens.css` | Top of child theme `style.css` (`:root` block) |
| `reset.css` | Mostly replaced by Astra's reset; keep Alliance overrides |
| `typography.css` | Enqueued via `functions.php` or merged into `style.css` |
| `buttons.css` | `assets/css/components/buttons.css` |
| `forms.css` | `assets/css/components/forms.css` |
| `cards.css` | `assets/css/components/cards.css` |
| `nav.css` | `assets/css/components/nav.css` |
| `footer.css` | `assets/css/components/footer.css` |
| `sections.css` | Block pattern stylesheets |
| `responsive.css` | Distributes into component files or stays consolidated |
| `main.js` | `assets/js/main.js` via `wp_enqueue_script` |
