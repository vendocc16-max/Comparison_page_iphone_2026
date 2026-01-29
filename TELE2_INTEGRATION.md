# Tele2.se Integration - Quick Start Guide

## 🚀 For Tele2 Developers

This guide provides step-by-step instructions to embed the iPhone comparison app on Tele2.se.

---

## Option A: Deploy as Iframe (Recommended) ⭐

### Timeline: 2-4 hours

#### Step 1: Get the Built App
Request the production build from the development team:
```bash
npm run build:iframe
```

This creates a `dist/` folder ready for deployment.

#### Step 2: Upload to Tele2 CDN
```bash
# Example using AWS S3
aws s3 sync ./dist s3://tele2-cdn/iphone-comparison/ \
  --cache-control "max-age=31536000" \
  --metadata-directive COPY
```

#### Step 3: Add to Your Page Template

For the `/mobiler/` page (phone comparison section):

```html
<!-- Place within your .tele2-comparison-section container -->
<section class="iphone-comparison">
  <h2>Jämför iPhone-modeller</h2>
  
  <div class="iphone-comparison-container">
    <div style="position: relative; width: 100%; padding-bottom: 150%;">
      <iframe 
        id="iphone-comparison-app"
        src="https://cdn.tele2.se/iphone-comparison/"
        title="iPhone comparison tool"
        frameborder="0"
        allow="cross-origin-isolated"
        sandbox="allow-same-origin allow-scripts allow-popups"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</section>

<style>
  .iphone-comparison {
    padding: 40px 0;
    background: #f5f5f7;
  }
  
  .iphone-comparison h2 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .iphone-comparison-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
</style>
```

#### Step 4: Handle Purchase Clicks

Add message listener to send users to the product page:

```javascript
// In your main Tele2 app.js
window.addEventListener('message', (event) => {
  // Verify origin for security
  if (!event.origin.includes('tele2.se')) return;
  
  if (event.data?.type === 'PURCHASE_CLICKED') {
    const { productId } = event.data;
    
    // Map product IDs to Tele2 URLs
    const urlMap = {
      'iphone-17': '/mobiler/apple-iphone-17',
      'iphone-17-air': '/mobiler/apple-iphone-17-air',
      'iphone-17-pro': '/mobiler/apple-iphone-17-pro',
    };
    
    const url = urlMap[productId];
    if (url) window.location.href = url;
  }
});
```

#### Step 5: Test

1. **Desktop**: Open in Chrome, Safari, Firefox
2. **Mobile**: Test on iPhone and Android
3. **Performance**: Check Lighthouse score
4. **Security**: Verify CSP headers

#### Step 6: Monitor

Track these metrics in your analytics:
- iframe load time
- User interactions
- Bounce rate on this section
- Click-through to product pages

---

## Option B: React Component Integration

### Timeline: 2-3 weeks

Only choose this if Tele2.se already uses React 18+.

#### Step 1: Install Package
```bash
npm install https://github.com/your-org/iphone-comparison.git#v1.0.0
```

#### Step 2: Import Component
```tsx
// pages/mobiler/index.tsx
import { AppleComparison } from 'iphone-comparison';

export default function MobilerPage() {
  return (
    <>
      <h1>Mobiler</h1>
      <AppleComparison />
    </>
  );
}
```

#### Step 3: Share Design Tokens
Merge Tailwind configs:
```js
// tailwind.config.js in tele2-site
export default {
  theme: {
    extend: {
      colors: {
        // Tele2 colors
        tele2: { /* ... */ },
        // iPhone app colors
        apple: { /* ... */ }
      }
    }
  }
};
```

---

## Option C: Standalone HTML File

### Timeline: 1-2 hours

Simplest option - just embed the HTML:

```html
<!-- In your page -->
<iframe 
  src="/static/iphone-comparison.html"
  style="width: 100%; height: 1800px; border: none;"
></iframe>
```

---

## Environment Configuration

Set these environment variables on your CDN:

```bash
# .env.production
VITE_APP_NAME=iPhone Comparison
VITE_CDN_BASE=https://cdn.tele2.se/iphone-comparison
VITE_API_BASE=https://api.tele2.se
```

---

## Responsive Behavior

The app automatically adapts to:
- **Desktop**: 1200px+ width (3-4 products visible)
- **Tablet**: 768px-1199px (2-3 products visible)
- **Mobile**: 320px-767px (1-2 products, horizontal scroll)

No additional CSS needed!

---

## Performance Checklist

Before going live:

```
[ ] Bundle size < 100KB gzipped
[ ] Lighthouse score > 90
[ ] First paint < 1.5 seconds
[ ] Mobile Core Web Vitals pass
[ ] Cross-browser tested (Chrome, Safari, Firefox)
[ ] iOS Safari tested (iPhone 12+)
[ ] Android Chrome tested
[ ] Accessibility: WCAG 2.1 AA
[ ] CSP headers configured
[ ] HTTPS enforced
[ ] Minification enabled
[ ] No console errors
```

---

## Troubleshooting

### Iframe doesn't load?
```javascript
// Check browser console for errors
// Verify iframe src URL is accessible
// Check CORS headers on CDN
console.log('iframe source:', document.getElementById('iphone-comparison-app').src);
```

### Styling looks off?
The app is fully self-contained with Tailwind CSS. No external CSS should interfere.

### Performance slow?
- Check CDN caching headers
- Verify image optimization
- Monitor bundle size: `npm run build && du -h dist/`

### Mobile issues?
Test with device emulation:
```bash
npm run dev  # Open DevTools → Device mode
```

---

## Support

| Issue | Resource |
|-------|----------|
| Technical questions | See [INTEGRATION_GUIDE.md](../INTEGRATION_GUIDE.md) |
| Feature requests | Check [BACKLOG.md](../BACKLOG.md) |
| Bug reports | Contact development team |
| Performance issues | Run Lighthouse audit |

---

## File Manifest

After `npm run build:iframe`:

```
dist/
├── index.html                    # 15KB
├── assets/
│   ├── main-[hash].js           # ~40KB gzipped
│   ├── react-vendor-[hash].js   # ~30KB gzipped
│   └── style-[hash].css         # ~5KB gzipped
└── images/                       # Product images
```

---

## Deployment Commands

```bash
# Development
npm run dev
npm run preview

# Production build
npm run build:iframe

# Check build size
npm run build && du -h dist/

# Quality checks
npm run lint
npm run typecheck
npm test
```

---

## Next Steps

1. ✅ Decide integration method (iframe recommended)
2. ✅ Get production build from dev team
3. ✅ Upload to CDN
4. ✅ Add iframe code to page template
5. ✅ Test on staging environment
6. ✅ Deploy to production
7. ✅ Monitor analytics

---

**For questions**, contact the Coding Agent or Backlog Agent.
