# Personal Portfolio Website

A modern, responsive personal portfolio website built with React for GitHub Pages deployment. This is currently a **draft version** being customized for my personal use.

## Current Status: 🚧 Work in Progress

This portfolio template includes the following sections:
- About Me
- Projects
- Blog
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
git clone https://github.com/simplysindy/simplysindy.github.io.git
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
"homepage": "https://simplysindy.github.io",
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

## Customization Needed

### ⚠️ Items to Update Before Going Live:

1. **Personal Information**
   - Replace `[Your Name]` placeholders throughout the site
   - Update bio and professional background in About section
   - Add your location and contact details

2. **Images** 
   - Add profile photos to `src/assets/images/`
   - Add project images to `public/images/`
   - Current placeholders need to be replaced

3. **Projects**
   - Replace sample projects with your actual work
   - Update project descriptions, technologies, and links

4. **Content**
   - Write your own blog posts in `public/posts/`
   - Update publications in `public/publications.bib`
   - Customize skills and technologies list

5. **Contact Form**
   - Set up EmailJS credentials in Contact component
   - Update social media links in Footer and Contact

6. **Styling** (Optional)
   - Customize color scheme and animations
   - Modify component styling to match your preferences

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions.
Any push to the `main` branch will trigger a new deployment.

Live site: https://simplysindy.github.io

## Acknowledgments

- Original template design by [Benjamin Chew](https://github.com/benjaminchew/benjaminchew.github.io) - Special thanks to Ben for sharing this amazing template! ✨ <3
- Icons from Font Awesome
- Built with React and deployed via GitHub Pages
