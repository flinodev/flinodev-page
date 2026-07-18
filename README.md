# {flino|dev}

Personal blog and portfolio of Francisco Lino - Full Stack Developer & Cybersecurity Enthusiast.

🌐 **Live Site:** [flino.dev](https://flino.dev)

![Lighthouse score: 100 in Performance, Accessibility, Best Practices and SEO](docs/lighthouse.png)

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build) v5
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [Solid.js](https://www.solidjs.com)
- **Deployment:** [Vercel](https://vercel.com)
- **Comments:** [Giscus](https://giscus.app) (GitHub Discussions)
- **View Counter:** [Upstash Redis](https://upstash.com)

## ✨ Features

- 📝 Blog with markdown/MDX support (Astro content collections)
- 💬 Comments system with GitHub Discussions
- 👁️ Animated view counter per post
- 🌙 Dark mode support
- 🔍 Client-side search powered by [Fuse.js](https://www.fusejs.io)
- 🖼️ Open Graph image generation with `@vercel/og`
- 📊 RSS feed and sitemap
- 📈 Vercel Analytics & Speed Insights
- 🎨 Responsive design
- ⚡ Optimized performance (SSG + Serverless)

## 🛠️ Development

### Prerequisites

- Node.js 20+
- Yarn (classic)

### Setup

```bash
yarn install
cp .env.example .env
```

Fill in the credentials in `.env`:

| Variable                   | Purpose                                                           |
| -------------------------- | ----------------------------------------------------------------- |
| `UPSTASH_REDIS_REST_URL`   | View counter — see [VIEW_COUNTER_SETUP.md](VIEW_COUNTER_SETUP.md) |
| `UPSTASH_REDIS_REST_TOKEN` | View counter                                                      |
| `GISCUS_REPO_ID`           | Comments — see [GISCUS_SETUP.md](GISCUS_SETUP.md)                 |
| `GISCUS_CATEGORY_ID`       | Comments                                                          |

### Commands

| Command                             | Action                                                      |
| ----------------------------------- | ----------------------------------------------------------- |
| `yarn dev`                          | Start dev server at [localhost:4321](http://localhost:4321) |
| `yarn dev:network`                  | Dev server accessible from other devices on the network     |
| `yarn build`                        | Type-check (`astro check`) and build for production         |
| `yarn preview`                      | Preview the production build locally                        |
| `yarn lint` / `yarn lint:fix`       | Lint with ESLint                                            |
| `yarn format` / `yarn format:check` | Format with Prettier                                        |
| `yarn optimize:images`              | Convert images in `public/images` to WebP                   |

## ✍️ Writing a Post

Posts live in `src/content/blog/<slug>/index.md` (or `.mdx`). The slug of the folder becomes the URL. Frontmatter schema (validated in [`src/content.config.ts`](src/content.config.ts)):

```yaml
---
title: "Post title"
summary: "Short description used in listings and SEO."
date: "Oct 09 2024"
tags:
  - Node
draft: false # optional — hides the post when true
image: "/images/blog/cover.webp" # optional — cover image
comments: true # optional — defaults to true
---
```

Files prefixed with `_` are ignored by the content loader. The `projects`, `work` and `legal` collections follow the same pattern with their own schemas.

## 📂 Project Structure

```
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable components
│   ├── content/       # Content collections: blog, projects, work, legal
│   ├── layouts/       # Page layouts
│   ├── pages/         # Routes and API endpoints
│   └── styles/        # Global styles
├── scripts/           # Build scripts (Vercel post-build)
├── docs/              # README assets
└── astro.config.mjs   # Astro configuration
```

## 🚢 Deployment

This site is automatically deployed to Vercel on every push to `main`.

Add the same four environment variables from [Setup](#setup) in your Vercel project settings.

## 📚 Additional Docs

- [GISCUS_SETUP.md](GISCUS_SETUP.md) — configuring the comments system
- [VIEW_COUNTER_SETUP.md](VIEW_COUNTER_SETUP.md) — configuring the Upstash view counter
- [OPTIMIZATION.md](OPTIMIZATION.md) — performance optimization notes

## 📄 License

MIT

## 👤 Author

**Francisco Lino**

- Website: [flino.dev](https://flino.dev)
- GitHub: [@flinodev](https://github.com/flinodev)
- LinkedIn: [Francisco Lino](https://www.linkedin.com/in/flinodev/)

---

Built with ❤️ using Astro
