import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="form-root">
      <div className="form-container">
        <div className="form-title">Login Form</div>
        <form id="myForm">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default Login;
