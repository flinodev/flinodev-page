# {flino|dev}

Personal blog and portfolio of Francisco Lino - Full Stack Developer & Cybersecurity Enthusiast.

🌐 **Live Site:** [flino.dev](https://flino.dev)

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build) v4
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [Solid.js](https://www.solidjs.com)
- **Deployment:** [Vercel](https://vercel.com)
- **Comments:** [Giscus](https://giscus.app) (GitHub Discussions)
- **View Counter:** [Upstash Redis](https://upstash.com)

## ✨ Features

- 📝 Blog with markdown/MDX support
- 💬 Comments system with GitHub Discussions
- 👁️ Animated view counter per post
- 🌙 Dark mode support
- 🔍 Search functionality
- 📊 RSS feed
- 🎨 Responsive design
- ⚡ Optimized performance (SSG + Serverless)

## 🛠️ Development

### Prerequisites

- Node.js 18+ or 20+
- Yarn package manager

### Install dependencies

```bash
yarn install
```

### Setup environment variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Required environment variables:
- `UPSTASH_REDIS_REST_URL` - For view counter (get from [Upstash](https://console.upstash.com))
- `UPSTASH_REDIS_REST_TOKEN` - For view counter
- `GISCUS_REPO_ID` - For comments (get from [Giscus](https://giscus.app))
- `GISCUS_CATEGORY_ID` - For comments

### Run development server

```bash
yarn dev
```

Open [http://localhost:4321](http://localhost:4321)

### Build for production

```bash
yarn build
```

### View statistics

```bash
# View post view statistics
yarn views:stats
```

## 📂 Project Structure

```
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   ├── content/      # Blog posts and projects
│   ├── layouts/      # Page layouts
│   ├── pages/        # Routes and API endpoints
│   └── styles/       # Global styles
├── scripts/          # Utility scripts
└── astro.config.mjs  # Astro configuration
```

## 🚢 Deployment

This site is automatically deployed to Vercel on every push to `main`.

### Environment Variables on Vercel

Make sure to add the following environment variables in your Vercel project settings:

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `GISCUS_REPO_ID`
- `GISCUS_CATEGORY_ID`

## 📄 License

MIT

## 👤 Author

**Francisco Lino**

- Website: [flino.dev](https://flino.dev)
- GitHub: [@flinodev](https://github.com/flinodev)
- LinkedIn: [Francisco Lino](https://www.linkedin.com/in/flinodev/)

---

Built with ❤️ using Astro
