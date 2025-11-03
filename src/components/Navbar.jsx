import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
  const role = loggedUser?.role;

  const handleLogout = () => {
    sessionStorage.removeItem("loggedUser");
    localStorage.removeItem("loggedInUser");

    // Redirect based on role
    if (role === "teacher") navigate("/login?role=teacher");
    else if (role === "student") navigate("/login?role=student");
    else navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{
        backgroundColor: "#198754", // green navbar
        position: "sticky",
        top: 0,
        zIndex: 1000,
        padding: "10px 30px",
      }}
    >
      <div className="container-fluid">
        {/* Left side - Brand */}
        <Link
          className="navbar-brand fw-bold text-white"
          to="/"
          style={{ fontSize: "1.3rem" }}
        >
          Assignment Portal
        </Link>

        {/* Right side - Nav links */}
        <div className="d-flex align-items-center ms-auto">
          <Link className="nav-link-custom mx-3" to="/">
            Home
          </Link>
          <Link className="nav-link-custom mx-3" to="/about">
            About
          </Link>
          <Link className="nav-link-custom mx-3" to="/contact">
            Contact
          </Link>

          {loggedUser && (
            <span
              className="nav-link-custom mx-3"
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              Logout
            </span>
          )}
        </div>
      </div>

      {/* Styling */}
      <style>
        {`
          .nav-link-custom {
            color: #ffffff;
            text-decoration: none;
            font-weight: 500;
            position: relative;
            transition: all 0.3s ease;
          }

          .nav-link-custom:hover {
            color: #FFD54F; /* gold hover */
          }

          .nav-link-custom::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -3px;
            width: 0%;
            height: 2px;
            background-color: #FFD54F;
            transition: width 0.3s ease;
          }

          .nav-link-custom:hover::after {
            width: 100%;
          }
        `}
      </style>
    </nav>
  );
}
