# Architecture: iPhone Comparison App on Tele2.se

## System Architecture

### Option 1: Iframe Integration (Recommended)

```
┌─────────────────────────────────────────────────────────────────┐
│                         Tele2.se Website                        │
│  (https://www.tele2.se/mobiler/)                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │           Tele2 Product Page Template                    │   │
│  │  (Next.js / React / Custom Framework)                    │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  iPhone Comparison Section                               │   │
│  │  ┌────────────────────────────────────────────────────┐  │   │
│  │  │ <iframe src="cdn.tele2.se/iphone-comparison/" />   │  │   │
│  │  │                                                    │  │   │
│  │  │ ┌──────────────────────────────────────────────┐  │  │   │
│  │  │ │  iPhone Comparison App (React + Vite)       │  │  │   │
│  │  │ │  - Product Selection                        │  │  │   │
│  │  │ │  - Comparison Table                         │  │  │   │
│  │  │ │  - Category Filtering                       │  │  │   │
│  │  │ │  - Color Selection                          │  │  │   │
│  │  │ └──────────────────────────────────────────────┘  │  │   │
│  │  │                                                    │  │   │
│  │  │ postMessage API ←→ Parent Page                     │  │   │
│  │  └────────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  Message Events:                                                 │
│  - PURCHASE_CLICKED → Navigate to /mobiler/{productId}         │
│  - ANALYTICS → Track user interactions                           │
│  - SELECT_PRODUCTS ← Set comparison products                     │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
         ↑
         │ HTTPS
         │
    ┌────────────────────────────────────────────────────┐
    │         Tele2 CDN                                  │
    │ https://cdn.tele2.se/iphone-comparison/           │
    ├────────────────────────────────────────────────────┤
    │ index.html                    (15KB)              │
    │ assets/main-[hash].js         (~40KB gzipped)     │
    │ assets/react-vendor-[hash].js (~30KB gzipped)     │
    │ assets/style-[hash].css       (~5KB gzipped)      │
    │ images/                       (referenced)        │
    └────────────────────────────────────────────────────┘
```

---

### Option 2: React Component Integration

```
┌─────────────────────────────────────────────────────────────────┐
│                   Tele2.se React Application                    │
│                    (Same Framework)                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  npm package: iphone-comparison@1.0.0                           │
│  ├── AppleComparison (main component)                           │
│  ├── ComparisonTable                                            │
│  ├── ProductSelector                                            │
│  ├── ProductCard                                                │
│  └── types (TypeScript definitions)                             │
│                                                                   │
│  Usage in Tele2 component:                                      │
│  ┌──────────────────────────────────┐                           │
│  │ import { AppleComparison }       │                           │
│  │ from 'iphone-comparison'         │                           │
│  │                                  │                           │
│  │ export function MobilerPage() {  │                           │
│  │   return <AppleComparison />    │                           │
│  │ }                                │                           │
│  └──────────────────────────────────┘                           │
│                                                                   │
│  Single Bundle:                                                  │
│  ┌──────────────────────────────────┐                           │
│  │ Tele2 App Bundle                 │                           │
│  │ ├── Tele2 components             │                           │
│  │ ├── iPhone comparison components │                           │
│  │ ├── React 18                     │                           │
│  │ ├── Shared Tailwind CSS          │                           │
│  │ └── Other dependencies           │                           │
│  └──────────────────────────────────┘                           │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow

### User Interaction: Product Selection

```
User clicks "Select Products"
    ↓
Modal opens in iPhone app
    ↓
User selects iPhone 17 Pro and iPhone 17
    ↓
Comparison table updates
    ↓
State saved to localStorage
    ↓
App renders selected products
```

### User Interaction: Purchase Flow

```
User clicks "Buy" button (in iframe)
    ↓
App sends postMessage: { type: 'PURCHASE_CLICKED', productId: 'iphone-17-pro' }
    ↓
Parent page (Tele2.se) receives message
    ↓
Tele2 navigates to: /mobiler/apple-iphone-17-pro
    ↓
Product details page displays
    ↓
User can configure plan and add to cart
```

---

## State Management

### Local State (within iframe)
```
AppState = {
  selectedProducts: ['iphone-17', 'iphone-17-pro'],
  activeCategory: 'display',
  colorSelection: {
    'iphone-17': 'midnight-black',
    'iphone-17-pro': 'titanium-gold'
  }
}

Persisted to:
- React useState hooks
- Browser localStorage (ipc-selected)
```

### Cross-Domain State (iframe ↔ parent)
```
Parent sends:
{
  type: 'SELECT_PRODUCTS',
  products: ['iphone-17-pro']
}

App responds with:
{
  type: 'PRODUCTS_SELECTED',
  products: ['iphone-17-pro'],
  timestamp: Date.now()
}
```

---

## Styling Architecture

### Tailwind CSS Scoping

```
iPhone Comparison App:
┌─────────────────────────────────┐
│ Tailwind CSS classes            │
│ (scoped to iframe)              │
│                                 │
│ .bg-apple-gray-50  ← iPhone     │
│ .text-apple-gray-700 ← iPhone   │
│ .font-sf-pro ← iPhone           │
└─────────────────────────────────┘
         (no conflicts)
                 ↓
         Tele2 CSS classes
         ┌─────────────────────────────────┐
         │ .bg-tele2-primary ← Tele2       │
         │ .text-tele2-heading ← Tele2    │
         │ .font-tele2 ← Tele2             │
         └─────────────────────────────────┘

Both can coexist without conflicts
(iframe creates CSS boundary)
```

### Color Palette Separation

```
iPhone Comparison App (Tailwind):
- apple.gray (50-900)
- apple.blue
- apple.green
- apple.red

Tele2.se (Tailwind):
- tele2.primary
- tele2.secondary
- tele2.accent
- tele2.neutral

Zero CSS conflicts (iframe isolation)
```

---

## Performance Optimization

### Asset Delivery

```
CDN Configuration:
┌─────────────────────────────────────────┐
│ Tele2 CDN                              │
├─────────────────────────────────────────┤
│ /iphone-comparison/                    │
│ ├── index.html                          │
│ │   Cache-Control: max-age=3600         │
│ │   (1 hour - check for updates)       │
│ │                                       │
│ ├── assets/main-[hash].js              │
│ │   Cache-Control: max-age=31536000    │
│ │   (1 year - immutable)                │
│ │                                       │
│ ├── assets/react-vendor-[hash].js      │
│ │   Cache-Control: max-age=31536000    │
│ │   (1 year - immutable)                │
│ │                                       │
│ └── assets/style-[hash].css            │
│     Cache-Control: max-age=31536000    │
│     (1 year - immutable)                │
│                                         │
└─────────────────────────────────────────┘

Hash-based caching ensures:
- Long-term caching for unchanged files
- Instant updates when code changes
- No manual cache invalidation needed
```

### Bundle Analysis

```
Distribution (before gzip):
├── React 18              30%  (~120KB)
├── Tailwind CSS          25%  (~100KB)
├── App components        20%  (~80KB)
├── Product data          15%  (~60KB)
├── Utilities             10%  (~40KB)
└── Total:                    ~400KB

After gzip:               ~75KB (81% reduction)

Chunk splitting:
- react-vendor.js        React + ReactDOM
- main.js                App code
- style.css              All styles
```

---

## Security Considerations

### Iframe Sandbox

```html
<iframe
  sandbox="allow-same-origin allow-scripts allow-popups"
  allow="cross-origin-isolated"
  src="https://cdn.tele2.se/iphone-comparison/"
/>

Allowed:
✓ Execute JavaScript
✓ Same-origin requests
✓ Form submission
✓ Popups (for external links)

Blocked:
✗ Cookies (by default)
✗ Plugins
✗ Full screen
✗ Top-level navigation (without allow-top-navigation)
```

### Content Security Policy

```
Parent page should include:
Content-Security-Policy: 
  default-src 'self';
  frame-src https://cdn.tele2.se;
  script-src 'self' https://cdn.tele2.se;
  style-src 'self' https://cdn.tele2.se 'unsafe-inline';
  img-src 'self' https: data:;
  connect-src 'self' https://api.tele2.se;
```

---

## Monitoring & Analytics

### Events Tracked

```
User Session:
1. COMPARISON_LOADED
   ↓
2. PRODUCT_SELECTED
   ↓
3. SPECS_VIEWED
   ↓
4. CATEGORY_CHANGED
   ↓
5. PURCHASE_CLICKED or LEARN_MORE_CLICKED

Event structure:
{
  type: 'ANALYTICS',
  event: 'PURCHASE_CLICKED',
  data: {
    productId: 'iphone-17-pro',
    timestamp: 1706548800000,
    sessionId: 'abc123'
  }
}
```

### Metrics to Monitor

```
Performance:
- Page load time
- Time to interactive
- Largest contentful paint
- Cumulative layout shift

User Behavior:
- Click-through rate to product pages
- Time spent comparing
- Products most frequently compared
- Mobile vs. desktop engagement

Errors:
- Console errors
- Failed asset loads
- postMessage failures
```

---

## Deployment Workflow

```
Development                 Staging                 Production
    ↓                          ↓                          ↓
    │                          │                          │
npm run dev      →    npm run build:iframe   →   ./deploy-to-tele2.sh staging
│                               │                          │
↓                               ↓                          ↓
localhost:5173        staging-cdn.tele2.se        cdn.tele2.se
│                               │                          │
Testing                 Staging verification       Production live
│                               │                          │
└───────────┬───────────────────┴───────────────────────────┘
            │
            └─→ Git push → GitHub Actions → Auto-deploy
```

---

## Rollback Strategy

```
Current Production:
cdn.tele2.se/iphone-comparison/ (v1.0.0)

Deploy new version:
./deploy-to-tele2.sh production

If issues occur:
1. Identify broken version
2. Restore previous deployment:
   aws s3 sync s3://tele2-cdn-backup/v0.9.0 \
               s3://tele2-cdn/iphone-comparison/
3. Clear CDN cache
4. Verify fixes
5. Deploy new version

Estimated rollback time: 5-10 minutes
```

---

## File Size Breakdown

```
dist/
├── index.html                              15 KB
├── assets/
│   ├── main-a1b2c3d4.js                   32 KB  (app code)
│   ├── react-vendor-e5f6g7h8.js           38 KB  (React + deps)
│   └── style-i9j0k1l2.css                  8 KB  (Tailwind CSS)
└── images/                                  ~2 MB (referenced via URLs)
                                            ────────
                                Total:       93 KB

Gzipped:                                     ~75 KB
Brotli compressed:                           ~65 KB

User download size (cached):
- First visit:     75 KB  (cached for 1 year)
- Subsequent:      15 KB  (HTML only, cached for 1 hour)
```

---

## Success Criteria

### Technical
- ✅ Bundle size < 100KB gzipped
- ✅ First paint < 1.5 seconds
- ✅ Lighthouse score > 90
- ✅ Mobile responsive
- ✅ WCAG 2.1 AA compliance

### Business
- ✅ Users can compare 2-4 iPhone models
- ✅ Click-through to product pages works
- ✅ Works on all major browsers
- ✅ Works on iOS Safari & Android Chrome
- ✅ Tracking pixel fires correctly

### Operational
- ✅ Easy to deploy (`./deploy-to-tele2.sh`)
- ✅ Fast rollback (< 10 minutes)
- ✅ Monitoring & alerting configured
- ✅ Team can support independently

---

## Related Documentation

| Document | Purpose |
|----------|---------|
| [INTEGRATION_GUIDE.md](INTEGRATION_GUIDE.md) | Technical details |
| [TELE2_INTEGRATION.md](TELE2_INTEGRATION.md) | Deployment steps |
| [TELE2_READY.md](TELE2_READY.md) | Status & checklist |
| [BACKLOG.md](BACKLOG.md) | Feature tracking |

---

**Architecture Document v1.0**  
**Updated: 2026-01-29**  
**Status: Ready for Implementation**
