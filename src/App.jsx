import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AllRoutes } from "./routes/AllRoutes.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Header />
          <AllRoutes />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
