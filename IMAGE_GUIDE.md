# Image Placeholders Guide

This document lists all the images needed for the website and where to source them.

## Required Images

### 1. Logo (`/assets/img/logo.png`)

- **Size**: 200x200px minimum (will display at ~48px height)
- **Format**: PNG with transparent background
- **Description**: Your company logo with cream background
- **Status**: ✅ You already have this

### 2. Hero Background (`/assets/img/hero-bg.jpg`)

- **Size**: 1920x1080px (Full HD)
- **Format**: JPG (optimized, ~200-300KB)
- **Description**: Modern construction site, architectural building, or engineering work
- **Suggested sources**:
  - Unsplash: https://unsplash.com/s/photos/modern-architecture
  - Pexels: https://www.pexels.com/search/construction/
  - Pixabay: https://pixabay.com/images/search/architecture/

### 3. Equipment Images (4 images)

#### Equipment 1 (`/assets/img/equipment-1.jpg`)

- **Size**: 600x400px
- **Format**: JPG (optimized, ~100KB)
- **Description**: Thermal imaging camera
- **Keywords**: thermal camera, infrared camera, building inspection

#### Equipment 2 (`/assets/img/equipment-2.jpg`)

- **Size**: 600x400px
- **Format**: JPG (optimized, ~100KB)
- **Description**: Moisture detector device
- **Keywords**: moisture meter, humidity detector, building tools

#### Equipment 3 (`/assets/img/equipment-3.jpg`)

- **Size**: 600x400px
- **Format**: JPG (optimized, ~100KB)
- **Description**: Gas analyzer equipment
- **Keywords**: gas analyzer, HVAC testing, energy audit tools

#### Equipment 4 (`/assets/img/equipment-4.jpg`)

- **Size**: 600x400px
- **Format**: JPG (optimized, ~100KB)
- **Description**: Measuring instruments (laser, level, etc.)
- **Keywords**: laser measure, construction tools, measuring equipment

### 4. Equipment Showcase (`/assets/img/equipment-showcase.jpg`)

- **Size**: 800x600px
- **Format**: JPG (optimized, ~150KB)
- **Description**: Professional using technical equipment on site
- **Keywords**: building inspector, energy auditor, construction professional

### 5. Social Preview Image (`/assets/img/social-preview.jpg`)

- **Size**: 1200x630px (Facebook/Twitter standard)
- **Format**: JPG (optimized, ~200KB)
- **Description**: Branded image with logo, service highlights, or professional building photo
- **Usage**: Shows when website is shared on social media

### 6. Favicons

#### Favicon 32x32 (`/assets/img/favicon-32x32.png`)

- **Size**: 32x32px
- **Format**: PNG

#### Favicon 16x16 (`/assets/img/favicon-16x16.png`)

- **Size**: 16x16px
- **Format**: PNG

#### Apple Touch Icon (`/assets/img/apple-touch-icon.png`)

- **Size**: 180x180px
- **Format**: PNG

## Best Free Image Sources

### Royalty-Free Stock Photos

1. **Unsplash** (https://unsplash.com/)

   - High-quality images
   - No attribution required
   - Best for: Architecture, construction, modern buildings

2. **Pexels** (https://www.pexels.com/)

   - Wide variety
   - Free for commercial use
   - Best for: Equipment photos, professional workers

3. **Pixabay** (https://pixabay.com/)

   - Good selection
   - Public domain images
   - Best for: Tools, technical equipment

4. **Burst by Shopify** (https://burst.shopify.com/)
   - Business-focused images
   - Free commercial use
   - Best for: Professional services imagery

### Specific Search Queries

Use these search terms to find relevant images:

- "modern architecture"
- "building inspection"
- "energy audit"
- "construction site"
- "thermal imaging camera"
- "professional engineer"
- "building exterior"
- "residential construction"
- "commercial building"
- "measuring tools"

## Image Optimization

Before adding images to your website, optimize them for web:

### Online Tools (Free)

1. **TinyPNG** (https://tinypng.com/)

   - Compress PNG and JPG files
   - Maintains quality while reducing file size
   - Recommended for all images

2. **Squoosh** (https://squoosh.app/)

   - Google's image compression tool
   - Compare before/after
   - Advanced options available

3. **ImageOptim** (https://imageoptim.com/) - Mac only
   - Desktop app
   - Batch optimization
   - Lossless compression

### Optimization Guidelines

- **Hero images**: Keep under 300KB
- **Equipment photos**: Keep under 150KB each
- **Logo**: Keep under 50KB
- **Use WebP format** (optional): Modern format with better compression
- **Maintain aspect ratios**: Don't distort images
- **Test on mobile**: Ensure images load quickly on slow connections

## Favicon Generation

Use these online tools to create all favicon sizes from your logo:

1. **RealFaviconGenerator** (https://realfavicongenerator.net/)

   - Upload your logo
   - Generates all required sizes
   - Provides HTML code
   - Best option for complete favicon set

2. **Favicon.io** (https://favicon.io/)
   - Simple interface
   - PNG to favicon converter
   - Quick generation

## Current Image Status

- ✅ Logo (you have this)
- ❌ Hero background (needs to be added)
- ❌ Equipment images 1-4 (needs to be added)
- ❌ Equipment showcase (needs to be added)
- ❌ Social preview (needs to be added)
- ❌ Favicons (needs to be generated)

## Quick Start: Adding Images

1. Download images from the sources above
2. Optimize them using TinyPNG or Squoosh
3. Rename them according to the list above
4. Place them in `/assets/img/` folder
5. Clear your browser cache and refresh the page

## Temporary Placeholders

While sourcing images, you can use placeholder services:

- **Lorem Picsum**: `https://picsum.photos/1920/1080` (replace dimensions as needed)
- **Placeholder.com**: `https://via.placeholder.com/600x400`

Example in HTML:

```html
<img src="https://picsum.photos/1920/1080" alt="Temporary placeholder" />
```

## Notes

- Always check the license before using images commercially
- Attribute photographers if required by the license
- Keep backup copies of original, uncompressed images
- Test website performance after adding all images
- Consider using lazy loading (already implemented in the code)
