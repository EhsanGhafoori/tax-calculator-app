# Deployment Instructions for e-plantShopping

## GitHub Pages Deployment

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/EhsanGhafoori/e-plantShopping
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### Step 2: Push Your Code

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically deploy your site when you push to the `main` branch.

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Step 3: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. Wait for the workflow to complete (usually 2-3 minutes)
3. Once complete, your site will be available at:
   ```
   https://EhsanGhafoori.github.io/e-plantShopping/
   ```

## Alternative: Manual Deployment

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder contains your built files

3. Upload the contents of `dist` folder to your hosting service:
   - **Netlify**: Drag and drop the `dist` folder
   - **Vercel**: Connect your GitHub repo and it will auto-deploy
   - **GitHub Pages**: Use the `gh-pages` branch method

## Verify Deployment

After deployment, test your live URL:
- Landing page loads correctly
- Navigation works
- Products display
- Cart functionality works
- All pages are accessible

## Important Notes

- Make sure your repository is **PUBLIC** for GitHub Pages free tier
- The base URL in `vite.config.js` is set to `/e-plantShopping/` for GitHub Pages
- If deploying to a custom domain, update the `base` in `vite.config.js`
