import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeDropdown}>
          Felipe Pavanelli
        </Link>

        <div className="nav-menu">
          {/* GAMES Dropdown */}
          <div
            className="nav-item dropdown"
            onMouseEnter={() => setActiveDropdown("games")}
            onMouseLeave={closeDropdown}
          >
            <Link to="/games" className="nav-button">GAMES</Link>
            {activeDropdown === "games" && (
              <div className="dropdown-menu">
                <Link to="/hypoxia" className="dropdown-item" onClick={closeDropdown}>
                  Hypoxia
                </Link>
                <Link to="/beatbop" className="dropdown-item" onClick={closeDropdown}>
                  BeatBop
                </Link>
                <Link to="/orbit" className="dropdown-item" onClick={closeDropdown}>
                  Orbital Drift
                </Link>
              </div>
            )}
          </div>

          {/* 3D MODELING Link */}
          <Link to="/3d-modeling" className="nav-button">3D MODELING</Link>

          {/* VIDEOGRAPHY Link */}
          <Link to="/videography" className="nav-button">VIDEOGRAPHY</Link>

          {/* RESUME Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-button resume-button"
          >
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
}
