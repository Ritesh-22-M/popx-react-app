import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPages.css';

function CreateAccountPage() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  });
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  localStorage.setItem(
    "user",
    JSON.stringify(form)
  );

  navigate('/account-settings');
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
          Create your<br />PopX account
        </h1>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="float-field">
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder=" "
              value={form.fullName}
              onChange={handleChange}
              required
            />
            <label htmlFor="fullName">Full Name<span className="req">*</span></label>
          </div>

          <div className="float-field">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder=" "
              value={form.phone}
              onChange={handleChange}
              required
            />
            <label htmlFor="phone">Phone number<span className="req">*</span></label>
          </div>

          <div className="float-field">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email address<span className="req">*</span></label>
          </div>

          <div className="float-field">
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" "
              value={form.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password <span className="req">*</span></label>
          </div>

          <div className="float-field">
            <input
              type="text"
              id="company"
              name="company"
              placeholder=" "
              value={form.company}
              onChange={handleChange}
            />
            <label htmlFor="company">Company name</label>
          </div>

          <div className="radio-group">
            <p className="radio-label">Are you an Agency?<span className="req">*</span></p>
            <div className="radio-options">
              <label className="radio-item">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={form.isAgency === 'yes'}
                  onChange={handleChange}
                />
                <span className="radio-custom" />
                Yes
              </label>
              <label className="radio-item">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={form.isAgency === 'no'}
                  onChange={handleChange}
                />
                <span className="radio-custom" />
                No
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccountPage;
