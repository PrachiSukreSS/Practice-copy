# RSCOE Coding Club Landing Page

A React-based landing page for the RSCOE Coding Club. The project presents the club's mission, activities, and community through a dark, space-inspired interface with a background image, reusable React components, Tailwind CSS styling, and a Three.js star-field effect.

## Features

- Responsive landing page layout built with React.
- Navigation header with links for Home, About Us, Events, Our Team, and Login.
- Hero section with the main message: **Learn - Grow - Inspire With Us**.
- About section describing the Coding Club's mission, activities, and invitation to join.
- Space-themed visual background using the image in `public/bg.png`.
- Animated-style gradient call-to-action button built with Tailwind utility classes.
- Three.js star-field background rendered by the `SpaceWarp` component.
- React Icons for navigation and interface icons.

## Tech Stack

- **React 18** - UI components and application structure
- **Vite 6** - Development server and production bundling
- **Tailwind CSS 3** - Utility-first styling
- **Three.js** - WebGL star-field effect
- **React Icons** - Header and content icons
- **PostCSS + Autoprefixer** - CSS processing
- **ESLint** - JavaScript and React linting

## Project Structure

```text
Practice-copy/
├── public/
│   ├── bg.png                 # Main landing-page background image
│   ├── logo3.png              # Coding Club logo
│   ├── reflect bg.mp4         # Additional visual asset
│   └── project tools.txt      # Project research/tool notes
├── src/
│   ├── Components/
│   │   ├── AboutPage.jsx      # Club mission, activities, and join section
│   │   ├── Header.jsx         # Logo and navigation bar
│   │   ├── HeroSection.jsx    # Main landing-page hero content
│   │   └── Space.jsx          # Three.js star-field background
│   ├── assets/
│   │   └── react.svg          # Default React asset
│   ├── App.jsx                # Root page composition and background layout
│   ├── App.css                # Legacy Vite starter styles
│   ├── index.css              # Tailwind CSS directives
│   └── main.jsx               # React application entry point
├── index.html                 # HTML document and root mount element
├── eslint.config.js           # ESLint configuration
├── postcss.config.js          # Tailwind and Autoprefixer configuration
├── tailwind.config.js         # Tailwind content scanning configuration
├── vite.config.js             # Vite React plugin configuration
└── package.json               # Scripts and dependencies
```

## Application Flow

`src/main.jsx` mounts the React application into the `#root` element in `index.html`. `App.jsx` composes the page from `Header`, `HeroSection`, and `AboutPage`, while the public background image is positioned behind the content. `AboutPage` includes `Space`, which creates a Three.js scene and renders a collection of stars on a full-screen canvas layer.

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/PrachiSukreSS/Practice-copy.git
cd Practice-copy
npm install
```

### Run the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Current Navigation Notes

The header includes links to `/`, `/about`, `/events`, `/team`, and `/login`. The current project does not include a React Router setup or separate page components for those paths, so the links are currently presentational and will need routing or additional pages to become fully functional.

## Future Improvements

- Add React Router and implement the About, Events, Team, and Login pages.
- Connect the hero call-to-action button to a meaningful action or registration page.
- Add responsive navigation for smaller screens.
- Improve Three.js cleanup by disposing of geometries, materials, and the renderer on unmount.
- Add window-resize handling for the Three.js camera and renderer.
- Replace unused starter styles and assets with project-specific styles and content.
- Add automated tests and a deployment workflow.

## License

No license has been specified for this repository yet.
