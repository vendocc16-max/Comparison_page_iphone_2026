# Tele2 Alignment Sprint - Implementation Plan

**Status:** Ready for Development  
**Priority:** P0 Critical  
**Updated:** 2026-01-29

---

## Requirements Overview

Based on Tele2.se reference and user feedback, Sprint 3 requires:

### 1. Phone Selector Dropdown ✋
Allow users to select which phones to compare (2-4 phones)

**Current State:** Product selector exists but needs enhancement  
**Target:** Dropdown/modal with pre-selected popular phones

**Components to Update:**
- `ProductSelector.tsx` - enhance with dropdown interface
- `ComparisonTable.tsx` - handle variable phone count
- Store selected phones in URL state

**Estimated Effort:** 1-2 days

---

### 2. Remove Apple Branding 🍎➜🚫
Remove all Apple-specific styling, logos, colors, and references

**Current State:** Apple design system throughout
- Apple color palette (apple.gray, apple.blue, etc.)
- Apple typography (SF Pro Display)
- Apple spacing/sizing
- Apple logos if present
- Apple-specific text/labels

**Target State:** Neutral/Tele2-ready styling
- Remove Apple-specific color names from CSS
- Keep visual structure, change colors only
- Update text to Swedish (already done)

**Files to Update:**
- `tailwind.config.js` - update color palette
- `src/components/**/*.tsx` - remove apple.* color references
- `src/index.css` - update root styles
- All component files - change `apple-*` to generic classes

**Estimated Effort:** 1-2 days

---

### 3. Adopt Tele2.se Design System 🎨
Study Tele2.se and apply their design language

**What to analyze on Tele2.se:**
- Primary brand color (looks like blue/teal)
- Secondary colors and accents
- Typography choices
- Button styles
- Spacing and layout
- Border radius and shadows
- Form elements

**Implementation:**
- Update `tailwind.config.js` with Tele2 colors
- Create Tele2-specific color palette
- Update component styling to match Tele2
- Test on mobile and desktop

**Reference:** https://www.tele2.se/

**Estimated Effort:** 2-3 days

---

### 4. Clear Phone Column Labels 📱📱📱
Make it obvious which spec belongs to which phone

**Current State:** 
- Phone cards are in columns but not labeled in spec table
- User must scroll up to see which phone is which

**Target State (see Tele2 reference):**
- Product name/model in column header
- Visible above each column of specs
- Easy visual distinction
- Mobile-friendly layout

**Components to Update:**
- `ComparisonTable.tsx` - add header row with phone names
- `ProductCard.tsx` - maybe adjust header styling
- Consider product image thumbnail in header

**Estimated Effort:** 1 day

---

## Implementation Sequence

### Phase 1: Foundation (2-3 days)
1. **Remove Apple Branding** - Clear out Apple styling
   - Replace color names
   - Update all components
   - Keep structure intact

2. **Phone Selector Dropdown** - Allow phone selection
   - Enhance ProductSelector
   - Add dropdown interface
   - Update comparison logic

### Phase 2: Tele2 Design (2-3 days)
3. **Adopt Tele2 Design System** - Match Tele2 visuals
   - Research Tele2.se colors/typography
   - Update Tailwind config
   - Apply to all components
   - Test on multiple devices

4. **Add Column Labels** - Clarify specs
   - Update ComparisonTable header
   - Add phone names to columns
   - Improve visual hierarchy

---

## Effort Breakdown

| Task | Effort | Priority |
|------|--------|----------|
| Remove Apple Branding | 1-2 days | P0 |
| Phone Selector Dropdown | 1-2 days | P0 |
| Adopt Tele2 Design | 2-3 days | P0 |
| Clear Column Labels | 1 day | P0 |
| **Total** | **5-8 days** | **P0** |

**Estimated Timeline:** 1-2 weeks (depending on daily commitment)

---

## Design System Notes

### Tele2.se Analysis Needed
- [ ] Primary color (appears blue/teal)
- [ ] Secondary colors
- [ ] Neutral colors (grays)
- [ ] Accent colors
- [ ] Font family (serif or sans-serif?)
- [ ] Font sizes/weights
- [ ] Button styles (primary/secondary)
- [ ] Border radius (sharp vs. rounded)
- [ ] Spacing system (8px grid?)
- [ ] Shadow/elevation system

### Questions to Answer
1. Should we match Tele2.se exactly or just adopt their design language?
2. Should phone cards show phone images in comparison table header?
3. How many phones should be selectable minimum/maximum?
4. Should there be pre-selected popular phones?

---

## Next Steps

1. **Decide** - Do we start with this P0 work or continue with other features?
2. **Research** - Extract Tele2 design colors/typography
3. **Plan** - Break into smaller daily tasks
4. **Execute** - Remove branding → selector → design system → labels

---

## Risks & Considerations

**Risk:** Large redesign may break existing functionality
- **Mitigation:** Build in staging, test frequently, keep images working

**Risk:** Color system might need third-party library
- **Mitigation:** Use Tailwind theme extension (already set up)

**Risk:** Not matching Tele2 exactly enough for production
- **Mitigation:** Get design approval before full implementation

---

**Ready to start when you say!** 🚀

Which task should we tackle first?
- A) Remove Apple Branding (foundational)
- B) Phone Selector Dropdown (feature work)
- C) Research Tele2 Design (planning)
- D) Start all at once (aggressive timeline)
