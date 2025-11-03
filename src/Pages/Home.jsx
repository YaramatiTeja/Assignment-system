import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "calc(100vh - 120px)",
        width: "100%",
        background: "linear-gradient(135deg, #74b9ff, #00b894)",
        padding: "40px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "700px" }}>
        <div
          className="card border-0 shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "1.5rem",
            padding: "2.5rem 2rem",
          }}
        >
          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Online Grading Portal"
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                border: "3px solid #00b894",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                display: "block",
                margin: "0 auto 1.5rem auto",
              }}
            />

            <h1 
              className="fw-bold mb-3 text-primary"
              style={{ fontSize: "1.75rem" }}
            >
              Welcome to the Online Grading Portal
            </h1>

            <p 
              className="text-muted mb-4"
              style={{ fontSize: "1rem", lineHeight: "1.6" }}
            >
              A smart way to manage assignments, submissions, and grades. Students
              can submit and track their work, while teachers can review, grade, and
              give feedback effortlessly — all in one place!
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <button
                className="btn btn-warning btn-lg px-4 py-2"
                onClick={() => {
                  navigate("/login?role=student");
                }}
              >
                👩‍🎓 Student Login
              </button>
              <button
                className="btn btn-success btn-lg px-4 py-2"
                onClick={() => {
                  navigate("/login?role=teacher");
                }}
              >
                👨‍🏫 Teacher Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
