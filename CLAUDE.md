# Claude Configuration

## Commit Message Format
When creating commits, do not include the "Co-Authored-By: Claude" line in commit messages.

## Project Overview
- **Purpose**: Create a personal GitHub Pages portfolio site (simplysindy.github.io)
- **Status**: Live portfolio with basic personalization ✨
- **Deployment**: Automatic deployment from main branch via GitHub Actions
- **Template Source**: Based on Benjamin Chew's portfolio design (with acknowledgment)

## Current Implementation Status

### ✅ Completed
- React app structure copied and cleaned
- GitHub Actions workflow configured for automatic deployment
- Repository connected to simplysindy.github.io domain
- Build issues resolved (missing image imports, ESLint errors fixed)
- Basic personalization with "Sindy" branding
- Page title updated to "Sindy | Personal Portfolio"
- Personal tagline and bio added
- Accessibility issues fixed (invalid href links removed)
- Valid GitHub link in footer
- Clean placeholder content for missing elements

### 🚧 Still Needs Customization
- Real profile photos (currently placeholder divs)
- Actual project content and descriptions (currently sample projects)
- Custom blog posts (currently has sample post)
- Personal publications (currently empty template)
- Real social media links (LinkedIn, etc.)
- EmailJS setup for contact form functionality
- Skills list customization
- Project images

## Development Notes
- Build commands: `npm install`, `npm start` (development), `npm run build` (production)
- Deployment: Automatic via GitHub Actions on push to main
- Live site: https://simplysindy.github.io (✅ Currently live and functional)
- Site successfully builds and deploys without errors

## Remaining Tasks for Full Customization
1. Add real profile photos to replace placeholder divs
2. Update project section with actual work and images
3. Write personal blog posts to replace sample content
4. Add real publications or remove section
5. Set up EmailJS credentials for working contact form
6. Add real LinkedIn and social media URLs
7. Customize skills list to match actual expertise
8. Optional: Customize colors/styling to personal preference