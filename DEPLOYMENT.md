# Deployment Instructions

## Prerequisites
- Git installed
- GitHub/GitLab account (for repository hosting)
- Account on your chosen hosting platform

## Option 1: Deploy to Netlify

### Via Netlify UI (Recommended)
1. Push your code to GitHub/GitLab
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect your repository
5. Configure:
   - Build command: (leave empty)
   - Publish directory: `.`
6. Click "Deploy site"
7. Your site will be live at a netlify.app subdomain
8. (Optional) Add custom domain in Site settings

### Via Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## Option 2: Deploy to Vercel

### Via Vercel UI
1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Configure:
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: `.`
6. Click "Deploy"

### Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

## Option 3: Deploy to GitHub Pages

### Method 1: GitHub Actions (Automated)
1. Push code to GitHub
2. Go to repository Settings > Pages
3. Source: GitHub Actions
4. The workflow in `.github/workflows/deploy.yml` will auto-deploy

### Method 2: Manual
1. Push code to a branch called `gh-pages`
2. Go to Settings > Pages
3. Source: Deploy from branch
4. Branch: gh-pages, folder: / (root)
5. Save

## Option 4: Deploy to Cloudflare Pages

1. Push code to GitHub/GitLab
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project"
4. Connect your repository
5. Configure:
   - Build command: (leave empty)
   - Build output directory: `/`
6. Click "Save and Deploy"

## Option 5: Deploy to Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Select your project
# Public directory: . (current directory)
# Single-page app: No
firebase deploy
```

## Option 6: Deploy to AWS S3 + CloudFront

### Setup
1. Create S3 bucket
2. Enable static website hosting
3. Upload files
4. Create CloudFront distribution
5. Point to S3 bucket
6. Configure domain (optional)

### Via AWS CLI
```bash
aws s3 sync . s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## Post-Deployment Checklist

### 1. Update URLs
- [ ] Replace `https://autodocker.dev/` with your actual domain in:
  - `index.html` (meta tags)
  - `sitemap.xml`
  - `robots.txt`

### 2. Configure Domain
- [ ] Add custom domain to hosting platform
- [ ] Update DNS records (A or CNAME)
- [ ] Wait for DNS propagation (up to 48 hours)
- [ ] Enable HTTPS/SSL

### 3. Setup Analytics
- [ ] Create Google Analytics account
- [ ] Get tracking ID
- [ ] Uncomment analytics code in `index.html`
- [ ] Replace `G-XXXXXXXXXX` with your ID
- [ ] Test tracking

### 4. Generate Favicons
- [ ] Go to [RealFaviconGenerator](https://realfavicongenerator.net/)
- [ ] Upload your logo/icon
- [ ] Download favicon package
- [ ] Replace files in root directory:
  - `favicon-16x16.png`
  - `favicon-32x32.png`
  - `apple-touch-icon.png`
  - `android-chrome-192x192.png`
  - `android-chrome-512x512.png`

### 5. Create OG Image
- [ ] Design image (1200x630px)
- [ ] Save as `og-image.png` in root
- [ ] Ensure proper path in meta tags

### 6. Test Deployment
- [ ] Check all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Test all links (internal and external)
- [ ] Verify 404 page works
- [ ] Test navigation menu
- [ ] Check console for errors
- [ ] Test performance with Lighthouse
- [ ] Verify meta tags with [Meta Tags](https://metatags.io/)
- [ ] Test social sharing preview

### 7. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify robots.txt is accessible
- [ ] Check structured data (optional)

### 8. Performance Optimization
- [ ] Run Lighthouse audit
- [ ] Optimize images (if added)
- [ ] Enable CDN caching
- [ ] Configure compression (Gzip/Brotli)

### 9. Security
- [ ] Verify HTTPS is enabled
- [ ] Check security headers
- [ ] Test with [Security Headers](https://securityheaders.com/)
- [ ] Enable HSTS (if supported by host)

### 10. Monitoring
- [ ] Setup uptime monitoring (e.g., UptimeRobot)
- [ ] Configure error tracking (e.g., Sentry)
- [ ] Monitor analytics regularly

## Quick Deploy Commands

### Local Development
```bash
# Using Python
python -m http.server 8000

# Using Node.js serve
npx serve .

# Using live-server
npx live-server --port=3000
```

### Git Deployment
```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit"

# Add remote
git remote add origin https://github.com/yourusername/your-repo.git

# Push
git branch -M main
git push -u origin main
```

## Troubleshooting

### 404 Errors
- Ensure `404.html` exists
- Configure platform-specific redirects
- Check hosting platform documentation

### Assets Not Loading
- Verify file paths are correct
- Check case sensitivity (important on Linux servers)
- Ensure HTTPS for all CDN resources

### Slow Loading
- Enable caching headers
- Use CDN
- Optimize images
- Minify CSS/JS (if needed)

### Domain Not Working
- Check DNS records
- Wait for propagation (24-48 hours)
- Verify SSL certificate
- Clear browser cache

## Support

For deployment issues:
- Check hosting platform documentation
- Visit platform support forums
- Open issue on GitHub repository

---

**Need help?** Check the [README.md](README.md) for more information.
