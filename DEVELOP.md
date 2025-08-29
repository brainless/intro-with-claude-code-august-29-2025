# Development Guide

This guide provides step-by-step instructions for setting up and running the Party Management App locally.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18 or higher) - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** for version control

## Local Setup

### 1. Clone the Repository

```bash
git clone [your-repo-url]
cd party-management-app
```

### 2. Install Dependencies

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:4321` (default Astro port).

## Available Scripts

### Development

```bash
# Start development server with hot reload
npm run dev
```

### Production Build

```bash
# Build the application for production
npm run build

# Preview the production build locally
npm run preview
```

### Code Quality (if configured)

```bash
# Run linter
npm run lint

# Run type checker
npm run typecheck
```

## Project Structure

```
party-management-app/
├── src/
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Page layout templates
│   ├── pages/          # Route pages (file-based routing)
│   └── styles/         # Global styles and CSS
├── public/             # Static assets
├── package.json        # Dependencies and scripts
└── astro.config.mjs    # Astro configuration
```

## Development Workflow

1. **Start the dev server**: `npm run dev`
2. **Make your changes** in the `src/` directory
3. **View changes** automatically refresh in your browser
4. **Test your build** with `npm run build` before committing
5. **Preview production** with `npm run preview`

## Styling Guide

The app uses **Tailwind CSS** with an earthy pastel color palette:

- **Sage green**: `#9CAF88`
- **Terracotta**: `#C4A484`
- **Cream**: `#F5F1E8`
- **Muted lavender**: `#B8A9C9`
- **Clay**: `#D4A574`

Use Tailwind utility classes for consistent styling throughout the application.

## Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process using port 4321
npx kill-port 4321
```

**Module not found errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Clear Astro cache
rm -rf .astro
npm run build
```

## Additional Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Project README](./README.md)
- [Claude Code Configuration](./CLAUDE.md)