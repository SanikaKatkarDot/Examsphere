import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

export default function Services() {

  const services = [
    {
      icon: "📝",
      title: "Online Examinations",
      description:
        "Take online examinations from anywhere with a simple, smooth and user-friendly exam interface.",
      tag: "Exams",
      link: "/tests"
    },
    {
      icon: "⚡",
      title: "Online Quiz",
      description:
        "Test your knowledge through interactive quizzes designed for quick learning and practice.",
      tag: "Quiz",
      link: "/tests"
    },
    {
      icon: "⏱️",
      title: "Timed Tests",
      description:
        "Attempt time-based tests and improve your speed, accuracy and time-management skills.",
      tag: "Practice",
      link: "/tests"
    },
    {
      icon: "📊",
      title: "Performance Analysis",
      description:
        "Analyze your examination performance and understand your strengths and improvement areas.",
      tag: "Analytics",
      link: "/tests"
    },
    {
      icon: "🏆",
      title: "Instant Results",
      description:
        "Get your examination results quickly after submitting your test and track your progress.",
      tag: "Results",
      link: "/result"
    },
    {
      icon: "🔐",
      title: "Secure Examination",
      description:
        "A secure examination environment helps protect user accounts and examination information.",
      tag: "Security",
      link: "/services"
    },
    {
      icon: "📚",
      title: "Question Bank",
      description:
        "Access organized questions and practice different subjects and topics efficiently.",
      tag: "Learning",
      link: "/tests"
    },
    {
      icon: "👨‍💼",
      title: "Admin Management",
      description:
        "Administrators can manage examinations, questions, users and examination-related activities.",
      tag: "Admin",
      link: "/adminlogin"
    }
  ];


  return (
    <div className="services-page">

      {/* =========================================
          BACKGROUND ELEMENTS
      ========================================= */}

      <div className="service-glow service-glow-one"></div>
      <div className="service-glow service-glow-two"></div>
      <div className="service-glow service-glow-three"></div>


      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="services-hero">

        <div className="hero-badge">
          ✦ OUR SERVICES
        </div>

        <h1>
          Everything You Need for
          <span> Smarter Examinations</span>
        </h1>

        <p>
          Explore our powerful online examination features
          designed to make testing simple, secure and engaging.
        </p>

        <div className="hero-buttons">

          <Link
            to="/login?redirect=/tests/1"
            className="service-primary-btn"
          >
            Explore Tests
            <span>→</span>
          </Link>

          <Link
            to="/register"
            className="service-secondary-btn"
          >
            Create Account
          </Link>

        </div>

      </section>


      {/* =========================================
          SERVICES SECTION
      ========================================= */}

      <section className="services-section">

        <div className="section-heading">

          <span>WHAT WE OFFER</span>

          <h2>
            Powerful Features,
            <strong> Simple Experience</strong>
          </h2>

          <p>
            Our Online Exam Portal provides essential tools
            for students and administrators in one platform.
          </p>

        </div>


        <div className="services-grid">

          {services.map((service, index) => (

            <div
              className="service-card"
              key={index}
            >

              <div className="service-card-top">

                <div className="service-icon">
                  {service.icon}
                </div>

                <span className="service-number">
                  0{index + 1}
                </span>

              </div>


              <div className="service-tag">
                {service.tag}
              </div>


              <h3>
                {service.title}
              </h3>


              <p>
                {service.description}
              </p>


              <Link to={service.link} className="service-learn">

                <span>
                  Learn More
                </span>

                <span className="learn-arrow">
                  →
                </span>

              </Link>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================
          HOW IT WORKS
      ========================================= */}

      <section className="how-section">

        <div className="section-heading">

          <span>HOW IT WORKS</span>

          <h2>
            Start Your Exam in
            <strong> 3 Simple Steps</strong>
          </h2>

          <p>
            Getting started with our Online Exam Portal
            is quick and simple.
          </p>

        </div>


        <div className="steps-container">

          <div className="step-card">

            <div className="step-number">
              01
            </div>

            <div className="step-icon">
              👤
            </div>

            <h3>
              Create Account
            </h3>

            <p>
              Register yourself using your basic
              information and create your account.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step-card">

            <div className="step-number">
              02
            </div>

            <div className="step-icon">
              📝
            </div>

            <h3>
              Choose Your Test
            </h3>

            <p>
              Select an available quiz or examination
              according to your course and subject.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step-card">

            <div className="step-number">
              03
            </div>

            <div className="step-icon">
              🏆
            </div>

            <h3>
              Get Your Result
            </h3>

            <p>
              Submit your examination and view your
              result and performance.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA SECTION
      ========================================= */}

      <section className="services-cta">

        <div className="cta-content">

          <div className="cta-icon">
            🚀
          </div>

          <div>

            <span>
              READY TO GET STARTED?
            </span>

            <h2>
              Take Your First Online Test Today
            </h2>

            <p>
              Join our platform and experience a
              smarter way to prepare for examinations.
            </p>

          </div>

        </div>


        <Link
          to="/register"
          className="cta-button"
        >
          Get Started
          <span>→</span>
        </Link>

      </section>

    </div>
  );
}