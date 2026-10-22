import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_BASE_URL from "../config/api";
import "./AdminDashboard.css";

const defaultExams = [
    { id: 1, icon: "☕", name: "Java Programming", questions: 20, duration: 30, status: "Active" },
    { id: 2, icon: "🌐", name: "Web Development", questions: 25, duration: 35, status: "Active" },
    { id: 3, icon: "🗄️", name: "Database & SQL", questions: 20, duration: 30, status: "Active" },
    { id: 4, icon: "🐍", name: "Python Programming", questions: 20, duration: 30, status: "Active" },
    { id: 5, icon: "💻", name: "Computer Science", questions: 30, duration: 40, status: "Active" },
    { id: 6, icon: "⚡", name: "JavaScript Challenge", questions: 25, duration: 35, status: "Active" }
];

export default function AdminDashboard() {

    const navigate = useNavigate();
    const [admin, setAdmin] = useState(null);
    const [stats, setStats] = useState({
        totalStudents: 0,
        totalQuestions: 0,
        totalResults: 0,
        recentResults: [],
        loading: true
    });
    const [exams, setExams] = useState(() => {
        try {
            const storedExams = localStorage.getItem("adminExams");
            if (!storedExams) {
                return defaultExams;
            }

            const savedExams = JSON.parse(storedExams);
            if (!Array.isArray(savedExams)) {
                return defaultExams;
            }

            const savedById = new Map(savedExams.map(exam => [String(exam.id), exam]));
            const standardIds = new Set(defaultExams.map(exam => String(exam.id)));
            return [
                ...defaultExams.map(exam => ({
                    ...exam,
                    ...(savedById.get(String(exam.id)) || {}),
                    id: exam.id,
                    name: exam.name
                })),
                ...savedExams.filter(exam => exam && !standardIds.has(String(exam.id)))
            ];
        } catch (error) {
            return defaultExams;
        }
    });
    useEffect(() => {
        // Get admin info from localStorage
        const adminData = localStorage.getItem("admin");
        const userData = localStorage.getItem("examUser");

        if (!adminData) {
            // If no admin data, redirect to login
            navigate("/adminlogin");
        } else if (userData && !adminData) {
            // If user is logged in as student, redirect to tests
            navigate("/tests");
        } else {
            setAdmin(JSON.parse(adminData));
        }
    }, [navigate]);

    useEffect(() => {
        // Fetch statistics
        const fetchStats = async () => {
            try {
                const [usersRes, questionsRes, resultsRes] = await Promise.all([
                    fetch(`${API_BASE_URL}/api/users`),
                    fetch(`${API_BASE_URL}/api/questions/all`),
                    fetch(`${API_BASE_URL}/api/results`)
                ]);

                const usersData = await usersRes.json();
                const questionsData = await questionsRes.json();
                const resultsData = await resultsRes.json();

                setStats({
                    totalStudents: usersData.total || 0,
                    totalQuestions: questionsData.total || 0,
                    totalResults: resultsData.total || 0,
                    recentResults: resultsData.results || [],
                    loading: false
                });
            } catch (error) {
                console.log("Error fetching stats:", error);
                setStats(prev => ({ ...prev, loading: false }));
            }
        };

        fetchStats();

        const refreshTimer = setInterval(fetchStats, 10000);
        return () => clearInterval(refreshTimer);
    }, []);

    const logout = () => {
        // Clear admin data from localStorage
        localStorage.removeItem("admin");
        navigate("/adminlogin");
    };

    const saveExams = (nextExams) => {
        setExams(nextExams);
        localStorage.setItem("adminExams", JSON.stringify(nextExams));
    };

    const handleViewExam = (exam) => {
        navigate("/exams", { state: { viewExamId: exam.id } });
    };

    const handleEditExam = (exam) => {
        navigate("/exams", { state: { editExamId: exam.id } });
    };

    const handleDeleteExam = (exam) => {
        if (window.confirm(`Delete ${exam.name}?`)) {
            saveExams(exams.filter(item => item.id !== exam.id));
        }
    };

    const toggleExamStatus = (examId) => {
        saveExams(exams.map(exam => 
            exam.id === examId 
                ? { ...exam, status: exam.status === "Active" ? "Draft" : "Active" }
                : exam
        ));
    };

    return (
        <div className="admin-dashboard">

            {/* SIDEBAR */}

            <aside className="admin-sidebar">

                <div className="dashboard-logo">

                    <div className="dashboard-logo-icon">
                        🛡️
                    </div>

                    <div>
                        <h2>ExamPortal</h2>
                        <span>ADMIN PANEL</span>
                    </div>

                </div>


                <nav className="dashboard-nav">

                    <Link
                        to="/admindashboard"
                        className="dashboard-nav-item active"
                    >
                        <span>📊</span>
                        Dashboard
                    </Link>

                    <Link
                        to="/students"
                        className="dashboard-nav-item"
                    >
                        <span>👥</span>
                        Students
                    </Link>

                    <Link
                        to="/exams"
                        className="dashboard-nav-item"
                    >
                        <span>📝</span>
                        Exams
                    </Link>

                    <Link
                        to="/questions"
                        className="dashboard-nav-item"
                    >
                        <span>❓</span>
                        Questions
                    </Link>

                    <Link
                        to="/results"
                        className="dashboard-nav-item"
                    >
                        <span>🏆</span>
                        Results
                    </Link>

                    <Link
                        to="/messages"
                        className="dashboard-nav-item"
                    >
                        <span>📩</span>
                        Messages
                    </Link>

                    <Link
                        to="/settings"
                        className="dashboard-nav-item"
                    >
                        <span>⚙️</span>
                        Settings
                    </Link>

                </nav>


                <button
                    className="dashboard-logout"
                    onClick={logout}
                >
                    <span>↪</span>
                    Logout
                </button>

            </aside>


            {/* MAIN CONTENT */}

            <main className="dashboard-main">

                {/* TOPBAR */}

                <header className="dashboard-topbar">

                    <div>

                        <span>
                            ADMIN DASHBOARD
                        </span>

                        <h1>
                            Welcome back, {admin?.name || "Admin"} 👋
                        </h1>

                    </div>

                    <div className="admin-profile">

                        <div className="admin-avatar">
                            {admin?.name?.charAt(0).toUpperCase() || "A"}
                        </div>

                        <div>
                            <strong>
                                {admin?.name || "Administrator"}
                            </strong>

                            <small>
                                {admin?.email || "admin@example.com"}
                            </small>
                        </div>

                    </div>

                </header>


                {/* STATISTICS */}

                <section className="dashboard-stats">

                    <Link to="/students" className="stat-card" style={{textDecoration: 'none', color: 'inherit'}}>

                        <div className="stat-icon blue">
                            👥
                        </div>

                        <div>
                            <span>
                                TOTAL STUDENTS
                            </span>

                            <h2>
                                {stats.loading ? "..." : stats.totalStudents}
                            </h2>

                            <p>
                                <b>Active</b> users
                            </p>
                        </div>

                    </Link>


                    <Link to="/exams" className="stat-card" style={{textDecoration: 'none', color: 'inherit'}}>

                        <div className="stat-icon purple">
                            📝
                        </div>

                        <div>
                            <span>
                                TOTAL EXAMS
                            </span>

                            <h2>
                                {exams.filter(exam => exam.status === "Active").length}
                            </h2>

                            <p>
                                <b>Available</b> exams
                            </p>
                        </div>

                    </Link>


                    <Link to="/questions" className="stat-card" style={{textDecoration: 'none', color: 'inherit'}}>

                        <div className="stat-icon orange">
                            ❓
                        </div>

                        <div>
                            <span>
                                QUESTIONS
                            </span>

                            <h2>
                                {stats.loading ? "..." : stats.totalQuestions}
                            </h2>

                            <p>
                                <b>Total</b> questions
                            </p>
                        </div>

                    </Link>


                    <Link to="/results" className="stat-card" style={{textDecoration: 'none', color: 'inherit'}}>

                        <div className="stat-icon green">
                            🏆
                        </div>

                        <div>
                            <span>
                                COMPLETED TESTS
                            </span>

                            <h2>
                                {stats.loading ? "..." : stats.totalResults}
                            </h2>

                            <p>
                                <b>Total</b> results
                            </p>
                        </div>

                    </Link>

                </section>


                {/* CONTENT GRID */}

                <section className="dashboard-content">

                    {/* Recent Exams */}

                    <div className="dashboard-panel">

                        <div className="panel-header">

                            <div>
                                <span>
                                    EXAM MANAGEMENT
                                </span>

                                <h2>
                                    Recent Exams
                                </h2>
                            </div>

                            <button onClick={() => navigate("/exams", { state: { createExam: true } })}>
                                + Add Exam
                            </button>

                        </div>


                        <div className="exam-list">

                            {exams.map((exam) => (
                                <div 
                                    key={exam.id} 
                                    className="exam-row"
                                >

                                    <div className="exam-icon">
                                        {exam.icon || "📝"}
                                    </div>

                                    <div className="exam-details">
                                        <strong>
                                            {exam.name}
                                        </strong>

                                        <span>
                                            {exam.questions} Questions • {exam.duration} Minutes
                                        </span>
                                    </div>

                                    <button 
                                        className={`exam-status ${exam.status === "Active" ? "active-status" : "draft-status"}`}
                                        onClick={() => toggleExamStatus(exam.id)}
                                        title="Click to toggle status"
                                    >
                                        {exam.status}
                                    </button>

                                    <div className="exam-actions">
                                        <button
                                            className="action-btn view-btn"
                                            onClick={() => handleViewExam(exam)}
                                            title={`View ${exam.name}`}
                                            aria-label={`View ${exam.name}`}
                                        >
                                            👁️
                                        </button>
                                        <button
                                            className="action-btn edit-btn"
                                            onClick={() => handleEditExam(exam)}
                                            title={`Edit ${exam.name}`}
                                            aria-label={`Edit ${exam.name}`}
                                        >
                                            ✏️
                                        </button>
                                        <button
                                            className="action-btn delete-btn"
                                            onClick={() => handleDeleteExam(exam)}
                                            title={`Delete ${exam.name}`}
                                            aria-label={`Delete ${exam.name}`}
                                        >
                                            🗑️
                                        </button>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                    <div className="dashboard-panel dashboard-results-panel">

                        <div className="panel-header">
                            <div>
                                <span>LIVE SUBMISSIONS</span>
                                <h2>Recent Student Results</h2>
                            </div>

                            <button onClick={() => navigate("/results")}>
                                View All
                            </button>
                        </div>

                        {stats.recentResults.length === 0 ? (
                            <p className="empty-results">No student has submitted a test yet.</p>
                        ) : (
                            <div className="dashboard-results-list">
                                {stats.recentResults.slice(0, 5).map((result) => (
                                    <div className="dashboard-result-row" key={result._id}>
                                        <div>
                                            <strong>{result.userId?.name || "Student"}</strong>
                                            <span>{result.subject} • {new Date(result.createdAt).toLocaleString()}</span>
                                        </div>
                                        <b className={Number(result.percentage) >= 50 ? "result-pass" : "result-fail"}>
                                            {result.score}/{result.totalQuestions} ({result.percentage}%)
                                        </b>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>

                </section>

            </main>

        </div>
    );
}