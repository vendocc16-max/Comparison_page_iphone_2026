# Screening Checklist - iPhone Comparison Page

> **Owner:** Screening Agent
> **Purpose:** Quality assurance and code review standards

---

## Pre-Merge Checklist

Use this checklist before approving any pull request.

### Build & Compilation
- [ ] `npm run build` completes without errors
- [ ] No TypeScript compilation errors
- [ ] No console errors in browser

### Code Quality
- [ ] ESLint passes with no errors (`npm run lint`)
- [ ] Prettier formatting applied (`npm run format`)
- [ ] No `any` types in TypeScript (unless justified)
- [ ] No commented-out code
- [ ] No `console.log` statements (except error handling)
- [ ] Meaningful variable/function names

### Testing
- [ ] All existing tests pass (`npm test`)
- [ ] New features have test coverage
- [ ] Edge cases considered

### Functionality
- [ ] Feature works as specified in backlog
- [ ] No regressions in existing features
- [ ] Error states handled gracefully
- [ ] Loading states implemented

### Responsive Design
- [ ] Mobile (320px - 767px) - Works correctly
- [ ] Tablet (768px - 1023px) - Works correctly
- [ ] Desktop (1024px+) - Works correctly
- [ ] No horizontal scroll on mobile
- [ ] Touch targets are at least 44x44px

### Accessibility (WCAG 2.1 AA)
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus states visible
- [ ] Screen reader compatible
- [ ] Color contrast ratio >= 4.5:1 for text
- [ ] Images have meaningful alt text
- [ ] Form inputs have labels
- [ ] ARIA attributes used correctly

### Performance
- [ ] Lighthouse Performance score > 90
- [ ] No unnecessary re-renders
- [ ] Images optimized and lazy-loaded
- [ ] No blocking resources
- [ ] Bundle size reasonable

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] iOS Safari
- [ ] Android Chrome

### Security
- [ ] No exposed API keys or secrets
- [ ] User input sanitized
- [ ] Dependencies are up to date
- [ ] No known vulnerabilities (`npm audit`)

---

## Review Workflow

### 1. Automated Checks (CI/CD)
```yaml
# These should run automatically on PR
- TypeScript compilation
- ESLint
- Prettier check
- Unit tests
- Build verification
```

### 2. Manual Review
1. Pull the branch locally
2. Run `npm install && npm run dev`
3. Test the feature manually
4. Run through checklist above
5. Leave comments on code if needed

### 3. Decision
- **APPROVE** - All checks pass, ready to merge
- **REQUEST CHANGES** - Issues found, needs fixes
- **COMMENT** - Questions or suggestions, not blocking

---

## Code Review Guidelines

### What to Look For

#### React Best Practices
- Components are properly decomposed
- Props are typed correctly
- State is managed appropriately
- Effects have proper dependencies
- Memoization used where beneficial

#### TypeScript
- Proper type definitions
- No implicit `any`
- Interfaces over types where appropriate
- Generics used correctly

#### Tailwind CSS
- Consistent spacing scale
- Responsive prefixes used correctly
- No conflicting utilities
- Custom values in config, not inline

#### Performance
- Large lists are virtualized
- Heavy computations are memoized
- Images are properly sized
- No memory leaks

---

## Common Issues to Flag

### Must Fix
- Security vulnerabilities
- Accessibility violations
- Broken functionality
- TypeScript errors
- Failed tests

### Should Fix
- Code duplication
- Missing error handling
- Poor naming
- Missing tests
- Performance issues

### Nice to Have
- Code style improvements
- Additional documentation
- Extra test coverage
- Refactoring suggestions

---

## Review Templates

### PR Approval
```markdown
## Review: APPROVED

### Checklist
- [x] Build passes
- [x] Tests pass
- [x] Responsive design verified
- [x] Accessibility checked
- [x] Manual testing complete

### Notes
[Any observations or minor suggestions]

Ready to merge!
```

### Request Changes
```markdown
## Review: CHANGES REQUESTED

### Issues Found
1. **[Critical/Major/Minor]** Description of issue
   - File: `path/to/file.tsx`
   - Line: XX
   - Suggestion: How to fix

### Required Before Merge
- [ ] Fix issue 1
- [ ] Fix issue 2

### Optional Improvements
- [ ] Suggestion 1
```

---

## Metrics to Track

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Performance | > 90 | - |
| Lighthouse Accessibility | > 90 | - |
| Lighthouse Best Practices | > 90 | - |
| Lighthouse SEO | > 90 | - |
| Bundle Size (gzip) | < 100KB | - |
| Test Coverage | > 80% | - |

---

## Reference Commands

```bash
# Run all quality checks
npm run lint && npm run typecheck && npm test && npm run build

# Check bundle size
npm run build && npx vite-bundle-visualizer

# Accessibility audit
npx axe-cli http://localhost:5173

# Performance audit
npx lighthouse http://localhost:5173 --output html

# Security audit
npm audit
```

---

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2026-01-28 | Initial screening checklist created | Screening Agent |
