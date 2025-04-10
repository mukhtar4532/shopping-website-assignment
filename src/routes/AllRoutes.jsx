import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login.jsx";

export const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>HIi</div>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
