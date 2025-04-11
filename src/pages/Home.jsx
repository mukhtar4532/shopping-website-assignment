import { useEffect, useState } from "react";
import { fetchCategoriesAPI, fetchProductsAPI } from "../api/api.js";
import { useNavigate } from "react-router-dom";
import "./Page.css";

export const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState("all");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Fetch all Categories

  const fetchCategories = async () => {
    try {
      const data = await fetchCategoriesAPI();
      console.log(data);
      setCategories(["all", ...data]);
    } catch (error) {
      console.log("Error from data fetching ", error);
    }
  };

  // Fetch product based on Category

  const fetchProducts = async (category) => {
    setLoading(true);
    const data = await fetchProductsAPI(category);
    console.log(data);
    setProducts(data);
    setLoading(false);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleCategoryChange = (e) => {
    setSelectedCategories(e.target.value);
  };

  const handleProductClick = (id) => {
    console.log(id);

    navigate("/home");
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts(selectedCategories);
  }, [selectedCategories]);

  return (
    <div className="home-container">
      <h2>Product Listing</h2>

      <div className="top-bar">
        <div className="filter-container">
          <select
            onChange={handleCategoryChange}
            value={selectedCategories || "all"}
          >
            {categories.length > 0 ? (
              categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat[0].toUpperCase() + cat.slice(1)}
                </option>
              ))
            ) : (
              <option disabled>Loading...</option>
            )}
          </select>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <p>Loading Products...</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
