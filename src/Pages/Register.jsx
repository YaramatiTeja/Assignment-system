import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Register() {
  const [searchParams] = useSearchParams();
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
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

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    const existingUser = users.find(
      (u) => u.email === email && u.role === role
    );
    if (existingUser) {
      alert("User already exists! Please login instead.");
      navigate(`/login?role=${role}`);
      return;
    }

    const newUser = { name, email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login now.");
    navigate(`/login?role=${role}`);
  };

  // Dynamic content based on role
  const isTeacher = role === "teacher";
  const iconUrl = isTeacher
    ? "https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
    : "https://cdn-icons-png.flaticon.com/512/906/906343.png";
  const title = isTeacher ? "Teacher Registration" : "Student Registration";
  const subtitle = isTeacher
    ? "Create your teacher account to get started"
    : "Create your student account to get started";

  return (
    <div
      style={{
        minHeight: "calc(100vh - 120px)", // Fix footer
        width: "100%",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)", // Soft teal to pink
        padding: "40px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{
          maxWidth: "420px",
          width: "100%",
          borderRadius: "20px",
          backgroundColor: "#ffffff",
          padding: "2rem 2.5rem", // Reduced padding for smaller height
        }}
      >
        {/* Header */}
        <div className="text-center mb-3">
          <img
            src={iconUrl}
            alt="Register Icon"
            style={{ width: "70px", marginBottom: "8px" }}
          />
          <h3 className="fw-bold mb-1" style={{ color: isTeacher ? "#28a745" : "#007bff" }}>
            {title}
          </h3>
          <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
            {subtitle}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister}>
          {/* Role Selection */}
          <div className="mb-3">
            <label className="form-label fw-semibold" style={{ fontSize: "0.9rem" }}>
              Role
            </label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{ padding: "10px", fontSize: "0.95rem", borderRadius: "8px" }}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold" style={{ fontSize: "0.9rem" }}>
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ padding: "10px", fontSize: "0.95rem", borderRadius: "8px" }}
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold" style={{ fontSize: "0.9rem" }}>
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: "10px", fontSize: "0.95rem", borderRadius: "8px" }}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold" style={{ fontSize: "0.9rem" }}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ padding: "10px", fontSize: "0.95rem", borderRadius: "8px" }}
            />
          </div>

          {/* Register Button */}
          <button
            className="btn w-100 mt-2"
            style={{
              backgroundColor: isTeacher ? "#28a745" : "#007bff",
              color: "white",
              fontWeight: "600",
              borderRadius: "10px",
              padding: "10px",
              fontSize: "1rem",
            }}
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-3">
          <p className="mb-0 text-muted" style={{ fontSize: "0.85rem" }}>
            Already have an account?{" "}
            <span
              style={{
                color: isTeacher ? "#28a745" : "#007bff",
                cursor: "pointer",
                fontWeight: "600",
              }}
              onClick={() => navigate(`/login?role=${role}`)}
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
