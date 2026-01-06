# Vercel Deployment Guide

## Quick Deploy Steps

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **For Production**:
```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard (Easiest)

1. **Go to [vercel.com](https://vercel.com)** and sign up/login

2. **Click "Add New Project"**

3. **Import your Git repository** (GitHub, GitLab, or Bitbucket)
   - OR drag and drop your project folder

4. **Configure Project**:
   - Framework Preset: **Other**
   - Root Directory: `./` (leave as default)
   - Build Command: Leave empty (static site)
   - Output Directory: Leave empty

5. **Click "Deploy"**

### Method 3: Using GitHub Integration

1. **Push your code to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/codnexus-academy.git
git push -u origin main
```

2. **Go to Vercel Dashboard**
3. **Click "Import Project"**
4. **Select your GitHub repository**
5. **Configure and Deploy**

## Post-Deployment

### Update URLs (Important!)

After deployment, Vercel will give you a URL like:
- `https://codnexus-academy-xyz.vercel.app`

**Update these files with your actual Vercel URL:**
1. `index.html` - All meta tags and structured data URLs
2. `sitemap.xml` - All location URLs
3. `robots.txt` - Sitemap URL

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Update all URLs in the files above with your custom domain

## SEO Checklist

✅ Meta tags configured
✅ Structured data (JSON-LD) added
✅ Sitemap.xml created
✅ Robots.txt configured
✅ Open Graph tags added
✅ Twitter Card tags added
✅ Canonical URLs set
✅ Mobile responsive
✅ Fast loading (static files)

## Testing SEO

After deployment, test your SEO:

1. **Google Search Console**: Submit sitemap
   - URL: `https://your-domain.vercel.app/sitemap.xml`

2. **Test with tools**:
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [SEO Checker](https://www.seoptimer.com/)

3. **Check structured data**:
   - [Schema.org Validator](https://validator.schema.org/)

## Performance Tips

- ✅ All files are static (fast loading)
- ✅ Images optimized (if any added later)
- ✅ CSS and JS minified (Vercel does this automatically)
- ✅ CDN enabled (Vercel provides global CDN)

## Troubleshooting

### If deployment fails:
- Check `vercel.json` syntax
- Ensure all files are in the root directory
- Check for any build errors in Vercel logs

### If SEO not working:
- Verify all URLs are updated correctly
- Check sitemap.xml is accessible
- Verify robots.txt is accessible
- Test structured data with validator

## Support

For issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

