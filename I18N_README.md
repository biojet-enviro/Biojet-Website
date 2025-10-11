# Biojet Website - i18n Implementation

## Overview
The Biojet website now supports internationalization (i18n) with **4 languages**: English, Russian, Portuguese, and Thai using Astro's built-in i18n features.

## Implementation Details

### Configuration
- **File**: `astro.config.mjs`
- **Default locale**: English (`en`)
- **Supported locales**: English (`en`), Russian (`ru`), Portuguese (`pt`), Thai (`th`)
- **Routing**: The default locale (English) has no prefix (`/`), while other languages use their respective prefixes

### Translation System

#### Translation Files
- **Location**: `src/i18n/translations.ts`
- **Structure**: Contains all text content for both languages organized by sections
- **Usage**: Import `useTranslations` and `getLocaleFromUrl` to access translations

```typescript
import { getLocaleFromUrl, useTranslations } from '../i18n/translations';

const locale = getLocaleFromUrl(Astro.url);
const t = useTranslations(locale);
```

### URL Structure
- **English (Default)**: 
  - Home: `/`
  - About: `/about`
  - Products: `/products`
  - Blog: `/blog`
  - Contact: `/contact`

- **Russian**: 
  - Home: `/ru`
  - About: `/ru/about`
  - Products: `/ru/products`
  - Blog: `/ru/blog`
  - Contact: `/ru/contact`

- **Portuguese**: 
  - Home: `/pt`
  - About: `/pt/about`
  - Products: `/pt/products`
  - Blog: `/pt/blog`
  - Contact: `/pt/contact`

- **Thai**: 
  - Home: `/th`
  - About: `/th/about`
  - Products: `/th/products`
  - Blog: `/th/blog`
  - Contact: `/th/contact`

### Language Switcher
The language selector in the header is a **dropdown menu** that displays all available languages. Click on it to select your preferred language. The dropdown shows:
- **English**
- **Русский** (Russian)
- **Português** (Portuguese)
- **ไทย** (Thai)

The current language is highlighted in the dropdown, and switching maintains the same page context.

### Components with i18n Support

#### Updated Components:
1. **Layout.astro** - Detects locale and passes it to Header and Footer
2. **Header.astro** - Functional language switcher, translated navigation
3. **Footer.astro** - Translated footer content
4. **CTASection.astro** - Translated CTA content
5. **BlogCard.astro** - Translated blog metadata

#### Pages with i18n Support:
- All pages (`index`, `about`, `products`, `blog`, `contact`, `blog/[slug]`)
- Date formatting adapts to locale (en-US vs ru-RU)

## Adding New Languages

To add a new language (e.g., Spanish):

1. Update `astro.config.mjs`:
```javascript
i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'pt', 'th', 'es'],
    // ...
}
```

2. Add translations in `src/i18n/translations.ts`:
```typescript
export const translations = {
  en: { /* ... */ },
  ru: { /* ... */ },
  pt: { /* ... */ },
  th: { /* ... */ },
  es: { /* Spanish translations */ }
}

// Also update languageNames
export const languageNames = {
  en: 'English',
  ru: 'Русский',
  pt: 'Português',
  th: 'ไทย',
  es: 'Español'
} as const;
```

3. Update `getLocaleFromUrl` function:
```typescript
export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  if (pathname.startsWith('/ru')) return 'ru';
  if (pathname.startsWith('/pt')) return 'pt';
  if (pathname.startsWith('/th')) return 'th';
  if (pathname.startsWith('/es')) return 'es';
  return 'en';
}
```

4. Create page structure:
```
src/pages/es/
  ├── index.astro
  ├── about.astro
  ├── products.astro
  ├── contact.astro
  ├── blog.astro
  └── blog/[slug].astro
```

5. The language dropdown will automatically include the new language!

## Benefits of This Approach

✅ **Reusable Components**: Same `.astro` files work for all languages
✅ **Maintainable**: Translations centralized in one file
✅ **Scalable**: Easy to add new languages
✅ **SEO-Friendly**: Proper URL structure for each language
✅ **Type-Safe**: TypeScript ensures translation keys exist

## Development

### Running Locally
```bash
npm run dev
```
Then visit:
- English: `http://localhost:4321/`
- Russian: `http://localhost:4321/ru`
- Portuguese: `http://localhost:4321/pt`
- Thai: `http://localhost:4321/th`

### Building for Production
```bash
npm run build
```

The build process generates static pages for all language variants.

## Notes
- Blog content currently uses the same English content for all languages
- To add translated blog posts, create separate markdown files or add a `locale` field to the blog schema
- Date formatting automatically adapts to the current locale (en-US, ru-RU, pt-BR, th-TH)
- The language dropdown is fully accessible and keyboard-navigable
- On mobile devices, the language dropdown appears in the mobile menu

