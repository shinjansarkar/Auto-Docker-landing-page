# Auto Docker Website

Production-ready website for Auto Docker VS Code Extension.

## 🚀 Quick Start

Simply open `index.html` in your browser or deploy to any static hosting service.

## 📁 Project Structure

```
├── index.html           # Main landing page
├── 404.html            # Custom 404 error page
├── styles.css          # Custom CSS styles
├── app.js              # JavaScript functionality
├── favicon.svg         # Favicon (SVG format)
├── site.webmanifest    # PWA manifest
├── robots.txt          # SEO robots file
├── sitemap.xml         # XML sitemap
└── README.md           # This file
```

## 🌐 Deployment

### Deploy to Netlify
1. Connect your GitHub repository
2. Set build command to: (leave empty)
3. Set publish directory to: `/`
4. Deploy!

### Deploy to Vercel
1. Import your repository
2. Framework Preset: Other
3. Build Command: (leave empty)
4. Output Directory: `.`
5. Deploy!

### Deploy to GitHub Pages
1. Push to GitHub
2. Go to Settings > Pages
3. Select branch and root directory
4. Save and deploy

### Deploy to Cloudflare Pages
1. Connect your repository
2. Build command: (leave empty)
3. Build output directory: `/`
4. Deploy!

## 🛠️ Configuration

### Update URLs
Replace placeholder URLs in the following files:
- `index.html` - Update meta tags with your actual domain
- `sitemap.xml` - Replace `https://autodocker.dev/` with your domain
- `robots.txt` - Update sitemap URL

### Add Analytics
Uncomment the Google Analytics section in `index.html` and add your tracking ID:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### Customize Colors
Edit the Tailwind config in `index.html`:
```javascript
colors: {
    "primary": "#13c8ec",  // Change this
    "background-light": "#f6f8f8",
    "background-dark": "#101f22",
}
```

## 📱 Features

- ✅ Fully responsive design
- ✅ Dark mode optimized
- ✅ SEO optimized with meta tags
- ✅ Fast loading with CDN resources
- ✅ Smooth animations and transitions
- ✅ Mobile navigation menu
- ✅ Accessibility features
- ✅ Custom 404 page
- ✅ PWA ready (with manifest)
- ✅ Social media previews (OG tags)

## 🎨 Customization

### Adding New Sections
Add new sections in `index.html` following the existing pattern:
```html
<section class="w-full py-20 px-4">
    <div class="layout-container flex justify-center w-full">
        <!-- Your content -->
    </div>
</section>
```

### Modifying Styles
Edit `styles.css` for custom styles beyond Tailwind classes.

### Adding JavaScript
Add custom functionality in `app.js`.

## 🔧 Production Optimizations

### TODO: Before Going Live

1. **Generate Favicon Variations**
   - Create `favicon-16x16.png`
   - Create `favicon-32x32.png`
   - Create `apple-touch-icon.png`
   - Create `android-chrome-192x192.png`
   - Create `android-chrome-512x512.png`
   - Use a tool like [RealFaviconGenerator](https://realfavicongenerator.net/)

2. **Add OG Image**
   - Create `og-image.png` (1200x630px)
   - Update meta tags in `index.html`

3. **Enable Analytics**
   - Uncomment and configure Google Analytics in `index.html`
   - Update tracking in `app.js`

4. **Optimize Performance**
   - Consider self-hosting Tailwind CSS for production
   - Minify CSS and JavaScript
   - Add lazy loading for images

5. **Security Headers**
   - Add security headers via hosting platform
   - Configure HTTPS redirect

6. **Domain Configuration**
   - Update all URLs from `autodocker.dev` to your domain
   - Configure DNS records
   - Setup SSL certificate

## 📊 Performance

- Lighthouse Score Target: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Total Bundle Size: < 500KB

## 🔗 Links

- **VS Code Marketplace**: https://marketplace.visualstudio.com/items?itemName=ShinjanSarkar.auto-docker-extension
- **GitHub**: https://github.com/shinjansarkar/Auto-Docker
- **Reviews**: https://marketplace.visualstudio.com/items?itemName=ShinjanSarkar.auto-docker-extension&ssr=false#review-details

## 📄 License

© 2024 Auto Docker Extension. All rights reserved.

## 🤝 Contributing

For bugs or feature requests related to the website, please open an issue on the main repository.

---

Built with ❤️ for the developer community
