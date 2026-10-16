import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(null);

    useEffect(() => {
        const updateAuthState = () => {
            const userData = localStorage.getItem("examUser");
            const adminData = localStorage.getItem("admin");

            setUser(userData ? JSON.parse(userData) : null);
            setAdmin(adminData ? JSON.parse(adminData) : null);
        };

        updateAuthState();
        window.addEventListener("exam-auth-change", updateAuthState);

        return () => {
            window.removeEventListener("exam-auth-change", updateAuthState);
        };
    }, []);

    const handleLogout = () => {
        if (admin) {
            // Admin logout
            localStorage.removeItem("admin");
            setAdmin(null);
            navigate("/adminlogin");
        } else if (user) {
            // User logout
            localStorage.removeItem("examUser");
            setUser(null);
            navigate("/login");
        }
    };

    return (
        <div className="navbar-wrapper">

            <nav className="navbar navbar-expand-lg">

                <div className="container-fluid">

                    {/* Logo / Brand */}
                    <Link className="navbar-brand" to="/">
                        <span className="brand-icon">✦</span>

                        <span className="brand-text">
                           Examsphere-Intelligent Online Examination & Assessment Platform
                        </span>
                    </Link>


                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    {/* Navigation */}
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNav"
                    >

                        <ul className="navbar-nav">

                            {/* Home */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link home-link"
                                    to="/"
                                >
                                    <span className="nav-icon">⌂</span>
                                    Home
                                </Link>
                            </li>


                            {/* Services */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link services-link"
                                    to="/services"
                                >
                                    <span className="nav-icon">⚙</span>
                                    Services
                                </Link>
                            </li>


                            {/* Contact */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link contact-link"
                                    to="/contact"
                                >
                                    <span className="nav-icon">✉</span>
                                    Contact Us
                                </Link>
                            </li>

                            {user && !admin && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/result">
                                        <span className="nav-icon">🏆</span>
                                        My Results
                                    </Link>
                                </li>
                            )}


                            {/* Register - Show only if not logged in */}
                            {!user && !admin && (
                                <li className="nav-item">
                                    <Link
                                        className="nav-link register-link"
                                        to="/register"
                                    >
                                        <span className="nav-icon">+</span>
                                        Register
                                    </Link>
                                </li>
                            )}


                            {/* Login - Show only if not logged in */}
                            {!user && !admin && (
                                <li className="nav-item">
                                    <Link
                                        className="nav-link login-link"
                                        to="/login"
                                    >
                                        <span className="nav-icon">→</span>
                                        Login
                                    </Link>
                                </li>
                            )}

                            {/* User/Admin logout - Show only if logged in */}
                            {(user || admin) && (
                                <>
                                <li className="nav-item profile-summary">
                                    <span className="profile-avatar-small">
                                        {(admin || user)?.name?.charAt(0).toUpperCase()}
                                    </span>
                                    <span className="profile-details">
                                        <strong>{admin ? admin.name : user.name}</strong>
                                        <small>{admin ? admin.email : user.email}</small>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link logout-nav-link"
                                        onClick={handleLogout}
                                    >
                                        <span className="nav-icon">↪</span>
                                        Logout
                                    </button>
                                </li>
                                </>
                            )}

                        </ul>

                    </div>

                </div>

            </nav>

            <Outlet />

        </div>
    );
}