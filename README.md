# Syahreza Adnan Portfolio

A modern, animated portfolio website built with Astro, GSAP, and Tailwind CSS v4. Showcasing work experience, projects, competitions, and achievements.

## 🚀 Live Demo

[https://syahrezaadnanalalzhar.github.io/syahreza_adnan_portfolio/](https://syahrezaadnanalalzhar.github.io/syahreza_adnan_portfolio/)

## ✨ Features

- **Modern Stack**: Built with Astro 5.16.5 for optimal performance
- **Smooth Animations**: GSAP-powered scroll animations with responsive behavior
- **Type-Safe Content**: Astro Content Collections with Zod validation
- **Responsive Design**: Mobile-first approach (375px, 768px, 1024px, 1440px breakpoints)
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Aurora Background**: Animated gradient background with cursor-following on desktop
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Lazy loading, preload hints, optimized fonts

## 📁 Project Structure

```
syahreza_adnan_portfolio/
├── public/
│   └── images/
│       ├── profile_picture.jpg
│       ├── experiences/
│       ├── projects/
│       ├── organizations/
│       ├── competitions/
│       ├── education/
│       └── tech-stack/
├── src/
│   ├── components/
│   │   ├── cards/           # Card components
│   │   ├── common/          # Shared components
│   │   ├── layout/          # Layout components
│   │   ├── sections/        # Home page sections
│   │   └── ui/              # UI components
│   ├── content/
│   │   ├── config.ts        # Content Collections schemas
│   │   ├── experiences/
│   │   ├── projects/
│   │   ├── organizations/
│   │   ├── competitions/
│   │   └── education/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── experience.astro
│   │   ├── projects.astro
│   │   ├── organization.astro
│   │   ├── competition.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) 5.16.5
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4.1.18
- **Animations**: [GSAP](https://greensock.com/gsap/) 3.14.2
- **Fonts**: Google Fonts (Quantico, Montserrat)
- **Deployment**: GitHub Pages

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 🎨 Customization

### Updating Personal Information

1. **Profile Photo**: Replace `public/images/profile_picture.jpg`
2. **CV Link**: Update Google Docs link in `src/components/sections/Hero.astro`
3. **Social Links**: Modify `socialLinks` in `Hero.astro` and `Footer.astro`

### Adding Content

Create new markdown files in `src/content/`:

**Work Experience** (`experiences/`):

```markdown
---
title: "Position Title"
company: "Company Name"
location: "City, Country"
startDate: "Month YYYY"
endDate: "Month YYYY"
image: "images/experiences/logo.svg"
techStack: ["React", "Node.js"]
order: 1
isRemote: false
---

Job description here.
```

**Projects** (`projects/`):

```markdown
---
title: "Project Name"
date: "Month YYYY"
image: "images/projects/screenshot.svg"
projectLink: "https://..."
techStack: ["Python", "TensorFlow"]
category: "ai-ml"
order: 1
---

Project details here.
```

Similar structure for `organizations/`, `competitions/`, and `education/`.

### Replacing Placeholder Images

All placeholders are in `public/images/`. Replace with:

- **Logos**: SVG or PNG (transparent)
- **Screenshots**: WebP or JPG (16:9 ratio)
- **Tech icons**: SVG (64x64px)

Optimize images before uploading (TinyPNG, Squoosh).

### Theme Colors

Edit `src/styles/global.css`:

```css
@theme {
  --color-neon-yellow: #ffe61f;
  --color-neon-orange: #ff991c;
}
```

## 🚀 Deployment

Automatically deploys to GitHub Pages on push to `master` branch.

**Manual deployment**:

1. Build: `npm run build`
2. Deploy via `.github/workflows/deploy.yml`

**Custom domain**:

1. Add `CNAME` file to `public/`
2. Update `site` in `astro.config.mjs`

## 📱 Responsive Design

- **Mobile**: <768px (minimal animations)
- **Tablet**: 768-1023px (moderate animations)
- **Desktop**: ≥1024px (full animations + cursor aurora)
- **Large**: ≥1440px (optimized spacing)

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Skip to content link
- Screen reader support
- Respects `prefers-reduced-motion`

## 🎯 Performance

- Lazy loading images
- Preload critical resources
- Optimized fonts
- Tree-shaken CSS/JS
- Static site generation
- Lighthouse score: >90

## 👨‍💻 Author

**Syahreza Adnan Al Azhar**

- LinkedIn: [syahrezaadnan](https://www.linkedin.com/in/syahrezaadnan/)
- GitHub: [@syahrezaadnanalalzhar](https://github.com/syahrezaadnanalalzhar)
- Email: syahreza.adnan1@gmail.com
- Behance: [syahrezaadnan](https://www.behance.net/syahrezaadnan)

## 📄 License

Open source for personal use. Please provide attribution.

---

**Note**: Replace placeholder SVG images with actual images for production. See `public/images/*/README.md` for requirements.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
