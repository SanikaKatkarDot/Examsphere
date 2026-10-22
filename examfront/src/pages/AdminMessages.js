import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config/api";
import "./AdminMessages.css";

export default function AdminMessages() {

    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

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

        fetchMessages();
    }, [navigate]);

    const fetchMessages = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/contact`);
            const data = await response.json();
            setMessages(data.messages || []);
            setLoading(false);
        } catch (error) {
            console.log("Error fetching messages:", error);
            setLoading(false);
        }
    };

    return (
        <div className="admin-messages">
            <div className="messages-header">
                <h1>📩 Contact Messages</h1>
                <p>Total Messages: <strong>{messages.length}</strong></p>
            </div>

            {loading ? (
                <div className="loading">Loading messages...</div>
            ) : messages.length === 0 ? (
                <div className="no-data">No messages yet</div>
            ) : (
                <div className="messages-list">
                    {messages.map((msg, index) => (
                        <div key={msg._id} className="message-card">
                            <div className="message-header">
                                <strong>{msg.name}</strong>
                                <span className="message-date">{new Date(msg.createdAt).toLocaleDateString()}</span>
                            </div>
                            <p className="message-email">{msg.email}</p>
                            <p className="message-subject"><strong>Subject:</strong> {msg.subject}</p>
                            <p className="message-content">{msg.message}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
