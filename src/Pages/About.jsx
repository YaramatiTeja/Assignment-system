import React from "react";
import { FaGraduationCap, FaChalkboardTeacher, FaClipboardCheck, FaHeart } from "react-icons/fa";

export default function About() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 120px)", // Fix footer
        width: "100%",
        background: "linear-gradient(135deg, #e8f5e9, #ffffff)",
        padding: "60px 20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "900px" }}>
        {/* Main Card */}
        <div
          className="card shadow-lg border-0"
          style={{
            borderRadius: "20px",
            backgroundColor: "#ffffff",
          }}
        >
          <div className="card-body p-5">
            {/* Header */}
            <div className="text-center mb-5">
              <h2 className="text-success fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
                About Assignment Portal
              </h2>
              <p className="lead text-muted" style={{ fontSize: "1.2rem" }}>
                Streamlining education through digital innovation
              </p>
            </div>

            {/* Mission Statement */}
            <div className="mb-5">
              <p className="text-dark" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                The <strong className="text-success">Assignment Portal</strong> is a modern 
                digital platform designed to bridge the gap between teachers and students, 
                offering a seamless experience for assignment management, grading, and feedback.
              </p>
            </div>

            {/* Features Grid */}
            <div className="row g-4 mb-5">
              <div className="col-md-4">
                <div className="text-center p-4" style={{ backgroundColor: "#f1f8e9", borderRadius: "12px" }}>
                  <FaChalkboardTeacher 
                    style={{ fontSize: "3rem", color: "#4CAF50", marginBottom: "1rem" }}
                  />
                  <h5 className="fw-bold mb-2">For Teachers</h5>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                    Upload assignments, grade submissions, and provide detailed feedback efficiently.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-center p-4" style={{ backgroundColor: "#e3f2fd", borderRadius: "12px" }}>
                  <FaGraduationCap 
                    style={{ fontSize: "3rem", color: "#2196F3", marginBottom: "1rem" }}
                  />
                  <h5 className="fw-bold mb-2">For Students</h5>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                    Submit work, track progress, and receive feedback all in one centralized location.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-center p-4" style={{ backgroundColor: "#fff3e0", borderRadius: "12px" }}>
                  <FaClipboardCheck 
                    style={{ fontSize: "3rem", color: "#FF9800", marginBottom: "1rem" }}
                  />
                  <h5 className="fw-bold mb-2">Easy Management</h5>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                    Track deadlines, monitor performance, and stay organized effortlessly.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-5">
              <h4 className="text-primary fw-bold mb-4">Key Features</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <span className="badge bg-success me-3" style={{ marginTop: "3px" }}>✓</span>
                    <span>Real-time assignment submission and grading</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <span className="badge bg-success me-3" style={{ marginTop: "3px" }}>✓</span>
                    <span>Personalized feedback system</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <span className="badge bg-success me-3" style={{ marginTop: "3px" }}>✓</span>
                    <span>Deadline tracking and notifications</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <span className="badge bg-success me-3" style={{ marginTop: "3px" }}>✓</span>
                    <span>Performance analytics and reports</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <span className="badge bg-success me-3" style={{ marginTop: "3px" }}>✓</span>
                    <span>Subject-wise organization</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <span className="badge bg-success me-3" style={{ marginTop: "3px" }}>✓</span>
                    <span>Secure and user-friendly interface</span>
                  </div>
                </div>
              </div>
            </div>

    

            {/* Footer Note */}
            <div className="text-center mt-5 pt-4" style={{ borderTop: "1px solid #e0e0e0" }}>
              <p className="text-muted mb-2" style={{ fontSize: "1rem" }}>
                <FaHeart className="text-danger me-2" />
                Built with passion for enhancing the educational experience
              </p>
              <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                Designed for seamless communication between educators and learners
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
