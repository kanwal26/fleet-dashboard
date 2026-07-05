import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

/**
 * Login page - matches the "Welcome Back / Sign in" screen from the design.
 *
 * Props:
 *  - onLogin: function passed down from App.js, called when the form
 *    is submitted successfully so App can flip isLoggedIn to true.
 */
function Login({ onLogin }) {
  // Controlled inputs: React state holds the current value of each field.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useNavigate gives us a function to move to a different route/URL
  // in response to code (e.g. after a successful login) instead of
  // only in response to the user clicking a link.
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // Stops the browser from doing a full page reload on form submit
    event.preventDefault();

    // In a real app you would call an API here to check the credentials.
    onLogin();

    // Once logged in, send the user to the dashboard route.
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <h1>Welcome Back</h1>
        <p>Secure access to your fleet anytime, anywhere</p>
      </div>

      <div className="login-card">
        <h2 className="login-card-title">Sign in</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email or User Name</label>
            <div className="input-with-icon">
              <span className="icon">✉</span>
              <input
                id="email"
                type="email"
                placeholder="username@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <span className="icon">✉</span>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>

          <button type="submit" className="sign-in-btn">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
