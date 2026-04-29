export default function CartPanel({ cart, open, onClose, onAdjust, onRemove, onClear }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handleCheckout = () => {
    if (!cart.length) { alert("Your cart is empty!"); return; }
    alert("Order placed! Thank you for dining with us.");
    onClear();
    onClose();
  };

  return (
    <>
      {open && <div className="cart-overlay" onClick={onClose} />}

      <div className={`cart-panel${open ? " open" : ""}`}>
        {/* Header */}
        <div className="cart-panel-header">
          <span className="cart-panel-title">Your Order</span>
          <button className="cart-close" onClick={onClose}>×</button>
        </div>

        {/* Item list */}
        <div className="cart-list">
          {cart.length === 0 ? (
            <p className="cart-empty">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.name} className="cart-row">
                <div className="cart-row-info">
                  <span className="cart-row-name">{item.name}</span>
                  <span className="cart-row-meta">
                    ${item.price.toFixed(2)} × {item.qty}
                  </span>
                </div>
                <div className="cart-row-controls">
                  <button
                    className="cart-qty-btn"
                    onClick={() => onAdjust(item.name, item.price, -1)}
                  >
                    −
                  </button>
                  <span className="cart-qty-val">{item.qty}</span>
                  <button
                    className="cart-qty-btn"
                    onClick={() => onAdjust(item.name, item.price, 1)}
                  >
                    +
                  </button>
                  <button
                    className="cart-remove-btn"
                    onClick={() => onRemove(item.name)}
                  >
                    ×
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="cart-panel-footer">
          <div className="cart-total-row">
            <span className="cart-total-label">Total</span>
            <span className="cart-total-val">${total.toFixed(2)}</span>
          </div>
          <button className="cart-clear-btn" onClick={onClear}>
            Clear Cart
          </button>
          <button className="cart-checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
