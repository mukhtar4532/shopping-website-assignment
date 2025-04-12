import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login.jsx";
import { Home } from "../pages/Home.jsx";
import { ProductDetail } from "../pages/ProductDetail.jsx";
import { Cart } from "../pages/Cart.jsx";

export const AllRoutes = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    // </BrowserRouter>
  );
};
