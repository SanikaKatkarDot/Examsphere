import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AdminExams.css";

const defaultExams = [
    { id: 1, name: "Java Programming", category: "Programming", questions: 20, duration: 30, difficulty: "Intermediate", icon: "☕", status: "Active" },
    { id: 2, name: "Web Development", category: "Web Development", questions: 25, duration: 35, difficulty: "Intermediate", icon: "🌐", status: "Active" },
    { id: 3, name: "Database & SQL", category: "Database", questions: 20, duration: 30, difficulty: "Advanced", icon: "🗄️", status: "Active" },
    { id: 4, name: "Python Programming", category: "Programming", questions: 20, duration: 30, difficulty: "Beginner", icon: "🐍", status: "Active" },
    { id: 5, name: "Computer Science", category: "Computer Science", questions: 30, duration: 40, difficulty: "Advanced", icon: "💻", status: "Active" },
    { id: 6, name: "JavaScript Challenge", category: "Web Development", questions: 25, duration: 35, difficulty: "Advanced", icon: "⚡", status: "Active" }
];

const normalizeExams = (storedExams) => {
    if (!Array.isArray(storedExams)) {
        return [...defaultExams];
    }

    return storedExams
        .filter(exam => exam && typeof exam === "object")
        .map((exam, index) => ({
            ...exam,
            id: exam.id ?? exam._id ?? `legacy-${index}`,
            name: typeof exam.name === "string" && exam.name.trim()
                ? exam.name.trim()
                : `Untitled Exam ${index + 1}`,
            category: typeof exam.category === "string" && exam.category.trim()
                ? exam.category
                : "Other",
            questions: Number.isFinite(Number(exam.questions)) && Number(exam.questions) > 0 ? Number(exam.questions) : 1,
            duration: Number.isFinite(Number(exam.duration)) && Number(exam.duration) > 0 ? Number(exam.duration) : 1,
            difficulty: typeof exam.difficulty === "string" && exam.difficulty.trim()
                ? exam.difficulty
                : "Beginner",
            icon: typeof exam.icon === "string" ? exam.icon : "📝",
            status: exam.status === "Draft" ? "Draft" : "Active"
        }));
};

export default function AdminExams() {

    const navigate = useNavigate();
    const location = useLocation();
    const [exams, setExams] = useState(() => {
        try {
            const stored = localStorage.getItem("adminExams");

            if (stored) {
                const storedExams = normalizeExams(JSON.parse(stored));
                let normalized = storedExams;

                if (localStorage.getItem("adminExamsVersion") !== "2") {
                    const storedById = new Map(storedExams.map(exam => [String(exam.id), exam]));
                    const defaultIds = new Set(defaultExams.map(exam => String(exam.id)));
                    normalized = [
                        ...defaultExams.map(defaultExam => ({
                            ...defaultExam,
                            status: storedById.get(String(defaultExam.id))?.status || defaultExam.status
                        })),
                        ...storedExams.filter(exam => !defaultIds.has(String(exam.id)))
                    ];
                }

                localStorage.setItem("adminExams", JSON.stringify(normalized));
                localStorage.setItem("adminExamsVersion", "2");
                return normalized;
            }

            localStorage.setItem("adminExams", JSON.stringify(defaultExams));
            localStorage.setItem("adminExamsVersion", "2");
            return [...defaultExams];
        } catch (error) {
            return defaultExams;
        }
    });
    const requestedEditId = location.state?.editExamId;
    const requestedEditExam = exams.find(exam => exam.id === requestedEditId);
    const [editingExamId, setEditingExamId] = useState(requestedEditExam?.id ?? null);
    const [showForm, setShowForm] = useState(Boolean(
        requestedEditExam || location.state?.createExam
    ));
    const [formError, setFormError] = useState("");
    const [formData, setFormData] = useState(requestedEditExam ? {
        name: requestedEditExam.name,
        category: requestedEditExam.category || "Programming",
        questions: String(requestedEditExam.questions),
        duration: String(requestedEditExam.duration),
        difficulty: requestedEditExam.difficulty || "Beginner"
    } : { name: "", category: "Programming", questions: "", duration: "", difficulty: "Beginner" });
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");

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
        }
    }, [navigate]);

    const saveExams = (nextExams) => {
        setExams(nextExams);
        localStorage.setItem("adminExams", JSON.stringify(nextExams));
        localStorage.setItem("adminExamsVersion", "2");
    };

    const openCreateForm = () => {
        setEditingExamId(null);
        setFormData({ name: "", category: "Programming", questions: "", duration: "", difficulty: "Beginner" });
        setFormError("");
        setShowForm(true);
    };

    const openEditForm = (exam) => {
        setEditingExamId(exam.id);
        setFormData({
            name: exam.name,
            category: exam.category || "Programming",
            questions: String(exam.questions),
            duration: String(exam.duration),
            difficulty: exam.difficulty || "Beginner"
        });
        setFormError("");
        setShowForm(true);
    };

    const saveExam = (event) => {
        event.preventDefault();
        const name = formData.name.trim();
        const questions = Number(formData.questions);
        const duration = Number(formData.duration);

        if (!name || !Number.isInteger(questions) || questions < 1 || !Number.isInteger(duration) || duration < 1) {
            setFormError("Enter an exam name and positive whole numbers for questions and duration.");
            return;
        }

        if (editingExamId !== null) {
            saveExams(exams.map(exam => exam.id === editingExamId
                ? { ...exam, name, category: formData.category, questions, duration, difficulty: formData.difficulty }
                : exam
            ));
        } else {
            saveExams([
                ...exams,
                { id: Date.now(), name, category: formData.category, questions, duration, difficulty: formData.difficulty, icon: "📝", status: "Draft" }
            ]);
        }

        setShowForm(false);
    };

    const toggleExamStatus = (examId) => {
        saveExams(exams.map(exam => exam.id === examId
            ? { ...exam, status: exam.status === "Active" ? "Draft" : "Active" }
            : exam
        ));
    };

    const deleteExam = (exam) => {
        if (window.confirm(`Delete ${exam.name}?`)) {
            saveExams(exams.filter(item => item.id !== exam.id));
        }
    };

    const filteredExams = exams.filter(exam => {
        const matchesSearch = String(exam.name || "").toLowerCase().includes(search.toLowerCase());
        const matchesCategory = categoryFilter === "All" || exam.category === categoryFilter;
        const matchesStatus = statusFilter === "All" || exam.status === statusFilter;
        return matchesSearch && matchesCategory && matchesStatus;
    });

    const categories = [...new Set(exams.map(exam => exam.category).filter(Boolean))].sort();

    return (
        <div className="admin-exams">
            <div className="exams-header">
                <div>
                    <h1>📝 Exams Management</h1>
                    <p>Tests Available: <strong>{defaultExams.length}</strong></p>
                </div>
                <button className="btn-add" onClick={openCreateForm}>+ Create Exam</button>
            </div>

            <div className="exam-toolbar">
                <input
                    type="search"
                    aria-label="Search exams"
                    placeholder="Search exams..."
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                />
                <select aria-label="Filter by category" value={categoryFilter} onChange={event => setCategoryFilter(event.target.value)}>
                    <option value="All">All Categories</option>
                    {categories.map(category => <option key={category} value={category}>{category}</option>)}
                </select>
                <select aria-label="Filter by status" value={statusFilter} onChange={event => setStatusFilter(event.target.value)}>
                    <option value="All">All Statuses</option>
                    <option value="Active">Active</option>
                    <option value="Draft">Draft</option>
                </select>
            </div>

            {showForm && (
                <form className="exam-form" onSubmit={saveExam}>
                    <div className="exam-form-heading">
                        <h2>{editingExamId === null ? "Create Exam" : "Edit Exam"}</h2>
                        <button type="button" className="btn-cancel" onClick={() => setShowForm(false)}>
                            Cancel
                        </button>
                    </div>
                    <label>
                        Exam name
                        <input
                            value={formData.name}
                            onChange={event => setFormData({ ...formData, name: event.target.value })}
                            required
                        />
                    </label>
                    <label>
                        Category
                        <select value={formData.category} onChange={event => setFormData({ ...formData, category: event.target.value })}>
                            <option>Programming</option>
                            <option>Web Development</option>
                            <option>Database</option>
                            <option>Computer Science</option>
                            <option>Other</option>
                        </select>
                    </label>
                    <label>
                        Difficulty
                        <select value={formData.difficulty} onChange={event => setFormData({ ...formData, difficulty: event.target.value })}>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                        </select>
                    </label>
                    <div className="exam-form-numbers">
                        <label>
                            Number of questions
                            <input
                                type="number"
                                min="1"
                                step="1"
                                value={formData.questions}
                                onChange={event => setFormData({ ...formData, questions: event.target.value })}
                                required
                            />
                        </label>
                        <label>
                            Duration (minutes)
                            <input
                                type="number"
                                min="1"
                                step="1"
                                value={formData.duration}
                                onChange={event => setFormData({ ...formData, duration: event.target.value })}
                                required
                            />
                        </label>
                    </div>
                    {formError && <p className="exam-form-error" role="alert">{formError}</p>}
                    <button type="submit" className="btn-save-exam">
                        {editingExamId === null ? "Create Exam" : "Save Changes"}
                    </button>
                </form>
            )}

            {filteredExams.length === 0 && !showForm && (
                <div className="empty-exams">
                    <h2>{exams.length === 0 ? "No exams yet" : "No matching exams"}</h2>
                    <p>{exams.length === 0 ? "Create an exam to start managing your assessments." : "Try changing your search or filters."}</p>
                    {exams.length === 0 && <button className="btn-add" onClick={openCreateForm}>+ Create Exam</button>}
                </div>
            )}

            <div className="exams-grid">
                {filteredExams.map(exam => (
                    <div
                        key={exam.id}
                        id={`exam-${exam.id}`}
                        className={`exam-card${location.state?.viewExamId === exam.id ? " selected" : ""}`}
                    >
                        <button
                            type="button"
                            className={`exam-status ${exam.status === "Active" ? "active" : "draft"}`}
                            onClick={() => toggleExamStatus(exam.id)}
                            title="Click to change exam status"
                        >
                            {exam.status}
                        </button>
                        <span className="exam-category-label">{exam.category}</span>
                        <h3>{exam.name}</h3>
                        <span className="exam-difficulty-label">{exam.difficulty}</span>
                        <div className="exam-details">
                            <p><strong>Questions:</strong> {exam.questions}</p>
                            <p><strong>Duration:</strong> {exam.duration} mins</p>
                        </div>
                        <div className="exam-actions">
                            <button className="btn-edit" onClick={() => openEditForm(exam)}>Edit</button>
                            <button className="btn-delete" onClick={() => deleteExam(exam)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
