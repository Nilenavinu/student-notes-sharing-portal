import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import "../styles/notes.css";

function Notes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedSemester, setSelectedSemester] = useState("All");

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const subjects = [
    "All",
    "Data Structures",
    "Database Management",
    "Computer Networks",
    "Operating Systems",
    "Machine Learning",
    "Web Development",
  ];

  const semesters = [
    "All",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
  ];

  useEffect(() => {
    let cancelled = false;

    const loadNotes = async () => {
      try {
        setLoading(true);
        setError("");

        const params = {};

        if (selectedSubject !== "All") {
          params.subject = selectedSubject;
        }

        if (selectedSemester !== "All") {
          params.semester = selectedSemester;
        }

        const response = await API.get("/notes", {
          params,
        });

        if (!cancelled) {
          setNotes(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);

        if (!cancelled) {
          setError("Failed to load notes.");
          setLoading(false);
        }
      }
    };

    loadNotes();

    return () => {
      cancelled = true;
    };
  }, [selectedSubject, selectedSemester]);

  const filteredNotes = notes.filter((note) => {
    const search = searchTerm.toLowerCase();

    return (
      note.title.toLowerCase().includes(search) ||
      note.subject.toLowerCase().includes(search) ||
      (note.description || "").toLowerCase().includes(search)
    );
  });

  if (loading) {
    return (
      <div className="notes-page">
        <div className="no-notes">
          <div>⏳</div>
          <h3>Loading notes...</h3>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="notes-page">
        <div className="no-notes">
          <div>⚠️</div>
          <h3>{error}</h3>
          <p>Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="notes-page">

      <div className="notes-header">
        <div>
          <h1>Study Notes</h1>
          <p>Find and explore notes shared by students.</p>
        </div>

        <Link to="/upload" className="upload-notes-btn">
          + Upload Notes
        </Link>
      </div>

      <div className="notes-controls">

        <div className="notes-search">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search notes or topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>

        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          {semesters.map((semester) => (
            <option key={semester} value={semester}>
              {semester === "All"
                ? "All Semesters"
                : `Semester ${semester}`}
            </option>
          ))}
        </select>

      </div>

      <div className="notes-count">
        <h2>
          {selectedSubject === "All"
            ? "All Notes"
            : selectedSubject}
        </h2>

        <span>
          {filteredNotes.length}{" "}
          {filteredNotes.length === 1 ? "note" : "notes"}
        </span>
      </div>

      {filteredNotes.length > 0 ? (
        <div className="notes-grid">

          {filteredNotes.map((note) => (
            <div className="notes-card" key={note._id}>

              <div className="notes-card-top">
                <div className="file-icon">📄</div>

                <span className="subject-tag">
                  {note.subject}
                </span>
              </div>

              <h3>{note.title}</h3>

              <p className="note-description">
                {note.description}
              </p>

              <div className="note-details">

                <span>
                  📚 Semester {note.semester}
                </span>

                <span>
                  👤{" "}
                  {note.uploadedBy?.name ||
                    note.uploadedBy?.username ||
                    "Student"}
                </span>

                <span>
                  🕒{" "}
                  {note.createdAt
                    ? new Date(
                        note.createdAt
                      ).toLocaleDateString()
                    : "Unknown date"}
                </span>

              </div>

              <div className="note-actions">

                <a
                  href={`http://localhost:5000${note.fileUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-note-btn"
                >
                  View
                </a>

                <a
                  href={`http://localhost:5000${note.fileUrl}`}
                  download
                  className="download-note-btn"
                >
                  Download
                </a>

              </div>

            </div>
          ))}

        </div>
      ) : (
        <div className="no-notes">
          <div>📭</div>
          <h3>No notes found</h3>
          <p>
            Try changing your search, subject, or semester filter.
          </p>
        </div>
      )}

    </div>
  );
}

export default Notes;