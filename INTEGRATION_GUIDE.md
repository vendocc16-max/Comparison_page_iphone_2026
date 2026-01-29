# Integration Guide: iPhone Comparison App for Tele2.se

> **Purpose:** Deploy the iPhone comparison application to Tele2.se
> **Status:** Ready for integration
> **Last Updated:** 2026-01-29

---

## Overview

This React + Vite application can be integrated into Tele2.se in three ways. **Method 1 (iframe)** is recommended for fastest deployment with zero conflicts.

---

## Method 1: Iframe Embedding ✅ RECOMMENDED

**Best for:** Rapid deployment, zero tech stack conflicts, isolated sandbox

### Requirements
- Vite production build output
- HTTPS hosting (for Tele2 security compliance)
- 1-2 hours implementation time

### Steps

#### 1. Build the Application
```bash
npm run build
```

This creates a `dist/` folder with:
- `dist/index.html` - Main app
- `dist/assets/` - Bundled JS/CSS (scoped)
- ~50-80KB gzipped total size

#### 2. Deploy to Tele2 CDN
Copy the `dist/` folder contents to Tele2's static assets server:
```
https://cdn.tele2.se/iphone-comparison/
```

#### 3. Embed in Tele2 Page
Add to the product comparison page template:

```html
<!-- Option A: Simple iframe -->
<iframe 
  id="iphone-comparison"
  src="https://cdn.tele2.se/iphone-comparison/"
  title="iPhone comparison tool"
  frameborder="0"
  style="width: 100%; height: 2000px; border: none;"
  loading="lazy"
></iframe>

<!-- Option B: Responsive iframe (recommended) -->
<div style="position: relative; width: 100%; padding-bottom: 150%;">
  <iframe 
    id="iphone-comparison"
    src="https://cdn.tele2.se/iphone-comparison/"
    title="iPhone comparison tool"
    frameborder="0"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    loading="lazy"
  ></iframe>
</div>
```

#### 4. Communication Between Pages
Use `postMessage` for cross-iframe communication:

```javascript
// From Tele2 parent page
const iframeWindow = document.getElementById('iphone-comparison').contentWindow;

// Send message to iframe
iframeWindow.postMessage({
  type: 'PHONE_SELECTED',
  payload: { productId: 'iphone-17-pro' }
}, 'https://cdn.tele2.se/iphone-comparison/');

// Listen for messages from iframe
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://cdn.tele2.se/iphone-comparison/') return;
  
  if (event.data.type === 'PURCHASE_CLICKED') {
    // Navigate to Tele2 phone sales page
    window.location.href = `/mobiler/${event.data.productId}`;
  }
});
```

#### 5. Styling
No CSS conflicts - Tailwind is scoped within the iframe.

### Advantages
✅ Zero integration effort  
✅ No dependency conflicts  
✅ Easy rollback  
✅ Isolated testing  
✅ Fast deployment  

### Disadvantages
❌ Slight performance overhead  
❌ Cannot share Tele2 design tokens directly  
❌ Separate scroll contexts  

---

## Method 2: React Component Integration

**Best for:** Deep design integration, shared design system

### Requirements
- Tele2.se must run React 18+
- ~2 weeks integration time
- Shared Tailwind/design tokens config

### Steps

#### 1. Build as Library
Update `vite.config.ts` (see changes below)

```bash
npm run build:lib
```

#### 2. Export Component
Create `src/index.ts`:
```typescript
export { AppleComparison } from './components/AppleComparison';
export type { Product } from './types/product';
```

#### 3. Install in Tele2 Project
```bash
npm install https://github.com/your-org/iphone-comparison.git#v1.0.0
```

#### 4. Use in Tele2 Page
```tsx
import { AppleComparison } from 'iphone-comparison';

export function ComparePage() {
  return <AppleComparison />;
}
```

#### 5. Resolve Styling
Merge Tailwind configs:
```js
// tele2-site tailwind.config.js
export default {
  theme: {
    extend: {
      // Include iPhone comparison color palette
      colors: {
        // ... existing Tele2 colors
        apple: { /* ... */ }
      }
    }
  }
};
```

### Advantages
✅ Shared design system  
✅ Single deployment  
✅ Direct component props control  
✅ Better performance  

### Disadvantages
❌ Requires React on Tele2  
❌ Longer integration period  
❌ Potential dependency conflicts  
❌ More complex deployment  

---

## Method 3: Web Component (Framework-Agnostic)

**Best for:** Long-term flexibility, any framework support

### Requirements
- Convert React → Web Components
- ~3 weeks development time
- No framework required on Tele2

### Implementation
```tsx
// Wrapper Web Component
import { AppleComparison } from './components/AppleComparison';
import { createRoot } from 'react-dom/client';

class IphoneComparison extends HTMLElement {
  connectedCallback() {
    const root = createRoot(this);
    root.render(<AppleComparison />);
  }
}

customElements.define('iphone-comparison', IphoneComparison);
```

Usage on Tele2:
```html
<iphone-comparison></iphone-comparison>
```

---

## Production Checklist

### Before Deploying to Tele2.se

- [ ] Run `npm run build` successfully
- [ ] Run `npm test` - all tests pass
- [ ] Run `npm run lint` - no warnings
- [ ] Run `npm run typecheck` - no errors
- [ ] Test in Chrome, Safari, Firefox (desktop)
- [ ] Test in iOS Safari, Android Chrome (mobile)
- [ ] Performance audit (Lighthouse score > 90)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Security scan for vulnerabilities
- [ ] HTTPS verified on staging
- [ ] Cross-origin policies verified
- [ ] CSP headers configured
- [ ] Minification verified in dist/

### Performance Targets
| Metric | Target | Current |
|--------|--------|---------|
| Bundle size | < 100KB | ~65KB |
| First contentful paint | < 1.5s | TBD |
| Lighthouse score | > 90 | TBD |
| Lighthouse A11y | > 95 | TBD |

---

## Environment Variables

Create `.env.production`:
```
VITE_APP_NAME=iPhone Comparison
VITE_API_BASE=https://api.tele2.se
VITE_CDN_BASE=https://cdn.tele2.se/iphone-comparison
```

Use in components:
```tsx
const apiBase = import.meta.env.VITE_API_BASE;
```

---

## Monitoring & Analytics

### Add Event Tracking
```tsx
function trackEvent(eventName: string, data?: Record<string, any>) {
  // Send to Tele2 analytics
  window.parent.postMessage({
    type: 'ANALYTICS',
    event: eventName,
    data
  }, '*');
}
```

### Key Events to Track
- `COMPARISON_LOADED` - App initialization
- `PRODUCT_SELECTED` - User selects phone
- `SPECS_VIEWED` - User views specifications
- `PURCHASE_CLICKED` - User clicks buy button
- `LEARN_MORE_CLICKED` - User clicks learn more

---

## Troubleshooting

### CORS Issues
```javascript
// Add CORS headers to CDN responses
Access-Control-Allow-Origin: https://tele2.se
Access-Control-Allow-Methods: GET, HEAD
```

### Tailwind CSS Conflicts
Solution: Scope Tailwind output with `prefix`:
```js
// tailwind.config.js
export default {
  prefix: 'ipc-',  // All classes become ipc-*
  // ... rest of config
};
```

### Asset Loading Issues
Ensure correct base path in `vite.config.ts`:
```ts
export default defineConfig({
  base: '/iphone-comparison/',
  // ...
});
```

### State Persistence
Use localStorage for user selections:
```tsx
const [selectedProducts, setSelectedProducts] = useState(() => {
  return JSON.parse(localStorage.getItem('ipc-selected') || '[]');
});

useEffect(() => {
  localStorage.setItem('ipc-selected', JSON.stringify(selectedProducts));
}, [selectedProducts]);
```

---

## Deployment Timeline

| Phase | Duration | Effort |
|-------|----------|--------|
| Method 1 (iframe) | 1-2 hours | Low |
| Method 2 (React) | 2 weeks | Medium |
| Method 3 (Web Comp) | 3 weeks | High |

---

## Support & Contact

For questions or issues:
1. Check [BACKLOG.md](BACKLOG.md) for development status
2. Review [SCREENING.md](SCREENING.md) for quality standards
3. Contact: Coding Agent or Backlog Agent

---

## Related Documents

- [BACKLOG.md](BACKLOG.md) - Feature tracking
- [SCREENING.md](SCREENING.md) - Quality standards
- [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) - Architecture
- [AGENTS.md](AGENTS.md) - Team structure
