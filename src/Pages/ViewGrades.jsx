import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaCheckCircle, FaClock, FaExclamationTriangle } from "react-icons/fa";

export default function ViewGrades() {
  const navigate = useNavigate();
  
  const [grades, setGrades] = useState([
    { 
      id: 1,
      subject: "Mathematics", 
      grade: "A", 
      icon: "📘",
      feedback: "Excellent work! Keep it up.",
      status: "Graded",
      submittedOn: "Oct 28, 2025",
      gradedOn: "Oct 30, 2025"
    },
    { 
      id: 2,
      subject: "Science", 
      grade: "B+", 
      icon: "🔬",
      feedback: "Good understanding, needs minor improvements.",
      status: "Graded",
      submittedOn: "Oct 25, 2025",
      gradedOn: "Oct 29, 2025"
    },
    { 
      id: 3,
      subject: "English", 
      grade: "A-", 
      icon: "📖",
      feedback: "Well written essay with great vocabulary.",
      status: "Graded",
      submittedOn: "Oct 29, 2025",
      gradedOn: "Nov 1, 2025"
    },
    { 
      id: 4,
      subject: "Computer Science", 
      grade: "A+", 
      icon: "💻",
      feedback: "Outstanding coding skills and problem-solving!",
      status: "Graded",
      submittedOn: "Oct 30, 2025",
      gradedOn: "Nov 2, 2025"
    },
    { 
      id: 5,
      subject: "History", 
      grade: "Pending", 
      icon: "📜",
      feedback: "Not graded yet",
      status: "Pending",
      submittedOn: "Nov 1, 2025",
      gradedOn: "-"
    },
  ]);

  const handleBack = () => navigate("/student");

  // Delete assignment/grade
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      setGrades(grades.filter(grade => grade.id !== id));
    }
  };

  // Badge color based on grade
  const getBadgeClass = (grade) => {
    if (grade === "Pending") return "bg-warning text-dark";
    if (grade.startsWith("A+")) return "bg-success";
    if (grade.startsWith("A")) return "bg-primary";
    if (grade.startsWith("B")) return "bg-info";
    return "bg-secondary";
  };

  // Status icon
  const getStatusIcon = (status) => {
    if (status === "Graded") return <FaCheckCircle className="text-success" />;
    if (status === "Pending") return <FaClock className="text-warning" />;
    return <FaExclamationTriangle className="text-danger" />;
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 120px)", // Fix footer
        width: "100%",
        background: "linear-gradient(135deg, #e0f7fa, #e8f5e9)",
        padding: "40px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "900px" }}>
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-success fw-bold" style={{ fontSize: "2rem" }}>
            📊 View Grades & Feedback
          </h2>
          <p className="text-muted" style={{ fontSize: "1.1rem" }}>
            Review your performance and teacher's feedback
          </p>
        </div>

        {/* Grades List */}
        <div
          className="card shadow-lg border-0 mb-4"
          style={{
            borderRadius: "15px",
            backgroundColor: "#ffffff",
          }}
        >
          <div className="card-body p-4 p-md-5">
            <h4 className="text-primary fw-bold mb-4">
              📋 All Assignments ({grades.length})
            </h4>

            {grades.length > 0 ? (
              <div className="d-flex flex-column gap-3">
                {grades.map((item) => (
                  <div
                    key={item.id}
                    className="card border-0 shadow-sm"
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#f9fbe7",
                      borderLeft: `4px solid ${
                        item.grade === "Pending" ? "#ffc107" : "#28a745"
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
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="flex-grow-1">
                          {/* Subject Title */}
                          <h5 className="fw-bold text-dark mb-2">
                            {item.icon} {item.subject}
                          </h5>

                          {/* Feedback */}
                          <p className="text-muted mb-3" style={{ fontSize: "0.95rem" }}>
                            <strong>Feedback:</strong> {item.feedback}
                          </p>

                          {/* Status Badges */}
                          <div className="d-flex flex-wrap gap-2 mb-2">
                            <span className={`badge ${getBadgeClass(item.grade)} px-3 py-2`}>
                              Grade: {item.grade}
                            </span>
                            <span className="badge bg-light text-dark px-3 py-2">
                              {getStatusIcon(item.status)}
                              <span className="ms-2">{item.status}</span>
                            </span>
                          </div>

                          {/* Dates */}
                          <div className="mt-2">
                            <small className="text-muted d-block">
                              📅 Submitted: {item.submittedOn}
                            </small>
                            <small className="text-muted d-block">
                              ✅ Graded: {item.gradedOn}
                            </small>
                          </div>
                        </div>

                        {/* Delete Button */}
                        <button
                          className="btn btn-outline-danger btn-sm ms-3"
                          onClick={() => handleDelete(item.id)}
                          style={{ borderRadius: "8px", minWidth: "90px" }}
                        >
                          <FaTrash className="me-1" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <div style={{ fontSize: "4rem", opacity: 0.3 }}>📭</div>
                <p className="text-muted mt-3" style={{ fontSize: "1.1rem" }}>
                  No assignments found. Submit your first assignment!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={handleBack}
            className="btn btn-outline-success px-5 py-2"
            style={{ borderRadius: "10px", fontSize: "1.1rem" }}
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
