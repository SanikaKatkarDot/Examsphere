import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ExploreTests.css";

export default function ExploreTests() {

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("examUser");
    if (!userData) {
      // Redirect to login if not authenticated
      navigate("/login?redirect=%2Ftests");
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const tests = [
    {
      id: 1,
      title: "Java Programming",
      category: "Programming",
      description: "Test your knowledge of Java fundamentals, OOP and programming concepts.",
      questions: 15,
      duration: "30 Sec",
      level: "Intermediate",
      icon: "☕"
    },
    {
      id: 2,
      title: "Web Development",
      category: "Web Development",
      description: "Evaluate your skills in HTML, CSS, JavaScript and modern web development.",
      questions: 15,
      duration: "30 Sec",
      level: "Intermediate",
      icon: "🌐"
    },
    {
      id: 3,
      title: "Database & SQL",
      category: "Database",
      description: "Challenge yourself with SQL queries, DBMS concepts and database design.",
      questions: 15,
      duration: "30 Sec",
      level: "Advanced",
      icon: "🗄️"
    },
    {
      id: 4,
      title: "Python Programming",
      category: "Programming",
      description: "Test your Python knowledge including syntax, functions, loops and OOP.",
      questions: 15,
      duration: "30 Sec",
      level: "Beginner",
      icon: "🐍"
    },
    {
      id: 5,
      title: "Computer Science",
      category: "Computer Science",
      description: "Explore questions from OS, DBMS, networking and computer fundamentals.",
      questions: 15,
      duration: "30 Sec",
      level: "Advanced",
      icon: "💻"
    },
    {
      id: 6,
      title: "JavaScript Challenge",
      category: "Web Development",
      description: "Improve your JavaScript skills with an interactive coding assessment.",
      questions: 15,
      duration: "30 Sec",
      level: "Advanced",
      icon: "⚡"
    }
  ];

  const categories = [
    "All",
    "Programming",
    "Web Development",
    "Database",
    "Computer Science"
  ];

  const filteredTests = tests.filter((test) => {

    const matchesSearch =
      test.title.toLowerCase().includes(search.toLowerCase()) ||
      test.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || test.category === category;

    return matchesSearch && matchesCategory;
  });

  return (

    <div className="explore-page">

      {/* HERO */}

      <section className="explore-hero">

        <div className="hero-content">

          <span className="hero-badge">
            ✦ EXAMORA ASSESSMENT HUB
          </span>

          <h1>
            {user ? `Welcome, ${user.name}!` : "Explore Your Next"}
            <span> {user ? "Ready to Challenge Yourself?" : " Challenge"}</span>
          </h1>

          <p>
            {user ? `Select an exam and test your knowledge in ${user.course || "your area of interest"}. Challenge yourself and track your progress.` : "Discover carefully designed assessments, challenge your knowledge and track your progress with Examora."}
          </p>

          <div className="hero-stats">

            <div>
              <strong>50+</strong>
              <small>Tests</small>
            </div>

            <div>
              <strong>500+</strong>
              <small>Questions</small>
            </div>

            <div>
              <strong>10+</strong>
              <small>Categories</small>
            </div>

          </div>

        </div>

      </section>


      {/* SEARCH + FILTER */}

      <section className="test-controls">

        <div className="search-box">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search tests..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="category-buttons">

          {categories.map((item) => (

            <button
              key={item}
              className={category === item ? "category active" : "category"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>

          ))}

        </div>

      </section>


      <section className="tests-section">

        <div className="section-heading">

          <div>
            <span>AVAILABLE ASSESSMENTS</span>

            <h2>
              Choose Your <b>Test</b>
            </h2>
          </div>

          <p>
            {filteredTests.length} tests available
          </p>

        </div>


        <div className="test-grid">

          {filteredTests.map((test) => (

            <div className="test-card" key={test.id}>

              <div className="card-top">

                <div className="test-icon">
                  {test.icon}
                </div>

                <span className={`level ${test.level.toLowerCase()}`}>
                  {test.level}
                </span>

              </div>

              <h3>{test.title}</h3>

              <p className="test-description">
                {test.description}
              </p>

              <div className="test-info">

                <div>
                  <span>◉</span>
                  <strong>{test.questions}</strong>
                  <small>Questions</small>
                </div>

                <div>
                  <span>◷</span>
                  <strong>{test.duration}</strong>
                  <small>Duration</small>
                </div>

              </div>

              <Link
                to={
                  localStorage.getItem("examUser")
                    ? `/tests/${test.id}`
                    : `/login?redirect=/tests/${test.id}`
                }
                className="start-test"
              >
                <span>Get Started</span>
                <span className="arrow">→</span>
              </Link>

            </div>

          ))}

        </div>


        {filteredTests.length === 0 && (

          <div className="no-tests">

            <div>🔎</div>

            <h3>No tests found</h3>

            <p>
              Try another search or select a different category.
            </p>

          </div>

        )}

      </section>


      {/* START YOUR FIRST EXAM SECTION */}

      <section className="start-exam-section">

        <div className="start-exam-container">

          <div className="start-exam-content">

            <span className="start-badge">🚀 NEW HERE?</span>

            <h2>Start Your First Exam</h2>

            <p>
              Take your first step towards mastering new skills. Choose from our curated collection of exams tailored for learners at all levels.
            </p>

            <div className="start-features">

              <div className="start-feature">
                <span>⚡</span>
                <div>
                  <strong>Instant Feedback</strong>
                  <small>Get results immediately</small>
                </div>
              </div>

              <div className="start-feature">
                <span>📈</span>
                <div>
                  <strong>Track Progress</strong>
                  <small>Monitor your performance</small>
                </div>
              </div>

              <div className="start-feature">
                <span>🏆</span>
                <div>
                  <strong>Earn Certificates</strong>
                  <small>Get recognized for your skills</small>
                </div>
              </div>

            </div>

            <button 
              onClick={() => {
                const element = document.querySelector('.tests-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="get-started-btn"
            >
              Get Started Now
              <span>→</span>
            </button>

          </div>

          <div className="start-exam-image">
            📚
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="explore-cta">

        <div>

          <span>READY TO TEST YOURSELF?</span>

          <h2>
            Your next achievement
            <br />
            starts with a challenge.
          </h2>

        </div>

        <Link to="/register">
          Create Free Account →
        </Link>

      </section>

    </div>
  );
}