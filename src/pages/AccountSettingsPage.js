import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountSettingsPage.css';

const CameraIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

function AccountSettingsPage() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const name = user?.fullName || "User";
  const email = user?.email || "No Email";

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const goBack = () => navigate(-1);

  return (
    <div className="settings-container">

      <div
        className="back-btn"
        onClick={goBack}
      >
        ← Back
      </div>

      <div className="settings-header">
        <h2>Account Settings</h2>
      </div>

      <div className="profile-section">
        <div className="avatar-wrap">

          <div className="avatar-placeholder">
            👤
          </div>

          <div className="camera-badge">
            <CameraIcon />
          </div>

        </div>

        <div className="profile-info">
          <p className="profile-name">{name}</p>
          <p className="profile-email">{email}</p>
        </div>
      </div>

      <div className="divider" />

      <div className="bio-section">
        <p className="bio-text">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
          Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Sign Out
      </button>

      <div className="divider divider-bottom" />
    </div>
  );
}

export default AccountSettingsPage;