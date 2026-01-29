import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function OrbitGame() {
  return (
    <div className="project-page">
      <Navigation />

      <div className="project-content">
        <Link to="/games" className="back-button">← Back to Games</Link>
        <h1>8-bit Orbit</h1>
        <div className="project-details">
          <p>Your project description goes here.</p>
          <p>Add images, videos, and details about your process as a technical artist.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
