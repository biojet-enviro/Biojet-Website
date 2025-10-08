# Biojet Website - Astro Version

## 🚀 Project Overview

This is the rebuilt version of the Biojet website using **Astro** for better maintainability, performance, and ease of updates. The site showcases Biojet's industry-leading jet aerators for wastewater treatment.

## ✨ Why Astro?

- **Better Maintainability**: Component-based architecture makes updates easier
- **Faster Performance**: Ships zero JavaScript by default, loads instantly
- **Easy to Update**: Reusable components for buttons, cards, sections
- **Future-Ready**: Easy to add i18n (multi-language support)
- **SEO Optimized**: Server-side rendering out of the box

## 📁 Project Structure

```
biojet-website/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Button.astro            # 3 button variants (primary, secondary, simple)
│   │   ├── Header.astro            # Navigation bar
│   │   ├── Footer.astro            # Footer with contact info
│   │   ├── CTASection.astro        # Call-to-action section
│   │   ├── ProductCard.astro       # Product showcase card
│   │   ├── FeatureCard.astro       # Feature/advantage card
│   │   ├── BlogCard.astro          # Blog article card
│   │   └── FAQItem.astro           # FAQ accordion item
│   ├── layouts/
│   │   └── Layout.astro     # Main layout with Header & Footer
│   └── pages/
│       ├── index.astro      # Homepage (all sections)
│       ├── about.astro      # About page (placeholder)
│       ├── products.astro   # Products page (placeholder)
│       ├── blog.astro       # Blog page (placeholder)
│       └── contact.astro    # Contact page (placeholder)
├── public/
│   └── assets/              # Images, logos, etc.
├── astro.config.mjs         # Astro configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## 🧩 Component Architecture

### Reusable Components

As requested, only these are made into components:

1. **Button** (`Button.astro`)
   - 3 variants: `primary`, `secondary`, `simple`
   - Props: `variant`, `href`, `text`, `class`
   - Used throughout the site for CTAs

2. **Header** (`Header.astro`)
   - Fixed navigation bar
   - Logo, menu links, language selector
   - Sticky on scroll with transparency effect

3. **Footer** (`Footer.astro`)
   - Contact information
   - Social links
   - Agent information for Brazil
   - Decorative product image

4. **CTASection** (`CTASection.astro`)
   - Reusable call-to-action section
   - Can be placed anywhere on the site

5. **ProductCard** (`ProductCard.astro`)
   - Props: `name`, `model`, `image`, `serviceLife`, `material`, `description`
   - Used in products grid
   - Includes action buttons

6. **FeatureCard** (`FeatureCard.astro`)
   - Props: `icon`, `title`, `value`, `description`
   - Used in features section
   - Displays advantages with metrics

7. **BlogCard** (`BlogCard.astro`)
   - Props: `title`, `excerpt`, `date`, `image`, `slug`
   - Used in blog grid
   - Links to blog posts

8. **FAQItem** (`FAQItem.astro`)
   - Props: `question`, `answer`
   - Accordion functionality
   - Used in FAQ section

### Non-Component Sections

As requested, these sections are **NOT** components (they're directly in `index.astro`):
- Hero Section
- Video Section  
- Products Section (uses ProductCard component)
- Features Section (uses FeatureCard component)
- About Section
- Logo/Client Section
- Blog Section (uses BlogCard component)
- FAQ Section (uses FAQItem component)

## 🎨 Design System

### Colors (CSS Variables)

```css
--blue-01: #F4FBFC  /* Lightest blue - backgrounds */
--blue-02: #DDF4F7  /* Light blue - borders, cards */
--blue-03: #9CDFE7  /* Medium blue - buttons, accents */
--blue-04: #58C8D7  /* Accent blue - highlights */
--blue-05: #1890AE  /* Brand blue - primary text */
--blue-06: #175A78  /* Dark blue - body text */
--white: #FFFFFF
```

### Typography

- **Primary Font**: System fonts (San Francisco, Segoe UI, Roboto, etc.)
- **Mono Font**: JetBrains Mono (for product model names)
- **Heading Sizes**: 48px-80px
- **Body Sizes**: 16px-20px

### Button Variants

```astro
<!-- Primary (with arrow animation) -->
<Button variant="primary" href="/contact" text="GET IN TOUCH" />

<!-- Secondary (outline style) -->
<Button variant="secondary" text="VIEW MORE" />

<!-- Simple (text link) -->
<Button variant="simple" href="/blog" text="Read More" />
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:4321
```

### Development Commands

```bash
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run astro        # Run Astro CLI commands
```

## 📝 How to Update Content

### Update Homepage Hero Text

Edit `src/pages/index.astro`:

```astro
<h1 class="hero-title">
  <div class="title-line-1">Your new headline</div>
  ...
</h1>
```

### Add a New Product

Edit `src/pages/index.astro` in the products section:

```astro
<ProductCard
  name="Biojet® jet aerator"
  model="NEW-MODEL-X"
  image="/Biojet-Website/assets/product-new.jpg"
  serviceLife=">20 YEARS"
  material="SUS304"
  description="Your product description here."
/>
```

### Add a New FAQ

Edit `src/pages/index.astro` in the FAQ section:

```astro
<FAQItem
  question="Your question here?"
  answer="Your answer here."
/>
```

### Update Contact Information

Edit `src/components/Footer.astro`:

```astro
<li><a href="mailto:newemail@biojet.com">newemail@biojet.com</a></li>
```

### Change Button Text

Find any Button component and update the `text` prop:

```astro
<Button variant="primary" href="/contact" text="NEW TEXT HERE" />
```

## 🎨 Styling Guide

### Modifying Colors

Edit `src/layouts/Layout.astro` in the `:root` section:

```css
:root {
  --blue-05: #YOUR_NEW_COLOR;
}
```

### Adding Custom Styles

For component-specific styles, add a `<style>` block in the component file:

```astro
<style>
  .your-class {
    /* Your styles */
  }
</style>
```

For global styles, edit `src/layouts/Layout.astro` in the `<style is:global>` block.

## 📦 Adding New Components

### Create a Component

1. Create file: `src/components/YourComponent.astro`
2. Define props and structure:

```astro
---
export interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<div class="your-component">
  <h3>{title}</h3>
  <p>{description}</p>
</div>

<style>
  .your-component {
    /* Styles here */
  }
</style>
```

3. Use it in pages:

```astro
---
import YourComponent from '../components/YourComponent.astro';
---

<YourComponent title="Hello" description="World" />
```

## 🌐 Adding Multi-Language Support (Future)

When ready to add i18n:

1. Install `astro-i18next`:
```bash
npm install astro-i18next
```

2. Create translation files:
```
src/
  locales/
    en.json
    es.json
    pt.json
    zh.json
```

3. Configure in `astro.config.mjs`

4. Use translations in components

## 🖼️ Managing Assets

### Images

Place all images in `/public/assets/`:

```
public/
  assets/
    logo.svg
    logo-white.svg
    product-1.jpg
    product-2.jpg
    hero-bg.jpg
    etc...
```

Reference in components:

```astro
<img src="/Biojet-Website/assets/your-image.jpg" alt="Description" />
```

### Optimizing Images

For production, consider:
- JPG for photos (compress to <200KB)
- PNG for graphics with transparency
- SVG for logos and icons
- WebP for better compression (modern browsers)

## 📊 Performance

### Current Features

- ✅ Zero JavaScript by default (except interactive components)
- ✅ Automatic CSS optimization
- ✅ Image lazy loading ready
- ✅ Minimal bundle size
- ✅ Fast page loads

### Performance Tips

1. **Compress images** before adding to `/public/assets/`
2. **Use WebP format** for photos when possible
3. **Lazy load images** below the fold
4. **Minimize custom scripts**

## 🔧 Configuration

### Astro Config (`astro.config.mjs`)

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Add integrations here if needed
  // e.g., integrations: [tailwind(), react()]
});
```

### TypeScript Config

The project uses strict TypeScript for better type safety and code quality.

## 📱 Responsive Design

All components and sections are responsive:

- **Desktop**: 1920px+ (design baseline)
- **Laptop**: 1440px
- **Tablet**: 768px
- **Mobile**: 375px+

Media queries are included in component styles.

## 🐛 Troubleshooting

### Dev server won't start

```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Images not loading

- Check file exists in `/public/assets/`
- Verify path starts with `/assets/` not `./assets/`
- Check file name case sensitivity

### Styles not applying

- Check if styles are in `<style>` block
- For global styles, use `<style is:global>`
- Clear browser cache

### Component not rendering

- Check import path is correct
- Verify component file has `.astro` extension
- Check for TypeScript errors in component props

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates a `/dist` folder with static files.

### Deploy to GitHub Pages

1. Build the site:
```bash
npm run build
```

2. Configure base path in `astro.config.mjs` if needed:
```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/biojet-website',
});
```

3. Push to GitHub

4. Enable GitHub Pages in repo settings

### Deploy to Netlify/Vercel

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

## 📚 Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [Astro Components](https://docs.astro.build/en/core-concepts/astro-components/)
- [Astro Layouts](https://docs.astro.build/en/core-concepts/layouts/)
- [Astro Styling](https://docs.astro.build/en/guides/styling/)

## 🆘 Support

For questions or issues:
1. Check this README
2. Review Astro documentation
3. Check component files for inline comments
4. Review original `QUICKSTART.md` and `DEPLOYMENT.md`

## 📋 Migration Notes

### What Changed from Original

**Before (Plain HTML/CSS/JS):**
- Single large HTML files
- Repeated code for buttons, cards
- Difficult to maintain consistency
- Hard to update globally

**After (Astro):**
- Component-based architecture
- Reusable Button, Card components
- Easy to maintain and update
- Global changes in one place
- Better performance
- TypeScript support

### Component Mapping

| Old HTML Section | New Structure |
|-----------------|---------------|
| Navigation bar | `Header.astro` component |
| Footer | `Footer.astro` component |
| CTA sections | `CTASection.astro` component |
| Product cards | `ProductCard.astro` component |
| Feature cards | `FeatureCard.astro` component |
| Blog cards | `BlogCard.astro` component |
| FAQ items | `FAQItem.astro` component |
| Buttons | `Button.astro` component (3 variants) |
| Hero/Video/etc | Inline in `index.astro` (not components) |

### Assets Location

- **Before**: `/assets/`
- **After**: `/public/assets/`

## ✅ Quality Checklist

- [x] All sections from original design included
- [x] Responsive design for all devices
- [x] Button component with 3 variants
- [x] Reusable card components
- [x] Header and Footer components
- [x] CTA section component
- [x] Clean, maintainable code
- [x] TypeScript strict mode
- [x] SEO-friendly structure
- [x] Performance optimized
- [x] Easy to update content

## 🎯 Next Steps

1. **Add Real Images**: Replace placeholder images in `/public/assets/`
2. **Test Locally**: Run `npm run dev` and verify everything works
3. **Build**: Run `npm run build` to test production build
4. **Deploy**: Push to GitHub and deploy via GitHub Pages or Netlify
5. **Multi-language**: Add i18n support when ready (see guide above)
6. **Content**: Expand about, products, blog, contact pages

---

**Built with ❤️ using Astro**

Version: 2.0 (Astro)  
Last Updated: October 2025

