import FadeIn from "../../components/shared/FadeIn";
import SectionHeading from "../../components/shared/SectionHeading";

import "./Home.css";

const HIGHLIGHTS = [
  {
    title: "Wood-Fired",
    body:  "Everything cooked over real wood in our open hearth — you can taste the difference.",
  },
  {
    title: "Seasonal",
    body:  "Menu changes weekly based on what our local farm partners bring in.",
  },
  {
    title: "Award Winning",
    body:  "Two Michelin stars and five years on New York's best restaurants list.",
  },
];

export default function Home({ setPage }) {
  const navigate = (p) => { setPage(p); window.scrollTo(0, 0); };

  return (
    <>
      {/*  Hero  */}
      <div className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="hero-eyebrow">Est. 2009 · New York City</p>
          <h1 className="hero-h1">New York Diner</h1>
          <p className="hero-sub">Wood-fired cuisine &nbsp;·&nbsp; Seasonal ingredients</p>
          <button className="hero-btn" onClick={() => navigate("menu")}>
            View the Menu
          </button>
        </div>
      </div>

      {/*  Highlights  */}
      <div className="highlights">
        <div style={{ padding: "0 3rem" }}>
          <SectionHeading title="Why Dine With Us" light />
        </div>
        <div className="highlights-grid" style={{ padding: "0 3rem" }}>
          {HIGHLIGHTS.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.12}>
              <div className="highlight-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  );
}
