import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

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
      <div className="container" style={{ maxWidth: "1000px" }}>
        <div className="row g-4">
          {/* Contact Information Card */}
          <div className="col-lg-5">
            <div
              className="card shadow-lg border-0 h-100"
              style={{
                borderRadius: "20px",
                backgroundColor: "#ffffff",
              }}
            >
              <div className="card-body p-5">
                <h2 className="text-success fw-bold mb-4" style={{ fontSize: "2rem" }}>
                  Get In Touch
                </h2>
                <p className="text-muted mb-4" style={{ fontSize: "1.05rem" }}>
                  Have questions or suggestions? We'd love to hear from you!
                </p>

                {/* Contact Details */}
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-start">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "10px",
                        backgroundColor: "#e8f5e9",
                        marginRight: "15px",
                      }}
                    >
                      <FaEnvelope style={{ fontSize: "1.5rem", color: "#4CAF50" }} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Email</h6>
                      <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                        assignmentportal@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "10px",
                        backgroundColor: "#e3f2fd",
                        marginRight: "15px",
                      }}
                    >
                      <FaPhone style={{ fontSize: "1.5rem", color: "#2196F3" }} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Phone</h6>
                      <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "10px",
                        backgroundColor: "#fff3e0",
                        marginRight: "15px",
                      }}
                    >
                      <FaMapMarkerAlt style={{ fontSize: "1.5rem", color: "#FF9800" }} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Address</h6>
                      <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                        123 Education Street<br />
                        Learning City, EDU 12345
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="mt-5 p-3" style={{ backgroundColor: "#f5f5f5", borderRadius: "10px" }}>
                  <h6 className="fw-bold mb-2">Office Hours</h6>
                  <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="col-lg-7">
            <div
              className="card shadow-lg border-0"
              style={{
                borderRadius: "20px",
                backgroundColor: "#ffffff",
              }}
            >
              <div className="card-body p-5">
                <h2 className="text-primary fw-bold mb-4" style={{ fontSize: "2rem" }}>
                  Send Us a Message
                </h2>

                {/* Success Message */}
                {submitted && (
                  <div className="alert alert-success mb-4" style={{ borderRadius: "10px" }}>
                    <strong>✅ Message Sent!</strong> We'll get back to you soon.
                  </div>
                )}

                {/* Contact Form */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{ padding: "12px", borderRadius: "8px" }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ padding: "12px", borderRadius: "8px" }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{ padding: "12px", borderRadius: "8px" }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{ padding: "12px", borderRadius: "8px" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success w-100 py-3"
                    style={{ borderRadius: "10px", fontSize: "1.1rem", fontWeight: "600" }}
                  >
                    <FaPaperPlane className="me-2" />
                    Send Message
                  </button>
                </form>

                <p className="text-muted text-center mt-4 mb-0" style={{ fontSize: "0.9rem" }}>
                  Our team will respond within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
