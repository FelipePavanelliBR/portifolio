import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/software", label: "software" },
  { to: "/games", label: "games" },
  { to: "/videography", label: "videography" },
  { to: "/graphics", label: "graphics" },
  { to: "/animation", label: "animation" },
  { to: "/3d-modeling", label: "3D" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the overlay menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (to) => pathname === to;

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo" aria-label="Felipe Pavanelli — home">
          <span className="nav-badge">FP</span>
          <span className="nav-name">Felipe Pavanelli</span>
        </Link>

        <div className="nav-links">
          {LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={isActive(to) ? "navlink active" : "navlink"}
            >
              {label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
          >
            résumé ↗
          </a>
        </div>

        <button
          type="button"
          className={open ? "nav-burger open" : "nav-burger"}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={open ? "nav-mobile open" : "nav-mobile"}>
        {LINKS.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={isActive(to) ? "nav-mobile-link active" : "nav-mobile-link"}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-resume"
          onClick={() => setOpen(false)}
        >
          résumé ↗
        </a>
      </div>
    </>
  );
}
