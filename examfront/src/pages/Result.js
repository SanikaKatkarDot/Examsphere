import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config/api";
import "./Result.css";

export default function Result() {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("examUser");
    const user = userData ? JSON.parse(userData) : null;
    const userId = user?.id || user?._id;

    if (!userId) {
      navigate("/login?redirect=%2Fresult", { replace: true });
      return;
    }

    const fetchResults = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/results/user/${userId}`);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Unable to load results");
        }
        setResults(data);
      } catch (fetchError) {
        console.log("Error fetching student results:", fetchError);
        setError("Your results could not be loaded. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [navigate]);

  return (
    <main className="student-results-page">
      <header className="student-results-header">
        <div>
          <span>STUDENT DASHBOARD</span>
          <h1>My Results</h1>
        </div>
        <button type="button" onClick={() => navigate("/tests")}>Browse Tests</button>
      </header>

      {loading ? (
        <p className="student-results-state">Loading your results...</p>
      ) : error ? (
        <p className="student-results-state error">{error}</p>
      ) : results.length === 0 ? (
        <section className="student-results-state">
          <h2>No completed tests yet</h2>
          <p>Your submitted test results will appear here.</p>
          <button type="button" onClick={() => navigate("/tests")}>Explore Tests</button>
        </section>
      ) : (
        <div className="student-results-table-wrap">
          <table className="student-results-table">
            <thead>
              <tr>
                <th>Test</th>
                <th>Score</th>
                <th>Questions</th>
                <th>Percentage</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result._id}>
                  <td><strong>{result.subject}</strong></td>
                  <td>{result.score}</td>
                  <td>{result.totalQuestions}</td>
                  <td>
                    <span className={Number(result.percentage) >= 50 ? "result-pass" : "result-fail"}>
                      {Number(result.percentage).toFixed(2)}%
                    </span>
                  </td>
                  <td>{new Date(result.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
