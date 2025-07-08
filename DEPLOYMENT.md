# Netlify Deployment Guide

## Quick Deploy

1. **Push your code** to a Git repository (GitHub, GitLab, or Bitbucket)

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your repository
   - Netlify will automatically detect the build settings

3. **Build Settings** (automatically configured):
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

4. **Deploy**: Click "Deploy site"

## Manual Configuration

If you need to manually configure:

### Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

### Environment Variables
Add any required environment variables in the Netlify dashboard under Site settings > Environment variables.

### Custom Domain
1. Go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS settings as instructed

## Troubleshooting

### Build Failures
- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Image Loading Issues
- Ensure images are in the `public/` folder
- Use relative paths starting with `/` (e.g., `/image.jpg`)
- Check file permissions and names

### Routing Issues
- The `_redirects` file handles SPA routing
- Ensure all routes redirect to `index.html`

## Performance Optimization

The project is configured with:
- Code splitting for better loading performance
- Optimized asset handling
- Lazy loading for images
- Minified production builds 