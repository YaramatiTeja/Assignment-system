import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Login() {
  const [searchParams] = useSearchParams();
  const [role, setRole] = useState("teacher");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Auto-set role from URL parameter
  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam === "student" || roleParam === "teacher") {
      setRole(roleParam);
    }
  }, [searchParams]);

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password && u.role === role
    );

    if (!user) {
      alert("Invalid credentials or role mismatch!");
      return;
    }

    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("Login successful!");

    if (role === "teacher") navigate("/teacher");
    else navigate("/student");
  };

  // Dynamic content based on role
  const isTeacher = role === "teacher";
  const iconUrl = isTeacher
    ? "https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
    : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
  const title = isTeacher ? "Teacher Login" : "Student Login";
  const subtitle = isTeacher
    ? "Access your teacher dashboard"
    : "Access your student dashboard";
  const btnColor = isTeacher ? "#28a745" : "#ffc107";
  const titleColor = isTeacher ? "text-success" : "text-warning";

  return (
    <div
      style={{
        minHeight: "calc(100vh - 120px)",
        width: "100%",
        background: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
        padding: "40px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="card p-5 shadow-lg border-0"
        style={{
          maxWidth: "420px",
          width: "100%",
          borderRadius: "20px",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="text-center mb-4">
          <img
            src={iconUrl}
            alt={`${role} Icon`}
            style={{ width: "80px", marginBottom: "10px" }}
          />
          <h3 className={`${titleColor} fw-bold`}>{title}</h3>
          <p className="text-muted" style={{ fontSize: "0.9rem" }}>
            {subtitle}
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Role</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="btn w-100"
            style={{
              backgroundColor: btnColor,
              color: "white",
              fontWeight: "600",
              borderRadius: "10px",
            }}
          >
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>
            Don't have an account?{" "}
            <span
              style={{ color: btnColor, cursor: "pointer", fontWeight: "600" }}
              onClick={() => navigate(`/register?role=${role}`)}
            >
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
