import { useContext, useState } from "react";
import { loginForm } from "../api/api.js";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import "./Page.css";

export const Login = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ username: "", password: "" });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginForm(formData);
      if (data.token) {
        // console.log(data.token);
        login(data.token);
        navigate("/home");
      } else {
        setError("Invalid credentials. Try again!");
      }
    } catch (error) {
      console.log(error);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        {error && <p className="error-msg">{error}</p>}
        <input
          type="text"
          name="username"
          placeholder="UserName"
          value={formData.username}
          onChange={handleOnChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleOnChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
