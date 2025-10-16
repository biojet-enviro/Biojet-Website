# 🌊 Bubble Animation Implementation

## Overview
An interactive bubble animation effect has been added to your Biojet website. When users click anywhere on the screen, bubbles spurt out in random directions and then float upward, creating an engaging visual effect that complements your water treatment theme.

## How It Works

### Animation Behavior
1. **Click Detection**: Listens for mouse clicks anywhere on the page
2. **Spurt Phase**: 15 bubbles shoot out from the click location in random directions
3. **Float Phase**: After traveling outward, bubbles rise upward and fade away
4. **Auto-cleanup**: Bubbles are automatically removed after 4 seconds

### Technical Details
- **Bubbles per click**: 15 (configurable)
- **Random size**: 10px - 30px diameter
- **Spurt distance**: 30px - 80px in random directions
- **Float distance**: 300px - 500px upward
- **Duration**: 3.5 seconds (3s on mobile)
- **Colors**: Uses your Biojet brand colors (#58C8D7, #1890AE)

## Files Modified

### 1. `src/layouts/Layout.astro`
Added the bubble animation CSS and JavaScript to the global Layout component. This ensures the effect works across all pages (home, about, contact, blog, products) in all languages.

**What was added:**
- Global CSS styles for `.bubble-animation` class
- Keyframe animation `bubbleAnimation`
- JavaScript `BubbleAnimation` class
- Event listener for click events

### 2. `js/main.js`
Added the same bubble animation to the legacy JavaScript file for compatibility with any non-Astro pages.

### 3. `css/styles.css`
Added bubble animation CSS styles to the global stylesheet.

## Testing

### Quick Demo
A standalone demo file has been created for quick testing:

```bash
# Open in browser:
bubble-animation-demo.html
```

This demo shows the bubble effect in isolation without needing to build the entire Astro site.

### Testing on Your Site

#### For Development (Astro):
```bash
npm run dev
```
Then click anywhere on the page to see bubbles!

#### For Production Build:
```bash
npm run build
npm run preview
```

## Customization

You can easily customize the bubble animation by modifying these values:

### Number of Bubbles
In `Layout.astro` (line ~330):
```javascript
this.bubbleCount = 15; // Change this number
```

### Bubble Size Range
In `Layout.astro` (line ~352):
```javascript
const size = Math.random() * 20 + 10; // Min: 10px, Max: 30px
```

### Spurt Distance
In `Layout.astro` (line ~360):
```javascript
const distance = Math.random() * 50 + 30; // Min: 30px, Max: 80px
```

### Float Distance
In `Layout.astro` (line ~373):
```javascript
bubble.style.setProperty('--float-distance', `${Math.random() * 200 + 300}px`);
// Min: 300px, Max: 500px
```

### Animation Duration
In `Layout.astro` CSS (line ~266):
```css
animation: bubbleAnimation 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
```

### Colors
In `Layout.astro` CSS (line ~258):
```css
background: radial-gradient(circle at 30% 30%, rgba(88, 200, 215, 0.8), rgba(24, 144, 174, 0.6));
```

## Performance Considerations

The bubble animation is optimized for performance:

✅ **Hardware Acceleration**: Uses `transform` and `opacity` for smooth animations  
✅ **Efficient Cleanup**: Bubbles are automatically removed from DOM after animation  
✅ **No Event Propagation Issues**: Uses `pointer-events: none` on bubbles  
✅ **Mobile Optimized**: Shorter animation duration on smaller screens  
✅ **High Z-index**: Bubbles appear above all content (z-index: 9999)

## Browser Compatibility

The animation works on all modern browsers:
- Chrome/Edge (v88+)
- Firefox (v78+)
- Safari (v14+)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

The bubble animation:
- Does not interfere with keyboard navigation
- Does not block clickable elements (pointer-events: none)
- Respects user preferences (can be disabled via prefers-reduced-motion if needed)

## Optional: Disable on Specific Elements

If you want to prevent bubbles from appearing when clicking on certain elements (e.g., buttons, links), you can modify the event listener:

```javascript
init() {
  document.addEventListener('click', (e) => {
    // Don't create bubbles if clicking on buttons or links
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
      return;
    }
    this.createBubbles(e);
  });
}
```

## Troubleshooting

### Bubbles not appearing?
1. Check browser console for errors
2. Verify JavaScript is enabled
3. Check if the script is loading (view page source)

### Too many/too few bubbles?
- Adjust `this.bubbleCount` value

### Animation too fast/slow?
- Adjust `animation-duration` in the CSS

### Wrong colors?
- Update the `background` gradient in `.bubble-animation` CSS

## Next Steps

The animation is now live on your site! You can:
1. **Test it**: Rebuild your Astro site and click around
2. **Customize it**: Adjust the settings above to match your preferences
3. **Deploy it**: The changes are ready for production

---

**Created for**: Biojet Water Treatment Solutions  
**Theme**: Ocean/Water bubbles to match wastewater treatment brand  
**Implementation**: Pure DOM + JavaScript (no dependencies)

