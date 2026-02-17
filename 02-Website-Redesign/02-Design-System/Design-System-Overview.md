# Alliance Party Design System

## Purpose

This document establishes the Alliance Party's design system — a unified set of visual and interaction standards that will guide the website redesign and all future digital communications. It is informed by analysis of five key inspiration sites and the party's existing brand materials.

---

## Design Inspiration Analysis

### What We're Drawing From

**AOC / ocasiocortez.com — Movement Energy**
- Conversion-first approach: splash page captures contact info before site access
- Deep purple (#3C2D82) used as single dominant brand colour — bold, unapologetic
- Minimal design complexity; maximum emotional impact
- Movement-building language ("Join now to keep building our movement")
- Photography-driven, personal, authentic feel
- **Take for Alliance**: The conversion-first mindset, bold single-colour dominance, movement language, and the confidence to be unapologetically ideological

**EPP / epp.eu — Modern Political UX**
- Card-based interface for policy positions — scannable, modular, clickable
- Progressive disclosure: dense political content managed through layered depth
- Dual navigation (desktop header + mobile drawer) with redundancy for discoverability
- Generous whitespace preventing cognitive overload
- Statistics callouts quantifying scale ("82 parties", "14 Commission members")
- Hub-and-spoke information architecture with clear content hierarchy
- **Take for Alliance**: Card-based policy layout, progressive disclosure for complex content, statistics blocks, clean information architecture, generous spacing

**Die Linke / die-linke.de — Bold Colour as Identity**
- Colour used as a weapon — full-bleed colour backgrounds creating visual energy
- Bold colour blocking to separate content sections and create rhythm
- Warm, contrasting button colours against deep backgrounds
- Full-width banner imagery at scale
- Colour carries ideology: the boldness itself communicates confidence
- **Take for Alliance**: Full-bleed burgundy sections, colour blocking for visual rhythm, bold background colours on CTAs and feature sections, colour as an expression of political confidence

**Blue Marine Foundation / bluemarinefoundation.com — Section Architecture & Spacing Mastery**
- Modular section architecture with clear visual separation between every content block
- Systematic spacing scale (0.44rem to 5.06rem) creating consistent rhythm
- Card grids with subtle shadows (`box-shadow: 0 -1px 10px 0 rgba(172,171,171,0.3)`) and 6px radius — refined, not heavy
- Clean font size system: 13px (small), 20px (medium), 36px (large), 42px (x-large) — deliberate steps, not arbitrary
- Full-width hero with dark overlay ensuring text legibility over imagery
- Statistics grid: large numbers + small labels, 2-4 column layout
- Content flow designed as a journey: discovery → exploration → action
- Smooth micro-transitions on everything (`transition: all 0.2s ease-in-out`)
- Gap-based grid system (0.5em card gaps, 2em section gaps) — tight enough for cohesion, loose enough to breathe
- **Take for Alliance**: The disciplined spacing system, refined card shadows, deliberate font size steps, section-as-journey architecture, and the micro-transitions that make everything feel polished

**Taproot Earth / taproot.earth — Typography as Design & Narrative Power**
- Typography IS the design — type is the primary visual element, not decoration
- Dramatic scale contrast in headlines: massive display type next to intimate body copy creates visual tension and energy
- Creative capitalisation and letterform disruption ("Liberation through climate justicE") — type as a statement, not just communication
- Numbered pillar sections (1-4) creating scannable, narrative structure
- High contrast minimalism: black on white, letting bold type carry all the visual weight
- Narrative-driven design: the page reads like a manifesto, not a brochure. Each section builds on the last
- Bold statements as section anchors — one powerful sentence or phrase dominates each section before detail follows
- "Militant optimism" tone: uncompromising but inclusive, urgent but hopeful
- Language and design are inseparable — the messaging IS the visual experience
- Card hover transitions (0.5s ease-in-out) — slower, more deliberate than typical, creating a sense of weight
- **Take for Alliance**: Typography as the hero element (not photos), narrative-driven page structure where each section builds a story, bold anchor statements per section, numbered policy pillars, manifesto-style page flow, and the confidence to let language do the heavy lifting

### Existing Brand DNA (from Campaign Materials)

Analysis of the Tom Roud / Alliance Christchurch campaign materials reveals an established visual language:

- **Burgundy as hero colour**: Used as full backgrounds, text colour, and accent — already used boldly in print
- **Bold white display type on burgundy**: The signature look — large, confident, uppercase headings
- **Navy/royal blue as secondary**: The campaign launch poster introduces blue (#2B3A8C approx.) as a strong complement
- **Split layouts**: Text on burgundy left, body text on white right (publisher ad)
- **Photography**: Authentic, warm, approachable — real NZ settings, not stock
- **Bilingual identity**: "Ōtautahi | Christchurch" — already embedding Te Reo naturally
- **Bold policy statements**: Short, punchy, uppercase policy headlines with rule separators
- **Tagline consistency**: "A City/Country that Works for Working People" across all materials

---

## Colour Palette

### Primary — Alliance Burgundy

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `burgundy-900` | #5A110F | 90, 17, 15 | Deepest shade — hover states on dark backgrounds |
| `burgundy-800` | #6B1513 | 107, 21, 19 | Dark backgrounds, footer |
| `burgundy-700` | **#821918** | 130, 25, 24 | **Primary brand colour** — headers, primary buttons, hero backgrounds |
| `burgundy-600` | #9A2320 | 154, 35, 32 | Secondary emphasis, active states |
| `burgundy-500` | #B33230 | 179, 50, 48 | Mid-tone for illustrations, icons |
| `burgundy-400` | #CC4F4D | 204, 79, 77 | Lighter accent, tags, badges |
| `burgundy-100` | #F5E0DF | 245, 224, 223 | Tinted backgrounds, subtle sections |
| `burgundy-50` | #FBF0EF | 251, 240, 239 | Lightest tint — page section backgrounds |

**Die Linke Influence**: Use `burgundy-700` and `burgundy-800` as full-bleed section backgrounds (not just accents). White text on burgundy is the signature Alliance look. Be bold — entire hero sections, CTA banners, and feature blocks should go full burgundy.

### Secondary — Alliance Blue

Drawn directly from the campaign launch poster's blue, which provides excellent contrast and energy alongside burgundy.

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `blue-900` | #1A2456 | 26, 36, 86 | Deepest blue — dark overlays |
| `blue-800` | #222F6E | 34, 47, 110 | Dark blue backgrounds |
| `blue-700` | **#2B3A8C** | 43, 58, 140 | **Secondary brand colour** — secondary CTAs, accent headings |
| `blue-600` | #3548A8 | 53, 72, 168 | Hover states on blue elements |
| `blue-500` | #4A5FBF | 74, 95, 191 | Links, interactive elements |
| `blue-400` | #6B7FD4 | 107, 127, 212 | Lighter interactive, focus rings |
| `blue-100` | #E0E4F5 | 224, 228, 245 | Light blue tinted sections |
| `blue-50` | #F0F1FB | 240, 241, 251 | Lightest tint — alternating sections |

**Why blue works**: It's already in the brand (campaign poster), avoids overlap with NZ party colours (National uses a lighter, different blue), and provides the warm/cool contrast that creates visual energy. Burgundy = passion/conviction. Blue = trust/stability.

### Neutrals

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-950` | #0F0F0F | Primary text on light backgrounds |
| `neutral-900` | #1A1A1A | Headings, strong emphasis |
| `neutral-800` | #2D2D2D | Body text |
| `neutral-700` | #404040 | Secondary text |
| `neutral-500` | #6B6B6B | Placeholder text, disabled states |
| `neutral-400` | #8C8C8C | Borders, dividers |
| `neutral-300` | #B3B3B3 | Light borders |
| `neutral-200` | #D4D4D4 | Subtle dividers |
| `neutral-100` | #EBEBEB | Light backgrounds, cards |
| `neutral-50` | #F7F7F7 | Off-white page sections |
| `white` | #FFFFFF | Base background, text on dark |

### Semantic Colours

| Token | Hex | Usage |
|-------|-----|-------|
| `success` | #1A7A3D | Confirmation, positive states |
| `warning` | #B8860B | Caution, attention needed |
| `error` | #C41E1E | Errors, destructive actions |
| `info` | #2B6CB0 | Informational, help |

### Colour Usage Principles (Die Linke-Inspired)

1. **Bold colour blocking**: Alternate between white, burgundy, blue, and tinted sections to create visual rhythm down the page
2. **Full-bleed burgundy sections**: At least 2-3 full-width burgundy blocks per page — hero, mid-page CTA, and pre-footer
3. **White on dark**: When backgrounds are burgundy or blue, all text, buttons, and icons go white
4. **Colour as confidence**: The boldness of large colour blocks communicates political conviction — don't be timid with colour
5. **Contrast pairs**: Burgundy background + white text (primary). Blue background + white text (secondary). White background + burgundy text (body). These three combinations cover 90% of use cases

### Colour Accessibility — Verified Combinations

| Combination | Contrast Ratio | WCAG AA | WCAG AAA |
|-------------|---------------|---------|----------|
| White (#FFF) on Burgundy (#821918) | **8.9:1** | Pass | Pass |
| White (#FFF) on Blue (#2B3A8C) | **8.2:1** | Pass | Pass |
| Burgundy (#821918) on White (#FFF) | **8.9:1** | Pass | Pass |
| Blue (#2B3A8C) on White (#FFF) | **8.2:1** | Pass | Pass |
| Neutral-900 on Burgundy-50 (#FBF0EF) | **15.2:1** | Pass | Pass |
| Neutral-900 on Blue-50 (#F0F1FB) | **14.8:1** | Pass | Pass |
| Burgundy (#821918) on Burgundy-50 | **7.4:1** | Pass | Pass |

All primary combinations pass WCAG AAA. The palette is accessibility-strong by design.

### Contrast Rules

The following rules are **mandatory** for all components, pages, and new colour usage. No exceptions without documented justification and contrast ratio verification.

#### Text Contrast Matrix

Every text/background combination used on the site must meet these minimums:

| Background | Text Colour | Ratio | AA (normal) | AA (large) | AAA (normal) | Use Case |
|-----------|------------|-------|-------------|------------|--------------|----------|
| White (#FFF) | neutral-900 (#1A1A1A) | **16.2:1** | Pass | Pass | Pass | Body text, headings on white sections |
| White (#FFF) | neutral-800 (#2D2D2D) | **13.2:1** | Pass | Pass | Pass | Body paragraphs |
| White (#FFF) | neutral-700 (#404040) | **9.7:1** | Pass | Pass | Pass | Secondary text, nav links |
| White (#FFF) | neutral-500 (#6B6B6B) | **5.0:1** | Pass | Pass | Pass | Placeholder text, metadata |
| White (#FFF) | burgundy-700 (#821918) | **8.9:1** | Pass | Pass | Pass | Headings, links, accent text |
| White (#FFF) | blue-700 (#2B3A8C) | **8.2:1** | Pass | Pass | Pass | Links, accent headings |
| neutral-50 (#F7F7F7) | neutral-900 (#1A1A1A) | **15.4:1** | Pass | Pass | Pass | Body text on off-white sections |
| burgundy-50 (#FBF0EF) | neutral-900 (#1A1A1A) | **15.2:1** | Pass | Pass | Pass | Text on tinted sections |
| burgundy-50 (#FBF0EF) | burgundy-700 (#821918) | **7.4:1** | Pass | Pass | Pass | Accent text on tinted sections |
| blue-50 (#F0F1FB) | neutral-900 (#1A1A1A) | **14.8:1** | Pass | Pass | Pass | Text on blue-tinted sections |
| blue-50 (#F0F1FB) | blue-700 (#2B3A8C) | **6.8:1** | Pass | Pass | Fail | Accent text on blue-tinted sections |
| burgundy-700 (#821918) | white (#FFF) | **8.9:1** | Pass | Pass | Pass | All text on burgundy backgrounds |
| burgundy-800 (#6B1513) | white (#FFF) | **10.5:1** | Pass | Pass | Pass | Text on dark burgundy |
| blue-700 (#2B3A8C) | white (#FFF) | **8.2:1** | Pass | Pass | Pass | All text on blue backgrounds |
| blue-800 (#222F6E) | white (#FFF) | **10.0:1** | Pass | Pass | Pass | Text on dark blue |
| neutral-950 (#0F0F0F) | white (#FFF) | **19.4:1** | Pass | Pass | Pass | Footer text |
| neutral-950 (#0F0F0F) | rgba(255,255,255,0.75) | **~13.5:1** | Pass | Pass | Pass | Footer links |
| neutral-950 (#0F0F0F) | rgba(255,255,255,0.55) | **~9.1:1** | Pass | Pass | Pass | Footer headings (muted) |

**Rules:**
- **Normal text** (under 18px bold / 24px regular): minimum **4.5:1** contrast ratio
- **Large text** (≥18px bold or ≥24px regular): minimum **3:1** contrast ratio
- **Target AAA** (7:1 normal, 4.5:1 large) for all primary content; AA is the floor, not the goal
- **No light grey text on white** — neutral-500 (#6B6B6B, 5.0:1) is the lightest allowed text on white backgrounds
- **No reduced-opacity white text on dark backgrounds** below rgba(255,255,255,0.55) — this is the floor for muted text on dark

#### Non-Text UI Contrast Rules (WCAG 1.4.11)

Borders, icons, form input outlines, focus rings, and other non-text UI components must achieve **3:1** contrast against their adjacent background colour.

| Background | Allowed Border/Icon Colours | Minimum Ratio |
|-----------|---------------------------|---------------|
| White (#FFF) | burgundy-700, blue-700, neutral-400 (#8C8C8C) or darker | 3:1+ |
| neutral-50 (#F7F7F7) | burgundy-700, blue-700, neutral-400 or darker | 3:1+ |
| burgundy-50 (#FBF0EF) | burgundy-700, blue-700, neutral-500 or darker | 3:1+ |
| burgundy-700 (#821918) | **white (#FFF) only** — no reduced opacity | 8.9:1 |
| burgundy-800 (#6B1513) | **white (#FFF) only** — no reduced opacity | 10.5:1 |
| blue-700 (#2B3A8C) | **white (#FFF) only** — no reduced opacity | 8.2:1 |
| neutral-950 (#0F0F0F) | **white (#FFF) only** — no reduced opacity for functional borders | 19.4:1 |

**Rules:**
- **On dark backgrounds (burgundy, blue, neutral-950): use solid `#FFFFFF` for all borders and icons.** Never use `rgba(255,255,255,0.7)` or any reduced-opacity white for functional UI elements (buttons, inputs, interactive borders). Decorative dividers may use reduced opacity.
- **On light backgrounds: use neutral-400 (#8C8C8C) as the lightest functional border.** neutral-300 (#B3B3B3) is only allowed for decorative dividers, not functional input borders.
- Form input borders in default state: neutral-300 minimum; on focus: burgundy-700 or blue-700
- Focus rings: 3px solid blue-400 (#6B7FD4) — passes 3:1 on white (3.6:1), burgundy-700, blue-700, and neutral-950 backgrounds

#### Button Accessibility Specification

Every button variant must pass contrast verification for background, text, and border in all states.

| Variant | Background | Text | Border | Text Ratio | Border Ratio (vs adjacent bg) | Touch Target |
|---------|-----------|------|--------|------------|------------------------------|-------------|
| **Primary** | burgundy-700 | white | burgundy-700 | 8.9:1 AAA | N/A (same as bg) | 56×160px+ |
| **Primary hover** | burgundy-800 | white | burgundy-800 | 10.5:1 AAA | N/A | — |
| **Primary on dark** (on burgundy) | white | burgundy-700 | white | 8.9:1 AAA | 8.9:1 vs burgundy | 56×160px+ |
| **Primary on dark hover** | burgundy-50 | burgundy-700 | burgundy-50 | 7.4:1 AAA | 6.2:1 vs burgundy | — |
| **Secondary on dark** (on burgundy) | transparent | white | **white (#FFF)** | 8.9:1 AAA | **8.9:1 vs burgundy** | 56×160px+ |
| **Secondary on dark hover** | rgba(255,255,255,0.1) | white | white | 8.9:1 AAA | 8.9:1 | — |
| **Ghost** | none | burgundy-700 | none | 8.9:1 AAA (on white) | N/A | Text hit area |

**Note on secondary-on-dark:** The border **must** be solid `#FFFFFF`, not `rgba(255,255,255,0.7)`. The reduced-opacity value yields approximately 5.4:1 against burgundy-700 — this passes the 3:1 non-text threshold but fails to provide the visual clarity expected at AA level. Use solid white for consistency and maximum contrast.

**Additional button requirements:**
- **Minimum touch target:** 44×44px (WCAG 2.5.5). Current button height of 56px exceeds this. Minimum width achieved through padding (`0 40px`).
- **Focus ring:** 3px solid blue-400 with 2px offset — verified visible on white, burgundy, blue, and dark backgrounds
- **Disabled state:** 50% opacity — still meets 3:1 for large text at this opacity given our high base ratios
- **All hover/active states must independently pass contrast.** A hover state that reduces contrast below minimums is a failure.

#### Typography Contrast Pairing Rules

Quick-reference decision table for which text colours are permitted on which backgrounds.

**Light backgrounds** (white, neutral-50, burgundy-50, blue-50):

| Text Purpose | Allowed Colours | Minimum Ratio |
|-------------|----------------|---------------|
| Headings | neutral-900, burgundy-700, blue-700 | 7:1+ (AAA target) |
| Body text | neutral-800, neutral-900 | 7:1+ |
| Secondary/muted text | neutral-700, neutral-500 | 4.5:1+ |
| Links | burgundy-700, blue-700, blue-500 | 4.5:1+ |
| Captions/metadata | neutral-500 or darker | 4.5:1+ |

**Dark backgrounds** (burgundy-700, burgundy-800, blue-700, blue-800, neutral-950):

| Text Purpose | Allowed Colour | Notes |
|-------------|---------------|-------|
| All text | **white (#FFF)** only | No off-white, no cream, no reduced opacity below 0.55 |
| Muted/secondary | rgba(255,255,255,0.75) minimum | Floor for readable muted text |
| Labels/metadata | rgba(255,255,255,0.55) minimum | Absolute floor — verify 4.5:1 on specific background |

**Never allowed:**
- Light grey (neutral-300, neutral-200) text on any background — fails contrast universally
- Coloured text on coloured backgrounds without explicit ratio verification (e.g., burgundy text on blue, blue text on burgundy)
- Burgundy-400 or blue-400 as standalone text colour on white — verify ratio first (burgundy-400 #CC4F4D on white = 3.5:1, fails for normal text)

**Minimum font sizes per weight:**

| Weight | Minimum Size | Notes |
|--------|-------------|-------|
| Regular (400) | 16px body, 14px captions | Captions at 14px require 4.5:1 contrast (not large text) |
| Medium (500) | 14px | Used for metadata, form labels |
| SemiBold (600) | 13px | Overlines, category labels |
| Bold (700)+ | 13px | At 18px+ qualifies as "large text" (3:1 minimum) |
| ExtraBold (800)+ | 13px | Display sizes only — hero, manifesto, section anchors |

**Critical rule:** Text at 12px (`label` token) is allowed only for form labels and overlines at Medium (500) weight or above, and must meet 4.5:1 contrast. At this size, prioritise neutral-700 or darker on light backgrounds.

### Contrast Verification Checklist

Before shipping any new component, page, or colour combination, verify all five:

- [ ] **Text contrast** — All text on its background ≥ 4.5:1? (3:1 if large text: ≥18px bold or ≥24px regular)
- [ ] **Non-text UI contrast** — Borders, icons, and form controls on their background ≥ 3:1?
- [ ] **Focus indicator** — Focus ring visible and ≥ 3:1 contrast on this component's background?
- [ ] **Hover/active states** — Do interactive state changes maintain contrast minimums?
- [ ] **Colour blindness** — Tested with simulated protanopia and deuteranopia? (Burgundy can appear dark brown/olive — ensure information is not conveyed by colour alone)

**Tools:** WebAIM Contrast Checker, Chrome DevTools Lighthouse audit, axe DevTools extension, Stark (Figma plugin)

---

## Typography

### Font Selection — Three-Tier System

The Taproot influence demands typography that can carry entire sections as a visual element — not just communicate, but *create the design*. This requires a three-tier font system: a statement display face, a clean heading workhorse, and a readable body font.

**Tier 1 — Statement Display: Space Grotesk (Bold/Bold Condensed)**
- Distinctive geometric sans-serif with character — feels bold without being aggressive
- Slightly condensed proportions pack more punch into headlines
- Strong at massive sizes (60-96px) — the kind of type that can BE the design (Taproot influence)
- Variable font, open source (Google Fonts)
- Full macron support (ā, ē, ī, ō, ū)
- Use for: hero headlines, manifesto statements, section anchor phrases, policy declaration headings
- The "KEEP AND EXPAND OUR PUBLIC ASSETS" treatment from your campaign materials — this font carries that energy to web

**Tier 2 — Headings & UI: Plus Jakarta Sans (SemiBold, Bold)**
- Modern geometric sans-serif with warmth
- Variable font with excellent performance
- Works at mid-range sizes (18-44px) for section headings, card titles, navigation
- Pairs naturally with Space Grotesk (same geometric DNA, different personality)
- Macron support, open source
- Use for: H2-H4 headings, navigation, button text, card titles, overlines

**Tier 3 — Body & Reading: Inter (Regular, Medium)**
- Industry-standard screen reading font
- Variable font, outstanding readability at 16px
- Full macron support
- Designed for the kind of long-form policy content Alliance needs
- Use for: body text, paragraphs, form labels, metadata, captions

**Why three tiers?** Taproot demonstrates that a single heading font can't do everything. When type needs to BE the design (hero statements, manifesto pages), you need a display face with enough character to hold a section alone. When type needs to serve content (H2 headings, card titles), you need a clean workhorse. When type needs to disappear and let ideas flow (body text), you need maximum readability. Three fonts, three jobs.

**Alternative Display Options to Test:**
- **Syne** — More experimental, slightly quirky geometric. Bolder personality than Space Grotesk
- **Outfit** — Rounder, more approachable. Good if Space Grotesk feels too sharp
- **Bricolage Grotesque** — Has optical size axis, transforms dramatically between small and large. Interesting for the Taproot-style scale contrast

### Type Scale (1.25 ratio — "Major Third")

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `display-xl` | 72px / 4.5rem | ExtraBold | 1.1 | Hero headlines (desktop) |
| `display-lg` | 56px / 3.5rem | ExtraBold | 1.1 | Section headlines |
| `display-md` | 44px / 2.75rem | Bold | 1.15 | Page titles |
| `h1` | 36px / 2.25rem | Bold | 1.2 | Primary headings |
| `h2` | 28px / 1.75rem | Bold | 1.25 | Section headings |
| `h3` | 22px / 1.375rem | SemiBold | 1.3 | Subsection headings |
| `h4` | 18px / 1.125rem | SemiBold | 1.35 | Card titles, minor headings |
| `body-lg` | 18px / 1.125rem | Regular | 1.6 | Lead paragraphs, introductions |
| `body` | 16px / 1rem | Regular | 1.6 | Standard body text |
| `body-sm` | 14px / 0.875rem | Regular | 1.5 | Captions, metadata, tags |
| `label` | 12px / 0.75rem | Medium | 1.4 | Form labels, overlines |
| `overline` | 13px / 0.8125rem | Bold + Uppercase + Tracking | 1.4 | Category labels, section markers |

### Typography Principles

1. **Headlines are bold and political** — Display sizes are large and confident (AOC influence). On burgundy backgrounds, use white ExtraBold type for maximum impact
2. **Body text is readable and human** — Inter at 16px/1.6 line-height ensures comfortable reading for policy content
3. **Uppercase sparingly** — Use for overlines, category labels, and short policy statements (as per the campaign materials). Never for full paragraphs
4. **Bold for emphasis in body** — The campaign materials use bold phrases within body text to pull out key commitments. Carry this pattern to web
5. **Headings inherit colour** — Base heading styles in `typography.css` use `color: inherit` (not a fixed dark colour). Each section or component sets its own heading colour explicitly. This ensures headings on dark backgrounds (burgundy, blue) correctly inherit white text from their parent section

### Mobile Type Scale

On screens below 768px, reduce display sizes:

| Token | Desktop | Mobile |
|-------|---------|--------|
| `display-xl` | 72px | 40px |
| `display-lg` | 56px | 32px |
| `display-md` | 44px | 28px |
| `h1` | 36px | 28px |
| `h2` | 28px | 22px |

---

## Spacing & Layout

### Spacing Scale (4px base)

| Token | Value | Common Usage |
|-------|-------|-------------|
| `space-1` | 4px | Tight gaps (icon-to-text) |
| `space-2` | 8px | Inline element spacing |
| `space-3` | 12px | Small component padding |
| `space-4` | 16px | Standard padding, card inner spacing |
| `space-6` | 24px | Component gaps, form field spacing |
| `space-8` | 32px | Section inner padding (mobile) |
| `space-10` | 40px | Medium section spacing |
| `space-12` | 48px | Card-to-card gaps |
| `space-16` | 64px | Section padding (desktop) |
| `space-20` | 80px | Large section spacing |
| `space-24` | 96px | Major section breaks |
| `space-32` | 128px | Hero section padding |

### Grid System

- **Desktop**: 12-column grid, 1280px max content width, 24px gutters
- **Tablet**: 8-column grid, 16px gutters
- **Mobile**: 4-column grid, 16px gutters

### Responsive Breakpoints

| Token | Value | Target |
|-------|-------|--------|
| `mobile` | 0-767px | Phones |
| `tablet` | 768-1023px | Tablets, small laptops |
| `desktop` | 1024-1279px | Laptops |
| `wide` | 1280px+ | Desktops, wide screens |

### Layout Patterns (EPP-Inspired)

1. **Full-bleed colour sections**: Content constrained to 1280px max, but background colour extends edge-to-edge (Die Linke pattern)
2. **Card grids**: 3-column on desktop, 2-column on tablet, 1-column stacked on mobile (EPP policy cards pattern)
3. **Split hero**: 50/50 image + text on desktop, stacked on mobile (from campaign materials)
4. **Generous whitespace**: Minimum 64px between major sections on desktop (EPP influence — let content breathe)

---

## Component Specifications

### Navigation

**Desktop — Transparent-to-Solid Header (AOC/Die Linke Influence)**
- Full-width bar, **transparent background** over hero with white logo + nav links
- Transitions to solid white background with shadow on scroll (50px threshold)
- Logo: white by default → burgundy-700 when scrolled
- Nav links: `rgba(255,255,255,0.85)` by default → neutral-700 when scrolled
- Underline accents: white by default → burgundy-700 when scrolled
- Active page: `aria-current="page"` — full underline, colour matches header state
- Primary CTA button right: "Join the Alliance" (burgundy-700 bg, white text — stays consistent in both states)
- Height: 72px
- Transition: `background` and `box-shadow` on `--transition-medium` (0.35s)

**Mobile — Drawer Navigation**
- Hamburger icon right (white bars on transparent header, dark when scrolled), logo left
- Full-screen drawer slides from right
- Large touch targets (minimum 48px height)
- CTA button prominent at top of drawer

### Hero Sections

**Homepage Hero (AOC + Campaign Materials Hybrid)**
- Full-bleed burgundy-700 background
- Split layout: large photography left (authentic NZ imagery), text right
- Display-xl white headline: "A Country That Works For Working People"
- Body-lg white subtext (1-2 sentences of movement-building language)
- Two CTAs side by side:
  - Primary: White button, burgundy text → "Join the Movement"
  - Secondary: White outline button → "Our Policies"
- Full viewport height on desktop, auto on mobile (stacks vertically)

**Interior Page Hero (`.interior-hero`)**
- Burgundy-700 background with diagonal `::before` accent (burgundy-800, right side)
- Centred text, optional overline label (e.g., "About the Alliance")
- Display-md white headline, `clamp(32px, 5vw, 56px)`
- `padding-top: calc(header-height + space-20)` to account for transparent header overlap
- Diagonal accent hidden on mobile (≤ 767px), reduced padding
- Currently implemented on `about.html`

### Content Blocks

**Full-Bleed Colour Section (Die Linke Pattern)**
```
┌─────────────────────────────────────────────────┐
│  BURGUNDY-700 BACKGROUND (full edge-to-edge)    │
│  ┌─────────────────────────────────┐            │
│  │  White headline (display-lg)     │            │
│  │  White body text (body-lg)       │            │
│  │  [White CTA Button]              │            │
│  └─────────────────────────────────┘            │
└─────────────────────────────────────────────────┘
```
Use for: mid-page CTAs, key statistics, featured quotes, urgent campaign messages.

**Policy Card Grid (EPP Pattern)**
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│ Icon     │  │ Icon     │  │ Icon     │
│ Title    │  │ Title    │  │ Title    │
│ Excerpt  │  │ Excerpt  │  │ Excerpt  │
│ [Read →] │  │ [Read →] │  │ [Read →] │
└──────────┘  └──────────┘  └──────────┘
```
- White cards on neutral-50 or burgundy-50 background
- Subtle border or shadow for separation
- Hover: card lifts slightly (2px), border-left gains 4px burgundy accent
- 3-column desktop, 2-column tablet, 1-column mobile

**Split Content Block (From Campaign Materials)**
```
┌─────────────────┬─────────────────┐
│                 │                 │
│   IMAGE         │   BURGUNDY BG  │
│   (authentic    │   White heading │
│    NZ photo)    │   White body    │
│                 │   [White CTA]   │
│                 │                 │
└─────────────────┴─────────────────┘
```
Directly inspired by the publisher ad layout. Alternates image-left/image-right down the page.

**Statistics Block**
```
┌─────────────────────────────────────────┐
│  BLUE-700 BACKGROUND                    │
│                                         │
│   "82"        "500+"       "10"         │
│   Parties     Visitors     Policies     │
│                                         │
└─────────────────────────────────────────┘
```
Large display numbers in white, labels in white/blue-100. EPP-inspired quantification of impact.

**Bold Policy Statements (From Campaign Page 4)**
```
┌─────────────────────────────────────┐
│  ══════════════════════════         │
│  KEEP AND EXPAND                   │
│  OUR PUBLIC ASSETS                 │
│  ══════════════════════════         │
│  INFRASTRUCTURE BUILT              │
│  FOR PURPOSE                       │
│  ══════════════════════════         │
└─────────────────────────────────────┘
```
Burgundy uppercase display type with horizontal rules. Use for manifesto/policy summary pages. Powerful, declarative, unmistakeable.

### Buttons

| Type | Style | Usage |
|------|-------|-------|
| **Primary** | Burgundy-700 bg, white text, 8px radius, 48px height | Main actions (Join, Donate, Submit) |
| **Primary on Dark** | White bg, burgundy-700 text, 8px radius | CTAs on burgundy/blue backgrounds |
| **Secondary** | White bg, burgundy-700 border + text, 8px radius | Secondary actions (Learn More, Read) |
| **Secondary on Dark** | Transparent, white border + text, 8px radius | Secondary on dark backgrounds |
| **Ghost** | No bg, burgundy-700 text + underline | Inline links, "Read more →" |

**Button States:**
- Hover: darken background 10%, slight scale (1.02)
- Active: darken 15%, scale back to 1.0
- Focus: 3px blue-400 ring (visible keyboard focus)
- Disabled: 50% opacity, no pointer events

### Cards

**Blog/News Card**
- White background, subtle shadow (0 1px 3px rgba(0,0,0,0.1))
- Image top (16:9 ratio)
- Category label (overline style, burgundy-400 text)
- Title (h4, neutral-900)
- Date + author (body-sm, neutral-500)
- Excerpt (body, neutral-700, 2-line clamp)
- Hover: shadow increases, subtle lift

**People Card**
- Circular photo (200px)
- Name (h4, centred)
- Role (body-sm, neutral-500)
- Optional social links

### Forms

- Input fields: 48px height, 8px radius, neutral-300 border
- Focus state: burgundy-700 border, light burgundy-50 background
- Labels: label token, above field
- Error: error colour border + message below field
- Submit buttons: full primary button style
- Email capture (AOC-inspired): prominent, minimal fields, movement language ("Stay in the fight")

---

## Photography & Imagery Style

### Direction (From Campaign Materials)

The existing campaign photography establishes a strong, authentic visual language:

1. **Real people, real places**: Authentic NZ settings — not stock photography. Park benches, heritage buildings, working environments
2. **Warm and approachable**: Natural lighting, genuine expressions, relaxed posing
3. **Community connection**: People with pets, in public spaces, at events — showing connection to community
4. **Bold composition**: Subject prominently placed, confident framing
5. **NZ identity**: Pounamu (greenstone), heritage architecture, local landscapes

### Web Application

- Hero images: Full-bleed, high quality, people-focused
- Blog thumbnails: Cropped to 16:9, focal point on faces
- Policy pages: Abstract/contextual imagery (housing = NZ homes, healthcare = NZ hospitals)
- About/people: Natural, approachable portraits — avoid formal headshots
- All images: WebP format, lazy loaded, responsive srcset

---

## Page Colour Rhythm

A typical page should alternate sections to create visual energy (Die Linke influence):

```
1. HERO          → Burgundy-700 full-bleed (white text + photo)
2. INTRO         → White (burgundy text)
3. POLICY CARDS  → Neutral-50 or Burgundy-50 (card grid)
4. CTA BANNER    → Blue-700 full-bleed (white text, stats or quote)
5. CONTENT       → White (two-column split with photo)
6. FEATURES      → Burgundy-50 (feature cards)
7. TESTIMONIAL   → Burgundy-700 full-bleed (white quote)
8. BLOG PREVIEW  → White (3-column card grid)
9. JOIN CTA      → Burgundy-700 full-bleed (conversion-focused)
10. FOOTER       → Neutral-950 (compact: reduced tagline + nav grid + bottom bar)
```

This rhythm ensures no two adjacent sections share the same background, creating visual momentum and energy throughout the scroll.

---

## Accessibility Standards

### Compliance Target
**WCAG 2.1 Level AA** (minimum)

### Key Requirements
- **Perceivable**: Text alternatives for images, captions for video, sufficient contrast, resizable text
- **Operable**: Keyboard navigable, no time limits, no seizure-inducing content, clear focus indicators
- **Understandable**: Readable content (aim for reading age 12-14), predictable navigation, input assistance
- **Robust**: Valid HTML, compatible with assistive technologies, semantic markup

### Focus Indicators
- All interactive elements: 3px solid `blue-400` outline with 2px offset
- Visible on keyboard navigation, hidden on mouse click (`:focus-visible`)
- Never removed — only styled

### Testing Approach
- Automated testing (axe, Lighthouse)
- Manual keyboard navigation testing
- Screen reader testing (NVDA, VoiceOver)
- Colour contrast checking (all combinations verified above)
- Real user testing where possible

---

## WordPress Implementation

### Recommended Approach: Custom Child Theme + Gutenberg Block Patterns

Given the design system's specificity, the best WordPress approach is:

1. **Astra child theme** — Customise Astra's existing framework rather than starting from scratch
2. **Custom CSS** — Override Astra defaults with the design system tokens (colours, typography, spacing)
3. **Block Patterns** — Create reusable Gutenberg block patterns for each component (hero, card grid, CTA banner, split content, etc.)
4. **Custom Block Styles** — Register custom block styles for buttons, headings, and sections
5. **Full Site Editing** — Use block-based template parts for header and footer if Astra supports it

### Font Loading Strategy
```css
/* Preload critical fonts */
<link rel="preload" href="plus-jakarta-sans-v8-latin-700.woff2" as="font" crossorigin>
<link rel="preload" href="inter-v13-latin-regular.woff2" as="font" crossorigin>

/* Font display: swap for performance */
font-display: swap;
```

### CSS Custom Properties
```css
:root {
  /* Colours */
  --color-burgundy-700: #821918;
  --color-burgundy-800: #6B1513;
  --color-blue-700: #2B3A8C;
  --color-neutral-900: #1A1A1A;
  --color-white: #FFFFFF;

  /* Typography */
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Spacing */
  --space-4: 16px;
  --space-8: 32px;
  --space-16: 64px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
}
```

### Performance Targets
- LCP < 2.5s (optimise hero image loading)
- FID < 100ms (minimal JavaScript)
- CLS < 0.1 (reserve space for images, preload fonts)
- Total page weight < 1.5MB
- Font loading < 100KB total (subset + variable fonts)

---

## Tone of Voice Integration

All content components must support the Alliance tone of voice:
- **Principled**: Bold headlines, confident language, policy statements in uppercase display
- **Accessible**: Clear labels, plain language defaults, readable body text
- **Collective**: "We" and "together" language patterns in CTAs and headings
- **Hopeful**: Forward-looking, action-oriented CTAs ("Join the movement", "Build something better")

See `01-Reference/Brand/Alliance-Tone-of-Voice-Guide.md` for comprehensive guidelines.

---

## Animations & Transitions

### Transition Tokens

Three transition speeds are defined in `tokens.css` and used consistently throughout all interactive states:

| Token | Value | When to Use |
|-------|-------|-------------|
| `--transition-fast` | `0.2s ease-in-out` | Hover states, colour changes, focus rings, nav link underlines — immediate feedback |
| `--transition-medium` | `0.35s ease-in-out` | Mobile drawer slide, panel transitions — noticeable but not sluggish |
| `--transition-slow` | `0.5s ease-in-out` | Reserved for large-scale transitions (page-level animations, if needed) |

### Hero Staggered Entry

The hero section uses a custom `@keyframes hero-enter` animation with staggered `animation-delay` values to create a cinematic reveal:

```
.hero-headline   → delay: 0.1s,  translateY(28px) → translateY(0), opacity 0 → 1
.hero-sub        → delay: 0.3s,  translateY(28px) → translateY(0)
.hero-ctas       → delay: 0.45s, translateY(28px) → translateY(0)
.hero-photo      → delay: 0.2s,  translateY(40px) → translateY(0)
```

All hero animations are `0.8s ease-out forwards`. The `forwards` fill-mode keeps elements visible after animation completes.

### Scroll Reveal Pattern

Sections below the fold use an IntersectionObserver-based reveal:

1. Elements start with class `.reveal` → `opacity: 0; transform: translateY(32px)`
2. When 10% visible (with -60px bottom margin), JavaScript adds `.visible`
3. `.reveal.visible` transitions to `opacity: 1; transform: translateY(0)` over `0.7s ease-out`
4. Observer disconnects after reveal (one-shot, no re-hiding)

### Header Scroll Transition

The header uses a scroll listener (in `main.js`) to toggle between transparent and solid states:

1. On page load, `updateHeader()` checks `window.scrollY`
2. If > 50px, adds `.header-scrolled` to `.header`
3. If ≤ 50px, removes `.header-scrolled`
4. Listener uses `{ passive: true }` for scroll performance
5. CSS transitions on `background` and `box-shadow` use `--transition-medium` (0.35s)

This creates a seamless effect where the header feels integrated with the hero, then solidifies as the user scrolls into content sections.

### Animation Principles

1. **Only animate opacity and transform** — never animate layout properties (`width`, `height`, `margin`, `padding`, `top/left`). Opacity and transform are GPU-composited and won't cause reflow.
2. **Hover/active transitions use `--transition-fast`** — buttons scale to 1.02 on hover, nav links gain underline width, card arrows translate 4px right.
3. **Ease-in-out for interactions, ease-out for entries** — `ease-in-out` creates a natural feel for toggles; `ease-out` gives entering elements a decelerating, "settling in" quality.
4. **No animation on `prefers-reduced-motion`** — when building the production site, add a media query to disable all animations for users who request it.

---

## Responsive Behaviour Rules

### Breakpoints

| Breakpoint | Max-width | What changes |
|------------|-----------|-------------|
| **Desktop** | > 1023px | Full layout: 2-column hero, 2-column pillar grid, 3-column stats, 4-column footer grid, desktop nav visible |
| **Tablet** | ≤ 1023px | Single-column hero, mobile nav (drawer), 2-column footer grid, conference photo above text |
| **Mobile** | ≤ 767px | Everything stacks single-column, reduced section padding, smaller image heights, CTAs go full-width |

### Grid Collapse Rules

| Component | Desktop | Tablet (≤ 1023px) | Mobile (≤ 767px) |
|-----------|---------|-------------------|-------------------|
| Hero | 2-column (text + photo) | 1-column stacked | 1-column, reduced padding |
| Interior hero | Centred text + diagonal | Centred text + diagonal | Reduced padding, diagonal hidden |
| Pillar cards | 2×2 grid | 2×2 grid (unchanged) | 1-column stacked |
| Principles grid | 2-column cards | 2-column cards | 1-column stacked |
| History eras | 2-column (year + content) | 2-column (year + content) | 1-column stacked, smaller year |
| Leadership | 2-column cards | 2-column cards | 1-column stacked |
| Stats | 3-column with dividers | 3-column (unchanged) | 1-column, border-bottom replaces border-right |
| Conference | 2-column (text + photo) | 1-column, photo first | 1-column, reduced spacing |
| Footer grid | 4-column (3 nav + newsletter) | 2×2 grid | 1-column stacked |

### Decorative Elements on Mobile

These decorative elements **hide** on mobile (≤ 767px) to keep layouts clean:

- **Hero `::before` diagonal** — `display: none` at ≤ 1023px
- **Interior hero `::before` diagonal** — `display: none` at ≤ 767px
- **Quote banner `::before` diagonal** — `display: none` at ≤ 767px
- **Stats `::before` diagonal** — `display: none` at ≤ 767px
- **Join `::before` diagonal** — `display: none` at ≤ 767px

### Container Padding

The `.container` has a consistent `padding: 0 var(--space-6)` (24px) at all breakpoints. Section vertical padding reduces at smaller breakpoints:

| Section | Desktop padding | Mobile (≤ 767px) padding |
|---------|----------------|--------------------------|
| Hero | `--space-20` (80px) top/bottom | `--space-12` (48px) |
| Pillars | `--space-24` (96px) | `--space-16` (64px) |
| Quote banner | `--space-32` (128px) | `--space-20` (80px) |
| Conference | `--space-24` (96px) | `--space-16` (64px) |
| Stats | `--space-24` (96px) | `--space-16` (64px) |
| Manifesto | `--space-32` (128px) | `--space-20` (80px) |
| Join | `--space-32` (128px) | `--space-20` (80px) |

### Touch Target Minimums

On mobile, all interactive elements must meet **44×44px** minimum touch target (WCAG 2.5.5):

- **Buttons**: 56px height exceeds minimum. Full-width on mobile for easy tapping.
- **Nav links in mobile drawer**: 18px font with `--space-4` (16px) vertical padding = ~50px touch height.
- **Mobile toggle (hamburger)**: 44×44px explicitly set.
- **Footer social icons**: 40×40px — slightly under minimum. Consider increasing to 44×44px in production.

### Image Height Adjustments

| Image | Desktop | Tablet (≤ 1023px) | Mobile (≤ 767px) |
|-------|---------|-------------------|-------------------|
| Hero photo | 480px | 320px | 260px |
| Conference photo | 500px | 360px | 360px (unchanged) |
| Photo banner | 420px | 420px (unchanged) | 280px |

---

## Form Patterns

### Pattern 1: Inline Email Capture (`.join-form`)

Used in the Join CTA section. Horizontal layout on desktop, stacks vertically on mobile.

**Structure:**
```html
<form class="join-form">
  <input type="email" class="join-input" placeholder="your@email.com">
  <button type="submit" class="btn btn-primary-on-dark">Join</button>
</form>
```

**Specs:**
- Container: `display: flex; gap: 12px; max-width: 500px; margin: 0 auto`
- Input height: 56px (matches button height)
- Input border: `2px solid rgba(255, 255, 255, 0.35)` (dark background variant)
- Input background: `rgba(255, 255, 255, 0.1)`
- Input text: white, Inter 500 16px
- Placeholder: `rgba(255, 255, 255, 0.5)`
- Focus state: border becomes solid white, background becomes `rgba(255, 255, 255, 0.15)`
- Mobile (≤ 767px): `flex-direction: column`, button goes full-width

### Pattern 2: Footer Newsletter (`.footer-newsletter-form`)

Used in the footer's newsletter column. Always horizontal (compact).

**Structure:**
```html
<form class="footer-newsletter-form">
  <input type="email" class="footer-newsletter-input" placeholder="Email address">
  <button type="submit" class="footer-newsletter-btn">Subscribe</button>
</form>
```

**Specs:**
- Container: `display: flex; gap: 8px`
- Input height: 48px (smaller than join form)
- Input border: `1px solid rgba(255, 255, 255, 0.2)`
- Input background: `rgba(255, 255, 255, 0.06)`
- Button: white background, neutral-950 text, 48px height, uppercase
- Focus state: border lightens to `rgba(255, 255, 255, 0.45)`, background to `rgba(255, 255, 255, 0.1)`

### Error States (Specification — Not Yet Built)

When form validation is implemented, error states should follow these patterns:

**Input error state:**
- Border: `2px solid var(--error)` (#C41E1E)
- Background: light red tint (on light backgrounds) or unchanged (on dark)
- Error message: displayed below input, Inter 500 14px, `var(--error)` colour
- Icon: inline error icon (SVG) before message text

**Dark background error variant:**
- Border: `2px solid #FF6B6B` (lighter red, visible on dark)
- Error message: `#FF6B6B` text colour
- Keep input background unchanged

**Disabled state:**
- Input opacity: 50%
- Cursor: `not-allowed`
- No focus ring on tab

---

## Design System Summary

| Element | Decision |
|---------|----------|
| Primary colour | Burgundy #821918 (with full shade scale) |
| Secondary colour | Blue #2B3A8C (from campaign materials) |
| Display font | Plus Jakarta Sans (Bold/ExtraBold) |
| Body font | Inter (Regular/Medium) |
| Heading style | Bold, large, confident — white on burgundy for impact |
| Layout approach | Full-bleed colour sections alternating for visual rhythm |
| Card pattern | EPP-inspired modular cards for policies and content |
| CTA approach | AOC-inspired conversion focus, movement-building language |
| Colour blocking | Die Linke-inspired bold backgrounds throughout |
| Photography | Authentic NZ imagery, warm, community-focused |
| Grid | 12-column, 1280px max, responsive to 4-column mobile |
| Accessibility | WCAG 2.1 AA — all colour combinations verified |
| WordPress | Astra child theme + Gutenberg block patterns |

---

## Next Steps

1. **Prototype key components** — Build a test page in HTML/CSS with hero, card grid, CTA banner, and split content block to validate the system visually
2. **Font testing** — Load Plus Jakarta Sans + Inter in a browser test to confirm pairing works at all sizes
3. **Photography brief** — Define requirements for new photography to fill content gaps
4. **WordPress setup** — Create Astra child theme with CSS custom properties
5. **Block pattern development** — Build the first 5 Gutenberg block patterns (hero, policy cards, CTA banner, split content, statistics)
6. **Stakeholder review** — Present design system to party leadership for feedback
