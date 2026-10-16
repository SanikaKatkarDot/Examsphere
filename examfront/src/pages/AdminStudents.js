import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminStudents.css";

export default function AdminStudents() {

    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [studentResults, setStudentResults] = useState([]);
    const [resultsLoading, setResultsLoading] = useState(false);
    const [resultsError, setResultsError] = useState("");

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

        // Fetch students
        fetchStudents();
    }, [navigate]);

    const fetchStudents = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/users");
            const data = await response.json();
            setStudents(data.users || []);
            setLoading(false);
        } catch (error) {
            console.log("Error fetching students:", error);
            setLoading(false);
        }
    };

    const handleViewStudent = async (student) => {
        if (selectedStudent?._id === student._id) {
            setSelectedStudent(null);
            return;
        }

        setSelectedStudent(student);
        setStudentResults([]);
        setResultsError("");
        setResultsLoading(true);

        try {
            const response = await fetch(`http://localhost:5000/api/results/user/${student._id}`);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Unable to load student results");
            }
            setStudentResults(data);
        } catch (error) {
            console.log("Error fetching student results:", error);
            setResultsError("Unable to load this student's results.");
        } finally {
            setResultsLoading(false);
        }
    };

    return (
        <div className="admin-students">
            <div className="students-header">
                <h1>👥 Students Management</h1>
                <p>Total Students: <strong>{students.length}</strong></p>
            </div>

            {loading ? (
                <div className="loading">Loading students...</div>
            ) : students.length === 0 ? (
                <div className="no-data">No students registered yet</div>
            ) : (
                <div className="students-table">
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Course</th>
                                <th>Joined Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={student._id}>
                                    <td>{index + 1}</td>
                                    <td><strong>{student.name}</strong></td>
                                    <td>{student.email}</td>
                                    <td>{student.course}</td>
                                    <td>{new Date(student.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <button
                                            className="btn-view"
                                            onClick={() => handleViewStudent(student)}
                                            aria-expanded={selectedStudent?._id === student._id}
                                        >
                                            {selectedStudent?._id === student._id ? "Hide" : "View"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {selectedStudent && (
                <section className="student-profile" aria-live="polite">
                    <div className="student-profile-header">
                        <div>
                            <span>STUDENT PROFILE</span>
                            <h2>{selectedStudent.name}</h2>
                            <p>{selectedStudent.email} · {selectedStudent.course}</p>
                        </div>
                        <strong>{studentResults.length} completed test(s)</strong>
                    </div>

                    {resultsLoading ? (
                        <p className="profile-state">Loading student results...</p>
                    ) : resultsError ? (
                        <p className="profile-state profile-error">{resultsError}</p>
                    ) : studentResults.length === 0 ? (
                        <p className="profile-state">No completed tests for this student yet.</p>
                    ) : (
                        <div className="profile-results-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Score</th>
                                        <th>Questions</th>
                                        <th>Percentage</th>
                                        <th>Completed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studentResults.map(result => (
                                        <tr key={result._id}>
                                            <td>{result.subject}</td>
                                            <td>{result.score}</td>
                                            <td>{result.totalQuestions}</td>
                                            <td>{Number(result.percentage).toFixed(2)}%</td>
                                            <td>{new Date(result.createdAt).toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
            )}
        </div>
    );
}
