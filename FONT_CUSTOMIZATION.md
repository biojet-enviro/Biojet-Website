# Font Customization for Multi-Language Support

## Overview
The Biojet website uses different fonts optimized for each language's script and typography requirements.

## Font Configuration

### Default Font (English, Russian, Portuguese)
- **Primary Font**: Satoshi
- **Mono Font**: JetBrains Mono
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold), 900 (Black)
- **Features**: Professional, modern sans-serif with excellent readability

### Thai Language Font
- **Font**: IBM Plex Sans Thai (Google Fonts)
- **Weights**: 100, 200, 300, 400, 500, 600, 700
- **Line Height**: 1.8 (increased for Thai script readability)
- **Loading**: Conditional - only loads on Thai pages (`/th`)

## Implementation Details

### Thai Font Loading (Layout.astro)
```astro
{locale === 'th' && (
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
)}
```

### Font Application
The body tag includes a conditional class:
```astro
<body class={locale === 'th' ? 'lang-thai' : ''}>
```

### CSS Rules
```css
/* Thai language font override */
body.lang-thai {
  font-family: 'IBM Plex Sans Thai', var(--font-primary);
  line-height: 1.8; /* Increased for Thai script */
}

/* Font weight mapping for IBM Plex Sans Thai */
body.lang-thai h1 {
  font-weight: 700; /* SemiBold instead of Bold */
}

body.lang-thai h2,
body.lang-thai h3 {
  font-weight: 500; /* Medium */
}

body.lang-thai button {
  font-weight: 500;
}
```

## Why Different Fonts?

### Thai Script Requirements
1. **Character Complexity**: Thai script has vowels above and below consonants
2. **Vertical Space**: Needs more line-height to prevent character overlap
3. **Readability**: Requires fonts specifically designed for Thai typography
4. **Font Weight**: IBM Plex Sans Thai's weight distribution differs from Latin fonts

### Performance Optimization
- Fonts are loaded conditionally based on locale
- Thai font only loads on Thai pages
- Other languages share the same font files
- Reduces initial page load for non-Thai visitors

## Adding Fonts for New Languages

If you add a language that requires a specific font (e.g., Arabic, Chinese, Japanese):

### 1. Update Layout.astro
```astro
{locale === 'ar' && (
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap" rel="stylesheet">
)}
```

### 2. Add Body Class
```astro
<body class={locale === 'ar' ? 'lang-arabic' : locale === 'th' ? 'lang-thai' : ''}>
```

### 3. Add CSS Rules
```css
body.lang-arabic {
  font-family: 'Cairo', var(--font-primary);
  direction: rtl; /* For right-to-left languages */
  line-height: 1.7;
}
```

## Font Selection Guidelines

When choosing fonts for new languages:

1. **Script Support**: Ensure font includes all required characters
2. **Readability**: Choose fonts designed for the specific script
3. **Web Font**: Available on Google Fonts or other CDN
4. **Weight Range**: Multiple weights for hierarchy (300-700)
5. **Performance**: Subset fonts to include only needed characters
6. **Licensing**: Verify font license allows web use

## Testing Fonts

To test fonts for a specific language:

1. Visit the language-specific URL (e.g., `/th`)
2. Check font rendering in:
   - Headings (H1-H6)
   - Body text (paragraphs)
   - Buttons and CTAs
   - Navigation menu
   - Forms and inputs
3. Verify line-height and spacing
4. Test on different devices and browsers
5. Check font weight hierarchy

## Current Language-Font Mapping

| Language | Code | Font | Line Height | Notes |
|----------|------|------|-------------|-------|
| English | `en` | Satoshi | 1.6 | Default, professional |
| Russian | `ru` | Satoshi | 1.6 | Cyrillic support |
| Portuguese | `pt` | Satoshi | 1.6 | Latin extended |
| Thai | `th` | IBM Plex Sans Thai | 1.8 | Thai script optimized |

## Resources

- [Google Fonts](https://fonts.google.com/)
- [IBM Plex Sans Thai Font](https://fonts.google.com/specimen/IBM+Plex+Sans+Thai)
- [Satoshi Font](https://www.fontshare.com/fonts/satoshi)
- [Font Subsetting Tool](https://www.fontsquirrel.com/tools/webfont-generator)

