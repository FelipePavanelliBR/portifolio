import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProjectCard from "../ProjectCard";

export default function Games() {
  return (
    <div className="games-page">
      <Navigation />

      <div className="games-content">
        <div className="games-header">
          <h1>Games</h1>
          <div className="game-contents">
            <h3>Game Developer</h3>
            <h3>Technical Artist</h3>
            <h3>Videographer</h3>
          </div>
        </div>

        <div className="projects-section">
          <ProjectCard
            title="Hypoxia"
            description="A sci-fi survival game set in the depths of space"
            route="/hypoxia"
            index={0}
          />
          <ProjectCard
            title="BeatBop"
            description="A rhythm-based music game with dynamic visuals"
            route="/beatbop"
            index={1}
          />
          <ProjectCard
            title="Orbital Drift"
            description="A retro-style space exploration adventure"
            route="/orbit"
            index={2}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
