import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ title, description, route, index }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({ opacity: 0, transform: "scale(0.8)" });
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowCenter = windowHeight / 2;
      const cardCenter = rect.top + rect.height / 2;

      // Calculate distance from center of viewport
      const distanceFromCenter = Math.abs(cardCenter - windowCenter);
      const maxDistance = windowHeight;

      // Calculate progress (0 to 1, where 1 is at center)
      const progress = Math.max(0, 1 - distanceFromCenter / maxDistance);

      // Apply easing curve for smoother transition
      const eased = easeInOutCubic(progress);

      // Calculate opacity (fade in/out)
      const opacity = eased;

      // Calculate scale (grow/shrink)
      const minScale = 0.7;
      const maxScale = 1.1;
      const scale = minScale + (maxScale - minScale) * eased;

      setStyle({
        opacity,
        transform: `scale(${scale})`,
      });
    };

    // Easing function for smooth animation
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      onClick={handleClick}
      style={{
        opacity: style.opacity,
        transform: style.transform,
        transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
      }}
    >
      <div className="project-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="project-card-arrow">→</div>
      </div>
    </div>
  );
}
