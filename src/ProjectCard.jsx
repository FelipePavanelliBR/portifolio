import { useNavigate } from "react-router-dom";

export default function ProjectCard({ title, description, route, index }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <div className="project-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="project-card-arrow">→</div>
      </div>
    </div>
  );
}
