// Scroll reveal disabled per request — content renders immediately with no
// appearing/fade-in animation. Kept as a thin passthrough so call sites
// (`as`, `className`, `to`, etc.) don't need to change.
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
}
