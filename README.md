# Yash Tyagi Portfolio

Personal portfolio website built with React + Vite + TypeScript + Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173/my-portfolio/](http://localhost:5173/my-portfolio/)

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

## Deploy to GitHub Pages

### Option 1 — GitHub Actions (recommended)

1. Push this project to a GitHub repository named `my-portfolio`
2. Go to **Settings → Pages** → set Source to **GitHub Actions**
3. Every push to `main` auto-deploys via `.github/workflows/deploy.yml`

Live URL: `https://<your-username>.github.io/my-portfolio/`

### Option 2 — Manual

```bash
npm run build
# Then push the dist/ folder to the gh-pages branch
```

## Stack

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS v4**
- **Framer Motion** — animations
- **Lucide React** — icons
- **Wouter** — client-side routing
- **next-themes** — dark/light mode
- **sonner** — toast notifications
- **react-hook-form** — contact form

## Project Structure

```
src/
├── components/
│   ├── ui/            # shadcn/ui primitives
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Projects.tsx
│   ├── Certifications.tsx
│   ├── Vision.tsx
│   ├── Chatbot.tsx
│   ├── Contact.tsx
│   ├── Resume.tsx
│   ├── Footer.tsx
│   ├── LoadingScreen.tsx
│   ├── ScrollProgress.tsx
│   └── Particles.tsx
├── pages/
│   ├── Home.tsx
│   └── not-found.tsx
├── App.tsx
├── main.tsx
└── index.css
```
