import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetailsAPI } from "../api/api.js";
import "./Page.css";
import { CartContext } from "../context/CartContext.jsx";

export const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const fetchProductDetails = async () => {
    try {
      const data = await fetchProductDetailsAPI(id);

      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log("Failed to fetch product ", error);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <p className="loading">Loading product...</p>;
  }
  if (!product) {
    return <p className="error">Product not found.</p>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="price">$ {product.price}</p>
        <p className="description">{product.description}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
