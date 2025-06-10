# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, currently featuring the following sections:
- About Me
- Projects
- Blog
- Projects
- Publications
- Contact information

## Features

- Clean, modern design inspired by professional portfolios
- Responsive layout for all device sizes
- Smooth animations with Framer Motion (Feel free to experiment with other animations if desired)
- React Router for navigation
- Contact form
- Hackathon and Project showcase

## Technologies Used

- React
- React Router
- Styled Components
- Framer Motion
- Font Awesome icons
- EmailJS

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository
```
git clone https://github.com/benjaminchew/benjaminchew.github.io.git
```

2. Install dependencies
```
npm install
```

3. Start the development server
```
npm start
```

4. Open your browser and visit `http://localhost:3000`

## Customization

### Personalizing Content

1. Update the information in the various components

2. Replace placeholder images with your own images in the `src/assets` directory

### Styling

- The color scheme can be modified in each component's styled component definitions
- Global styles are in `src/index.css`
- Animation-specific styles are in `src/App.css`

## Deployment

The site can be deployed to various platforms like Netlify, Vercel, or GitHub Pages.

Example for GitHub Pages:

1. Install GitHub Pages package
```
npm install --save gh-pages
```

2. Add the following to your `package.json`:
```json
"homepage": "https://github.com/benjaminchew/benjaminchew.github.io.git",
"scripts": {
  // other scripts
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy the site
```
npm run deploy
```

## License

This project is currently open source and available under the [MIT License](LICENSE). This may be subject to change in the future.

## Acknowledgments

- Design inspiration from various portfolio websites
- Icons from Font Awesome
