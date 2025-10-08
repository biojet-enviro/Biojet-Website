# Deployment Guide for Biojet Website

## GitHub Pages Deployment

This website is designed to be hosted on GitHub Pages for free, reliable hosting.

### Prerequisites

- GitHub account
- Git installed locally
- Repository created on GitHub

### Step 1: Prepare Repository

1. Create a new repository on GitHub named `biojet-website` (or your preferred name)
2. Initialize the repository if not already done

### Step 2: Push Code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Biojet website homepage"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/biojet-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait a few minutes for deployment

### Step 4: Access Your Website

Your website will be available at:
```
https://YOUR_USERNAME.github.io/biojet-website/
```

### Custom Domain (Optional)

If you want to use a custom domain like `www.biojet.com`:

1. Purchase a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Add a `CNAME` file to your repository root with your domain:
   ```
   www.biojet.com
   ```
3. Configure DNS settings at your domain registrar:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
4. Enable custom domain in GitHub Pages settings

### SSL Certificate

GitHub Pages automatically provides free SSL certificates via Let's Encrypt. Enable it in Settings > Pages > "Enforce HTTPS"

## Alternative Deployment Options

### Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Build settings:
   - Build command: (leave empty for static site)
   - Publish directory: `/`
4. Deploy

### Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure project (auto-detected as static)
4. Deploy

### Traditional Web Hosting

Upload files via FTP to any web hosting service:
- All files in root directory
- Ensure `index.html` is in the root
- Maintain folder structure

## Before Deployment Checklist

- [ ] Replace placeholder images with real images
- [ ] Update contact information
- [ ] Test all links and navigation
- [ ] Optimize images (compress for web)
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Add Google Analytics (optional)
- [ ] Add favicon
- [ ] Test FAQ accordion functionality
- [ ] Verify all CTAs work correctly
- [ ] Check form submissions (if contact form added)

## Post-Deployment

### Monitor Performance

- Use Google PageSpeed Insights
- Check mobile responsiveness
- Monitor loading times
- Fix any console errors

### SEO Optimization

- Submit sitemap to Google Search Console
- Add meta descriptions to all pages
- Ensure alt tags on all images
- Create sitemap.xml
- Add robots.txt

### Analytics Setup

Add Google Analytics to track visitors:

```html
<!-- Add before </head> in all HTML files -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Maintenance

- Regularly update blog section with new articles
- Keep product information current
- Update client logos as needed
- Monitor and respond to contact form submissions
- Keep dependencies updated (if any added later)

## Troubleshooting

### Website not showing up

- Check if GitHub Pages is enabled
- Verify branch and folder settings
- Wait 5-10 minutes for first deployment
- Clear browser cache

### Images not loading

- Verify file paths are correct
- Check file names match exactly (case-sensitive)
- Ensure images are in correct directories
- Check image file formats are web-compatible

### Custom domain not working

- Verify DNS settings at registrar
- Check CNAME file content
- Allow 24-48 hours for DNS propagation
- Ensure HTTPS is enforced

## Support

For issues or questions:
- Check GitHub Pages documentation
- Review browser console for errors
- Test locally first before pushing changes

## Updates

To update the website:

```bash
# Make changes to files
git add .
git commit -m "Update: description of changes"
git push origin main
```

Changes will be live within 1-2 minutes.

