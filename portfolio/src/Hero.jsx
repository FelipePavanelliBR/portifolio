import { useEffect, useRef } from "react";
import './App.css'

export default function HeroCanvasSequence() {
  const canvasRef = useRef(null);

  const frameCount = 210; // change to your number of frames
  const currentFrame = (i) => `/bipedFrames/bipedVideo${String(i).padStart(3, '0')}.png`;

  // Preload images once
  const imagesRef = useRef([]);
  const loadedRef = useRef(false);

  useEffect(() => {
    const arr = [];
    let loaded = 0;

    for (let i = 0; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loaded++;
        if (loaded === frameCount) loadedRef.current = true;
      };
      arr.push(img);
    }
    imagesRef.current = arr;
  }, []);

  // Draw to canvas
  const drawFrame = (index) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const img = imagesRef.current[index];
    if (!img) return;

    // Resize canvas to match images
    canvas.width = img.width;
    canvas.height = img.height;
    context.globalAlpha=0.6 // opacity control
    context.drawImage(img, 0, 0);
  };

  // Scroll → frame number
  useEffect(() => {
    let currentFrameIndex = 0;
    let targetFrameIndex = 0;

    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = window.scrollY / maxScroll;

      targetFrameIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(scrollFraction * (frameCount - 1)))
      );
    };

    window.addEventListener("scroll", onScroll);

    const update = () => {
      if (!loadedRef.current) {
        requestAnimationFrame(update);
        return;
      }

      // smooth easing
      const diff = targetFrameIndex - currentFrameIndex;
      currentFrameIndex += diff * 0.6;

      // ensure integer frame index
      const frameToShow = Math.round(currentFrameIndex);

      drawFrame(frameToShow);

      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh", position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1
        }}
      />

      <nav>
          <div className="nav-wrap">
            <p>Felip Pavanelli</p>
            <div className="nav-buttons">
              <div className="hypoxia">
                Hypoxia
              </div>

              <div className="beatbop">
                BeatBop
              </div>
              <div className="classname">
                8-bit Orgbit
              </div>

              <div className="resume">
                Resume
              </div>
            </div>
          </div>
        </nav>


      <div className="page-wrap">
        <h1>Felipe Pavanelli</h1>


        <div className="game-contents">
          <h3>Game Developerr</h3>
          <h3>Technical Artist</h3>
          <h3>Videographer</h3>
        </div>
      </div>
    </div>
  );
}
