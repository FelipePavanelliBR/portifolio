import { Link } from "react-router-dom";
import Navigation from "./Navigation";

// Shared "in progress" page used by the discipline pages (Software, Graphics,
// Animation, 3D, Videography) and BeatBop. Renders nav + a thermal category
// header + a centred "case studies on the way" card.
export default function DisciplinePlaceholder({
  number,
  title,
  intro,
  headerBackHref = "/",
  headerBackLabel = "← all work",
  cardKicker = "In progress",
  cardHeading = "Case studies on the way",
  cardBody = "I'm composing this page with project cards and detailed write-ups. Explore the other disciplines in the meantime.",
  backHref = "/",
  backLabel = "← back to all work",
}) {
  return (
    <div className="page page--column">
      <Navigation />

      <header className="cat-header">
        <div className="cat-thermal" aria-hidden="true" />
        <div className="cat-fade" aria-hidden="true" />
        <div className="cat-inner">
          <Link to={headerBackHref} className="cat-back">{headerBackLabel}</Link>
          <h1 className="cat-title">
            {number && <span className="cat-num">{number}</span>}
            {title}
          </h1>
          <p className="cat-intro">{intro}</p>
        </div>
      </header>

      <main className="placeholder-main">
        <div className="placeholder-card">
          <div className="placeholder-kicker">{cardKicker}</div>
          <h2 className="placeholder-h2">{cardHeading}</h2>
          <p className="placeholder-p">{cardBody}</p>
          <Link to={backHref} className="btnhome">{backLabel}</Link>
        </div>
      </main>
    </div>
  );
}
