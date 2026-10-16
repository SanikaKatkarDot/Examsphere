import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <div className="home-page">

            {/* =========================================
                HERO SECTION
            ========================================= */}

            <section className="hero-section">

                {/* Background decorative elements */}
                <div className="hero-glow glow-one"></div>
                <div className="hero-glow glow-two"></div>
                <div className="hero-glow glow-three"></div>

                <div className="hero-container">

                    {/* LEFT SIDE */}
                    <div className="hero-content">

                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Smart • Secure • Online Examination
                        </div>

                        <h1>
                            Test Your Knowledge.
                            <span> Achieve Your Goals.</span>
                        </h1>

                        <p className="hero-description">
                            Welcome to the Online Exam Portal — a modern,
                            secure and user-friendly platform designed to
                            make online examinations simple, fast and
                            engaging.
                        </p>


                        {/* CTA BUTTONS */}
                        <div className="hero-buttons">

                            <Link
                                to="/login?redirect=/tests/1"
                                className="primary-btn"
                            >
                                <span>Start Your Exam</span>
                                <span className="btn-arrow">→</span>
                            </Link>

                            <Link
                                to="/services"
                                className="secondary-btn"
                            >
                                Explore Features
                                <span>↗</span>
                            </Link>

                        </div>


                        {/* TRUST LINE */}
                        <div className="trust-line">

                            <div className="trust-item">
                                <span className="trust-icon">✓</span>
                                Secure Platform
                            </div>

                            <div className="trust-item">
                                <span className="trust-icon">✓</span>
                                Instant Results
                            </div>

                            <div className="trust-item">
                                <span className="trust-icon">✓</span>
                                Easy to Use
                            </div>

                        </div>

                    </div>


                    {/* RIGHT SIDE */}
                    <div className="hero-visual">

                        <div className="visual-orbit orbit-one"></div>
                        <div className="visual-orbit orbit-two"></div>

                        {/* Main Exam Card */}
                        <div className="exam-card">

                            <div className="exam-card-top">

                                <div className="exam-logo">
                                    ✦
                                </div>

                                <div>
                                    <h3>Online Assessment</h3>
                                    <p>Knowledge Test</p>
                                </div>

                                <div className="live-status">
                                    <span></span>
                                    LIVE
                                </div>

                            </div>


                            {/* Progress */}
                            <div className="progress-section">

                                <div className="progress-info">
                                    <span>Exam Progress</span>
                                    <strong>72%</strong>
                                </div>

                                <div className="progress-bar">
                                    <div className="progress-value"></div>
                                </div>

                            </div>


                            {/* Question */}
                            <div className="question-box">

                                <span className="question-number">
                                    Question 07
                                </span>

                                <h4>
                                    Which technology is commonly used
                                    to build modern web applications?
                                </h4>

                                <div className="answer-option selected">
                                    <span className="option-letter">A</span>
                                    <span>React</span>
                                    <span className="check-mark">✓</span>
                                </div>

                                <div className="answer-option">
                                    <span className="option-letter">B</span>
                                    <span>MS Paint</span>
                                </div>

                                <div className="answer-option">
                                    <span className="option-letter">C</span>
                                    <span>Calculator</span>
                                </div>

                            </div>


                            {/* Card Footer */}
                            <div className="exam-card-footer">

                                <span>
                                    ⏱ 18:42 remaining
                                </span>

                                <span className="next-question">
                                    Next →
                                </span>

                            </div>

                        </div>


                        {/* Floating Score Card */}
                        <div className="floating-card score-card">

                            <div className="floating-icon score-icon">
                                ★
                            </div>

                            <div>
                                <small>Your Score</small>
                                <strong>92%</strong>
                            </div>

                            <span className="up-arrow">
                                ↗
                            </span>

                        </div>


                        {/* Floating Students Card */}
                        <div className="floating-card student-card">

                            <div className="student-avatars">
                                <span>👨</span>
                                <span>👩</span>
                                <span>👨</span>
                            </div>

                            <div>
                                <strong>2.5K+</strong>
                                <small>Active Students</small>
                            </div>

                        </div>


                        {/* Floating Success Card */}
                        <div className="floating-card success-card">

                            <span className="success-check">
                                ✓
                            </span>

                            <div>
                                <strong>Exam Completed</strong>
                                <small>Result generated</small>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                STATISTICS
            ========================================= */}

            <section className="stats-section">

                <div className="stats-container">

                    <div className="stat-card">
                        <div className="stat-icon blue">◉</div>
                        <div>
                            <strong>2,500+</strong>
                            <span>Students</span>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon purple">✓</div>
                        <div>
                            <strong>10K+</strong>
                            <span>Exams Completed</span>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon green">★</div>
                        <div>
                            <strong>98%</strong>
                            <span>Success Rate</span>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon orange">⚡</div>
                        <div>
                            <strong>24/7</strong>
                            <span>Availability</span>
                        </div>
                    </div>

                </div>

            </section>


            {/* =========================================
                FEATURES
            ========================================= */}

            <section className="features-section">

                <div className="section-heading">

                    <span className="section-label">
                        WHY CHOOSE US
                    </span>

                    <h2>
                        Everything You Need for
                        <span> Better Online Exams</span>
                    </h2>

                    <p>
                        A complete examination experience designed
                        for students, institutions and administrators.
                    </p>

                </div>


                <div className="features-grid">

                    <div className="feature-card">

                        <div className="feature-icon blue-icon">
                            🔐
                        </div>

                        <h3>Secure Examination</h3>

                        <p>
                            Keep your examination experience protected
                            with a secure and reliable online platform.
                        </p>

                        <div className="feature-meta">
                            <span className="feature-dot"></span>
                            Anti-cheating checks and safe exam flow
                        </div>

                        <Link to="/services">
                            Learn More →
                        </Link>

                    </div>


                    <div className="feature-card featured-card">

                        <div className="feature-icon purple-icon">
                            🧠
                        </div>

                        <h3>Smart Quiz System</h3>

                        <p>
                            Take engaging quizzes with organized
                            questions, instant evaluation and easy
                            navigation.
                        </p>

                        <div className="feature-meta">
                            <span className="feature-dot"></span>
                            Organized question flow and quick practice
                        </div>

                        <Link to="/tests">
                            Take a Quiz →
                        </Link>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon green-icon">
                            📊
                        </div>

                        <h3>Instant Results</h3>

                        <p>
                            Get your examination score quickly and
                            understand your performance better.
                        </p>

                        <div className="feature-meta">
                            <span className="feature-dot"></span>
                            Detailed reporting for faster performance feedback
                        </div>

                        <Link to="/services">
                            View Details →
                        </Link>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon orange-icon">
                            📱
                        </div>

                        <h3>Responsive Design</h3>

                        <p>
                            Access your exams comfortably from desktop,
                            tablet or mobile devices.
                        </p>

                        <div className="feature-meta">
                            <span className="feature-dot"></span>
                            Smooth experience on every screen size
                        </div>

                        <Link to="/services">
                            Explore →
                        </Link>

                    </div>

                </div>

            </section>


            {/* =========================================
                HOW IT WORKS
            ========================================= */}

            <section className="process-section">

                <div className="section-heading">

                    <span className="section-label">
                        SIMPLE PROCESS
                    </span>

                    <h2>
                        Start Your Exam in
                        <span> 3 Easy Steps</span>
                    </h2>

                </div>


                <div className="process-container">

                    <div className="process-line"></div>


                    <div className="process-step">

                        <div className="step-number">
                            01
                        </div>

                        <div className="step-icon">
                            👤
                        </div>

                        <h3>Create Account</h3>

                        <p>
                            Register yourself and create your
                            examination profile.
                        </p>

                    </div>


                    <div className="process-step">

                        <div className="step-number">
                            02
                        </div>

                        <div className="step-icon">
                            📝
                        </div>

                        <h3>Choose Your Quiz</h3>

                        <p>
                            Select an available test and begin
                            answering questions.
                        </p>

                    </div>


                    <div className="process-step">

                        <div className="step-number">
                            03
                        </div>

                        <div className="step-icon">
                            🏆
                        </div>

                        <h3>Get Your Result</h3>

                        <p>
                            Complete your exam and view your
                            performance instantly.
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================
                CTA
            ========================================= */}

            <section className="cta-section">

                <div className="cta-glow"></div>

                <div className="cta-content">

                    <span className="cta-label">
                        READY TO BEGIN?
                    </span>

                    <h2>
                        Turn Your Knowledge
                        <span> Into Success.</span>
                    </h2>

                    <p>
                        Challenge yourself, improve your skills
                        and see how far your knowledge can take you.
                    </p>

                    <Link
                        to="/login?redirect=/tests/1"
                        className="cta-button"
                    >
                        Start Your First Quiz
                        <span>→</span>
                    </Link>

                </div>

            </section>


            {/* =========================================
                FOOTER
            ========================================= */}

            <footer className="home-footer">

                <div className="footer-brand">
                    <span>✦</span>
                    Online Exam Portal
                </div>

                <p>
                    © 2026 Online Exam Portal. Learn. Test. Succeed.
                </p>

                <div className="footer-links">

                    <Link to="/contact">
                        Contact
                    </Link>

                    <Link to="/services">
                        Services
                    </Link>

                    <Link to="/login">
                        Login
                    </Link>

                </div>

            </footer>

        </div>
    );
}