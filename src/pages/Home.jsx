import { useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Home() {
  const canvasRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const frameCount = 210;
  const currentFrame = (i) => `/bipedFrames/bipedVideo${String(i).padStart(3, '0')}.png`;

  // Animation controls
  const easingFactor = 0.05;
  const maxFrameChangePerUpdate = 5;

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
      arr.push(img);
    }
    imagesRef.current = arr;
  }, []);

  // Draw to canvas
  const drawFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const img = imagesRef.current[index];
    if (!img) return;

    canvas.width = img.width;
    canvas.height = img.height;
    context.globalAlpha = 0.9;
    context.drawImage(img, 0, 0);
  };

  // Scroll → frame number
  useEffect(() => {
    // Initialize frame indices based on current scroll position
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

    const onScroll = () => {
      targetFrameIndex = getFrameFromScroll();
    };

    window.addEventListener("scroll", onScroll);

    const update = () => {
      if (!loadedRef.current) {
        requestAnimationFrame(update);
        return;
      }

      const diff = targetFrameIndex - currentFrameIndex;
      const change = diff * easingFactor;

      const clampedChange = Math.max(
        -maxFrameChangePerUpdate,
        Math.min(maxFrameChangePerUpdate, change)
      );

      currentFrameIndex += clampedChange;
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
    <div className="home-page">
      {isLoading && (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
          <div className="loading-content">
            <h1 className="loading-title">Felipe Pavanelli</h1>
            <div className="loading-bar-container">
              <div
                className="loading-bar"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className="loading-percentage">{loadingProgress}%</p>
          </div>
        </div>
      )}

      <Navigation />

      <div style={{ height: "600vh", position: "relative" }}>
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

        <div className="page-wrap">
          <h1>Felipe Pavanelli</h1>
          <div className="game-contents">
            <h3>Game Developer</h3>
            <h3>Technical Artist</h3>
            <h3>Videographer</h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
