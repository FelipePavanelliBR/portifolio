import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Reveal from "../components/Reveal";
import PlaceholderMedia from "../components/PlaceholderMedia";
import ContactReel from "../components/ContactReel";

const DISCIPLINES = [
  { to: "/software", num: "(01)", title: "Software", cover: "Software cover",
    desc: "Real-time, collaborative & networked tools — ChoreoGrapher and more.", cta: "see all software work →" },
  { to: "/games", num: "(02)", title: "Games", cover: "Games cover",
    desc: "XR design, diegetic interfaces & networking — Hypoxia, BeatBop.", cta: "see all games work →" },
  { to: "/3d-modeling", num: "(03)", title: "3D Art", cover: "3D cover",
    desc: "Modeling, texturing, lighting & rendering — interiors & assets.", cta: "see all 3D work →" },
  { to: "/animation", num: "(04)", title: "Animation", cover: "Animation cover",
    desc: "Character design, rigging, skinning & sculpting — R10T, Nomad.", cta: "see all animation work →" },
  { to: "/graphics", num: "(05)", title: "Graphics", cover: "Graphics cover",
    desc: "Posters & design — Jordan Peele trilogy, Nina Simone, JMC.", cta: "see all graphics work →" },
  { to: "/videography", num: "(06)", title: "Videography", cover: "Videography cover",
    desc: "Shooting, editing & interviewing — campus journalism reels.", cta: "see all videography work →" },
];

export default function Home() {
  return (
    <div className="page">
      <Navigation />

      {/* HERO */}
      <section id="top" className="hero">
        <div className="hero-thermal" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />
        <img
          src="/felipe-hero.png"
          alt="Felipe Pavanelli holding a film camera"
          className="hero-img hero-img--lum"
        />
        <img src="/felipe-hero.png" alt="" aria-hidden="true" className="hero-img hero-img--base" />

        <div className="hero-inner">
          <div className="hero-eyebrow">Portfolio — 2026 · Dartmouth DALI Lab</div>
          <h1 className="hero-title">
            <span className="line">Felipe</span>
            <span className="hero-name-chip">Pavanelli</span>
          </h1>
          <p className="hero-sub">
            AR/VR developer, game designer &amp; technical artist — blending software
            engineering with visual production. From Campo Grande, Brazil.
          </p>
          <div className="hero-links">
            <Link to="/software">software</Link><span className="sep">/</span>
            <Link to="/games">games</Link><span className="sep">/</span>
            <Link to="/videography">videography</Link><span className="sep">/</span>
            <Link to="/graphics">graphics</Link><span className="sep">/</span>
            <Link to="/animation">animation</Link><span className="sep">/</span>
            <Link to="/3d-modeling">3D</Link>
          </div>
        </div>

        <a href="#about" className="hero-cue">
          <span className="arrow">↓</span> explore
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section--about">
        <div className="about-grid">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 22 }}>(00) — Summary</div>
            <h2 className="about-h2">A blend of engineering<br />&amp; visual craft.</h2>
            <p className="about-p">
              I'm an AR/VR developer, game designer and technical artist. I lead Digital
              Arts projects at <span className="chip-highlight">Dartmouth's DALI Lab</span>,
              overseeing Graphics, Animation, 3D Modeling and Game Development pipelines —
              and produce video journalism for the Office of Communications.
            </p>
          </Reveal>
          <Reveal className="toolkit">
            <div className="toolkit-label">Toolkit</div>
            <div className="pills">
              <span className="pill">C#</span>
              <span className="pill">Python</span>
              <span className="pill">Java</span>
              <span className="pill pill--teal">Unity</span>
              <span className="pill pill--teal">Godot</span>
              <span className="pill pill--teal">React</span>
              <span className="pill pill--amber">Maya</span>
              <span className="pill pill--amber">Blender</span>
              <span className="pill pill--amber">Adobe CC</span>
            </div>
            <div className="toolkit-stats">
              <div><div className="stat-num">3.8</div>GPA · BA CS</div>
              <div><div className="stat-num">PT · JP</div>fluent · proficient</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SELECTED RECENT WORK */}
      <section className="section">
        <Reveal className="section-head">
          <h2 className="section-title">Selected recent work</h2>
          <span className="section-meta">2024 — 2026</span>
        </Reveal>
        <div className="rec-grid">
          <Reveal as={Link} to="/hypoxia" className="recard">
            <div className="recard-media">
              <PlaceholderMedia label="Hypoxia — VR capture" height={280} className="remedia" />
            </div>
            <div className="recard-row">
              <h3 className="recard-title">Hypoxia</h3>
              <span className="recard-tag">2025 · VR</span>
            </div>
            <p className="recard-desc">Multiplayer VR card game with diegetic interfaces &amp; networking.</p>
          </Reveal>

          <Reveal as={Link} to="/animation" className="recard">
            <div className="recard-media black">
              <PlaceholderMedia src="/biped-poster.jpg" alt="R10T — 3D biped" height={280} className="remedia" />
            </div>
            <div className="recard-row">
              <h3 className="recard-title">R10T — 3D biped</h3>
              <span className="recard-tag">2025 · Anim</span>
            </div>
            <p className="recard-desc">Full pipeline character — rig, skin &amp; an expressive combat loop.</p>
          </Reveal>

          <Reveal as={Link} to="/3d-modeling" className="recard">
            <div className="recard-media">
              <PlaceholderMedia label="Brazilian Bar — render" height={280} className="remedia" />
            </div>
            <div className="recard-row">
              <h3 className="recard-title">Brazilian Bar</h3>
              <span className="recard-tag">2024 · 3D</span>
            </div>
            <p className="recard-desc">Interior project — modeling, texturing, lighting &amp; rendering.</p>
          </Reveal>
        </div>
      </section>

      {/* EXPLORE BY DISCIPLINE */}
      <section className="section section--disciplines">
        <Reveal style={{ marginBottom: 44 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Explore by discipline</div>
          <h2 className="section-title" style={{ maxWidth: 760 }}>Six ways into the work.</h2>
        </Reveal>
        <div className="gw-grid">
          {DISCIPLINES.map((d) => (
            <Reveal key={d.to} as={Link} to={d.to} className="gwcard">
              <PlaceholderMedia label={d.cover} height={170} />
              <div className="gwcard-body">
                <div className="gwcard-num">{d.num}</div>
                <h3 className="gwcard-title">{d.title}</h3>
                <p className="gwcard-desc">{d.desc}</p>
                <span className="gwarrow">{d.cta}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactReel variant="home" />
    </div>
  );
}
