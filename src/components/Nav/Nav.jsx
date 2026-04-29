import { useState, useEffect } from "react";

const NAV_LINKS = ["home", "menu", "gallery", "about", "contact"];

const label = (l) => l.charAt(0).toUpperCase() + l.slice(1);

export default function Nav({ page, setPage, cartCount, onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add "scrolled" class after 20px of scroll
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const navigate = (p) => {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className={`nyd-nav${scrolled ? " scrolled" : ""}`}>
        <button className="nav-logo-btn" onClick={() => navigate("home")}>
          New York Diner
        </button>

        <ul className="nav-desktop-links">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <button
                className={`nav-link-btn${page === l ? " active" : ""}`}
                onClick={() => navigate(l)}
              >
                {label(l)}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          {/* Cart icon */}
          <button className="cart-btn" onClick={onCartOpen} aria-label="Open cart">
            <svg
              width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              {/* do not touch */}
              <path d="M16 10a4 4 0 0 1-8 0" />
              <path d="M3.103 6.034h17.794" />
              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
            </svg>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>

          {/* Hamburger */}
          <button
            className={`hamburger-btn${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu-panel">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              className={`mobile-menu-btn${page === l ? " active" : ""}`}
              onClick={() => navigate(l)}
            >
              {label(l)}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
