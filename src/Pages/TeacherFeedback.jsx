import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaComments, FaPaperPlane, FaTrash, FaCheckCircle } from "react-icons/fa";

export default function TeacherFeedback() {
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState("");

  const [studentAssignments, setStudentAssignments] = useState([
    {
      id: 1,
      studentName: "John Doe",
      subject: "Mathematics",
      assignment: "Algebra Assignment",
      submittedOn: "Oct 28, 2025",
      grade: "A",
      feedback: "",
      feedbackGiven: false,
    },
    {
      id: 2,
      studentName: "Sarah Lee",
      subject: "Science",
      assignment: "Lab Report on Photosynthesis",
      submittedOn: "Oct 25, 2025",
      grade: "B+",
      feedback: "",
      feedbackGiven: false,
    },
    {
      id: 3,
      studentName: "David Kim",
      subject: "Mathematics",
      assignment: "Geometry Problems",
      submittedOn: "Oct 29, 2025",
      grade: "A-",
      feedback: "",
      feedbackGiven: false,
    },
    {
      id: 4,
      studentName: "Emily Chen",
      subject: "English",
      assignment: "Essay on Climate Change",
      submittedOn: "Oct 30, 2025",
      grade: "A+",
      feedback: "Excellent work! Very well structured essay.",
      feedbackGiven: true,
    },
    {
      id: 5,
      studentName: "Michael Brown",
      subject: "Computer Science",
      assignment: "Python Project",
      submittedOn: "Nov 1, 2025",
      grade: "B",
      feedback: "",
      feedbackGiven: false,
    },
    {
      id: 6,
      studentName: "Lisa Wang",
      subject: "Science",
      assignment: "Physics Experiment Report",
      submittedOn: "Oct 27, 2025",
      grade: "A",
      feedback: "Great attention to detail in your observations.",
      feedbackGiven: true,
    },
  ]);

  const [selectedSubject, setSelectedSubject] = useState("All");

  // Get unique subjects
  const subjects = ["All", ...new Set(studentAssignments.map((item) => item.subject))];

  // Filter by subject
  const filteredAssignments =
    selectedSubject === "All"
      ? studentAssignments
      : studentAssignments.filter((item) => item.subject === selectedSubject);

  // Handle feedback input change
  const handleFeedbackChange = (id, value) => {
    setStudentAssignments(
      studentAssignments.map((item) =>
        item.id === id ? { ...item, feedback: value } : item
      )
    );
  };

  // Send feedback
  const handleSendFeedback = (id) => {
    const assignment = studentAssignments.find((item) => item.id === id);
    
    if (!assignment.feedback.trim()) {
      alert("Please enter feedback before sending!");
      return;
    }

    setStudentAssignments(
      studentAssignments.map((item) =>
        item.id === id ? { ...item, feedbackGiven: true } : item
      )
    );

    setSuccessMsg(
      `✅ Feedback sent to ${assignment.studentName} for ${assignment.assignment}!`
    );

    setTimeout(() => setSuccessMsg(""), 3000);
  };

  // Delete feedback
  const handleDeleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setStudentAssignments(
        studentAssignments.map((item) =>
          item.id === id ? { ...item, feedback: "", feedbackGiven: false } : item
        )
      );
      setSuccessMsg("🗑️ Feedback deleted successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
    }
  };

  const getBadgeClass = (grade) => {
    if (grade.startsWith("A+")) return "bg-success";
    if (grade.startsWith("A")) return "bg-primary";
    if (grade.startsWith("B")) return "bg-info";
    return "bg-warning text-dark";
  };

  const pendingCount = filteredAssignments.filter((item) => !item.feedbackGiven).length;
  const completedCount = filteredAssignments.filter((item) => item.feedbackGiven).length;

  return (
    <div
      style={{
        minHeight: "calc(100vh - 120px)",
        width: "100%",
        background: "linear-gradient(135deg, #f3e5f5, #e1f5fe)",
        padding: "40px 20px",
      }}
    >
      <div className="container" style={{ maxWidth: "1100px" }}>
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-success fw-bold" style={{ fontSize: "2rem" }}>
            💬 Provide Student Feedback
          </h2>
          <p className="text-muted" style={{ fontSize: "1.1rem" }}>
            Write personalized feedback for each student's assignment
          </p>
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

        {/* Subject Filter & Stats */}
        <div
          className="card shadow-sm border-0 mb-4"
          style={{ borderRadius: "12px", backgroundColor: "#ffffff" }}
        >
          <div className="card-body p-4">
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0">
                <label className="form-label fw-semibold mb-2">Filter by Subject:</label>
                <select
                  className="form-select"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  style={{ borderRadius: "8px", padding: "10px" }}
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <div className="d-flex gap-3 justify-content-md-end">
                  <span className="badge bg-warning text-dark px-3 py-2" style={{ fontSize: "1rem" }}>
                    ⏳ Pending: {pendingCount}
                  </span>
                  <span className="badge bg-success px-3 py-2" style={{ fontSize: "1rem" }}>
                    ✅ Completed: {completedCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Cards */}
        <div
          className="card shadow-lg border-0"
          style={{ borderRadius: "15px", backgroundColor: "#ffffff" }}
        >
          <div className="card-body p-4 p-md-5">
            <h4 className="text-primary fw-bold mb-4">
              📋 Student Assignments ({filteredAssignments.length})
            </h4>

            {filteredAssignments.length > 0 ? (
              <div className="d-flex flex-column gap-3">
                {filteredAssignments.map((item) => (
                  <div
                    key={item.id}
                    className="card border-0 shadow-sm"
                    style={{
                      borderRadius: "12px",
                      borderLeft: `4px solid ${
                        item.feedbackGiven ? "#28a745" : "#ffc107"
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
                      <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <div>
                            <h5 className="fw-bold text-dark mb-1">
                              👤 {item.studentName}
                            </h5>
                            <p className="text-muted mb-1" style={{ fontSize: "0.95rem" }}>
                              📚 <strong>{item.subject}</strong> - {item.assignment}
                            </p>
                            <small className="text-muted">
                              📅 Submitted: {item.submittedOn}
                            </small>
                          </div>
                          <span className={`badge ${getBadgeClass(item.grade)} px-3 py-2`}>
                            Grade: {item.grade}
                          </span>
                        </div>
                      </div>

                      {/* Feedback Section */}
                      {!item.feedbackGiven ? (
                        <div>
                          <label className="form-label fw-semibold mb-2">
                            <FaComments className="me-2" />
                            Write Feedback:
                          </label>
                          <textarea
                            className="form-control mb-3"
                            rows="3"
                            placeholder={`Write detailed feedback for ${item.studentName}...`}
                            value={item.feedback}
                            onChange={(e) =>
                              handleFeedbackChange(item.id, e.target.value)
                            }
                            style={{ borderRadius: "8px", fontSize: "0.95rem" }}
                          />
                          <button
                            className="btn btn-success w-100"
                            onClick={() => handleSendFeedback(item.id)}
                            style={{ borderRadius: "8px", padding: "10px" }}
                          >
                            <FaPaperPlane className="me-2" />
                            Send Feedback
                          </button>
                        </div>
                      ) : (
                        <div>
                          <div
                            className="p-3 mb-3"
                            style={{
                              backgroundColor: "#d4edda",
                              borderRadius: "8px",
                              borderLeft: "3px solid #28a745",
                            }}
                          >
                            <div className="d-flex align-items-start mb-2">
                              <FaComments className="text-success me-2 mt-1" />
                              <strong className="text-success">Feedback Sent:</strong>
                            </div>
                            <p className="mb-0 text-dark" style={{ fontSize: "0.95rem" }}>
                              {item.feedback}
                            </p>
                          </div>
                          <button
                            className="btn btn-outline-danger w-100"
                            onClick={() => handleDeleteFeedback(item.id)}
                            style={{ borderRadius: "8px", padding: "10px" }}
                          >
                            <FaTrash className="me-2" />
                            Delete Feedback
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
                  No assignments found for the selected subject.
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
