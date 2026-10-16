import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminSettings.css";

export default function AdminSettings() {

    const navigate = useNavigate();
    const [admin, setAdmin] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    useEffect(() => {
        const adminData = localStorage.getItem("admin");
        const userData = localStorage.getItem("examUser");

        if (!adminData) {
            // No admin logged in
            if (userData) {
                // Regular user trying to access admin panel
                navigate("/tests");
            } else {
                navigate("/adminlogin");
            }
            return;
        }

        const parsed = JSON.parse(adminData);
        setAdmin(parsed);
        setFormData({
            ...formData,
            name: parsed.name,
            email: parsed.email
        });
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Settings update feature coming soon!");
    };

    return (
        <div className="admin-settings">
            <div className="settings-header">
                <h1>⚙️ Admin Settings</h1>
                <p>Manage your account preferences and security</p>
            </div>

            <div className="settings-container">
                <div className="settings-section">
                    <h2>Profile Information</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </div>

                        <button type="submit" className="btn-save">Save Changes</button>
                    </form>
                </div>

                <div className="settings-section">
                    <h2>Change Password</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Current Password</label>
                            <input
                                type="password"
                                name="currentPassword"
                                value={formData.currentPassword}
                                onChange={handleChange}
                                placeholder="Enter current password"
                            />
                        </div>

                        <div className="form-group">
                            <label>New Password</label>
                            <input
                                type="password"
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                placeholder="Enter new password"
                            />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm new password"
                            />
                        </div>

                        <button type="submit" className="btn-save">Update Password</button>
                    </form>
                </div>

                <div className="settings-section danger">
                    <h2>Danger Zone</h2>
                    <p>Irreversible and destructive actions</p>
                    <button className="btn-danger">Delete Account</button>
                </div>
            </div>
        </div>
    );
}
