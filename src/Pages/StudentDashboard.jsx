import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div
      style={{
        minHeight: "calc(100vh - 120px)", // Subtract navbar + footer
        width: "100%",
        background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)",
        padding: "60px 20px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="text-success fw-bold" style={{ fontSize: "2rem" }}>
          🎓 Welcome, {user?.name || "Student"}!
        </h2>
        <p className="text-muted" style={{ fontSize: "1.1rem" }}>
          Manage your assignments, view feedback, and stay on top of deadlines.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div 
        className="row justify-content-center w-100 g-4" 
        style={{ maxWidth: "1200px" }}
      >
        {/* Upload Assignments */}
        <div className="col-12 col-md-6 col-lg-4">
          <div 
            className="card h-100 shadow-lg border-0 text-center"
            style={{
              borderRadius: "15px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
            }}
          >
            <div className="card-body p-5">
              <div 
                style={{
                  fontSize: "3rem",
                  marginBottom: "1.5rem",
                }}
              >
                📤
              </div>
              <h5 className="card-title text-success fw-bold mb-3" style={{ fontSize: "1.5rem" }}>
                Upload Assignments
              </h5>
              <p className="card-text text-muted mb-4" style={{ fontSize: "1rem" }}>
                Submit your assignments easily and track submission status.
              </p>
              <button
                className="btn btn-success w-100 py-2"
                style={{ borderRadius: "10px", fontSize: "1.1rem" }}
                onClick={() => navigate("/upload")}
              >
                Go <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Review Feedback */}
        <div className="col-12 col-md-6 col-lg-4">
          <div 
            className="card h-100 shadow-lg border-0 text-center"
            style={{
              borderRadius: "15px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
            }}
          >
            <div className="card-body p-5">
              <div 
                style={{
                  fontSize: "3rem",
                  marginBottom: "1.5rem",
                }}
              >
                📝
              </div>
              <h5 className="card-title text-primary fw-bold mb-3" style={{ fontSize: "1.5rem" }}>
                Review Feedback
              </h5>
              <p className="card-text text-muted mb-4" style={{ fontSize: "1rem" }}>
                Check teacher's comments, grades, and improvement suggestions.
              </p>
              <button
                className="btn btn-primary w-100 py-2"
                style={{ borderRadius: "10px", fontSize: "1.1rem" }}
                onClick={() => navigate("/feedback")}
              >
                Go <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </div>

        {/* View Deadlines */}
        <div className="col-12 col-md-6 col-lg-4">
          <div 
            className="card h-100 shadow-lg border-0 text-center"
            style={{
              borderRadius: "15px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
            }}
          >
            <div className="card-body p-5">
              <div 
                style={{
                  fontSize: "3rem",
                  marginBottom: "1.5rem",
                }}
              >
                ⏰
              </div>
              <h5 className="card-title text-warning fw-bold mb-3" style={{ fontSize: "1.5rem" }}>
                View Deadlines
              </h5>
              <p className="card-text text-muted mb-4" style={{ fontSize: "1rem" }}>
                Stay updated with assignment due dates and never miss one.
              </p>
              <button
                className="btn btn-warning w-100 py-2 text-white"
                style={{ borderRadius: "10px", fontSize: "1.1rem" }}
                onClick={() => navigate("/deadlines")}
              >
                Go <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
