import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Reveal from "../components/Reveal";
import PlaceholderMedia from "../components/PlaceholderMedia";
import ContactReel from "../components/ContactReel";

export default function Games() {
  return (
    <div className="page">
      <Navigation />

      {/* CATEGORY HEADER */}
      <header className="cat-header cat-header--games">
        <div className="cat-thermal" aria-hidden="true" />
        <div className="cat-fade" aria-hidden="true" />
        <div className="cat-inner">
          <Link to="/" className="cat-back">← all work</Link>
          <div className="cat-row">
            <h1 className="cat-title">
              <span className="cat-num">(02)</span>Games
            </h1>
            <div className="cat-meta">
              2 projects · XR<br />diegetic interfaces &amp; networking
            </div>
          </div>
          <p className="cat-intro">
            Games where the interface lives inside the world. I design diegetic UI,
            write the networking that keeps players in sync, and build the systems that
            make a session feel alive.
          </p>
        </div>
      </header>

      {/* PROJECT CARDS */}
      <main className="proj-list">
        <Reveal as={Link} to="/hypoxia" className="pcard">
          <div className="pmedia-wrap">
            <PlaceholderMedia label="Hypoxia — VR gameplay capture" height={440} className="pmedia" />
          </div>
          <div className="pcard-text">
            <div className="pcard-meta">
              <span>2025</span><span className="sep">/</span><span>Multiplayer VR</span>
            </div>
            <h2 className="pcard-title">Hypoxia</h2>
            <p className="pcard-desc">
              A multiplayer VR card game for Meta Quest 3. I created the diegetic interfaces
              and integrated the networking logic that keeps every player's table in sync.
            </p>
            <div className="pcard-tags">
              <span className="tag">Unity</span>
              <span className="tag">C#</span>
              <span className="tag">Networking</span>
              <span className="tag">Quest 3</span>
            </div>
            <span className="pcta">read case study →</span>
          </div>
        </Reveal>

        <Reveal as={Link} to="/beatbop" className="pcard pcard--rev">
          <div className="pcard-text">
            <div className="pcard-meta">
              <span>2024</span><span className="sep">/</span><span>XR Rhythm</span>
            </div>
            <h2 className="pcard-title">BeatBop</h2>
            <p className="pcard-desc">
              An XR rhythm experience combining AR and VR, driven by my own-coded,
              music-driven state machine that scores the play in time with the track.
            </p>
            <div className="pcard-tags">
              <span className="tag">Unity</span>
              <span className="tag">C#</span>
              <span className="tag">AR + VR</span>
              <span className="tag">Audio DSP</span>
            </div>
            <span className="pcta">read case study →</span>
          </div>
          <div className="pmedia-wrap">
            <PlaceholderMedia label="BeatBop — XR rhythm capture" height={440} className="pmedia" />
          </div>
        </Reveal>
      </main>

      <ContactReel variant="back" title="Want the full picture?" backHref="/" backLabel="← back to all work" />
    </div>
  );
}
