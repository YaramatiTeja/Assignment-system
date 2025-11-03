import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SubmitAssignment() {
  const navigate = useNavigate();
  const [submittedFiles, setSubmittedFiles] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const updatedFiles = [...submittedFiles, ...files];
      setSubmittedFiles(updatedFiles);
      setSuccessMsg("✅ Submitted Successfully!");
      e.target.value = ""; // reset file input
    }
  };

  const handleDelete = (index) => {
    const updated = submittedFiles.filter((_, i) => i !== index);
    setSubmittedFiles(updated);
    if (updated.length === 0) setSuccessMsg("");
  };

  const handleBack = () => navigate("/student");

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center vh-100"
      style={{
        background: "linear-gradient(135deg, #f1f8e9, #e0f2f1)",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{ width: "420px", borderRadius: "15px", backgroundColor: "#ffffff" }}
      >
        <h3 className="text-success text-center mb-4">📤 Submit Assignment</h3>

        <input
          type="file"
          className="form-control mb-3"
          onChange={handleFileUpload}
          multiple
        />

        <button className="btn btn-success w-100 mb-3">Upload</button>

        {/* Success Message */}
        {successMsg && (
          <div className="alert alert-success text-center py-2">{successMsg}</div>
        )}

        {/* Display Submitted Files */}
        {submittedFiles.length > 0 && (
          <div>
            <h5 className="text-center text-secondary mb-3">📂 Submitted Files</h5>
            <div className="d-flex flex-column gap-2">
              {submittedFiles.map((file, index) => (
                <div key={index} className="card p-2 shadow-sm d-flex flex-row align-items-center justify-content-between">
                  <div>
                    <strong>{file.name}</strong>
                    <p className="text-muted small mb-0">Status: Submitted</p>
                  </div>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <button onClick={handleBack} className="btn btn-secondary w-100 mt-4">
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}
