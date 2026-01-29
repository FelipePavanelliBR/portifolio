# Development History - Felipe Pavanelli Portfolio

## Session Date: January 25, 2026

### Project Overview
React-based portfolio website for Felipe Pavanelli, showcasing work as a Game Developer, Technical Artist, 3D Modeler, Animator, and Videographer. The site features a canvas-based scroll animation using 210 frames of a biped animation.

---

## Phase 1: Initial Codebase Analysis

### Findings
The project had a working hero section with:
- Frame-by-frame scroll animation (210 PNG frames)
- Canvas-based rendering
- Basic navigation structure
- Pixel-art aesthetic using Pixelify Sans font

### Issues Identified

#### Critical Bugs
1. **Easing not working** (src/Hero.jsx:69)
   - `currentFrameIndex += diff * 1` meant no smoothing
   - Fixed by changing to `diff * 0.1`

2. **Invalid CSS syntax** (src/index.css:4)
   - `font-weight: <400>` had invalid brackets
   - Fixed to `font-weight: 400`

3. **Typo** (src/Hero.jsx:128)
   - "Game Developerr" had extra 'r'
   - Fixed to "Game Developer"

4. **Off-by-one error** (src/Hero.jsx:23)
   - Loop runs 0-210 (211 images) but checked `loaded === frameCount` (210)
   - Fixed to `loaded === frameCount + 1`

5. **Unused code** (src/App.jsx)
   - Removed unused imports: `useState`, `reactLogo`, `viteLogo`
   - Removed unused state variable `count`

---

## Phase 2: Scroll Animation Improvements

### Problem
The scroll animation felt too fast and chaotic. All 210 frames were being cycled through too quickly with insufficient scroll distance.

### Solutions Implemented

1. **Extended Scroll Distance**
   - Changed container height from `200vh` to `600vh`
   - Gives users 3x more scroll space for a cinematic feel

2. **Added Animation Control Variables**
   ```javascript
   const easingFactor = 0.1; // Lower = smoother, higher = snappier
   const maxFrameChangePerUpdate = 2; // Max frames to change per animation frame
   ```

3. **Implemented Speed Limiting**
   - Added clamp function to prevent jumping more than `maxFrameChangePerUpdate` frames per update
   - Prevents chaotic behavior during fast scrolling
   - Animation smoothly catches up even after rapid scrolling

### Customization Options
- **easingFactor**: Controls smoothness (0.05 = very smooth, 0.2 = snappy)
- **maxFrameChangePerUpdate**: Controls max speed (2 = gentle, 5 = faster)
- **Container height**: Adjust scroll length as needed

---

## Phase 3: Interactive Project Cards

### Goal
Create scroll-animated project cards that fade in/out and scale up/down, functioning as clickable navigation elements to individual project pages.

### Implementation

#### 1. Installed Dependencies
```bash
npm install react-router-dom
```

#### 2. Created New Components

**ProjectCard.jsx**
- Reusable card component with scroll-based animations
- Features:
  - Real-time scroll position tracking
  - Distance-from-center calculations
  - Cubic easing for smooth transitions
  - Opacity: 0 (far) → 1 (center) → 0 (far)
  - Scale: 0.7 (far) → 1.1 (center) → 0.7 (far)
  - Click navigation to project pages

**Project Pages**
- `/src/pages/Hypoxia.jsx` - Sci-fi survival game
- `/src/pages/BeatBop.jsx` - Rhythm-based music game
- `/src/pages/OrbitGame.jsx` - Retro space exploration

#### 3. Routing Setup
Updated App.jsx with React Router:
```javascript
<Router>
  <Routes>
    <Route path="/" element={<HeroVideo/>} />
    <Route path="/hypoxia" element={<Hypoxia/>} />
    <Route path="/beatbop" element={<BeatBop/>} />
    <Route path="/orbit" element={<OrbitGame/>} />
  </Routes>
</Router>
```

#### 4. Styling Features
- **Glassmorphism effect** with `backdrop-filter: blur(10px)`
- **Gradient borders** that glow on hover
- **40vh spacing** between cards for optimal scroll experience
- **Smooth transitions** on all interactions
- **Hover animations**:
  - Glowing border effect
  - 5px lift
  - Arrow shifts right 10px

---

## Current Project Structure

```
/Users/felipepavanelli/react-portfolio/
├── src/
│   ├── pages/
│   │   ├── Hypoxia.jsx
│   │   ├── BeatBop.jsx
│   │   └── OrbitGame.jsx
│   ├── App.jsx (routing setup)
│   ├── Hero.jsx (main landing page with scroll animation)
│   ├── ProjectCard.jsx (reusable scroll-animated card)
│   ├── main.jsx
│   ├── App.css (all styles including project cards)
│   └── index.css (global styles)
├── public/
│   └── bipedFrames/ (210 PNG frames)
├── package.json
└── index.html
```

---

## Technical Details

### Animation System
- **Canvas rendering** for frame sequence
- **RequestAnimationFrame loop** for smooth updates
- **Scroll event listener** for frame calculations
- **Image preloading** with progress tracking
- **Speed limiting** to prevent jarring transitions

### Scroll Animation Formula
```javascript
const scrollFraction = window.scrollY / maxScroll;
const targetFrame = Math.floor(scrollFraction * (frameCount - 1));
const diff = targetFrame - currentFrame;
const clampedChange = clamp(diff * easingFactor, -maxFrameChange, maxFrameChange);
```

### Card Animation Formula
```javascript
const distanceFromCenter = Math.abs(cardCenter - viewportCenter);
const progress = Math.max(0, 1 - distanceFromCenter / maxDistance);
const eased = easeInOutCubic(progress);
const opacity = eased;
const scale = 0.7 + (0.4 * eased); // 0.7 to 1.1
```

---

## Future Recommendations

### Immediate Enhancements
1. Add loading state/progress bar for image sequence
2. Make navigation interactive (add click handlers to nav buttons)
3. Add responsive design for mobile devices
4. Consider video format alternative for better compression

### 3D Integration (Three.js/React Three Fiber)
When ready to add 3D features:
1. Install: `npm install three @react-three/fiber @react-three/drei`
2. Consider these approaches:
   - Replace canvas animation with 3D model animation
   - Blend 2D canvas with 3D scenes (layered)
   - Create interactive 3D project showcases
3. Recommended structure:
   ```
   src/
   ├── components/
   │   ├── Hero/
   │   ├── Navigation/
   │   └── ProjectPages/
   ├── utils/
   └── three/
       ├── models/
       ├── scenes/
       └── shaders/
   ```

### Performance Optimizations
- Progressive image loading (low-res → high-res)
- Lazy load frames outside current scroll range
- Use IntersectionObserver for triggering animations
- Consider WebP format for images

### Content Management
- Create JSON files for project data
- Implement dynamic routing
- Add CMS integration if needed

---

## Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.x.x"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@vitejs/plugin-react": "^4.0.0-beta.0",
    "eslint": "^8.38.0",
    "vite": "^4.3.0"
  }
}
```

---

## Notes

- Canvas opacity set to 0.6 (src/Hero.jsx:40)
- Project uses Vite as build tool
- Frame naming convention: `bipedVideo000.png` to `bipedVideo210.png`
- Total scroll height: 600vh
- User adjusted maxFrameChangePerUpdate to 2 for optimal smoothness

---

## Known Issues

None currently. All identified bugs have been fixed.

---

## Commands

### Development
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

---

*Last Updated: January 25, 2026*
