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

## Session Date: January 29, 2026

### Phase 4: Navigation System & Site Architecture Overhaul

#### Goals
- Create professional navigation with dropdown menus
- Restructure site into category-based pages
- Fix navigation back-button flicker bug
- Add loading screen for smooth UX
- Implement 3D model viewer for portfolio showcase

---

### 4.1: Navigation Back Button Flicker Fix

#### Problem
When navigating back from project pages, the scroll animation would flicker rapidly from frame 0 to the user's previous scroll position, creating jarring UX.

#### Solution
Modified frame initialization to start at current scroll position on mount:

**src/Hero.jsx (lines 49-62)**
```javascript
const getFrameFromScroll = () => {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = window.scrollY / maxScroll;
  return Math.min(
    frameCount - 1,
    Math.max(0, Math.floor(scrollFraction * (frameCount - 1)))
  );
};

const initialFrame = getFrameFromScroll();
let currentFrameIndex = initialFrame;
let targetFrameIndex = initialFrame;
```

**Result**: Seamless navigation - animation starts at correct frame when returning to Home page.

---

### 4.2: Professional Navigation Component

#### Created Components

**Navigation.jsx** (`src/components/Navigation.jsx`)
- Sticky navigation bar with glassmorphism effect
- Dropdown menu system with hover states
- Links to:
  - GAMES (dropdown with individual game projects)
  - 3D MODELING (direct link)
  - VIDEOGRAPHY (direct link)
  - RESUME (opens PDF in new tab)

**Footer.jsx** (`src/components/Footer.jsx`)
- Minimal footer with social links
- LinkedIn and GitHub icons with SVG graphics
- Discrete padding and hover effects
- Placeholder URLs to be replaced with actual profiles

#### Navigation Dropdown Hover Fix

**Problem**: Dropdown menus would close before users could hover over options due to gap between button and menu.

**Solution**: Added invisible bridge using CSS pseudo-element
```css
.nav-item.dropdown::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 0.5rem;
  background: transparent;
}
```

**Result**: Smooth, reliable dropdown interactions.

---

### 4.3: Page Restructuring

#### New Page Architecture

**Home.jsx** (`src/pages/Home.jsx`)
- Landing page with emphasized scroll animation
- Minimalistic design showcasing biped animation
- Canvas opacity increased to 0.9 (from 0.6)
- Removed all background colors for transparency
- Text effects with glowing shadows for readability

**Games.jsx** (`src/pages/Games.jsx`)
- Removed scroll animation (no longer needed)
- Clean static layout with project cards
- Grid spacing reduced from 40vh to 3rem
- Simplified ProjectCard component (removed scroll animations)

**ThreeDModeling.jsx** (`src/pages/ThreeDModeling.jsx`)
- Interactive 3D model viewer page
- Grid layout for multiple models
- React Three Fiber integration

**Videography.jsx** (`src/pages/Videography.jsx`)
- Placeholder page for future videography content

#### Project Structure Update
```
/Users/felipepavanelli/react-portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx (new)
│   │   ├── Footer.jsx (new)
│   │   └── Model3DViewer.jsx (new)
│   ├── pages/
│   │   ├── Home.jsx (new - replaces Hero.jsx)
│   │   ├── Games.jsx (new)
│   │   ├── ThreeDModeling.jsx (new)
│   │   ├── Videography.jsx (new)
│   │   ├── Hypoxia.jsx (updated)
│   │   ├── BeatBop.jsx (updated)
│   │   └── OrbitGame.jsx (updated)
│   ├── Hero.jsx (legacy - kept for reference)
│   ├── ProjectCard.jsx (simplified)
│   ├── App.jsx (updated routing)
│   ├── App.css (major additions)
│   └── index.css
├── public/
│   ├── bipedFrames/ (210 PNG frames)
│   └── models/ (new)
│       ├── README.md
│       └── fan.glb
```

---

### 4.4: Loading Screen Implementation

#### Problem
Canvas animation frames take time to load (211 images), causing blank/incomplete visuals on first visit.

#### Solution
Created loading screen with progress tracking:

**Features**:
- Full-screen overlay during frame loading
- Real-time progress bar (0-100%)
- Percentage indicator
- Smooth fade-out animation when complete
- Matches portfolio aesthetic (gradient colors)

**Implementation** (`src/pages/Home.jsx`):
```javascript
const [loadingProgress, setLoadingProgress] = useState(0);
const [isLoading, setIsLoading] = useState(true);
const [fadeOut, setFadeOut] = useState(false);

// Track loading progress
img.onload = () => {
  loaded++;
  const progress = Math.round((loaded / (frameCount + 1)) * 100);
  setLoadingProgress(progress);

  if (loaded === frameCount + 1) {
    loadedRef.current = true;
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 800);
    }, 300);
  }
};
```

**Styling** (`src/App.css`):
- Gradient text for "Felipe Pavanelli"
- Animated progress bar with glow effect
- 800ms fade-out transition
- Clean, professional appearance

---

### 4.5: Home Page Visual Emphasis

#### Changes
1. **Removed background colors** from `.page-wrap` container
2. **Increased canvas opacity** from 0.6 to 0.9
3. **Added dramatic text effects**:
   ```css
   .page-wrap h1 {
     text-shadow:
       0 0 20px rgba(100, 108, 255, 0.8),
       0 0 40px rgba(100, 108, 255, 0.6),
       0 4px 20px rgba(0, 0, 0, 0.8),
       0 2px 4px rgba(0, 0, 0, 1);
   }
   ```
4. **Multi-layered shadows** for readability over animation
5. **Enhanced letter spacing** and font weights

**Result**: Animation is now the star of the page, with text remaining readable through glow effects.

---

### 4.6: 3D Model Viewer Integration

#### Installed Dependencies
```bash
npm install three@0.152.2 @react-three/fiber@8.13.0 @react-three/drei@9.78.0
```

**Version Compatibility**:
- React 18.2.0
- Three.js 0.152.2 (stable version)
- React Three Fiber 8.13.0 (React 18 compatible)
- Drei 9.78.0 (React 18 compatible)

#### Model3DViewer Component

**Features**:
- Interactive orbit controls (click & drag to rotate)
- Zoom functionality (scroll wheel, 2x-10x range)
- Professional studio lighting setup
- Loading state with wireframe cube
- Error boundary for failed loads
- Missing texture fallback (gray material)

**Implementation** (`src/components/Model3DViewer.jsx`):
```javascript
<Canvas>
  <PerspectiveCamera makeDefault position={cameraPosition} />
  <ambientLight intensity={0.5} />
  <directionalLight position={[10, 10, 5]} intensity={1} />
  <directionalLight position={[-10, -10, -5]} intensity={0.5} />

  <Suspense fallback={<LoadingSpinner />}>
    <Model url={modelUrl} />
    <Environment preset="studio" />
  </Suspense>

  <OrbitControls
    enableZoom={true}
    enablePan={false}
    minDistance={2}
    maxDistance={10}
  />
</Canvas>
```

#### 3D Modeling Page Layout

**Design Philosophy**: Grid-based showcase emphasizing interactivity

**Styling** (`src/App.css`):
- Responsive grid: `minmax(400px, 1fr)`
- 400px tall canvas containers
- Glassmorphism cards with purple borders
- Hover effects: lift + glow + border color change
- Mobile responsive (single column on small screens)

**Card Structure**:
```
┌─────────────────────────┐
│  Interactive 3D Canvas  │
│    (400px height)       │
├─────────────────────────┤
│   Title                 │
│   Description           │
└─────────────────────────┘
```

---

### 4.7: Bug Fixes & Error Handling

#### Canvas Null Reference Fix
**Problem**: `Cannot read properties of null (reading 'getContext')`

**Solution** (`src/pages/Home.jsx:48`):
```javascript
const drawFrame = (index) => {
  const canvas = canvasRef.current;
  if (!canvas) return; // Added null check

  const context = canvas.getContext("2d");
  // ... rest of function
};
```

#### 3D Model Loading Errors
**Problem**: Models with external texture paths failing to load

**Solutions**:
1. Added error boundary component to Model3DViewer
2. Implemented texture fallback (gray material)
3. Traverse scene to fix missing textures:
```javascript
scene.traverse((child) => {
  if (child.isMesh && child.material) {
    child.material.side = THREE.DoubleSide;
    if (!child.material.map) {
      child.material.color = new THREE.Color(0x808080);
    }
  }
});
```

#### GLB Export Guide
Created detailed README for proper model export:
- Blender export settings
- Texture embedding instructions
- File format recommendations
- Troubleshooting guide

---

### Technical Implementation Details

#### Routing Updates
**src/App.jsx**:
```javascript
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/games" element={<Games/>} />
  <Route path="/3d-modeling" element={<ThreeDModeling/>} />
  <Route path="/videography" element={<Videography/>} />
  <Route path="/hypoxia" element={<Hypoxia/>} />
  <Route path="/beatbop" element={<BeatBop/>} />
  <Route path="/orbit" element={<OrbitGame/>} />
</Routes>
```

#### CSS Architecture
New sections added to `App.css`:
- Navigation styles (70+ lines)
- Dropdown menu animations
- Loading screen styles
- Footer styles
- Home page enhancements
- 3D modeling page styles
- Model viewer canvas styles
- Responsive breakpoints

#### State Management
Loading screen state flow:
1. `isLoading = true` (mount)
2. Track progress: `setLoadingProgress(0-100)`
3. On complete: set `fadeOut = true`
4. After 800ms: set `isLoading = false`

---

### Current Dependencies

```json
{
  "dependencies": {
    "@react-three/drei": "^9.78.0",
    "@react-three/fiber": "^8.13.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^7.13.0",
    "three": "^0.152.2"
  }
}
```

---

### Known Issues & Future Work

#### Current Issues
1. **3D Model Textures**: fan.glb has absolute file paths for textures
   - Model displays but appears gray
   - **Fix**: Re-export with embedded textures in Blender
   - Workaround: Error handling shows model geometry without textures

2. **Resume PDF**: Placeholder path `/public/resume.pdf` needs actual file

3. **Social Links**: Footer has placeholder URLs for LinkedIn/GitHub

#### Future Enhancements
1. Add more 3D models to showcase
2. Populate Videography page with video embeds
3. Add individual project content (Hypoxia, BeatBop, Orbital Drift)
4. Implement fullscreen 3D viewer modal
5. Add auto-rotate option for 3D models
6. Consider WebGL performance optimizations
7. Add touch controls for mobile 3D interaction
8. Implement model screenshot/thumbnail generation

---

### Performance Notes

#### Loading Times
- Initial load: ~2-3 seconds (211 PNG frames = ~15MB)
- Subsequent visits: Instant (browser cache)
- 3D models: <1 second (1MB GLB file)

#### Optimizations Applied
- Canvas null checks prevent errors
- Error boundaries prevent crashes
- Suspense fallbacks show loading states
- Three.js version locked for stability
- Image preloading with progress tracking

---

### Design System

#### Color Palette
- Primary: `#646cff` (purple-blue)
- Secondary: `#535bf2` (deeper purple)
- Background: `#25253eff` (dark purple-gray)
- Text: `rgba(248, 248, 248, 0.8)` (off-white)
- Accents: Purple glows and gradients

#### Typography
- Font family: Pixelify Sans (pixel-art aesthetic)
- Headings: 3-5rem with gradients
- Body: 1-1.5rem with reduced opacity
- Letter spacing: 1-2px for titles

#### Interaction Patterns
- Hover: Transform + glow + color shift
- Click: Navigation or modal
- Drag: 3D model rotation
- Scroll: Frame-based animation (Home only)

---

### File Organization Best Practices

#### Components
- Reusable UI: `src/components/`
- Page-specific: Keep in same file or create subfolder

#### Public Assets
- Images: `/public/bipedFrames/`
- 3D Models: `/public/models/`
- Documents: `/public/` (e.g., resume.pdf)

#### Styling
- Global: `src/index.css`
- Components: `src/App.css`
- Consider CSS modules for larger projects

---

*Last Updated: January 29, 2026*
