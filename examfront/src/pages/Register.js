import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API_BASE_URL from "../config/api";
import "./Register.css";

export default function Register() {

  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");
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

    setMessage("");
    setError("");

    try {

      const response = await fetch(
        `${API_BASE_URL}/api/users/register`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (response.ok) {

        setMessage(data.message);

        // Redirect to login with /tests as the redirect destination
        setTimeout(() => {
          navigate("/login?redirect=%2Ftests");
        }, 2000);

        setFormData({
          name: "",
          email: "",
          course: "",
          password: "",
          confirmPassword: ""
        });

      } else {

        setError(data.message);

      }

    } catch (error) {

      setError("Unable to connect to server");

      console.log(error);
    }
  };

  return (

    <div className="register-container">

      <div className="register-card">

        <div className="register-header">

          <h1>Create Account</h1>

          <p>
            Join the Online Exam Portal
          </p>

        </div>

        {message && (
          <div className="success-message">
            {message}
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>


          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>


          <div className="input-group">

            <label>Course</label>

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Course
              </option>

              <option value="B.Tech">
                B.Tech
              </option>

              <option value="BCA">
                BCA
              </option>

              <option value="MCA">
                MCA
              </option>

              <option value="B.Sc">
                B.Sc
              </option>

              <option value="M.Sc">
                M.Sc
              </option>

            </select>

          </div>


          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>


          <div className="input-group">

            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

          </div>


          <button
            type="submit"
            className="register-btn"
          >
            Create Account
          </button>

        </form>

      </div>

    </div>

  );
}