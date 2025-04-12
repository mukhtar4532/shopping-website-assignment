import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import "./Page.css";

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } =
    useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000);
  };

  if (cart.length === 0) {
    return <h3 className="empty-msg">Your cart is empty.</h3>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="item-info">
            <h4>{item.title}</h4>
            <p>${item.price.toFixed(2)}</p>
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => updateQuantity(item.id, e.target.value)}
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
      {showPopup && <div className="popup">Order placed successfully!</div>}
    </div>
  );
};
