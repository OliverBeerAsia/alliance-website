# Alliance Party Digital Operations Workspace

This file provides guidance to Claude Code (claude.ai/code) when working in this workspace.

## Workspace Purpose

This is the central workspace for the Alliance Party's digital operations, encompassing website redesign, content production, SEO strategy, policy research, and political communications. The current primary project is a ground-up redesign of allianceparty.nz (Feb-Aug 2026).

## Context and Approach

### Political Focus
- **Geographic scope**: New Zealand politics, policy, and governance
- **Ideological alignment**: Alliance party principles and values (democratic socialist)
- **Time orientation**: Historical analysis informing future policy development

### Key Activities
1. **Website Redesign**: Ground-up redesign of allianceparty.nz (current primary project)
2. **Content Production**: Blog posts, policy documents, press releases
3. **SEO & Analytics**: Keyword research, link building, performance tracking
4. **Policy Development**: Evidence-based policy proposals and frameworks
5. **Political Writing**: Blogs, articles, and political commentary
6. **Research**: NZ political history, competitor analysis, design trends

## Directory Structure

```
Alliance/
├── 01-Reference/              # Foundational documents
│   ├── Constitution/          # Party constitution and analysis
│   ├── Brand/                 # Tone of voice, visual identity
│   └── Frameworks/            # Strategic frameworks and best practices
├── 02-Website-Redesign/       # Current primary project (Feb-Aug 2026)
│   ├── 00-Project-Brief/      # Current state analysis, project scope
│   ├── 01-Research/           # Design trends, competitor analysis
│   │   ├── Design-Trends/
│   │   └── Competitor-Analysis/
│   ├── 02-Design-System/      # Typography, colour, components
│   ├── 03-Information-Architecture/  # Site map, navigation, user flows
│   ├── 04-Content-Strategy/   # Content plan, editorial calendar
│   ├── 05-Technical-Spec/     # WordPress/Astra implementation details
│   └── 06-Implementation/     # Build notes, testing, launch
├── 03-Content/                # Ongoing content production
│   ├── Blog/
│   ├── Policy-Documents/
│   └── Press-Releases/
├── 04-SEO-and-Analytics/      # SEO strategy and performance data
│   ├── Keyword-Research/
│   └── Link-Building/
├── 05-Research/               # General political and policy research
└── 06-Assets/                 # Media files and design assets
```

## Current Project: Website Redesign (Feb-Aug 2026)

### Goal
Ground-up redesign of allianceparty.nz within WordPress (Astra theme), transforming it from a minimal single-page presence into a fully-featured political party website that drives membership, engagement, and visibility.

### Phased Approach
1. **Research** (Feb-Mar) — Design trends from progressive political sites globally; competitor analysis of NZ and international party websites; user research
2. **Design System** (Mar) — Typography, colour palette, component library, responsive breakpoints; all grounded in brand identity (burgundy #821918)
3. **Information Architecture** (Mar-Apr) — Site map, navigation structure, user flows for key journeys (join, volunteer, donate, learn about policy)
4. **Content Strategy** (Apr-May) — Editorial plan, content templates, SEO-optimised page structures, content production pipeline
5. **Technical Spec** (May-Jun) — WordPress/Astra configuration, plugin selection, performance requirements, accessibility compliance
6. **Implementation** (Jun-Aug) — Build, test, launch, post-launch optimisation

### Design Inspiration
- **US progressive sites**: Bold typography, strong CTAs, movement-building language
- **EU democratic socialist parties**: Policy depth, multilingual accessibility patterns, member engagement
- **NZ government sites**: Accessibility standards, Te Reo Māori integration, clean information design

### Target Metrics (by Aug 2026)
- Domain Rating: 20+ (from 0.0)
- Organic keywords: 200+ (from 2)
- Monthly organic visitors: 500+ (from ~1)
- Core Web Vitals: All green (LCP <2.5s, FID <100ms, CLS <0.1)

## Working with Political Content

### Historical Research
When researching NZ political history:
- Cross-reference multiple sources for accuracy
- Consider the specific NZ context (MMP electoral system, bicultural foundations, Westminster traditions)
- Connect historical precedents to contemporary policy challenges
- Acknowledge the Alliance party's historical role (1991-2015) and its principles

### Policy Development
When creating or analysing policy proposals:
- Ground proposals in NZ's constitutional and legal framework
- Consider fiscal implications within NZ's economic context
- Evaluate alignment with Alliance party core values (social justice, democratic participation, economic democracy)
- Address both urban and rural perspectives
- Consider Treaty of Waitangi implications where relevant

### Political Writing
When drafting blogs or commentary:
- Use NZ English spelling and conventions
- Reference NZ-specific political terminology (e.g., Parliament, Select Committees, Beehive)
- Consider the NZ political spectrum and party landscape
- Balance ideological clarity with accessibility to general readers
- Follow Alliance tone of voice: principled, accessible, collective, hopeful
- See `01-Reference/Brand/Alliance-Tone-of-Voice-Guide.md` for comprehensive voice guidelines

## Alliance Website Management

### Current Website State (allianceparty.nz)

**Platform & Technology:**
- WordPress CMS with Astra theme
- Analytics: Google Analytics (GA4) + Jetpack statistics
- Responsive design with breakpoints at 921px and 544px
- Brand colour: Burgundy (#821918)

**Current SEO Status (January 2026):**
- Domain Rating: 0.0/100 (critical priority for improvement)
- Organic keywords: Only 2 ranking ("the alliance", "alliance")
- Organic traffic: ~1 visitor/month
- Backlinks: 2 live backlinks from 2 referring domains
- **This represents a critical visibility gap requiring urgent attention**

**Content Structure:**
- Primary homepage with hero section: "A country that works for working people"
- Three-pillar policy focus: job security, healthcare, housing
- Navigation: Home, News, About, Contact, What we stand for, Get Involved
- Limited content depth beyond homepage

### Website Design
When working on design elements:
- Ensure accessibility compliance (WCAG 2.1 AA standards minimum)
- Maintain brand consistency with Alliance party colours (burgundy #821918), logos, and visual identity
- Prioritise mobile-responsive design for NZ's mobile-first audience
- Create clean, professional layouts that reflect the party's values of transparency and accessibility
- Consider diverse user needs across age groups and technical literacy levels
- Follow 2026 best practices:
  - Sticky navigation for constant access
  - Bold, prominent CTAs (Join, Volunteer, Donate)
  - Split-screen hero sections for impact
  - Grid layouts for news/content sections
  - Subtle animations and hover effects
  - Video content integration
  - Clean, magazine-style layouts for content
  - Social proof elements (testimonials, endorsements, community wins)

### Content Strategy
When developing website content:
- Align all content with Alliance party messaging and values
- Structure content for easy navigation (policies, news, membership, volunteer opportunities)
- Create clear calls-to-action for engagement (join, donate, volunteer, contact)
- Maintain an accessible reading level while preserving political substance
- Update regularly with current campaigns, press releases, and policy announcements
- Optimise content for sharing on social media platforms

**Priority Content Needs:**
- Individual policy pages for core issues (20-30 cornerstone pages needed)
- Regular blog posts (target: 2-3 per week) on current NZ political issues
- Policy explainers breaking down complex topics for general audience
- News section for press releases and campaign updates
- Comparison content (Alliance vs other parties on key issues)
- Regional/electorate-specific pages for local campaigns
- Resource library (downloadable materials, fact sheets, research)
- Interactive features (policy quiz, event calendar, discussion areas)

**Voice and Messaging:**
All content must follow the Alliance tone of voice (principled, accessible, collective, hopeful). See `01-Reference/Brand/Alliance-Tone-of-Voice-Guide.md` for core messaging framework, preferred vocabulary, channel-specific guidelines, and common pitfalls to avoid.

### SEO Optimisation
When optimising for search engines:
- Target NZ-specific search terms and local political keywords
- Focus on policy areas where Alliance positions are distinctive
- Build content around questions NZ voters are asking
- Optimise for "near me" searches in local campaign contexts
- Create location-specific content for regional campaigns
- Use semantic HTML and structured data where appropriate
- Monitor competitor political party websites for SEO strategies

**Critical SEO Priorities (Given DR 0.0 baseline):**
- Link building campaign: Target 50+ quality backlinks within 6 months (unions, advocacy orgs, NZ political blogs, media)
- Technical SEO: Proper heading hierarchy, meta descriptions, schema markup, XML sitemap
- Keyword targeting: Create content for high-value terms like "workers rights new zealand", "public housing policy nz", "healthcare reform nz"
- Internal linking: Build strong topic clusters around core policy areas
- Core Web Vitals: Optimise for LCP <2.5s, FID <100ms, CLS <0.1
- Performance: Reduce inline CSS, implement lazy loading, compress images (WebP format)

### Analytics and Performance
When analysing website performance:
- Track visitor engagement with policy content and campaign materials
- Monitor conversion rates for membership sign-ups and volunteer registrations
- Identify high-performing content to inform future strategy
- Analyse traffic sources to optimise outreach efforts
- Track mobile vs desktop usage patterns
- Monitor page load speeds and technical performance
- Use data to refine content and design decisions

## Tools and Resources

### Available MCP Tools
This workspace has access to Ahrefs SEO tools for comprehensive website and content optimisation. Use these for:

**Website SEO:**
- Analysing the Alliance website's domain rating and backlink profile
- Monitoring organic keyword rankings and search visibility
- Identifying technical SEO issues and opportunities
- Tracking referring domains and link building progress
- Analysing competitor political party websites

**Content Strategy:**
- Researching keyword opportunities for policy content
- Understanding search volume for political topics in NZ
- Identifying content gaps and opportunities
- Analysing top-performing pages on the Alliance site
- Researching what content ranks for target keywords

**Performance Monitoring:**
- Tracking organic traffic trends over time
- Monitoring keyword position changes
- Analysing SERP features and ranking opportunities
- Measuring the impact of content updates and SEO changes

### Research Approach
When asked to research NZ political topics:
- Use WebSearch for current events and recent policy developments
- Use WebFetch for accessing specific NZ government, parliamentary, or political party resources
- Cite sources appropriately for credibility
- Distinguish between primary sources (legislation, official reports) and secondary analysis

## Key Reference Documents

- `01-Reference/Constitution/Alliance-Constitution-2006-Full.md` — Full constitutional text
- `01-Reference/Constitution/Alliance-Constitution-Key-Provisions-Summary.md` — Detailed summary and analysis
- `01-Reference/Brand/Alliance-Tone-of-Voice-Guide.md` — Voice guidelines (aligned with constitutional principles)
- `01-Reference/Frameworks/Website-Success-First-Principles.md` — Universal website best practices framework
- `02-Website-Redesign/00-Project-Brief/Current-State-Analysis.md` — Current website analysis and improvement roadmap

## Alliance Party Context

### Constitutional Identity

The Alliance Party is officially "a party of the left with policies based on socialist principles of democracy, equality and social ownership" (Constitution, Section 2).

**Core Organisational Characteristics:**
- Democratic socialist party (explicit constitutional commitment)
- Member-driven organisation (Conference is supreme decision-making body)
- Co-leadership model (two Co-Leaders, distinct from President)
- Extra-parliamentary organising emphasis (not just electoral)
- Allows formal factions (affiliated groups and networks)
- Constitutional Treaty of Waitangi partnership commitment

### The 10 Constitutional Principles

All work must align with these foundational principles:

1. **Basic Rights:** Secure well-paid work; free education and healthcare; affordable housing and power; sustainable environment; democratic participation
2. **Economic Model:** Public ownership of key assets (water, electricity, telecommunications, railways, shipping, ports, airports)
3. **Workers' Rights:** Meaningful work without exploitation; secure wages; union rights; recognition of unpaid work
4. **Social Welfare:** Universal entitlement to income and resources for full societal participation
5. **Wealth Redistribution:** Highly progressive taxation to eliminate poverty and discrimination
6. **Te Tiriti Partnership:** Genuine partnership; redress grievances; promote Māoritanga and Te Reo as first culture and language
7. **Anti-Discrimination:** Society without racism, sectarianism, homophobia, ageism, discrimination against women and people with disabilities
8. **Environmental Protection:** Halt destruction, actively restore and protect natural environment
9. **Independent Foreign Policy:** Promote social justice, peaceful resolution, oppose wars of aggression, strengthen Pacific ties
10. **Challenge Capitalism:** "Global capitalism is not permanent or invincible – we must challenge that conventional assumption and fight for a socialist alternative"

### Party Objectives (Constitution, Section 3)

1. Organise and fight for Alliance principles **outside Parliament**
2. Contest elections as **independent left party** to build mass democratic party
3. Win seats to **implement policies**
4. **Unite socialists and social democrats** from all traditions
5. Build **international solidarity** with those resisting inequality

### Key Constitutional Provisions for Communications

**Democratic Structure:**
- Conference (annual) is supreme decision-making body
- Alliance Council has between-conference authority
- Members control party through branches → regional conferences → national conference
- Policy must be developed from grassroots up and approved by Conference

**Leadership Model:**
- Two Co-Leaders (parliamentary leadership, can be MPs)
- President (organisational leadership, cannot be MP)
- General Secretary (administrative)
- This separation ensures party independence from parliamentary pressures

**Public Ownership Specificity:**
The Constitution explicitly commits to public ownership of: water, electricity, telecommunications, railways, coastal shipping, ports, and airports. This is not negotiable—it's constitutional.

**Socialist Identity:**
Do not shy away from the party's explicit socialist character. The Constitution commits to "fight for a socialist alternative for society" (Principle #10).

**Treaty Partnership:**
Te Tiriti partnership is a constitutional principle, not just a policy. Must be embedded in all policy areas, not tokenistic.

### For Content Creation

**Always Ground In:**
- The 10 constitutional principles
- Democratic member control
- Public ownership commitments
- Socialist principles of democracy, equality, and social ownership
- Treaty partnership framework
- Extra-parliamentary organising

**Language Choices:**
- "Socialist" is constitutionally accurate and should be used
- "Public ownership" not "nationalisation" (positive framing)
- "Working people" (used in constitutional principles)
- "Genuine partnership" (Treaty language from constitution)
- "Democratic socialist party" (accurate description)

**Avoid:**
- Hiding or downplaying socialist character
- Suggesting public ownership is optional
- Treating Treaty partnership as add-on
- Presenting party as purely electoral vehicle (it is a movement)

When developing policy or political content, ensure alignment with constitutional principles while adapting to contemporary NZ challenges.
