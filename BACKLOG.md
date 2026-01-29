# Product Backlog - iPhone Comparison Page

> **Owner:** Backlog Agent
> **Last Updated:** 2026-01-29
> **Current Sprint:** 3 - Tele2 Alignment & Interactivity
> **Focus:** Tele2.se design system integration, phone selection, spec column labeling

---

## Priority Legend

| Priority | Label | Description |
|----------|-------|-------------|
| **P0** | CRITICAL | Must be done immediately, blocking |
| **P1** | HIGH | This sprint, essential for MVP |
| **P2** | MEDIUM | Next sprint, important |
| **P3** | LOW | Nice-to-have, future |

## Status Legend

- `[ ]` Not started
- `[~]` In progress
- `[x]` Completed
- `[!]` Blocked

---

## Sprint 1: Foundation (Completed)

### P0 - Critical
- [x] **Setup React project with Vite + TypeScript**
  - Initialize Vite project
  - Configure TypeScript
  - Add ESLint + Prettier
  - Set up path aliases

- [x] **Configure Tailwind CSS**
  - Install Tailwind + dependencies
  - Create tailwind.config.js
  - Add Apple-like design tokens (colors, fonts, spacing)

### P1 - High Priority
- [x] **Create base component structure**
  - `<App />` - Main app wrapper
  - `<Header />` - Page header with title
  - `<ProductSelector />` - Choose products to compare
  - `<ComparisonTable />` - Main comparison grid
  - `<Footer />` - Page footer

- [x] **Implement product data layer**
  - Define TypeScript interfaces
  - Create product data JSON
  - Build data fetching hooks

- [x] **Build ProductCard component**
  - Product image display (responsive)
  - Product name and tagline
  - Price display
  - Color options preview
  - "Add to compare" button

### P2 - Medium Priority
- [x] **Create responsive image component**
  - Support 1x and 2x images
  - Lazy loading
  - Proper srcset handling

- [ ] **Set up routing (if needed)**
  - React Router configuration
  - URL state for selected products

---

## Sprint 2: Core Features (Current)

### P0 - Critical
- [x] **Match Apple.com desktop layout structure**
  - Reference: https://www.apple.com/iphone/compare/
  - Product selector at top with dropdown/modal selection
  - Fixed column width for each product (3-4 products max)
  - Product images with color picker inline
  - "Buy" and "Learn more" links per product
  - Comparison grid below with full-width rows
  - Visual feature icons (checkmarks, camera icons, chip images)
  - Section dividers matching Apple's style
  - White background with subtle section separation
  - Typography matching Apple's SF Pro Display

### P1 - High Priority
- [x] **Product column header component**
  - Large product image (centered)
  - Color picker with visual swatches
  - Product name and price
  - "Buy" button (primary CTA)
  - "Learn more" link
  - Sticky on scroll

- [x] **Implement sticky header**
  - Fixed product names/images on scroll
  - Smooth scroll behavior
  - Compact mode when scrolled

- [x] **Specification rows with Apple styling**
  - Full-width alternating background
  - Icon + label on left
  - Values aligned under each product
  - Feature images (chip, camera system, etc.)
  - Checkmark/dash for boolean values

### P2 - Medium Priority
- [x] **Category sections**
  - Display, Camera, Chip, etc.
  - Section headers with Apple typography
  - Tab navigation on desktop
  - Horizontal scrollable tabs on mobile

- [x] **Mobile responsive design**
  - Mobile-first approach
  - Touch-friendly interactions
  - Horizontal scroll for comparison

---

## Sprint 3: Interactivity & Polish

### P0 - Critical (Tele2 Alignment)
- [ ] **Adopt Tele2.se Design System**
  - Replace Apple-specific colors with Tele2 brand colors
  - Update typography to match Tele2.se
  - Remove all Apple logos, branding, and references
  - Match Tele2.se layout and spacing
  - Update buttons and CTAs to "Köp nu" (Buy now) instead of "Lägg till"
  - Align with Tele2 visual language

- [ ] **Phone Selector Dropdown**
  - Add dropdown/modal to select which phones to compare
  - Support 2-4 phone comparison
  - Persist selection in URL state
  - Pre-select 2-3 popular phones by default
  - Mobile-responsive selector

- [ ] **Clear Phone Column Labels**
  - Display phone name above each column (e.g., "iPhone 17", "iPhone 17 Air", "iPhone 17 Pro")
  - Prominent positioning in header
  - Consistent sizing and styling
  - Reference: See Tele2.se comparison page structure

- [ ] **Spec Column Headers with Phone Names**
  - Each spec column clearly labeled with phone model
  - Visual distinction between columns
  - Phone image thumbnail in header (optional)
  - Make it obvious which spec belongs to which phone

### P1 - High Priority
- [x] **Image galleries** (Fast path complete)
  - [x] Multiple product views (4 views: frontBack, side, camera, chip)
  - [x] Carousel with prev/next buttons
  - [x] Dot indicator navigation
  - [x] Touch swipe support
  - [x] Lightbox modal for enlarged viewing
  - [x] Keyboard navigation (arrow keys, ESC)
  - [x] Zoom indicator button
  - [x] Full accessibility (ARIA labels)
  - [ ] Pinch-to-zoom (second iteration)
  - [ ] Double-tap to zoom (second iteration)

- [ ] **Accessibility (A11y)**
  - Keyboard navigation
  - Screen reader support
  - ARIA labels
  - Focus management

### P2 - Medium Priority
- [x] **Animations and transitions**
  - Page load animations
  - Smooth state transitions
  - Micro-interactions
  - Category tab transitions with fade-in

- [ ] **Performance optimization**
  - Code splitting
  - Image optimization
  - Bundle size analysis

### P3 - Low Priority
- [ ] **Dark mode support**
- [ ] **Print stylesheet**
- [ ] **Share comparison feature**
- [ ] **Export to PDF**

---

## Sprint 4: Integration & Deployment

### P1 - High Priority
- [ ] **Cross-browser testing**
  - Chrome, Safari, Firefox, Edge
  - iOS Safari, Android Chrome

- [ ] **Final accessibility audit**
  - WCAG 2.1 AA compliance
  - Lighthouse accessibility score > 90

- [ ] **Production build**
  - Optimize for production
  - Set up deployment pipeline

### P2 - Medium Priority
- [ ] **Documentation**
  - Component documentation
  - Usage guide
  - Deployment instructions

---

## Sprint 5: Tele2 Integration (New)

### P0 - Critical
- [x] **Create integration guide documentation**
  - Iframe embedding instructions
  - React component integration guide
  - Web Component wrapper guide
  - Environment configuration

- [x] **Update Vite configuration for deployments**
  - Add iframe-ready build mode
  - Add library build mode
  - Add CORS headers for development
  - Add minification settings

- [x] **Create Tele2-specific deployment guide**
  - Quick start for Tele2 developers
  - Step-by-step iframe setup
  - Message passing for page navigation
  - Performance checklist
  - Troubleshooting guide

### P1 - High Priority
- [x] **Create library export index**
  - Export main components
  - Export TypeScript types
  - Add version constants

- [ ] **Create Web Components wrapper** (Optional)
  - Convert React components to custom elements
  - Allow framework-agnostic usage
  - Support in any JavaScript environment

---

## Icebox (Future Consideration)

- [ ] Multi-language support (English, Swedish)
- [ ] Analytics integration
- [ ] A/B testing setup
- [ ] CMS integration for product data
- [ ] SEO optimization
- [ ] PWA features
- [ ] Tele2 design system integration
- [ ] Price comparison with subscription plans
- [ ] Trade-in value calculator

---

## Completed Items

### Sprint 0 - Setup
- [x] Create GitHub repository
- [x] Upload source assets (images, reference HTML)
- [x] Define agent structure (AGENTS.md)
- [x] Create backlog (this file)
- [x] Set up project folder structure

---

## Notes

### Reference Implementation
The original `index.html` contains a working Swedish version with:
- 2534 lines of HTML
- Inline CSS and JavaScript
- 90+ product images
- Full comparison functionality

Use this as reference for feature parity.

### Design Reference
See `references/SESV_iPhone_Q425_Contextual_Compare_HTML_Module.jpg` for visual design reference.

### Technical Decisions
1. **React 18+** for modern features (Suspense, concurrent rendering)
2. **TypeScript** for type safety
3. **Tailwind CSS** for rapid styling matching Apple aesthetic
4. **Vite** for fast development experience

---

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2026-01-28 | Initial backlog created | Backlog Agent |
| 2026-01-29 | Sprint 2 core features completed (Apple layout, sticky header, mobile responsive, animations) | Coding Agent |
| 2026-01-29 | Sprint 5 Tele2 integration prepared - iframe deployment ready, guides created | Coding Agent |
| 2026-01-29 | Sprint 3 image galleries implemented - fast path complete (carousel, lightbox, swipe, keyboard nav) | Coding Agent |
| 2026-01-29 | Sprint 3 updated with Tele2 alignment requirements - phone selector, design system, spec labeling | Backlog Agent |
