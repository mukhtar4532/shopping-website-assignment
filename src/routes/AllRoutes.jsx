import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login.jsx";
import { Home } from "../pages/Home.jsx";

export const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
