import { Link } from "react-router-dom";

// Bottom thermal-gradient call-to-action.
// variant="home": social + résumé buttons and the big wordmark + copyright.
// variant="back": short reel with a single "back" button (category pages).
export default function ContactReel({
  variant = "home",
  title = "Want the full picture?",
  backHref = "/",
  backLabel = "← back to all work",
}) {
  const isHome = variant === "home";

  return (
    <section className={isHome ? "contact" : "contact contact--short"}>
      <div className="contact-thermal" aria-hidden="true" />
      <div className="contact-vignette" aria-hidden="true" />

      <div className="contact-inner">
        {isHome ? (
          <>
            <div className="contact-eyebrow">Let's build something</div>
            <h2 className="contact-title">
              felipe
              <br />
              pavanelli<span className="contact-dot">.</span>
            </h2>
            <div className="contact-btns">
              <a href="#" className="btn btn--solid">GitHub</a>
              <a href="#" className="btn btn--ghost">LinkedIn</a>
              <a href="#" className="btn btn--ghost">ArtStation</a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--solid"
              >
                Résumé ↗
              </a>
            </div>
          </>
        ) : (
          <>
            <h2 className="contact-title small">{title}</h2>
            <div className="contact-btns">
              <Link to={backHref} className="btn btn--solid">{backLabel}</Link>
            </div>
          </>
        )}
      </div>

      {isHome && (
        <div className="contact-copyright">
          © 2026 Felipe Pavanelli — Campo Grande, Brazil
        </div>
      )}
    </section>
  );
}
