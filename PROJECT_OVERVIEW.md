# Project Overview: iPhone Comparison Page

## Quick Summary
This is an interactive Swedish-language comparison page for the iPhone 17 product lineup, designed for channel partners. The page allows users to compare features across iPhone 17, iPhone 17 Air, and iPhone 17 Pro models.

## Technology Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript (no frameworks)
- **Language**: Swedish (sv-SE)
- **Assets**: 90+ responsive PNG images (1x and 2x versions)
- **Size**: ~320KB HTML file, ~4MB total with images

## File Structure

```
iphone-comparison-project/
│
├── index.html                    # Main application (2534 lines)
│   ├── Inline CSS (~1200 lines)
│   ├── Inline JavaScript
│   └── Swedish content
│
├── images/                       # Product images directory
│   ├── iPhone 17 images (40+ files)
│   ├── iPhone 17 Air images (25+ files)
│   └── iPhone 17 Pro images (30+ files)
│
├── references/                   # Reference materials
│   └── SESV_iPhone_Q425_Contextual_Compare_HTML_Module.jpg
│
├── Channel_Partner_Instructions_Contextual_Compare.pdf
│
├── README.md                     # Quick start guide
├── CLAUDE_CODE_GUIDE.md         # Claude Code usage guide
├── PROJECT_OVERVIEW.md          # This file
├── package.json                  # Node.js configuration
├── .gitignore                   # Git ignore rules
└── start-server.sh              # Quick start script
```

## Key Features

### 1. Product Comparison
- Side-by-side comparison of three iPhone models
- Interactive feature selection
- Detailed specifications
- Visual product representations

### 2. Responsive Design
- Mobile-first approach
- Tablet breakpoints
- Desktop optimization
- Retina display support (2x images)

### 3. Visual Assets
All images follow naming convention:
```
contextual_iphone_[model]_[feature]_[size].png
contextual_iphone_[model]_[feature]_[size]_2x.png
```

Models: 17, 17_air, 17_pro
Sizes: small, medium, large
Features: chip, front_back, front_camera, single_back, etc.

## Content Structure

### Swedish Language Content
The page includes:
- Product names and descriptions
- Technical specifications
- Feature comparisons
- Call-to-action buttons
- Navigation elements

### Main Sections
1. **Header** - Product title and introduction
2. **Model Selection** - Choose iPhone models to compare
3. **Comparison Table** - Feature-by-feature comparison
4. **Detailed Specs** - In-depth technical information
5. **Visual Comparisons** - Image-based feature showcases
6. **Footer** - Additional information and links

## Technical Details

### CSS Architecture
- CSS Custom Properties (variables) for theming
- Flexbox and Grid layouts
- Media queries for responsive design
- Focus states for accessibility
- Print styles

### JavaScript Functionality
- Dynamic comparison updates
- Image lazy loading
- Interactive table sorting
- State management
- Event handling

### Image Optimization
- Responsive images with srcset
- 1x and 2x versions for retina displays
- Optimized file sizes
- Lazy loading implementation

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari (mobile optimization)
- Android Chrome
- Graceful degradation for older browsers

## Performance Considerations
- Inline CSS/JS (eliminates additional HTTP requests)
- Image optimization opportunities
- Potential for code splitting
- Minification possibilities

## Accessibility Features
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Alt text for images
- Color contrast compliance

## Development Workflow

### Local Development
1. Clone/download the project
2. Run local server (Python, Node, PHP)
3. Open http://localhost:8000
4. Make changes
5. Refresh browser to see updates

### Using Claude Code
1. Navigate to project directory
2. Run `claude code`
3. Ask Claude to make modifications
4. Review and test changes
5. Iterate as needed

## Potential Improvements

### Code Organization
- [ ] Extract inline CSS to external file
- [ ] Extract inline JavaScript to modules
- [ ] Create component-based structure
- [ ] Add source maps for debugging

### Performance
- [ ] Minify HTML, CSS, JavaScript
- [ ] Optimize images (WebP conversion)
- [ ] Implement service worker for caching
- [ ] Add lazy loading for images
- [ ] Bundle and compress assets

### Features
- [ ] Add comparison export (PDF/Image)
- [ ] Implement dark mode
- [ ] Add print-friendly view
- [ ] Create sharing functionality
- [ ] Add analytics tracking
- [ ] Multi-language support

### Testing
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Accessibility audit
- [ ] Performance testing
- [ ] Load testing

### Documentation
- [ ] Code comments
- [ ] API documentation
- [ ] Component documentation
- [ ] Deployment guide
- [ ] Troubleshooting guide

## Use Cases

### Channel Partners
- Product comparison for sales
- Customer demonstrations
- Training materials
- Marketing presentations

### Customers
- Feature comparison
- Model selection assistance
- Specification lookup
- Visual product exploration

## Customization Points

### Easy to Modify
- Colors and branding
- Text content
- Product images
- Feature comparisons
- Call-to-action buttons

### Requires More Effort
- Layout structure
- Comparison logic
- Interactive features
- Responsive breakpoints
- Animation timing

## Deployment Options

### Static Hosting
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Azure Static Web Apps

### Traditional Hosting
- Any web server (Apache, Nginx)
- Shared hosting
- VPS
- Cloud instances

## Security Considerations
- No server-side processing required
- No user data collection
- No authentication needed
- Static content only
- HTTPS recommended for production

## Maintenance
- Update product images as needed
- Refresh specifications for new models
- Update pricing and availability
- Check for broken links
- Monitor performance

## Support and Resources
- Channel partner instructions: See PDF
- Apple guidelines: Refer to official documentation
- Technical support: Contact appropriate channel

## License and Usage
This is a channel partner asset. Usage rights and restrictions are governed by Apple's partner agreements. Refer to included documentation for details.

## Version History
- Current version: 15 (from meta tag)
- Build information embedded in HTML
- Update tracking in PDF instructions

## Contact
For questions about implementation or customization, consult the CLAUDE_CODE_GUIDE.md for examples of how to make changes using Claude Code.

---

**Last Updated**: Based on Q4 2025 product lineup
**Status**: Production-ready channel partner asset
