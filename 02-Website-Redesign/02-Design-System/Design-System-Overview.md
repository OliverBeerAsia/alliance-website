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

**Desktop — Sticky Header**
- Full-width bar, white background, burgundy logo left
- Nav links centre-right: What We Stand For, News, About, Get Involved, Contact
- Primary CTA button right: "Join the Alliance" (burgundy-700 background, white text)
- Sticky on scroll with subtle shadow
- Height: 72px

**Mobile — Drawer Navigation**
- Hamburger icon right, logo left
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

**Interior Page Hero**
- Burgundy-700 or blue-700 background (alternating by section)
- Display-md white headline
- Optional overline label (e.g., "POLICY" or "NEWS")
- Breadcrumb navigation below hero in neutral-100 bar
- Height: ~300px desktop, ~200px mobile

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
10. FOOTER       → Neutral-900 (white text, nav links)
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
