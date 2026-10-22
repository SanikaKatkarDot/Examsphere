import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config/api";
import "./AdminResults.css";

export default function AdminResults() {

    const navigate = useNavigate();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check admin auth
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

        // Fetch results
        fetchResults();
    }, [navigate]);

    const fetchResults = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/results`);
            const data = await response.json();
            setResults(data.results || []);
            setLoading(false);
        } catch (error) {
            console.log("Error fetching results:", error);
            setLoading(false);
        }
    };

    return (
        <div className="admin-results">
            <div className="results-header">
                <h1>🏆 Test Results</h1>
                <p>Total Tests Completed: <strong>{results.length}</strong></p>
            </div>

            {loading ? (
                <div className="loading">Loading results...</div>
            ) : results.length === 0 ? (
                <div className="no-data">No test results yet</div>
            ) : (
                <div className="results-table">
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Student</th>
                                <th>Subject</th>
                                <th>Score</th>
                                <th>Total Questions</th>
                                <th>Percentage</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result, index) => (
                                <tr key={result._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        {typeof result.userId === "object"
                                            ? `${result.userId.name || "Student"} (${result.userId.email || "N/A"})`
                                            : result.userId || "N/A"}
                                    </td>
                                    <td>{result.subject || "N/A"}</td>
                                    <td><strong>{result.score}</strong></td>
                                    <td>{result.totalQuestions}</td>
                                    <td>
                                        <span className={`percentage ${result.percentage >= 50 ? 'pass' : 'fail'}`}>
                                            {result.percentage}%
                                        </span>
                                    </td>
                                    <td>{new Date(result.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
