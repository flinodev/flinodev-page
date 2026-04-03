# Giscus Setup Guide

## ✅ What Has Been Implemented

### Files Created:
1. **`src/components/Giscus.astro`** - Comment system component
2. **`.env.example`** - Environment variables template

### Files Modified:
1. **`src/layouts/ArticleBottomLayout.astro`** - Added comments section after article content
2. **`src/content/config.ts`** - Added `comments` field to blog and projects schemas
3. **`src/env.d.ts`** - Added TypeScript types for environment variables

### Features Implemented:
- ✅ Giscus component with environment variable support
- ✅ Conditional comments display (can be disabled per post)
- ✅ Responsive comments section with dark mode support
- ✅ Spanish language configuration
- ✅ Proper styling matching the site design

## 🚀 Next Steps (Required)

### Step 1: Enable GitHub Discussions

1. Go to your repository settings: https://github.com/flinodev/flinodev-page/settings
2. Scroll to "Features" section
3. Check the "Discussions" checkbox

### Step 2: Install Giscus App

1. Visit https://github.com/apps/giscus
2. Click "Install"
3. Select "Only select repositories"
4. Choose `flinodev/flinodev-page`
5. Click "Install"

### Step 3: Get Configuration IDs

1. Visit https://giscus.app/
2. Fill in the configuration:
   - **Repository:** `flinodev/flinodev-page`
   - **Page ↔️ Discussions Mapping:** pathname
   - **Discussion Category:** Choose "General" or create a new "Comments" category
   - **Theme:** preferred_color_scheme

3. Scroll down to see the generated script
4. Copy these two values from the script:
   - `data-repo-id="R_kgDO..."`
   - `data-category-id="DIC_kwDO..."`

### Step 4: Create Environment File

1. Copy the example file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and replace the placeholder values:
   ```env
   GISCUS_REPO_ID=R_kgDO...  # Your actual repo ID from giscus.app
   GISCUS_CATEGORY_ID=DIC_kwDO...  # Your actual category ID from giscus.app
   ```

### Step 5: Test Locally

1. Start the development server:
   ```bash
   yarn dev
   ```

2. Open any blog post: http://localhost:4321/blog/[post-slug]

3. Scroll to the bottom - you should see the "Comentarios" section

4. Click "Sign in with GitHub" to test commenting

### Step 6: Deploy

Once everything works locally:

```bash
# Make sure to set environment variables in your hosting platform
# For example, on Vercel/Netlify, add:
# GISCUS_REPO_ID=your-value
# GISCUS_CATEGORY_ID=your-value

yarn build
```

## 💡 Usage

### Disable Comments on Specific Posts

Add `comments: false` to the frontmatter of any post:

```markdown
---
title: "My Private Post"
summary: "This post won't have comments"
date: 2024-01-01
tags: ["example"]
comments: false  # ← Add this line
---
```

### Default Behavior

- Comments are **enabled by default** on all blog posts and projects
- Readers need a GitHub account to comment
- Comments are stored in GitHub Discussions
- You can moderate comments directly on GitHub

## 🔍 Verification Checklist

- [ ] GitHub Discussions enabled on repository
- [ ] Giscus app installed and authorized
- [ ] `.env` file created with correct IDs
- [ ] Development server shows comment section
- [ ] Can sign in with GitHub
- [ ] Can post a test comment
- [ ] Comment appears in GitHub Discussions
- [ ] Dark mode switches correctly
- [ ] Environment variables set in hosting platform

## 📚 Resources

- **Giscus Website:** https://giscus.app/
- **Giscus Documentation:** https://github.com/giscus/giscus
- **GitHub Discussions:** https://github.com/flinodev/flinodev-page/discussions
- **Advanced Usage:** https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md

## 🛠️ Troubleshooting

### Comments not showing up
- Check that `.env` file exists and has correct values
- Verify GitHub Discussions is enabled
- Check browser console for errors

### "Error: Bad credentials"
- Verify the `data-repo-id` and `data-category-id` are correct
- Make sure Giscus app has access to your repository

### Comments in wrong language
- Change `data-lang="es"` to `data-lang="en"` in `src/components/Giscus.astro` if needed

---

**Need help?** Check the Giscus documentation or open an issue on the Giscus repository.
