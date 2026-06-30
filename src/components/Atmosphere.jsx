// Fixed film-grain overlay + viewfinder frame, rendered once at the app root.
// Purely decorative — pointer-events disabled so it never blocks interaction.
// Grain is desaturated + low-opacity with NO blend mode so it stays on its own
// compositor layer and never forces a repaint during scroll.
export default function Atmosphere({ grainOpacity = 0.14 }) {
  return (
    <>
      <svg className="vw-grain" aria-hidden="true" style={{ opacity: grainOpacity }}>
        <filter id="grainFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainFilter)" />
      </svg>
      <div className="vw-frame" aria-hidden="true">
        <div className="vw-corner tl" />
        <div className="vw-corner tr" />
        <div className="vw-corner bl" />
        <div className="vw-corner br" />
      </div>
    </>
  );
}
