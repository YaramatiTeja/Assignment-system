import React from "react";
import { useNavigate } from "react-router-dom";

export default function Deadlines() {
  const navigate = useNavigate();

  const deadlines = [
    { subject: "Mathematics Assignment", date: "Nov 5", icon: "📘", color: "danger" },
    { subject: "Science Project", date: "Nov 10", icon: "🔬", color: "warning text-dark" },
    { subject: "English Essay", date: "Nov 15", icon: "📖", color: "success" },
    { subject: "Computer Lab Report", date: "Nov 20", icon: "💻", color: "primary" },
  ];

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #fff8e1, #e0f7fa)", // warm yellow-blue gradient
        padding: "20px",
      }}
    >
      <div
        className="card p-4 shadow-lg border-0"
        style={{
          width: "450px",
          borderRadius: "18px",
          backgroundColor: "#ffffff",
        }}
      >
        <h3 className="text-center text-success mb-4">📅 Track Upcoming Deadlines</h3>

        <div className="d-flex flex-column gap-3">
          {deadlines.map((task, index) => (
            <div
              key={index}
              className="card border-0 shadow-sm"
              style={{ backgroundColor: "#f1f8e9", borderRadius: "12px" }}
            >
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">{task.icon} {task.subject}</h5>
                  <small className="text-muted">Stay on track — submit before due date</small>
                </div>
                <span className={`badge bg-${task.color} px-3 py-2 rounded-pill`}>
                  {task.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/student")}
          className="btn btn-secondary w-100 mt-4 fw-semibold"
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}
