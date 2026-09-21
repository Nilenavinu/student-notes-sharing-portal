import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import "../styles/upload.css";

function Upload() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const subjects = [
    "Data Structures",
    "Database Management",
    "Computer Networks",
    "Operating Systems",
    "Machine Learning",
    "Web Development",
  ];

  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title || !subject || !semester || !description || !file) {
      setError("Please fill in all fields and select a file.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", title);
      formData.append("subject", subject);
      formData.append("semester", semester);
      formData.append("description", description);
      formData.append("file", file);

      await API.post("/notes/upload", formData);

      alert("Notes uploaded successfully!");

      setTitle("");
      setSubject("");
      setSemester("");
      setDescription("");
      setFile(null);

      document.getElementById("file-input").value = "";

      navigate("/notes");
    } catch (error) {
      console.error("Error uploading notes:", error);

      setError(
        error.response?.data?.message ||
          "Failed to upload notes. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-page">

      {/* Header */}

      <div className="upload-header">
        <div>
          <h1>Upload Notes</h1>
          <p>Share your study materials with other students.</p>
        </div>

        <Link to="/notes" className="back-btn">
          ← Back to Notes
        </Link>
      </div>

      {/* Upload Form */}

      <div className="upload-container">

        <form onSubmit={handleSubmit}>

          {error && (
            <div className="upload-error">
              {error}
            </div>
          )}

          {/* Title */}

          <div className="form-group">
            <label htmlFor="title">
              Note Title <span>*</span>
            </label>

            <input
              id="title"
              type="text"
              placeholder="Enter the title of your notes"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Subject */}

          <div className="form-group">
            <label htmlFor="subject">
              Subject <span>*</span>
            </label>

            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">Select a subject</option>

              {subjects.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Semester */}

          <div className="form-group">
            <label htmlFor="semester">
              Semester <span>*</span>
            </label>

            <select
              id="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="">Select a semester</option>

              {semesters.map((item) => (
                <option key={item} value={item}>
                  Semester {item}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}

          <div className="form-group">
            <label htmlFor="description">
              Description <span>*</span>
            </label>

            <textarea
              id="description"
              rows="5"
              placeholder="Briefly describe what these notes contain..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* File */}

          <div className="form-group">
            <label>
              Upload File <span>*</span>
            </label>

            <div className="file-upload">

              <div className="upload-icon">
                📄
              </div>

              <h3>Select your notes file</h3>

              <p>
                 PDF files only
              </p>

              <label
                htmlFor="file-input"
                className="choose-file-btn"
              >
                Choose File
              </label>

              <input
                id="file-input"
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files[0])}
              />

              {file && (
                <div className="selected-file">
                  <span>📎</span>
                  {file.name}
                </div>
              )}

            </div>
          </div>

          {/* Buttons */}

          <div className="form-buttons">

            <Link to="/notes" className="cancel-btn">
              Cancel
            </Link>

            <button
              type="submit"
              className="submit-upload-btn"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload Notes"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Upload;

