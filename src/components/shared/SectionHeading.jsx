export default function SectionHeading({ title, light = false }) {
  return (
    <div className="section-heading">
      <h2 style={light ? { color: "var(--cream)" } : {}}>{title}</h2>
      <div className="underline" />
    </div>
  );
}
