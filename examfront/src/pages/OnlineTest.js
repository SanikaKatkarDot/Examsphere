import React, { useEffect, useRef, useState } from "react";

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

    const subject = testSubjects[testId] || "Java Programming";

    // These slugs must match the subject names used by SubjectTests.jsx.
    const subjectSlugs = {
        1: "java",
        2: "web",
        3: "database",
        4: "python",
        5: "computer-science",
        6: "javascript"
    };
    const subjectSlug = subjectSlugs[testId] || "java";
    const completedTestsKey = `completedTests_${subjectSlug}`;

    const [questions, setQuestions] = useState([]);

    const [loading, setLoading] = useState(true);

    const [loadError, setLoadError] = useState("");
    const questionCardRefs = useRef([]);



    useEffect(() => {

        const userData = localStorage.getItem("examUser");

        const adminData = localStorage.getItem("admin");



        if (adminData) {

            // Admin trying to access user test

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



    useEffect(() => {

        const fetchQuestions = async () => {

            try {

                const response = await fetch(
                    `${API_BASE_URL}/api/questions/subject/${encodeURIComponent(subject)}${routeTestNumber ? `?testNumber=${testNumber}` : ""}`

                );

                const data = await response.json();



                if (!response.ok) {

                    throw new Error(data.message || "Unable to load questions");

                }

                const questionList = Array.isArray(data)
                    ? data
                    : data.questions;

                if (!Array.isArray(questionList)) {
                    throw new Error("The questions response has an unexpected format.");
                }

                setQuestions(questionList);

            } catch (error) {

                console.log("Error fetching test questions:", error);

                setLoadError("Unable to load questions for this subject.");

            } finally {

                setLoading(false);

            }

        };



        fetchQuestions();

    }, [routeTestNumber, subject, testNumber]);





    /* =================================================

       STATES

    ================================================= */



    const [answers, setAnswers] = useState({});



    const [markedQuestions, setMarkedQuestions] = useState([]);



    // 30 minutes = 1800 seconds

    const [timeLeft, setTimeLeft] = useState(1800);



    const [submitted, setSubmitted] = useState(false);

    const [submitting, setSubmitting] = useState(false);

    const [submitError, setSubmitError] = useState("");





    /* =================================================

       TIMER

    ================================================= */



    useEffect(() => {



        if (timeLeft <= 0) {



            handleSubmit();



            return;

        }



        const timer = setInterval(() => {



            setTimeLeft((previous) => previous - 1);



        }, 1000);



        return () => clearInterval(timer);



    }, [timeLeft]);





    /* =================================================

       FORMAT TIME

    ================================================= */



    const formatTime = () => {



        const minutes = Math.floor(timeLeft / 60);



        const seconds = timeLeft % 60;



        return `${String(minutes).padStart(2, "0")}:${String(

            seconds

        ).padStart(2, "0")}`;

    };





    /* =================================================

       SELECT ANSWER

    ================================================= */



    /* =================================================

       MARK QUESTION

    ================================================= */



    const selectAnswer = (questionIndex, answer) => {
        setAnswers((previousAnswers) => ({
            ...previousAnswers,
            [questionIndex]: answer
        }));
    };

    const toggleMark = (questionIndex) => {
        setMarkedQuestions((previousMarkedQuestions) =>
            previousMarkedQuestions.includes(questionIndex)
                ? previousMarkedQuestions.filter((item) => item !== questionIndex)
                : [...previousMarkedQuestions, questionIndex]
        );
    };





    /* =================================================

       SUBMIT TEST

    ================================================= */



    const handleSubmit = async () => {

        if (submitted || submitting) {

            return;

        }



        const userData = localStorage.getItem("examUser");

        const user = userData ? JSON.parse(userData) : null;

        const score = calculateScore();



        if (!user?.id && !user?._id) {

            setSubmitError("Unable to identify your account. Please log in again.");

            return;

        }



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



            // Save this test's score in localStorage so the subject page can
            // show a green checkmark and the score after refresh.
            const savedTests = JSON.parse(
                localStorage.getItem(completedTestsKey) || "{}"
            );

            savedTests[String(testNumber)] = {
                completed: true,
                score,
                totalQuestions: questions.length,
                percentage: questions.length
                    ? Number(((score / questions.length) * 100).toFixed(2))
                    : 0,
                completedAt: new Date().toISOString()
            };

            localStorage.setItem(completedTestsKey, JSON.stringify(savedTests));

            setSubmitted(true);

        } catch (error) {

            console.log("Result submission error:", error);

            setSubmitError("Unable to save your result. Please try again.");

        } finally {

            setSubmitting(false);

        }

    };





    /* =================================================

       CALCULATE SCORE

    ================================================= */



    const calculateScore = () => {



        let score = 0;



        questions.forEach((question, index) => {



            if (answers[index] === question.answer) {



                score++;



            }



        });



        return score;



    };





    /* =================================================

       RESULT SCREEN

    ================================================= */



    if (submitted) {



        const score = calculateScore();



        const percentage =

            (score / questions.length) * 100;



        return (



            <div className="test-result-page">



                <div className="result-card">



                    <div className="result-icon">

                        🏆

                    </div>



                    <span className="result-label">

                        TEST COMPLETED

                    </span>



                    <h1>

                        Congratulations! 🎉

                    </h1>



                    <p>

                        You have successfully completed the

                        online examination.

                    </p>





                    <div className="score-circle">



                        <strong>

                            {score}/{questions.length}

                        </strong>



                        <span>

                            Score

                        </span>



                    </div>





                    <div className="result-details">



                        <div>

                            <span>Correct</span>

                            <strong>

                                {score}

                            </strong>

                        </div>



                        <div>

                            <span>Wrong</span>

                            <strong>

                                {questions.length - score}

                            </strong>

                        </div>



                        <div>

                            <span>Percentage</span>

                            <strong>

                                {percentage.toFixed(2)}%

                            </strong>

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



    if (submitError) {

        return (

            <div className="test-result-page">

                <div className="result-card">

                    <h1>Result Not Saved</h1>

                    <p>{submitError}</p>

                    <button className="back-home-btn" onClick={handleSubmit} disabled={submitting}>

                        {submitting ? "Saving..." : "Try Again"}

                    </button>

                </div>

            </div>

        );

    }



    if (loading || loadError || questions.length === 0) {

        return (

            <div className="test-result-page">

                <div className="result-card">

                    <h1>{loading ? "Loading Test..." : "No Questions Available"}</h1>

                    <p>{loadError || `There are no questions available for ${subject}.`}</p>

                    <button className="back-home-btn" onClick={() => navigate("/tests")}>

                        Back to Tests

                    </button>

                </div>

            </div>

        );

    }





    const answeredCount = Object.keys(answers).length;
    const progress = questions.length
        ? (answeredCount / questions.length) * 100
        : 0;





    /* =================================================

       TEST PAGE

    ================================================= */



    return (



        <div className="online-test-page">





            {/* =========================================

                TOP HEADER

            ========================================= */}



            <header className="test-header">



                <div className="test-brand">



                    <div className="test-brand-icon">

                        📝

                    </div>



                    <div>



                        <h2>

                            Online Exam Portal

                        </h2>



                        <span>

                            {subject.toUpperCase()} TEST

                        </span>



                    </div>



                </div>





                <div className="test-info">



                    <div className="test-info-item">



                        <span>

                            QUESTIONS

                        </span>



                        <strong>

                            {questions.length}

                        </strong>



                    </div>



                    <div className="test-info-item">



                        <span>

                            ATTEMPTED

                        </span>



                        <strong>

                            {Object.keys(answers).length}

                        </strong>



                    </div>



                    <div className="timer-box">



                        <span>

                            TIME LEFT

                        </span>



                        <strong>

                            ⏱ {formatTime()}

                        </strong>



                    </div>



                </div>



            </header>





            {/* =========================================

                PROGRESS BAR

            ========================================= */}



            <div className="test-progress-container">



                <div className="progress-info">



                    <span>

                        Answered {answeredCount} of {questions.length}

                    </span>



                    <strong>

                        {Math.round(progress)}%

                    </strong>



                </div>



                <div className="progress-bar">



                    <div

                        className="progress-fill"

                        style={{

                            width: `${progress}%`

                        }}

                    ></div>



                </div>



            </div>





            {/* =========================================

                MAIN CONTENT

            ========================================= */}



            <main className="test-main">





                {/* QUESTION CARD */}



                <section className="question-section">
                    {questions.map((question, questionIndex) => (
                        <div
                            className="question-card"
                            key={question._id || questionIndex}
                            ref={(element) => {
                                questionCardRefs.current[questionIndex] = element;
                            }}
                        >
                            <div className="question-top">
                                <span className="question-number">
                                    QUESTION {questionIndex + 1}
                                </span>

                                <button
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

                            <h1 className="question-text">{question.question}</h1>

                            <div className="options-container">
                                {question.options.map((option, optionIndex) => (
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
                                            checked={answers[questionIndex] === option}
                                            onChange={() =>
                                                selectAnswer(questionIndex, option)
                                            }
                                        />
                                        <span className="option-letter">
                                            {String.fromCharCode(65 + optionIndex)}
                                        </span>
                                        <span className="option-text">{option}</span>
                                        <span className="option-check">✓</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}



                </section>





                {/* =====================================

                    QUESTION PALETTE

                ===================================== */}



                <aside className="question-sidebar">



                    <div className="palette-card">



                        <div className="palette-header">



                            <span>

                                TEST NAVIGATION

                            </span>



                            <h2>

                                Questions

                            </h2>



                        </div>





                        <div className="question-palette">



                            {questions.map(

                                (item, index) => (



                                    <button

                                        key={index}

                                        onClick={() =>
                                            questionCardRefs.current[index]?.scrollIntoView({
                                                behavior: "smooth",
                                                block: "start"
                                            })
                                        }
                                        className={`
                                            palette-number
                                            ${
                                                answers[index]

                                                    ? "answered"

                                                    : ""

                                            }

                                            ${

                                                markedQuestions.includes(

                                                    index

                                                )

                                                    ? "marked-number"

                                                    : ""

                                            }

                                        `}

                                    >



                                        {index + 1}



                                    </button>



                                )

                            )}



                        </div>





                        {/* LEGEND */}



                        <div className="palette-legend">



                            <div>

                                <span className="legend-box answered-box"></span>

                                Answered

                            </div>



                            <div>
                                <span className="legend-box marked-box"></span>
                                Review

                            </div>



                            <div>

                                <span className="legend-box unanswered-box"></span>

                                Not Answered

                            </div>



                        </div>





                        {/* SUBMIT */}



                        <button

                            className="submit-test-btn"

                            onClick={handleSubmit}

                        >



                            {submitting ? "Submitting..." : "Submit Test"}



                            <span>

                                →

                            </span>



                        </button>





                        <p className="submit-warning">



                            ⚠ Make sure you have answered

                            all questions before submitting.



                        </p>



                    </div>



                </aside>



            </main>



        </div>

    );

}
