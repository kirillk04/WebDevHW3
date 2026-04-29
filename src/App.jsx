import { useState } from "react";

import Nav from "./components/Nav/Nav";
import CartPanel from "./components/CartPanel/CartPanel";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import "./styles/global.css";

export default function App() {
  const [page, setPage]         = useState("home");
  const [cart, setCart]         = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  /*  Cart helpers  */

  /**
   * Add one unit of an item, or increment its qty if already in cart.
   */
  const adjustCart = (name, price, delta = 1) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.name === name);
      if (idx > -1) {
        return prev
          .map((item, i) =>
            i === idx ? { ...item, qty: item.qty + delta } : item
          )
          .filter((item) => item.qty > 0);
      }
      return delta > 0 ? [...prev, { name, price, qty: 1 }] : prev;
    });
    if (delta > 0) setCartOpen(true); // auto-open panel on add
  };

  const removeFromCart = (name) =>
    setCart((prev) => prev.filter((i) => i.name !== name));

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  /*  Page renderer  */

  const renderPage = () => {
    switch (page) {
      case "home": return <Home setPage={setPage} />;
      case "menu": return <Menu onAddToCart={(name, price) => adjustCart(name, price, 1)} />;
      case "gallery": return <Gallery />;
      case "about": return <About/>;
      case "contact": return <Contact />;
      default: return <Home setPage={setPage} />;
    }
  };

  /*  Render  */

  return (
    <>
      <Nav
        page={page}
        setPage={setPage}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />

      <CartPanel
        cart={cart}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onAdjust={adjustCart}
        onRemove={removeFromCart}
        onClear={clearCart}
      />

      <main>{renderPage()}</main>

      <Footer setPage={setPage} />
    </>
  );
}
