import React from "react";

export default function Footer() {
  const role = sessionStorage.getItem("role") || "Guest";

  return (
    <footer className="text-center py-3 bg-dark text-light mt-auto">
      <p className="mb-0">© {new Date().getFullYear()} Online Grading Portal | Logged in as: {role}</p>
    </footer>
  );
}
