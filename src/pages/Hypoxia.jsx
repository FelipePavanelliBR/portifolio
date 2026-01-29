import { Link } from "react-router-dom";

export default function Hypoxia() {
  return (
    <div className="project-page">
      <Link to="/" className="back-button">← Back to Home</Link>

      <div className="project-content">
        <h1>Hypoxia</h1>
        <div className="project-details">
          <p>Your project description goes here.</p>
          <p>Add images, videos, and details about your process as a technical artist.</p>
        </div>
      </div>
    </div>
  );
}
