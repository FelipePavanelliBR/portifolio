// Stand-in for the design's <image-slot> placeholders. Renders a dark, dashed
// caption box at a fixed height; pass `src` later to drop in a real image.
// `className` flows onto the element so card hover effects (.remedia/.pmedia) work.
export default function PlaceholderMedia({
  label = "Drop an image",
  height = 280,
  shape = "rect",
  className = "",
  src,
  alt = "",
}) {
  const style = { height };

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ ...style, width: "100%", objectFit: "cover", display: "block" }}
      />
    );
  }

  const cls = ["media-slot", shape === "rounded" ? "rounded" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cls} style={style} role="img" aria-label={label}>
      <div className="media-slot-inner">
        <svg
          className="media-slot-icon"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <div className="media-slot-cap">{label}</div>
      </div>
    </div>
  );
}
