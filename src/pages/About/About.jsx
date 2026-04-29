import FadeIn from "../../components/shared/FadeIn";
import PageBanner from "../../components/shared/PageBanner";
import SectionHeading from "../../components/shared/SectionHeading";
import { TEAM } from "../../data/teamData";

import "./About.css";

const STATS = [
  { value: "⭐⭐", label: "Michelin Stars" },
  { value: "18",   label: "Farm Partners"  },
  { value: "15+",  label: "Years Open"     },
];

export default function About() {
  return (
    <>
      <PageBanner title="About Us" sub="Our story, our people, our mission" />

      <div className="section about-section">
        <SectionHeading title="Our Story" />

        <div className="about-grid">
          <FadeIn>
            <img
              className="about-img"
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=700&q=75"
              alt="Our kitchen"
            />
          </FadeIn>

          <FadeIn delay={0.15} className="about-text">
            <p>
              New York Diner opened in 2009 with one simple idea: cook great food
              over a real wood fire. Founders Marisol and Luigi Ross started with
              a 30-seat dining room and a commitment to local, seasonal ingredients.
            </p>
            <p>
              Over the years we built relationships with 18 local farms and a
              network of foragers. Our menu changes regularly based on what's in
              season — so every visit is a little different.
            </p>
            <p>
              We hold two Michelin stars and have been named one of New York's
              top restaurants five years running. But what we're most proud of is
              the team and community we've built.
            </p>

            <div className="about-stats">
              {STATS.map(({ value, label }) => (
                <div key={label} className="about-stat">
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="team-section">
        <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <SectionHeading title="Meet the Team" light />

          <div className="team-grid">
            {TEAM.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.12}>
                <div className="team-card">
                  <img src={member.img} alt={member.name} />
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
