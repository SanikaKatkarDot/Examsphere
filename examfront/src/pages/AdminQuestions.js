import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config/api";
import "./AdminQuestions.css";

const testSubjects = [
    "Java Programming",
    "Web Development",
    "Database & SQL",
    "Python Programming",
    "Computer Science",
    "JavaScript Challenge"
];

export default function AdminQuestions() {

    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [formData, setFormData] = useState({
        question: "",
        options: ["", "", "", ""],
        answer: "",
        subject: "",
        testNumber: ""
    });

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

        // Fetch questions
        fetchQuestions();
    }, [navigate]);

    const fetchQuestions = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/questions/all`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Unable to fetch questions");
            }

            const questionList = Array.isArray(data)
                ? data
                : data.questions;
            if (!Array.isArray(questionList)) {
                throw new Error("The questions response has an unexpected format.");
            }

            setQuestions(questionList);
            setLoadError("");
        } catch (error) {
            console.log("Error fetching questions:", error);
            setLoadError("Unable to load questions. Check that the question service is running, then try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleAddQuestion = async (e) => {
        e.preventDefault();

        try {
            const { testNumber, ...questionFields } = formData;
            const questionData = testNumber
                ? { ...questionFields, testNumber: Number(testNumber) }
                : questionFields;

            const response = await fetch(`${API_BASE_URL}/api/questions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(questionData)
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage(data.message || "Question added successfully!");
                setQuestions(prevQuestions => [data.question, ...prevQuestions]);
                setFormData({
                    question: "",
                    options: ["", "", "", ""],
                    answer: "",
                    subject: "",
                    testNumber: ""
                });
                setShowForm(false);
            } else {
                alert(data.message || "Failed to add question");
            }
        } catch (error) {
            console.log("Error:", error);
            alert("Error adding question");
        }
    };

    const handleDeleteQuestion = async (id) => {
        if (window.confirm("Are you sure you want to delete this question?")) {
            try {
                const response = await fetch(`${API_BASE_URL}/api/questions/${id}`, {
                    method: "DELETE"
                });

                if (response.ok) {
                    alert("Question deleted successfully!");
                    fetchQuestions();
                } else {
                    alert("Failed to delete question");
                }
            } catch (error) {
                console.log("Error:", error);
                alert("Error deleting question");
            }
        }
    };

    const handleDeleteSubjectQuestions = async () => {
        if (!selectedSubject) {
            return;
        }

        if (window.confirm(`Are you sure you want to delete all ${selectedSubject} questions?`)) {
            try {
                const response = await fetch(
                    `${API_BASE_URL}/api/questions/subject/${encodeURIComponent(selectedSubject)}`,
                    { method: "DELETE" }
                );
                const data = await response.json();

                if (response.ok) {
                    setSuccessMessage(data.message || "Subject questions deleted successfully!");
                    setQuestions(prevQuestions => prevQuestions.filter(
                        question => question.subject !== selectedSubject
                    ));
                    setSelectedSubject("");
                } else {
                    alert(data.message || "Failed to delete subject questions");
                }
            } catch (error) {
                console.log("Error:", error);
                alert("Error deleting subject questions");
            }
        }
    };

    const subjects = [...new Set(questions.map(question => question.subject))].sort();
    const groupedQuestions = questions.reduce((groups, question) => {
        const subject = question.subject || "Uncategorized";
        if (!groups[subject]) {
            groups[subject] = [];
        }
        groups[subject].push(question);
        return groups;
    }, {});

    return (
        <div className="admin-questions">
            <div className="questions-header">
                <div>
                    <h1>❓ Questions Management</h1>
                    <p>Total Questions: <strong>{questions.length}</strong></p>
                </div>
                <button className="btn-add" onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Cancel" : "+ Add Question"}
                </button>
            </div>

            {successMessage && (
                <div className="success-message" role="status">
                    {successMessage}
                </div>
            )}

            {!loading && subjects.length > 0 && (
                <div className="subject-actions">
                    <label htmlFor="delete-subject">Remove all questions in a section</label>
                    <select
                        id="delete-subject"
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                    >
                        <option value="">Select a subject</option>
                        {subjects.map(subject => (
                            <option key={subject} value={subject}>{subject}</option>
                        ))}
                    </select>
                    <button
                        type="button"
                        className="btn-delete-subject"
                        onClick={handleDeleteSubjectQuestions}
                        disabled={!selectedSubject}
                    >
                        Delete All in Section
                    </button>
                </div>
            )}

            {showForm && (
                <form className="add-question-form" onSubmit={handleAddQuestion}>
                    <h3>Add New Question</h3>

                    <div className="form-group">
                        <label>Question</label>
                        <textarea
                            value={formData.question}
                            onChange={(e) => setFormData({...formData, question: e.target.value})}
                            placeholder="Enter question"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Subject</label>
                        <select
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            required
                        >
                            <option value="">Select a test section</option>
                            {testSubjects.map(subject => (
                                <option key={subject} value={subject}>{subject}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Test</label>
                        <select
                            value={formData.testNumber}
                            onChange={(e) => setFormData({...formData, testNumber: e.target.value})}
                        >
                            <option value="">All tests (unassigned)</option>
                            {[1, 2, 3, 4, 5].map(testNumber => (
                                <option key={testNumber} value={testNumber}>Test {testNumber}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Options</label>
                        {formData.options.map((option, index) => (
                            <input
                                key={index}
                                type="text"
                                value={option}
                                onChange={(e) => {
                                    const newOptions = [...formData.options];
                                    newOptions[index] = e.target.value;
                                    setFormData({...formData, options: newOptions});
                                }}
                                placeholder={`Option ${index + 1}`}
                                required
                            />
                        ))}
                    </div>

                    <div className="form-group">
                        <label>Correct Answer</label>
                        <select
                            value={formData.answer}
                            onChange={(e) => setFormData({...formData, answer: e.target.value})}
                            required
                        >
                            <option value="">Select the correct option</option>
                            {formData.options.filter(Boolean).map((option, index) => (
                                <option key={`${option}-${index}`} value={option}>
                                    Option {index + 1}: {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="btn-submit">Add Question</button>
                </form>
            )}

            {loadError ? (
                <div className="no-data" role="alert">{loadError}</div>
            ) : loading ? (
                <div className="loading">Loading questions...</div>
            ) : questions.length === 0 ? (
                <div className="no-data">No questions added yet</div>
            ) : (
                <div className="questions-list">
                    {Object.entries(groupedQuestions).map(([subject, subjectQuestions]) => (
                        <div key={subject} className="subject-section">
                            <h2 className="subject-section-title">{subject}</h2>
                            {subjectQuestions.map((q, index) => (
                                <div key={q._id} className="question-card">
                                    <div className="question-header">
                                        <span className="q-number">{index + 1}</span>
                                        <h3>{q.question}</h3>
                                    </div>
                                    <div className="question-details">
                                        <p><strong>Subject:</strong> {q.subject}</p>
                                        {q.testNumber && <p><strong>Test:</strong> {q.testNumber}</p>}
                                        <p><strong>Options:</strong> {q.options.join(", ")}</p>
                                        <p><strong>Answer:</strong> {q.answer}</p>
                                    </div>
                                    <button 
                                        className="btn-delete"
                                        onClick={() => handleDeleteQuestion(q._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
