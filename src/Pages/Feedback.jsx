import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaComments, FaStar, FaCheckCircle, FaClock } from "react-icons/fa";

export default function Feedback() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const [feedbacks] = useState([
    {
      id: 1,
      assignment: "Mathematics - Algebra Assignment",
      teacherName: "Prof. Sarah Johnson",
      grade: "A",
      feedback: "Excellent work! Your understanding of algebraic concepts is outstanding. Keep up the great work!",
      strengths: "Clear problem-solving approach, neat presentation",
      improvements: "Try to show more intermediate steps in complex problems",
      submittedOn: "Oct 28, 2025",
      gradedOn: "Oct 30, 2025",
      status: "Graded"
    },
    {
      id: 2,
      assignment: "Science - Lab Report on Photosynthesis",
      teacherName: "Dr. Michael Brown",
      grade: "B+",
      feedback: "Good effort! Your hypothesis and methodology were solid. The conclusion could be more detailed.",
      strengths: "Well-structured experiment, accurate observations",
      improvements: "Include more references and expand the discussion section",
      submittedOn: "Oct 25, 2025",
      gradedOn: "Oct 29, 2025",
      status: "Graded"
    },
    {
      id: 3,
      assignment: "English - Essay on Climate Change",
      teacherName: "Ms. Emily Davis",
      grade: "A-",
      feedback: "Well-written essay with strong arguments. Your vocabulary usage is impressive!",
      strengths: "Excellent grammar, persuasive arguments, good structure",
      improvements: "Consider adding counter-arguments for balance",
      submittedOn: "Oct 29, 2025",
      gradedOn: "Nov 1, 2025",
      status: "Graded"
    },
    {
      id: 4,
      assignment: "Computer Science - Python Project",
      teacherName: "Prof. David Wilson",
      grade: "Pending",
      feedback: "Your assignment is under review. Feedback will be provided soon.",
      strengths: "-",
      improvements: "-",
      submittedOn: "Nov 1, 2025",
      gradedOn: "-",
      status: "Pending"
    },
  ]);

  const getBadgeClass = (grade) => {
    if (grade === "Pending") return "bg-warning text-dark";
    if (grade.startsWith("A+")) return "bg-success";
    if (grade.startsWith("A")) return "bg-primary";
    if (grade.startsWith("B")) return "bg-info";
    return "bg-secondary";
  };

  const getStatusIcon = (status) => {
    return status === "Graded" ? (
      <FaCheckCircle className="text-success" />
    ) : (
      <FaClock className="text-warning" />
    );
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 120px)",
        width: "100%",
        background: "linear-gradient(135deg, #f3e5f5, #e1f5fe)",
        padding: "40px 20px",
      }}
    >
      <div className="container" style={{ maxWidth: "1000px" }}>
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-success fw-bold" style={{ fontSize: "2rem" }}>
            💬 Assignment Feedback
          </h2>
          <p className="text-muted" style={{ fontSize: "1.1rem" }}>
            Welcome, {user?.name || "Student"}! Review teacher's feedback on your assignments
          </p>
        </div>

        {/* Feedback Cards */}
        <div
          className="card shadow-lg border-0 mb-4"
          style={{
            borderRadius: "15px",
            backgroundColor: "#ffffff",
          }}
        >
          <div className="card-body p-4 p-md-5">
            <h4 className="text-primary fw-bold mb-4">
              📋 Your Feedback ({feedbacks.length})
            </h4>

            {feedbacks.length > 0 ? (
              <div className="d-flex flex-column gap-4">
                {feedbacks.map((item) => (
                  <div
                    key={item.id}
                    className="card border-0 shadow-sm"
                    style={{
                      borderRadius: "12px",
                      borderLeft: `4px solid ${
                        item.grade === "Pending" ? "#ffc107" : "#28a745"
                      }`,
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
                    }}
                  >
                    <div className="card-body p-4">
                      {/* Assignment Title & Teacher */}
                      <div className="mb-3">
                        <h5 className="fw-bold text-dark mb-2">
                          📚 {item.assignment}
                        </h5>
                        <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                          <strong>Teacher:</strong> {item.teacherName}
                        </p>
                      </div>

                      {/* Status & Grade Badges */}
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <span className={`badge ${getBadgeClass(item.grade)} px-3 py-2`}>
                          <FaStar className="me-1" />
                          Grade: {item.grade}
                        </span>
                        <span className="badge bg-light text-dark px-3 py-2">
                          {getStatusIcon(item.status)}
                          <span className="ms-2">{item.status}</span>
                        </span>
                      </div>

                      {/* Main Feedback */}
                      <div
                        className="p-3 mb-3"
                        style={{
                          backgroundColor: "#f8f9fa",
                          borderRadius: "8px",
                          borderLeft: "3px solid #28a745",
                        }}
                      >
                        <div className="d-flex align-items-start mb-2">
                          <FaComments className="text-success me-2 mt-1" />
                          <strong className="text-success">Teacher's Feedback:</strong>
                        </div>
                        <p className="mb-0 text-dark" style={{ fontSize: "1rem" }}>
                          {item.feedback}
                        </p>
                      </div>

                      {/* Strengths & Improvements */}
                      {item.status === "Graded" && (
                        <div className="row g-3 mb-3">
                          <div className="col-md-6">
                            <div
                              className="p-3"
                              style={{
                                backgroundColor: "#d4edda",
                                borderRadius: "8px",
                              }}
                            >
                              <strong className="text-success d-block mb-2">
                                ✅ Strengths:
                              </strong>
                              <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                                {item.strengths}
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div
                              className="p-3"
                              style={{
                                backgroundColor: "#fff3cd",
                                borderRadius: "8px",
                              }}
                            >
                              <strong className="text-warning d-block mb-2">
                                📝 Areas to Improve:
                              </strong>
                              <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                                {item.improvements}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Dates */}
                      <div className="d-flex flex-wrap gap-3 text-muted" style={{ fontSize: "0.9rem" }}>
                        <span>📅 Submitted: {item.submittedOn}</span>
                        <span>•</span>
                        <span>✅ Graded: {item.gradedOn}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <div style={{ fontSize: "4rem", opacity: 0.3 }}>📭</div>
                <p className="text-muted mt-3" style={{ fontSize: "1.1rem" }}>
                  No feedback available yet. Submit assignments to receive feedback!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            className="btn btn-outline-success px-5 py-2"
            style={{ borderRadius: "10px", fontSize: "1.1rem" }}
            onClick={() => navigate("/student")}
          >
            ⬅ Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
