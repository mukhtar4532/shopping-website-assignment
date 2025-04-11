import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login.jsx";
import { Home } from "../pages/Home.jsx";
import { ProductDetail } from "../pages/ProductDetail.jsx";

export const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
