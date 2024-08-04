import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../AuthContext";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const [loading, setLoading] = useState(false);
  const url = `${process.env.REACT_APP_API_URL}login/`;
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error before making request
    const postData = { email, password };

    try {
      const response = await axios.post(url, postData);
      if (response.status === 200) {
        Cookies.set("access_token", response.data.access, { expires: 1 });
        Cookies.set("refresh_token", response.data.refresh, { expires: 30 });
        Cookies.set("user", JSON.stringify(response.data.user), {
          expires: 30,
        });
        login(response.data.user);
        navigate("/");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error); // Set error from API response
      } else {
        setError("An unknown error occurred."); // Fallback error message
      }
      console.error("Login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-root">
      <div className="form-container">
        <div className="form-title">Login Form</div>
        <form id="myForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}{" "}
          {/* Display error messages */}
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default Login;
