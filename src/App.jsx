import { AuthProvider } from "./context/AuthContext.jsx";
import { AllRoutes } from "./routes/AllRoutes.jsx";

const App = () => {
  return (
    <>
      <AuthProvider>
        <AllRoutes />
      </AuthProvider>
    </>
  );
};

export default App;
