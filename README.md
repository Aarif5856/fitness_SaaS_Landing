# FitPulse - Premium Fitness SaaS Landing Page Template

A professional, production-ready landing page template for fitness and wellness SaaS applications. Built with pure HTML, CSS, and vanilla JavaScript — no frameworks or build tools required.

![FitPulse Preview](hero-mockup.png)

## ✨ Features

- **Fully Responsive Design** - Mobile-first approach, perfect on all devices (phones, tablets, desktops)
- **Premium Dark Theme** - Modern dark aesthetic with gradient accents and glassmorphism effects
- **CSS Variable System** - Centralized theming - change colors, spacing, and typography in one place
- **Semantic HTML5** - Clean, accessible markup with proper ARIA labels
- **Smooth Animations** - Scroll-triggered animations, parallax effects, and interactive hover states
- **No Dependencies** - Pure HTML, CSS, and vanilla JavaScript - no npm, webpack, or bundlers
- **Accessibility Ready** - Keyboard navigation, reduced motion support, proper contrast ratios
- **Performance Optimized** - Debounced scroll handlers, throttled animations, efficient rendering

## 📦 What's Included

### Complete Sections (11+)
- **Hero Section** - Gradient text, floating metric cards, app mockup, dual CTAs
- **Features Section** - Primary and supporting feature cards with detailed descriptions
- **Trust Section** - Integration logos and compatibility messaging
- **App Showcase** - Screen mockups with interactive hover effects
- **App Preview** - Detailed feature explanations with visual aids
- **About Section** - Company narrative, mission, and statistics
- **Why Choose Section** - Technical foundation and platform capabilities
- **Pricing Section** - Three-tier pricing with featured plan highlight
- **Testimonials Section** - Primary and secondary testimonial cards with ratings
- **Download Section** - App store download buttons (iOS & Android)
- **FAQ Section** - Expandable accordion with smooth animations
- **Template Features** - What's included in the package showcase
- **Developer Section** - Code quality and structure highlights
- **CTA Section** - Final call-to-action with gradient background
- **Footer** - Newsletter signup, organized links, social media, legal

### Technical Features
- **Interactive JavaScript** - FAQ accordion, mobile menu, smooth scrolling, form validation
- **Responsive Breakpoints** - 768px (tablet), 1024px (desktop), 1280px (large desktop)
- **Cross-Browser Compatible** - Works on Chrome, Firefox, Safari, Edge
- **Comprehensive Documentation** - Detailed HTML documentation file included
- **Well-Commented Code** - Inline comments for easy customization

## Quick Start

1. Clone or download this repository
2. Open `index.html` in your browser
3. That's it — no build steps required!

```bash
git clone https://github.com/Aarif5856/fitness_SaaS_Landing.git
cd fitness_SaaS_Landing
# Open index.html in your browser
```

## Customization

### Colors & Theming

All colors are defined as CSS variables in `styles.css`. Edit these to match your brand:

```css
:root {
    --primary: #8B5CF6;
    --primary-light: #A78BFA;
    --bg-dark: #0a0a0f;
    --text-primary: rgba(255, 255, 255, 0.95);
    /* ... more variables */
}
```

### Content

- Edit `index.html` to update text, images, and links
- Replace logo in `public/logos/fitpulse_logo.png`
- Swap hero mockup image (`hero-mockup.png`)

### Fonts

The template uses system fonts by default. To add custom fonts, update the `font-family` in the CSS variables.

## File Structure

```
fitness_SaaS_Landing/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript (scroll effects, FAQ accordion)
├── hero-mockup.png     # Hero section app mockup
├── workout-icon.png    # Feature icon
├── nutrition-icon.png  # Feature icon
├── progress-icon.png   # Feature icon
└── public/
    └── logos/
        ├── fitpulse_logo.png   # Main logo
        ├── apple-health.svg    # Integration logo
        ├── fitbit.svg          # Integration logo
        ├── garmin.svg          # Integration logo
        └── strava.svg          # Integration logo
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📚 Documentation

Comprehensive documentation is included in `DOCUMENTATION.html`. It covers:
- Installation and setup
- Customization guide
- File structure explanation
- CSS variables reference
- Section-by-section breakdown
- Common modifications
- Browser support details

## 🚀 Quick Start

1. **Download the template** - Extract the ZIP file
2. **Open `index.html`** - View in any modern browser
3. **Customize** - Edit content, colors, and images
4. **Deploy** - Upload to any static hosting service

```bash
# No installation required - just open index.html!
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

## 🎨 Customization Guide

### Colors & Theming

All design tokens are defined as CSS variables at the top of `styles.css`:

```css
:root {
    --primary-500: #6366f1;      /* Primary brand color */
    --accent-500: #8b5cf6;       /* Accent color */
    --bg-primary: #09090f;       /* Main background */
    --text-primary: #ffffff;     /* Primary text color */
    /* ... more variables */
}
```

Change these values to match your brand - the entire template updates automatically.

### Content Updates

- **Text Content**: Edit directly in `index.html`
- **Images**: Replace `hero-mockup.png`, `workout-icon.png`, etc.
- **Logo**: Update `public/logos/fitpulse_logo.png`
- **Links**: Update all `href="#"` attributes with your URLs

### Fonts

The template uses **Inter** font family. To change:
1. Update the Google Fonts link in `<head>`
2. Modify `--font-display` and `--font-body` CSS variables

## 📁 File Structure

```
fitness-saas-landing/
├── index.html              # Main HTML file
├── styles.css              # All styling (CSS variables, components)
├── script.js               # JavaScript interactions
├── CHANGELOG.md            # Version history
├── README.md               # This file
├── DOCUMENTATION.html      # Comprehensive documentation
├── vercel.json             # Vercel deployment config
│
├── hero-mockup.png         # Hero section app mockup
├── workout-icon.png        # Feature showcase image
├── nutrition-icon.png      # Feature showcase image
└── progress-icon.png       # Feature showcase image
│
└── public/
    └── logos/
        ├── fitpulse_logo.png   # Main logo (navbar & footer)
        ├── apple-health.svg    # Integration logo
        ├── fitbit.svg          # Integration logo
        ├── garmin.svg          # Integration logo
        └── strava.svg          # Integration logo
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This template is available for personal and commercial use. See your purchase terms for specific licensing details.

## 🆘 Support

For customization help, refer to:
- `DOCUMENTATION.html` - Comprehensive guide
- Inline code comments - Detailed explanations
- CSS variable names - Self-documenting structure

## 📄 Version

**Current Version:** 1.0.0  
**Last Updated:** December 2025

See `CHANGELOG.md` for version history and updates.

---

**Template Note:** This is a premium HTML template. All content, images, and data shown are for demonstration purposes. Customize with your own content, branding, and verified information before production use.

