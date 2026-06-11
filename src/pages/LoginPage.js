import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPages.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleLogin = (e) => {
  e.preventDefault();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user) {
    alert("No account found. Please create an account first.");
    return;
  }

  if (
    email === user.email &&
    password === user.password
  ) {
    navigate('/account-settings');
  } else {
    alert("Invalid email or password");
  }
};

  return (
    <div className="auth-container">
      <div className="auth-body">
        <div
          className="back-btn"
          onClick={goBack}
        >
          ← Back
        </div>
        <h1 className="auth-title">
          Signin to your<br />PopX account
        </h1>
        <p className="auth-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="float-field">
            <input
              type="email"
              id="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className="float-field">
            <input
              type="password"
              id="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-login"
            disabled={!email || !password}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
