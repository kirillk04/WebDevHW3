import { useState } from "react";

import FadeIn from "../../components/shared/FadeIn";
import PageBanner from "../../components/shared/PageBanner";
import SectionHeading from "../../components/shared/SectionHeading";
import { MENU_DATA } from "../../data/menuData";

import "./Menu.css";

export default function Menu({ onAddToCart }) {
  // Tracks which item names are in the "just added" flash state
  const [added, setAdded] = useState({});

  const handleAdd = (name, price) => {
    onAddToCart(name, price);
    setAdded((prev) => ({ ...prev, [name]: true }));
    setTimeout(
      () => setAdded((prev) => ({ ...prev, [name]: false })),
      850
    );
  };

  return (
    <>
      <PageBanner title="Our Menu" sub="Fresh · Seasonal · Wood-fired" />

      <div className="section menu-section">
        <SectionHeading title="What We Serve" />

        <div className="menu-grid">
          {Object.entries(MENU_DATA).map(([category, items], ci) => (
            <FadeIn key={category} delay={ci * 0.08}>
              <div className="menu-category">
                <h3 className="menu-cat-title">{category}</h3>

                {items.map((item) => (
                  <div key={item.name} className="menu-item">
                    {/* Name + description */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="menu-item-name">{item.name}</div>
                      <div className="menu-item-desc">{item.desc}</div>
                    </div>

                    {/* Price */}
                    <div className="menu-item-price">${item.price}</div>

                    {/* Add-to-cart */}
                    <button
                      className={`add-btn${added[item.name] ? " added" : ""}`}
                      onClick={() => handleAdd(item.name, item.price)}
                      title="Add to cart"
                    >
                      {added[item.name] ? "✓" : "+"}
                    </button>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  );
}
