# DevOps Portfolio

A modern, single-page DevOps engineer portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 16 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- ESLint

## Features

- Responsive one-page portfolio layout
- Sections for:
- Hero and value proposition
- Skills matrix
- Project showcase
- Certifications
- Blog and open source highlights
- Contact section
- Dark/light theme toggle with persisted preference
- Optimized image handling with `next/image`

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  theme-toggle.tsx
next.config.mjs
tailwind.config.ts
tsconfig.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open `http://localhost:3000`.

### 3. Build for production

```bash
npm run build
```

### 4. Start production server

```bash
npm run start
```

### 5. Lint

```bash
npm run lint
```

## Customization Guide

- Update portfolio content in `app/page.tsx`:
- Name, headline, summary
- Skills matrix
- Project cards
- Certifications
- Contact details and links
- Replace placeholder images (`placehold.co`) with real assets.
- Add your resume at `public/resume.pdf` (create `public/` if it does not exist).
- Update metadata in `app/layout.tsx` (`title`, `description`).

## Configuration Notes

- `next.config.mjs` uses:
- `distDir: ".next-app"` for build artifacts
- remote image pattern for `https://placehold.co`
- Scripts use Webpack mode:
- `dev`: `next dev --webpack`
- `build`: `next build --webpack`

## Troubleshooting

- PowerShell script policy may block `npm` (`npm.ps1 cannot be loaded`).
- Use `npm.cmd run dev` instead, or run in Command Prompt/Git Bash.
- If local port `3000` is busy:
- `npm run dev -- --port 3001`

## License

Private project (no license specified).
