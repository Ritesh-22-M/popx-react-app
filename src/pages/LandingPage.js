import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">
          Welcome to PopX
        </h1>

        <p className="landing-desc">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <button
          className="btn btn-primary"
          onClick={() => navigate('/create-account')}
        >
          Create Account
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default LandingPage;