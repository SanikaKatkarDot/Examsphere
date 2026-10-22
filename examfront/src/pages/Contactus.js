import React, { useState } from "react";
import API_BASE_URL from "../config/api";
import "./Contactus.css";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [error, setError] = useState("");

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
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send message");
      }

      alert(data.message || "Thank you! Your message has been submitted.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (submitError) {
      console.log("Contact form error:", submitError);
      setError(submitError.message || "Unable to send message");
    }
  };

  return (
    <div className="contact-page">

      {/* Background Effects */}
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>
      <div className="contact-glow contact-glow-three"></div>


      {/* ================================
          HERO SECTION
      ================================= */}

      <section className="contact-hero">

        <div className="contact-badge">
          ✦ GET IN TOUCH
        </div>

        <h1>
          Let's Start a
          <span> Conversation</span>
        </h1>

        <p>
          Have a question about our Online Exam Portal?
          We are here to help you with your queries,
          feedback and suggestions.
        </p>

      </section>


      {/* ================================
          CONTACT CONTENT
      ================================= */}

      <section className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <div className="info-heading">

            <span>CONTACT INFORMATION</span>

            <h2>
              We'd Love to
              <strong> Hear From You</strong>
            </h2>

            <p>
              Whether you have a question, feedback or
              need assistance, feel free to contact our team.
            </p>

          </div>


          {/* Email */}

          <div className="contact-info-card">

            <div className="contact-icon">
              ✉
            </div>

            <div>
              <span>Email Us</span>

              <h3>
                thekatkarsanika2005@gmail.com
              </h3>

              <p>
                Send us your queries anytime.
              </p>
            </div>

          </div>


          {/* Phone */}

          <div className="contact-info-card">

            <div className="contact-icon">
              ☎
            </div>

            <div>
              <span>Call Us</span>

              <h3>
                +91 9322129578
              </h3>

              <p>
                Monday - Friday, 9 AM - 6 PM
              </p>
            </div>

          </div>


          {/* Location */}

          <div className="contact-info-card">

            <div className="contact-icon">
              📍
            </div>

            <div>
              <span>Our Location</span>

              <h3>
                Maharashtra, India
              </h3>

              <p>
                Serving students and institutions.
              </p>
            </div>

          </div>


          {/* Social */}

          <div className="social-section">

            <span>
              FOLLOW US
            </span>

            <div className="social-icons">

              <a href="#" aria-label="LinkedIn">
                in
              </a>

              <a href="#" aria-label="Instagram">
                ◎
              </a>

              <a href="#" aria-label="GitHub">
                ◉
              </a>

              <a href="#" aria-label="Twitter">
                𝕏
              </a>

            </div>

          </div>

        </div>


        {/* RIGHT SIDE FORM */}

        <div className="contact-form-wrapper">

          <div className="form-header">

            <div>
              <span>SEND MESSAGE</span>

              <h2>
                How Can We Help?
              </h2>
            </div>

            <div className="form-header-icon">
              ↗
            </div>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {error && (
              <p className="contact-error" role="alert">
                {error}
              </p>
            )}

            {/* Name + Email */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    👤
                  </span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              <div className="form-group">

                <label>
                  Email Address
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
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

            </div>


            {/* Subject */}

            <div className="form-group">

              <label>
                Subject
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  ◈
                </span>

                <input
                  type="text"
                  name="subject"
                  placeholder="What is your message about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* Message */}

            <div className="form-group">

              <label>
                Message
              </label>

              <div className="input-wrapper textarea-wrapper">

                <span className="input-icon textarea-icon">
                  ✎
                </span>

                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>

            </div>


            {/* Submit */}

            <button
              type="submit"
              className="contact-submit"
            >

              <span>
                Send Message
              </span>

              <strong>
                →
              </strong>

            </button>


            <p className="form-note">
              🔒 Your information is kept private and secure.
            </p>

          </form>

        </div>

      </section>


      {/* ================================
          BOTTOM CTA
      ================================= */}

      <section className="contact-bottom">

        <div className="bottom-icon">
          💡
        </div>

        <div>

          <span>
            NEED QUICK HELP?
          </span>

          <h2>
            Check our services and start your journey.
          </h2>

        </div>

      </section>

    </div>
  );
}