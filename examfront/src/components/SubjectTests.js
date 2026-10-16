
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const subjects = {
  java: { id: 1, name: "Java Programming" },
  web: { id: 2, name: "Web Development" },
  database: { id: 3, name: "Database & SQL" },
  python: { id: 4, name: "Python Programming" },
  "computer-science": { id: 5, name: "Computer Science" },
  javascript: { id: 6, name: "JavaScript Challenge" },
};

export default function SubjectTests() {
  const { subject } = useParams();
  const navigate = useNavigate();

  const selectedSubject = subjects[subject?.toLowerCase()];

  if (!selectedSubject) {
    return (
      <div style={{ padding: 30 }}>
        <h2>Subject not found</h2>
        <button onClick={() => navigate("/tests")}>
          Back to Tests
        </button>
      </div>
    );
  }

  const storageKey = `completedTests_${subject.toLowerCase()}`;

  let completedTests = {};
  try {
    completedTests = JSON.parse(
      localStorage.getItem(storageKey) || "{}"
    );
  } catch {
    completedTests = {};
  }

  return (
    <div style={{
      minHeight: "100vh",
      padding: "35px 20px",
      background: "#101827",
      color: "white",
      fontFamily: "Arial, sans-serif"
    }}>
      <button onClick={() => navigate("/tests")}>
        ← Back to Subjects
      </button>

      <h1>{selectedSubject.name}</h1>
      <p>Choose a test to begin.</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 18,
        marginTop: 25
      }}>
        {[1, 2, 3, 4, 5].map((testNumber) => {
          const result = completedTests[testNumber];
          const isCompleted = Boolean(result?.completed);

          return (
            <div
              key={testNumber}
              style={{
                padding: 22,
                borderRadius: 14,
                background: "#1e293b",
                border: isCompleted
                  ? "2px solid #22c55e"
                  : "1px solid #475569"
              }}
            >
              <h2>
                Test {testNumber} {isCompleted ? "✅" : ""}
              </h2>

              <p>
                {isCompleted
                  ? `Completed — Score: ${result.score}`
                  : "Not completed yet"}
              </p>

              <button
                onClick={() =>
                  navigate(
                    `/online-test/${selectedSubject.id}/${testNumber}`
                  )
                }
              >
                {isCompleted ? "Retake Test" : "Start Test"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
