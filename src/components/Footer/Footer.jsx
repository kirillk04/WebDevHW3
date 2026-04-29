const NAV_LINKS = ["home", "menu", "gallery", "about", "contact"];
const SOCIALS = [
  { label: "Facebook", url: "https://www.facebook.com" },
  { label: "Instagram", url: "https://www.instagram.com" },
  { label: "Twitter / X", url: "https://x.com"},
  { label: "TripAdvisor", url: "https://www.tripadvisor.com" },
];

const label = (l) => l.charAt(0).toUpperCase() + l.slice(1);

export default function Footer({ setPage }) {
  const navigate = (p) => { setPage(p); window.scrollTo(0, 0); };

  return (
    <footer>
      <div className="footer-inner">
        {/* Brand column */}
        <div className="footer-col">
          <h4>New York Diner</h4>
          <p>Fine dining in New York City.<br />Come hungry, leave happy.</p>
          <div className="social-links">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.url} className="social-link" target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
          </div>
        </div>

        {/* Hours column */}
        <div className="footer-col">
          <h4>Hours</h4>
          <p>
            Mon-Thu: 5:00pm - 10:00pm<br />
            Fri-Sat: 5:00pm - 11:00pm<br />
            Sunday: 5:00pm -  9:00pm
          </p>
        </div>

        {/* Navigation column */}
        <div className="footer-col">
          <h4>Navigate</h4>
          {NAV_LINKS.map((l) => (
            <button key={l} className="footer-nav-btn" onClick={() => navigate(l)}>
              {label(l)}
            </button>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 New York Diner. All rights reserved.</p>
      </div>
    </footer>
  );
}
