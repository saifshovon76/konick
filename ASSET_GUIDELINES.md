# Asset Guideline - KONICK Portfolio

This guide explains how to manage images and videos for your portfolio to maintain the high-end editorial aesthetic.

## Folder Structure
Recommended structure:
- `/public/assets/images/`
- `/public/assets/video/`

## Visual Styling Requirements (CRITICAL)
To maintain the site's identity, all primary images must adhere to:
1. **Moderate Rounding**: Use `rounded-[40px]`.
2. **Editorial Tilt**: Apply CSS rotation (e.g., `rotate-3` or `-rotate-2`) to avoid a basic grid look.
3. **Clipping Fix**: Always wrap animated image containers with the `.fix-rounded-overflow` class to prevent "corner flashing" during transitions.

## Image Specification Checklist
1. **Hero Profile** (`img1.jpg`): 1200x600 (2:1 Landscape). Focus on abstract or high-profile concepts.
2. **About Me** (`img2.jpg`): 600x800 (3:4 Portrait). 
3. **Skills Visualization** (`img3.jpg`): 1200x800. Highly abstract/technical.
4. **Project Spotlight** (`img4.jpg`): 1200x800 (16:9 recommended).
5. **Experience Journey** (`img5.jpg`): 1200x1200 (1:1 High-Res).
6. **Contact Deco** (`img6.jpg`): 800x800.

## Performance Optimization
- **Formats**: Prefer **WebP** for transparency/quality or **AVIF** for maximum compression.
- **Budget**: Keep primary images under **400KB**.
- **Video**: `hero-bg.mp4` should be optimized for web playback (H.264/AAC, < 5MB).

## Code Usage
Replace placeholders in components using paths relative to the public folder:
`<img src="/assets/images/imgX.webp" className="rounded-[40px] ..." />`

## Mobile Optimization
- **Video**: Hidden on mobile to save bandwidth/battery.
- **Scaling**: Grid layouts switch to vertical stacks; ensures images maintain aspect ratio without distortion.
- **Interactivity**: Floating cursor and hover rotations are suppressed on touch devices.
