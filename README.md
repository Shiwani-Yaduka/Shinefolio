# Portfolio Website

A modern React portfolio website built with Vite, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Dark/Light mode support
- Smooth animations with Framer Motion
- Modern UI with Tailwind CSS
- TypeScript for type safety

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment on Netlify

This project is configured for easy deployment on Netlify:

1. **Connect your repository** to Netlify
2. **Build settings** are automatically configured:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

3. **Environment variables** (if needed):
   - Add any required environment variables in Netlify dashboard

4. **Custom domain** (optional):
   - Configure your custom domain in Netlify dashboard

## Project Structure

```
├── public/                 # Static assets
│   ├── _redirects         # Netlify SPA routing
│   └── linkedin-profile.jpg
├── src/
│   ├── assets/            # Source assets
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── context/          # React context
│   └── main.tsx          # Entry point
├── netlify.toml          # Netlify configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies and scripts
```

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- React Router DOM 