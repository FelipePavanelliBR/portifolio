import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Reveal from "../components/Reveal";
import PlaceholderMedia from "../components/PlaceholderMedia";

export default function Hypoxia() {
  return (
    <div className="page">
      <Navigation />

      {/* ARTICLE HERO */}
      <header className="article-hero">
        <Link to="/games" className="article-back">← Games</Link>
        <div className="article-tags">
          <span className="tag--solid">Multiplayer VR</span>
          <span className="tag--ghost">Meta Quest 3</span>
        </div>
        <h1 className="article-title">Hypoxia</h1>
        <p className="article-sub">
          A multiplayer VR card game where the interface lives in your hands — diegetic,
          tactile, and synced across the table in real time.
        </p>

        <div className="meta-row">
          <div>
            <div className="meta-label">Year</div>
            <div className="meta-val">2025</div>
          </div>
          <div>
            <div className="meta-label">Role</div>
            <div className="meta-val">Diegetic UI · Networking</div>
          </div>
          <div>
            <div className="meta-label">Platform</div>
            <div className="meta-val">Meta Quest 3</div>
          </div>
          <div>
            <div className="meta-label">Stack</div>
            <div className="meta-val">Unity · C# · Networking</div>
          </div>
        </div>
      </header>

      {/* HERO MEDIA */}
      <Reveal className="article-media">
        <div className="article-media-frame">
          <PlaceholderMedia label="Hypoxia — hero gameplay capture / trailer frame" height={560} />
        </div>
        <div className="article-media-cap">FIG. 01 — In-headset capture</div>
      </Reveal>

      {/* ARTICLE BODY */}
      <article className="article">
        <Reveal as="section" className="article-section">
          <div className="section-num">01 — Overview</div>
          <div className="bodycopy">
            <p>
              Hypoxia reimagines a tabletop card game for room-scale VR. Players sit around
              a shared virtual table, draw and play cards with their hands, and read the game
              state from objects in the world rather than floating menus.
            </p>
            <p>
              I owned two pillars of the build: the <strong>diegetic interface</strong> — every
              readout, prompt and affordance expressed as a physical object — and the{" "}
              <strong>networking layer</strong> that keeps each player's table perfectly in sync.
            </p>
          </div>
        </Reveal>

        <Reveal as="section" className="article-section">
          <div className="section-num">02 — Ideation</div>
          <div className="bodycopy">
            <p className="note">
              [ Starter section — drop in your early sketches, references and the design
              questions that kicked this off. ]
            </p>
          </div>
          <div className="idea-grid">
            <PlaceholderMedia label="Sketch / reference 1" height={240} shape="rounded" />
            <PlaceholderMedia label="Sketch / reference 2" height={240} shape="rounded" />
          </div>
        </Reveal>

        <Reveal as="section" className="article-section">
          <div className="section-num">03 — Design</div>
          <div className="bodycopy">
            <p>
              The interface had to disappear into the fiction. Score, turn order and prompts
              became lights, tokens and the cards themselves — readable at a glance from any seat.
            </p>
            <p className="note">
              [ Expand on the diegetic UI system, interaction model, and the playtests that shaped it. ]
            </p>
          </div>
        </Reveal>

        <Reveal as="section" className="article-section">
          <div className="section-num">04 — Development</div>
          <div className="bodycopy">
            <p>
              On the engineering side I built the authoritative networking that reconciles every
              hand, draw and play so the shared table never drifts between headsets.
            </p>
            <p className="note">
              [ Add architecture notes, the state-sync approach, and any tricky problems you solved. ]
            </p>
          </div>
          <div className="article-dev-media">
            <PlaceholderMedia label="System diagram / editor capture" height={380} />
          </div>
        </Reveal>

        <Reveal as="section" className="article-section">
          <div className="section-num">05 — Outcome</div>
          <div className="bodycopy">
            <p className="note">
              [ Close with results, what you'd do next, and a final hero shot or clip. ]
            </p>
          </div>
        </Reveal>
      </article>

      {/* NEXT */}
      <section className="next">
        <Link to="/beatbop" className="next-link">
          <div>
            <div className="next-label">Next project</div>
            <div className="next-title">BeatBop</div>
          </div>
          <span className="next-arrow">→</span>
        </Link>
      </section>
    </div>
  );
}
