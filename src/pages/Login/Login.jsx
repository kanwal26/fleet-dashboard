import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login({ onLogin }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();
    onLogin();
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
