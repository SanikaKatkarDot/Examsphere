import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import API_BASE_URL from "../config/api";
import "./Login.css";

export default function Login() {

  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  useEffect(() => {
    // If user is already logged in, redirect to tests
    const userData = localStorage.getItem("examUser");
    if (userData) {
      navigate("/tests");
    }

    // If admin is logged in, redirect to dashboard
    const adminData = localStorage.getItem("admin");
    if (adminData) {
      navigate("/admindashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid email or password");
        return;
      }

      localStorage.setItem("examUser", JSON.stringify(data.user));
      window.dispatchEvent(new Event("exam-auth-change"));

      const redirect = new URLSearchParams(location.search).get("redirect");
      navigate(redirect || "/tests", { replace: true });
    } catch (error) {
      setError("Unable to connect to server");
    }
  };

  return (
    <div className="login-page">

      {/* Animated Background */}
      <div className="login-circle login-circle-one"></div>
      <div className="login-circle login-circle-two"></div>
      <div className="login-circle login-circle-three"></div>

      {/* Main Login Container */}
      <div className="login-container">

        {/* Left Section */}
        <div className="login-info">

          <div className="login-brand-icon">
            🎓
          </div>

          <h1>
            Welcome <span>Back!</span>
          </h1>

          <p>
            Login to your Online Exam Portal account and
            continue your learning and examination journey.
          </p>

          {/* Features */}
          <div className="login-features">

            <div className="login-feature">

              <div className="login-feature-icon">
                📝
              </div>

              <div>
                <h4>Take Online Exams</h4>
                <p>Access your available examinations easily.</p>
              </div>

            </div>


            <div className="login-feature">

              <div className="login-feature-icon">
                📊
              </div>

              <div>
                <h4>Track Your Performance</h4>
                <p>View your marks and examination results.</p>
              </div>

            </div>


            <div className="login-feature">

              <div className="login-feature-icon">
                🔐
              </div>

              <div>
                <h4>Secure Account</h4>
                <p>Your personal information stays protected.</p>
              </div>

            </div>

          </div>

        </div>


        {/* Login Card */}
        <div className="login-card">

          <div className="login-header">

            <div className="login-logo">
              🔑
            </div>

            <h2>Sign In</h2>

            <p>
              Enter your credentials to continue
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            {/* Email */}
            <div className="login-input-group">

              <label>Email Address</label>

              <div className="login-input-box">

                <span className="login-input-icon">
                  ✉
                </span>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* Password */}
            <div className="login-input-group">

              <div className="password-label-row">

                <label>Password</label>

                <Link
                  to="/forgot-password"
                  className="forgot-link"
                >
                  Forgot Password?
                </Link>

              </div>

              <div className="login-input-box">

                <span className="login-input-icon">
                  🔒
                </span>

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "🙈" : "👁"}
                </button>

              </div>

            </div>


            {/* Remember Me */}
            <div className="remember-row">

              <label className="remember-label">

                <input
                  type="checkbox"
                  name="remember"
                />

                <span>
                  Remember me
                </span>

              </label>

            </div>


            {/* Login Button */}
            <button
              type="submit"
              className="login-submit"
            >

              <span>
                Login to Account
              </span>

              <span className="login-arrow">
                →
              </span>

            </button>

          </form>


          {/* Divider */}
          <div className="login-divider">

            <span>OR</span>

          </div>


          {/* Register */}
          <div className="register-account">

            Don't have an account?

            <Link to="/register">
              Create Account
            </Link>

          </div>


          {/* Admin Login */}
          <div className="admin-login-box">

            <span>Are you an administrator?</span>

            <Link to="/adminlogin">
              Admin Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}