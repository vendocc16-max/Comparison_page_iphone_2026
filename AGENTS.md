# Agent Structure for iPhone Comparison Page

This project uses three specialized agents to manage development workflow.

---

## 1. Coding Agent

**Purpose:** Implements features, writes code, fixes bugs, and handles all development tasks.

### Responsibilities
- Convert HTML/CSS/JS to React components
- Implement new features from the backlog
- Fix bugs and issues
- Write unit tests
- Optimize performance
- Handle responsive design

### Tech Stack
- **Framework:** React 18+
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Language:** TypeScript
- **Testing:** Vitest + React Testing Library

### Commands
```bash
# Start development
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Type check
npm run typecheck
```

### File Ownership
- `src/` - All source code
- `public/` - Static assets
- `package.json` - Dependencies
- `tsconfig.json` - TypeScript config
- `vite.config.ts` - Build config
- `tailwind.config.js` - Styling config

---

## 2. Backlog Agent

**Purpose:** Manages feature requests, prioritizes tasks, tracks progress, and maintains the product roadmap.

### Responsibilities
- Maintain the backlog in `BACKLOG.md`
- Prioritize features (P0-P3)
- Break down large features into tasks
- Track sprint progress
- Document requirements
- Manage milestones

### Priority Levels
| Priority | Description | Timeline |
|----------|-------------|----------|
| **P0** | Critical/Blocker | Immediate |
| **P1** | High priority | This sprint |
| **P2** | Medium priority | Next sprint |
| **P3** | Low priority/Nice-to-have | Future |

### Task States
- `[ ]` - Not started
- `[~]` - In progress
- `[x]` - Completed
- `[!]` - Blocked

### File Ownership
- `BACKLOG.md` - Main backlog
- `docs/sprints/` - Sprint planning
- `docs/requirements/` - Feature specs

---

## 3. Screening Agent

**Purpose:** Reviews code quality, ensures standards are met, and validates before merging.

### Responsibilities
- Code review checklist
- Accessibility audit (WCAG 2.1 AA)
- Performance review
- Security scan
- Browser compatibility check
- Responsive design verification
- TypeScript/lint error check

### Review Checklist
```markdown
## Pre-merge Checklist
- [ ] Code compiles without errors
- [ ] All tests pass
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Responsive on mobile/tablet/desktop
- [ ] Accessibility: keyboard navigation works
- [ ] Accessibility: screen reader compatible
- [ ] Images have alt text
- [ ] No console errors
- [ ] Performance: Lighthouse score > 90
- [ ] Cross-browser tested (Chrome, Safari, Firefox)
```

### File Ownership
- `SCREENING.md` - Review checklist
- `.github/` - PR templates, workflows
- `docs/reviews/` - Review notes

---

## Agent Workflow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  BACKLOG AGENT  │────▶│  CODING AGENT   │────▶│ SCREENING AGENT │
│                 │     │                 │     │                 │
│ - Prioritize    │     │ - Implement     │     │ - Review        │
│ - Spec tasks    │     │ - Test          │     │ - Approve/Block │
│ - Track progress│     │ - Document      │     │ - Merge         │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                                                │
        └────────────────────────────────────────────────┘
                         Feedback loop
```

### Process Flow
1. **Backlog Agent** creates and prioritizes tasks
2. **Coding Agent** picks up P0/P1 tasks and implements
3. **Coding Agent** creates PR when done
4. **Screening Agent** reviews and provides feedback
5. If approved → merge; if blocked → back to Coding Agent
6. **Backlog Agent** updates progress and picks next task

---

## Quick Reference

### Starting a New Feature
```bash
# 1. Check backlog for next priority task
cat BACKLOG.md

# 2. Create feature branch
git checkout -b feature/[feature-name]

# 3. Implement the feature
# ... coding ...

# 4. Run screening checks
npm run lint && npm test && npm run build

# 5. Create PR for review
```

### Agent Communication
Agents communicate through:
- **BACKLOG.md** - Task tracking
- **SCREENING.md** - Review status
- **GitHub Issues** - Detailed discussions
- **PR Comments** - Code-specific feedback

---

## Project Goals

### Phase 1: Setup (Current)
- [x] Project structure
- [x] Agent definitions
- [ ] React app scaffolding
- [ ] Tailwind configuration

### Phase 2: Core Features
- [ ] Product data structure
- [ ] Comparison table component
- [ ] Product card component
- [ ] Image gallery component

### Phase 3: Interactivity
- [ ] Add/remove products to compare
- [ ] Sticky header with selections
- [ ] Collapsible spec sections
- [ ] Mobile responsive design

### Phase 4: Polish
- [ ] Animations and transitions
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing
