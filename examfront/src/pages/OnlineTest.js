
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import API_BASE_URL from "../config/api";
import "./OnlineTest.css";

export default function OnlineTest() {
    const navigate = useNavigate();
    const location = useLocation();
    const { testId, testNumber: routeTestNumber } = useParams();

    const testNumber = Math.max(1, Math.min(5, Number(routeTestNumber) || 1));

    const testSubjects = {
        1: "Java Programming",
        2: "Web Development",
        3: "Database & SQL",
        4: "Python Programming",
        5: "Computer Science",
        6: "JavaScript Challenge"
    };

    const subjectSlugs = {
        1: "java",
        2: "web",
        3: "database",
        4: "python",
        5: "computer-science",
        6: "javascript"
    };

    const subject = testSubjects[testId] || "Java Programming";
    const subjectSlug = subjectSlugs[testId] || "java";
    const completedTestsKey = `completedTests_${subjectSlug}`;

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState("");
    const questionCardRefs = useRef([]);

    const [answers, setAnswers] = useState({});
    const [markedQuestions, setMarkedQuestions] = useState([]);
    const [timeLeft, setTimeLeft] = useState(1800);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    // Redirect admins and users who are not logged in.
    useEffect(() => {
        const userData = localStorage.getItem("examUser");
        const adminData = localStorage.getItem("admin");

        if (adminData) {
            navigate("/admindashboard", { replace: true });
            return;
        }

        if (!userData) {
            navigate(
                `/login?redirect=${encodeURIComponent(location.pathname)}`,
                { replace: true }
            );
        }
    }, [location.pathname, navigate]);

    // Load questions for the selected subject and test number.
    useEffect(() => {
        let cancelled = false;

        const fetchQuestions = async () => {
            setLoading(true);
            setLoadError("");
            setQuestions([]);
            setAnswers({});
            setMarkedQuestions([]);
            setTimeLeft(1800);
            setSubmitted(false);
            setSubmitError("");

            try {
                const url =
                    `${API_BASE_URL}/api/questions/subject/` +
                    `${encodeURIComponent(subject)}` +
                    `${routeTestNumber ? `?testNumber=${testNumber}` : ""}`;

                const response = await fetch(url);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || "Unable to load questions");
                }

                const questionList = Array.isArray(data)
                    ? data
                    : data.questions;

                if (!Array.isArray(questionList)) {
                    throw new Error("Unexpected questions response format.");
                }

                if (!cancelled) {
                    setQuestions(questionList);
                }
            } catch (error) {
                console.error("Error fetching test questions:", error);

                if (!cancelled) {
                    setLoadError("Unable to load questions for this subject.");
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        fetchQuestions();

        return () => {
            cancelled = true;
        };
    }, [routeTestNumber, subject, testNumber]);

    // Calculate the score.
    const calculateScore = useCallback(() => {
        let score = 0;

        questions.forEach((question, index) => {
            if (answers[index] === question.answer) {
                score++;
            }
        });

        return score;
    }, [questions, answers]);

    // Submit the test and save the result.
    const handleSubmit = useCallback(async () => {
        if (submitted || submitting || loading || questions.length === 0) {
            return;
        }

        const userData = localStorage.getItem("examUser");
        let user = null;

        try {
            user = userData ? JSON.parse(userData) : null;
        } catch {
            user = null;
        }

        if (!user?.id && !user?._id) {
            setSubmitError("Unable to identify your account. Please log in again.");
            return;
        }

        const score = calculateScore();

        setSubmitting(true);
        setSubmitError("");

        try {
            const response = await fetch(`${API_BASE_URL}/api/results`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: user.id || user._id,
                    score,
                    totalQuestions: questions.length,
                    subject
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Result submission failed");
            }

            const savedTests = JSON.parse(
                localStorage.getItem(completedTestsKey) || "{}"
            );

            savedTests[String(testNumber)] = {
                completed: true,
                score,
                totalQuestions: questions.length,
                percentage: Number(
                    ((score / questions.length) * 100).toFixed(2)
                ),
                completedAt: new Date().toISOString()
            };

            localStorage.setItem(
                completedTestsKey,
                JSON.stringify(savedTests)
            );

            setSubmitted(true);
        } catch (error) {
            console.error("Result submission error:", error);
            setSubmitError("Unable to save your result. Please try again.");
        } finally {
            setSubmitting(false);
        }
    }, [
        submitted,
        submitting,
        loading,
        questions,
        calculateScore,
        subject,
        completedTestsKey,
        testNumber
    ]);

    // Timer: automatically submit when time runs out.
    useEffect(() => {
        if (loading || submitted || submitting || questions.length === 0) {
            return;
        }

        if (timeLeft <= 0) {
            handleSubmit();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(previous => Math.max(0, previous - 1));
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, handleSubmit, loading, submitted, submitting, questions.length]);

    const formatTime = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    const selectAnswer = (questionIndex, answer) => {
        setAnswers(previous => ({
            ...previous,
            [questionIndex]: answer
        }));
    };

    const toggleMark = questionIndex => {
        setMarkedQuestions(previous =>
            previous.includes(questionIndex)
                ? previous.filter(item => item !== questionIndex)
                : [...previous, questionIndex]
        );
    };

    // Result screen.
    if (submitted) {
        const score = calculateScore();
        const percentage = questions.length
            ? (score / questions.length) * 100
            : 0;

        return (
            <div className="test-result-page">
                <div className="result-card">
                    <div className="result-icon">🏆</div>
                    <span className="result-label">TEST COMPLETED</span>
                    <h1>Congratulations! 🎉</h1>
                    <p>You have successfully completed the online examination.</p>

                    <div className="score-circle">
                        <strong>{score}/{questions.length}</strong>
                        <span>Score</span>
                    </div>

                    <div className="result-details">
                        <div>
                            <span>Correct</span>
                            <strong>{score}</strong>
                        </div>
                        <div>
                            <span>Wrong</span>
                            <strong>{questions.length - score}</strong>
                        </div>
                        <div>
                            <span>Percentage</span>
                            <strong>{percentage.toFixed(2)}%</strong>
                        </div>
                    </div>

                    <button
                        className="back-home-btn"
                        onClick={() => navigate(`/subject-tests/${subjectSlug}`)}
                    >
                        Back to Tests →
                    </button>
                </div>
            </div>
        );
    }

    // Submission error screen.
    if (submitError) {
        return (
            <div className="test-result-page">
                <div className="result-card">
                    <h1>Result Not Saved</h1>
                    <p>{submitError}</p>
                    <button
                        className="back-home-btn"
                        onClick={handleSubmit}
                        disabled={submitting}
                    >
                        {submitting ? "Saving..." : "Try Again"}
                    </button>
                </div>
            </div>
        );
    }

    // Loading and question errors.
    if (loading || loadError || questions.length === 0) {
        return (
            <div className="test-result-page">
                <div className="result-card">
                    <h1>
                        {loading ? "Loading Test..." : "No Questions Available"}
                    </h1>
                    <p>
                        {loadError ||
                            `There are no questions available for ${subject}.`}
                    </p>
                    <button
                        className="back-home-btn"
                        onClick={() => navigate("/tests")}
                    >
                        Back to Tests
                    </button>
                </div>
            </div>
        );
    }

    const answeredCount = Object.keys(answers).length;
    const progress = (answeredCount / questions.length) * 100;

    // Main test page.
    return (
        <div className="online-test-page">
            <header className="test-header">
                <div className="test-brand">
                    <div className="test-brand-icon">📝</div>
                    <div>
                        <h2>Online Exam Portal</h2>
                        <span>{subject.toUpperCase()} TEST</span>
                    </div>
                </div>

                <div className="test-info">
                    <div className="test-info-item">
                        <span>QUESTIONS</span>
                        <strong>{questions.length}</strong>
                    </div>

                    <div className="test-info-item">
                        <span>ATTEMPTED</span>
                        <strong>{answeredCount}</strong>
                    </div>

                    <div className="timer-box">
                        <span>TIME LEFT</span>
                        <strong>⏱ {formatTime()}</strong>
                    </div>
                </div>
            </header>

            <div className="test-progress-container">
                <div className="progress-info">
                    <span>
                        Answered {answeredCount} of {questions.length}
                    </span>
                    <strong>{Math.round(progress)}%</strong>
                </div>

                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <main className="test-main">
                <section className="question-section">
                    {questions.map((question, questionIndex) => (
                        <div
                            className="question-card"
                            key={question._id || questionIndex}
                            ref={element => {
                                questionCardRefs.current[questionIndex] = element;
                            }}
                        >
                            <div className="question-top">
                                <span className="question-number">
                                    QUESTION {questionIndex + 1}
                                </span>

                                <button
                                    type="button"
                                    className={
                                        markedQuestions.includes(questionIndex)
                                            ? "mark-btn marked"
                                            : "mark-btn"
                                    }
                                    onClick={() => toggleMark(questionIndex)}
                                >
                                    🚩
                                    {markedQuestions.includes(questionIndex)
                                        ? " Marked"
                                        : " Mark for Review"}
                                </button>
                            </div>

                            <h1 className="question-text">
                                {question.question}
                            </h1>

                            <div className="options-container">
                                {(question.options || []).map(
                                    (option, optionIndex) => (
                                        <label
                                            key={optionIndex}
                                            className={
                                                answers[questionIndex] === option
                                                    ? "answer-option selected"
                                                    : "answer-option"
                                            }
                                        >
                                            <input
                                                type="radio"
                                                name={`question-${questionIndex}`}
                                                value={option}
                                                checked={
                                                    answers[questionIndex] === option
                                                }
                                                onChange={() =>
                                                    selectAnswer(
                                                        questionIndex,
                                                        option
                                                    )
                                                }
                                            />

                                            <span className="option-letter">
                                                {String.fromCharCode(65 + optionIndex)}
                                            </span>
                                            <span className="option-text">
                                                {option}
                                            </span>
                                            <span className="option-check">✓</span>
                                        </label>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </section>

                <aside className="question-sidebar">
                    <div className="palette-card">
                        <div className="palette-header">
                            <span>TEST NAVIGATION</span>
                            <h2>Questions</h2>
                        </div>

                        <div className="question-palette">
                            {questions.map((question, index) => (
                                <button
                                    type="button"
                                    key={question._id || index}
                                    onClick={() =>
                                        questionCardRefs.current[index]?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start"
                                        })
                                    }
                                    className={[
                                        "palette-number",
                                        answers[index] !== undefined ? "answered" : "",
                                        markedQuestions.includes(index)
                                            ? "marked-number"
                                            : ""
                                    ].filter(Boolean).join(" ")}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>

                        <div className="palette-legend">
                            <div>
                                <span className="legend-box answered-box" />
                                Answered
                            </div>
                            <div>
                                <span className="legend-box marked-box" />
                                Review
                            </div>
                            <div>
                                <span className="legend-box unanswered-box" />
                                Not Answered
                            </div>
                        </div>

                        <button
                            type="button"
                            className="submit-test-btn"
                            onClick={handleSubmit}
                            disabled={submitting}
                        >
                            {submitting ? "Submitting..." : "Submit Test"}
                            <span>→</span>
                        </button>

                        <p className="submit-warning">
                            ⚠ Make sure you have answered all questions before submitting.
                        </p>
                    </div>
                </aside>
            </main>
        </div>
    );
}
