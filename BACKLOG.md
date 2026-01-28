# Product Backlog - iPhone Comparison Page

> **Owner:** Backlog Agent
> **Last Updated:** 2026-01-28
> **Sprint:** 1 - Foundation

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

## Sprint 1: Foundation (Current)

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

## Sprint 2: Core Features

### P1 - High Priority
- [ ] **Build ComparisonTable component**
  - Side-by-side product columns
  - Specification rows
  - Category headers (collapsible)
  - Highlight differences

- [ ] **Implement sticky header**
  - Fixed product names/images on scroll
  - Smooth scroll behavior
  - Mobile-friendly behavior

- [ ] **Add/Remove products from comparison**
  - Maximum 3-4 products
  - State management
  - Smooth animations

### P2 - Medium Priority
- [ ] **Category sections**
  - Display, Camera, Chip, etc.
  - Expand/collapse functionality
  - Animated transitions

- [ ] **Mobile responsive design**
  - Mobile-first approach
  - Touch-friendly interactions
  - Horizontal scroll for comparison

---

## Sprint 3: Interactivity & Polish

### P1 - High Priority
- [ ] **Image galleries**
  - Multiple product views
  - Zoom functionality
  - Touch swipe support

- [ ] **Accessibility (A11y)**
  - Keyboard navigation
  - Screen reader support
  - ARIA labels
  - Focus management

### P2 - Medium Priority
- [ ] **Animations and transitions**
  - Page load animations
  - Smooth state transitions
  - Micro-interactions

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

## Icebox (Future Consideration)

- [ ] Multi-language support (English, Swedish)
- [ ] Analytics integration
- [ ] A/B testing setup
- [ ] CMS integration for product data
- [ ] SEO optimization
- [ ] PWA features

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
