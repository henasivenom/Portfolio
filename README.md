# Mukesh Patel - Portfolio

A minimalist, Bento-grid style portfolio website for a Java Developer & Software Engineer.

## Features

- **Hero Section**: Introduction with call-to-action buttons
- **Mission Statement**: Full-width section highlighting professional mission
- **Services Grid**: Four key services offered
- **Selected Work**: Showcase of projects (ATM Simulator, Airline Management System, Quiz Application)
- **Experience**: Skills in SDLC, Agile, and Scrum
- **Footer**: Links to GitHub and LinkedIn

## Design

- Clean, spacious layout with rounded corners (24-32px)
- Color palette: Soft neutrals, dark charcoal text (#1a1a1a), teal/blue accent
- Bold, oversized Sans-Serif headings with generous line spacing

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS 4
- Vite (with Rolldown)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

## Assets

Replace placeholder images in `/public/` with actual screenshots:
- `placeholder-atm.jpg`
- `placeholder-airline.jpg`
- `placeholder-quiz.jpg`

Add a professional headshot for the hero section if desired.

## Customization

- Colors are defined in `src/index.css` under `@theme`
- Components are in `src/App.tsx`
- For animations, consider adding Framer Motion
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
