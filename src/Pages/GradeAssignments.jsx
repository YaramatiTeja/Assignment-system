import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaCheckCircle, FaUndo, FaFileAlt } from "react-icons/fa";

export default function GradeAssignments() {
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      name: "John Doe",
      assignment: "Mathematics - Algebra Assignment",
      submittedOn: "Oct 28, 2025",
      graded: false,
      grade: "",
      feedback: "",
    },
    {
      id: 2,
      name: "Sarah Lee",
      assignment: "Science - Lab Report",
      submittedOn: "Oct 25, 2025",
      graded: false,
      grade: "",
      feedback: "",
    },
    {
      id: 3,
      name: "David Kim",
      assignment: "English - Essay Writing",
      submittedOn: "Oct 29, 2025",
      graded: false,
      grade: "",
      feedback: "",
    },
    {
      id: 4,
      name: "Emily Chen",
      assignment: "Computer Science - Python Project",
      submittedOn: "Oct 30, 2025",
      graded: true,
      grade: "A+",
      feedback: "Excellent work!",
    },
  ]);

  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const handleGrade = (index, grade) => {
    const updated = [...submissions];
    updated[index].graded = true;
    updated[index].grade = grade;
    updated[index].feedback = `Good work! Grade: ${grade}`;
    setSubmissions(updated);
    setSuccessMsg(
      `✅ ${updated[index].name}'s ${updated[index].assignment} graded successfully!`
    );

    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const handleUndo = (index) => {
    const updated = [...submissions];
    updated[index].graded = false;
    updated[index].grade = "";
    updated[index].feedback = "";
    setSubmissions(updated);
  };

  const getBadgeClass = (grade) => {
    if (grade.startsWith("A+")) return "bg-success";
    if (grade.startsWith("A")) return "bg-primary";
    if (grade.startsWith("B")) return "bg-info";
    if (grade.startsWith("C")) return "bg-warning text-dark";
    return "bg-secondary";
  };

  const pendingCount = submissions.filter((s) => !s.graded).length;
  const gradedCount = submissions.filter((s) => s.graded).length;

  return (
    <div
      style={{
        minHeight: "calc(100vh - 120px)",
        width: "100%",
        background: "linear-gradient(135deg, #f1f8e9, #fff8e1)",
        padding: "40px 20px",
      }}
    >
      <div className="container" style={{ maxWidth: "1000px" }}>
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-success fw-bold" style={{ fontSize: "2rem" }}>
            📝 Grade Assignments
          </h2>
          <p className="text-muted" style={{ fontSize: "1.1rem" }}>
            Review student submissions and assign grades
          </p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <span className="badge bg-warning text-dark px-3 py-2" style={{ fontSize: "1rem" }}>
              ⏳ Pending: {pendingCount}
            </span>
            <span className="badge bg-success px-3 py-2" style={{ fontSize: "1rem" }}>
              ✅ Graded: {gradedCount}
            </span>
          </div>
        </div>

        {/* Success Message */}
        {successMsg && (
          <div
            className="alert alert-success d-flex align-items-center mb-4"
            style={{ borderRadius: "10px" }}
          >
            <FaCheckCircle className="me-2" style={{ fontSize: "1.5rem" }} />
            <span style={{ fontSize: "1rem" }}>{successMsg}</span>
          </div>
        )}

        {/* Submissions List */}
        <div
          className="card shadow-lg border-0"
          style={{
            borderRadius: "15px",
            backgroundColor: "#ffffff",
          }}
        >
          <div className="card-body p-4 p-md-5">
            <h4 className="text-primary fw-bold mb-4">
              📋 Student Submissions ({submissions.length})
            </h4>

            {submissions.length > 0 ? (
              <div className="d-flex flex-column gap-3">
                {submissions.map((sub, index) => (
                  <div
                    key={sub.id}
                    className="card border-0 shadow-sm"
                    style={{
                      borderRadius: "12px",
                      borderLeft: `4px solid ${
                        sub.graded ? "#28a745" : "#ffc107"
                      }`,
                      transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <div className="card-body p-4">
                      {/* Student Info */}
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="flex-grow-1">
                          <h5 className="fw-bold text-dark mb-2">
                            👤 {sub.name}
                          </h5>
                          <p className="text-muted mb-2" style={{ fontSize: "0.95rem" }}>
                            <FaFileAlt className="me-2" />
                            {sub.assignment}
                          </p>
                          <small className="text-muted">
                            📅 Submitted on: {sub.submittedOn}
                          </small>
                        </div>

                        {/* Grade Badge */}
                        {sub.graded && (
                          <span
                            className={`badge ${getBadgeClass(sub.grade)} px-3 py-2`}
                            style={{ fontSize: "1.1rem" }}
                          >
                            <FaStar className="me-1" />
                            {sub.grade}
                          </span>
                        )}
                      </div>

                      {/* Grade Buttons or Undo */}
                      {!sub.graded ? (
                        <div>
                          <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>
                            <strong>Assign Grade:</strong>
                          </p>
                          <div className="d-flex flex-wrap gap-2">
                            <button
                              className="btn btn-success px-4 py-2"
                              style={{ borderRadius: "8px", fontSize: "0.95rem" }}
                              onClick={() => handleGrade(index, "A+")}
                            >
                              A+
                            </button>
                            <button
                              className="btn btn-primary px-4 py-2"
                              style={{ borderRadius: "8px", fontSize: "0.95rem" }}
                              onClick={() => handleGrade(index, "A")}
                            >
                              A
                            </button>
                            <button
                              className="btn btn-info px-4 py-2"
                              style={{ borderRadius: "8px", fontSize: "0.95rem" }}
                              onClick={() => handleGrade(index, "B+")}
                            >
                              B+
                            </button>
                            <button
                              className="btn btn-info px-4 py-2"
                              style={{ borderRadius: "8px", fontSize: "0.95rem" }}
                              onClick={() => handleGrade(index, "B")}
                            >
                              B
                            </button>
                            <button
                              className="btn btn-warning px-4 py-2"
                              style={{ borderRadius: "8px", fontSize: "0.95rem" }}
                              onClick={() => handleGrade(index, "C")}
                            >
                              C
                            </button>
                            <button
                              className="btn btn-secondary px-4 py-2"
                              style={{ borderRadius: "8px", fontSize: "0.95rem" }}
                              onClick={() => handleGrade(index, "D")}
                            >
                              D
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="d-flex justify-content-between align-items-center">
                          <div
                            className="p-2 flex-grow-1"
                            style={{
                              backgroundColor: "#d4edda",
                              borderRadius: "8px",
                            }}
                          >
                            <small className="text-success fw-semibold">
                              ✅ Graded - {sub.feedback}
                            </small>
                          </div>
                          <button
                            className="btn btn-outline-danger btn-sm ms-3"
                            style={{ borderRadius: "8px", minWidth: "80px" }}
                            onClick={() => handleUndo(index)}
                          >
                            <FaUndo className="me-1" />
                            Undo
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <div style={{ fontSize: "4rem", opacity: 0.3 }}>📭</div>
                <p className="text-muted mt-3" style={{ fontSize: "1.1rem" }}>
                  No submissions to grade at the moment.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-4">
          <button
            className="btn btn-outline-success px-5 py-2"
            style={{ borderRadius: "10px", fontSize: "1.1rem" }}
            onClick={() => navigate("/teacher")}
          >
            ⬅ Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
