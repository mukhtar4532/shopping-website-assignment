import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import "./Header.css";

export const Header = () => {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/home")}>
        Shopping Cart
      </div>
      {isAuthenticated && (
        <nav className="nav">
          <Link to="/home">Home</Link>
          <Link to="/cart">
            Cart <span className="cart-count">{cartCount}</span>
          </Link>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      )}
    </header>
  );
};
