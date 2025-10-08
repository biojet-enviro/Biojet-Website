# GitHub Pages Deployment Guide

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 2. Repository Settings
Make sure your repository has the following settings:
- Repository is public (required for free GitHub Pages)
- Or you have GitHub Pro/Team/Enterprise for private repositories

### 3. Automatic Deployment
The workflow will automatically trigger when you:
- Push to the `main` branch
- Manually trigger it from the Actions tab

### 4. Custom Domain (Optional)
If you want to use a custom domain:
1. Update `astro.config.mjs` with your domain:
   ```javascript
   export default defineConfig({
     site: 'https://yourdomain.com',
   });
   ```
2. Add a `CNAME` file to the `public/` directory with your domain
3. Configure DNS settings with your domain provider

### 5. Repository-Specific URL
If your repository name is not `biojet-website`, update the `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
});
```

## Workflow Details

The deployment workflow:
1. **Builds** your Astro site using `npm run build`
2. **Deploys** the built files from the `dist/` directory to GitHub Pages
3. **Runs** automatically on every push to `main`

## Troubleshooting

- Check the **Actions** tab in your GitHub repository for deployment logs
- Ensure all dependencies are listed in `package.json`
- Verify that the build completes successfully locally with `npm run build`