export default function PageBanner({ title, sub }) {
  return (
    <div className="page-banner">
      <h1>{title}</h1>
      <p>{sub}</p>
    </div>
  );
}
