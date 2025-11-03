import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import UploadAssignment from "./pages/UploadAssignment";
import SubmitAssignment from "./pages/SubmitAssignment";
import Feedback from "./pages/Feedback";
import GradeAssignments from "./pages/GradeAssignments";
import TeacherFeedback from "./pages/TeacherFeedback";
import Deadlines from "./pages/Deadlines";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useTheme } from "./context/ThemeContext";

// ✅ Separate component for routing logic
function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (!visited) {
      localStorage.setItem("visited", "true");
      navigate("/register");
    }
  }, [navigate]);

  return (
    <Routes>
      {/* 🌍 General Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* 🎓 Student Routes */}
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/upload" element={<SubmitAssignment />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/deadlines" element={<Deadlines />} />

      {/* 👩‍🏫 Teacher Routes */}
      <Route path="/teacher" element={<TeacherDashboard />} />
      <Route path="/upload-assignment" element={<UploadAssignment />} />
      <Route path="/grade" element={<GradeAssignments />} />
      <Route path="/teacher-feedback" element={<TeacherFeedback />} />
    </Routes>
  );
}

// ✅ Main App Wrapper
export default function App() {
  const { darkMode } = useTheme();

  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
        className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}
      >
        <Navbar />
        
        {/* Main content area - takes remaining space */}
        <main style={{ flex: 1, width: "100%" }}>
          <AppContent />
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}
