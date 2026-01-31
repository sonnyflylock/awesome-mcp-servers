# ImagenText Website

Marketing website for ImagenText - AI-powered text extraction from images.

**Live at: https://imagentext.com**

## Features

- Modern, responsive landing page
- Product showcase for all three platforms:
  - Chrome Extension
  - Windows Desktop App
  - MCP Server
- Pricing section with freemium tiers
- FAQ accordion
- Smooth scroll navigation
- Mobile-friendly design
- Scroll animations

## Structure

```
imagentext-website/
├── index.html          # Main landing page
├── css/
│   └── styles.css      # All styles (no build step needed)
├── js/
│   └── main.js         # Interactive features
├── images/             # Image assets (add your own)
└── README.md
```

## Deployment

### Static Hosting (Recommended)

This is a static website with no build step required. Deploy to any static hosting:

#### Vercel
```bash
npx vercel
```

#### Netlify
```bash
npx netlify deploy --prod
```

#### GitHub Pages
1. Push to a GitHub repository
2. Go to Settings > Pages
3. Select "Deploy from a branch"
4. Choose main branch and root folder

#### Cloudflare Pages
1. Connect your GitHub repository
2. Set build command to empty
3. Set output directory to root

### Manual Upload

Simply upload all files to your web server. No build process needed.

## Customization

### Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
  --primary: #6366f1;      /* Main brand color */
  --secondary: #8b5cf6;    /* Gradient end color */
  /* ... other colors */
}
```

### Content

Edit `index.html` directly to change:
- Hero text and stats
- Feature descriptions
- Pricing tiers
- FAQ questions and answers
- Footer links

### Images

Add images to the `images/` folder:
- `og-image.png` - Social media preview (1200x630)
- `hero-screenshot.png` - App screenshot for hero section
- `favicon.ico` - Browser favicon

## Sections

1. **Navigation** - Fixed top navbar with mobile menu
2. **Hero** - Main headline, CTA buttons, stats, and app preview
3. **Trusted By** - AI provider logos
4. **Features** - 6 feature cards in a grid
5. **Platforms** - 3 platform cards (Chrome, Windows, MCP)
6. **Demo** - Video placeholder
7. **Pricing** - 3 pricing tiers (Free, Pay As You Go, Unlimited)
8. **Download** - Download links for all platforms
9. **FAQ** - Accordion-style frequently asked questions
10. **CTA** - Final call-to-action banner
11. **Footer** - Links and copyright

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- No external dependencies (except Google Fonts)
- Minimal JavaScript
- CSS-only animations where possible
- Optimized for Core Web Vitals

## License

MIT License
