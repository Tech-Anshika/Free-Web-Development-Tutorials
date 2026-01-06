# Vercel Deployment Guide for CodeNexus Academy

## ✅ GitHub Repository Ready!
Your code is now on GitHub: https://github.com/Tech-Anshika/Free-Web-Development-Tutorials

## 🚀 Deploy to Vercel (3 Easy Steps)

### Method 1: Vercel Dashboard (Recommended - Easiest)

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Sign up/Login with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your repository: `Tech-Anshika/Free-Web-Development-Tutorials`
   - Click "Import"

3. **Configure & Deploy**
   - Framework Preset: **Other** (or leave default)
   - Root Directory: `./` (default)
   - Build Command: Leave empty (static site)
   - Output Directory: Leave empty
   - Click **"Deploy"**

4. **Done!** 
   - Your site will be live in ~30 seconds
   - URL will be: `https://free-web-development-tutorials.vercel.app` (or similar)

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (from project directory)
cd E:\study-web
vercel

# For production
vercel --prod
```

## 📝 After Deployment

### 1. Update URLs in Files

After deployment, Vercel will give you a URL. Update these files with your actual Vercel URL:

**Files to update:**
- `index.html` - All meta tags (og:url, twitter:url, canonical, structured data)
- `sitemap.xml` - All location URLs
- `robots.txt` - Sitemap URL

**Current placeholder URLs:**
- `codnexus-academy.vercel.app` → Replace with your actual Vercel URL

### 2. Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update all URLs in files with your custom domain

## 🔍 SEO Setup After Deployment

### 1. Google Search Console
- Go to: https://search.google.com/search-console
- Add property: Your Vercel URL
- Submit sitemap: `https://your-url.vercel.app/sitemap.xml`

### 2. Test SEO
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema Validator](https://validator.schema.org/)

## 📦 What's Included

✅ All HTML, CSS, JavaScript files
✅ SEO optimized (meta tags, structured data)
✅ Sitemap.xml
✅ Robots.txt
✅ Vercel.json configuration
✅ Responsive design
✅ Interactive code examples

## 🎯 Your Repository

**GitHub:** https://github.com/Tech-Anshika/Free-Web-Development-Tutorials

**To update code:**
```bash
git add .
git commit -m "Your message"
git push
```
Vercel will auto-deploy on every push!

## ⚡ Quick Commands

```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Update description"

# Push to GitHub (auto-deploys on Vercel)
git push
```

## 🎉 You're All Set!

Your website is ready to deploy. Just follow the steps above and your site will be live in minutes!

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

