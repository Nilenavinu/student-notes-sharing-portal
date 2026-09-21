import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import "../styles/profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const loadProfile = async () => {
      try {
        setLoading(true);
        setError("");

        const storedUser = JSON.parse(
          localStorage.getItem("user")
        );

        const response = await API.get("/notes/my-notes");

        if (!cancelled) {
          setUser(storedUser);
          setNotes(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error loading profile:", error);

        if (!cancelled) {
          setError("Failed to load profile.");
          setLoading(false);
        }
      }
    };

    loadProfile();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleDelete = async (noteId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      setDeletingId(noteId);

      await API.delete(`/notes/${noteId}`);

      setNotes((currentNotes) =>
        currentNotes.filter((note) => note._id !== noteId)
      );

    } catch (error) {
      console.error("Error deleting note:", error);

      alert(
        error.response?.data?.message ||
          "Failed to delete note."
      );
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="profile-page">
        <div className="profile-loading">
          <div>⏳</div>
          <h3>Loading profile...</h3>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-page">
        <div className="profile-loading">
          <div>⚠️</div>
          <h3>{error}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">

      <div className="profile-header">
        <div>
          <h1>My Profile</h1>
          <p>View your profile and uploaded notes.</p>
        </div>

        <Link to="/notes" className="back-btn">
          ← Back to Notes
        </Link>
      </div>

      <div className="profile-container">

        <div className="profile-card">

          <div className="profile-avatar">
            {user?.name
              ? user.name.charAt(0).toUpperCase()
              : "U"}
          </div>

          <div className="profile-info">
            <h2>{user?.name || "Student"}</h2>
            <p>{user?.email || "No email available"}</p>
          </div>

        </div>

        <div className="profile-stats">

          <div className="stat-card">
            <span>📚</span>

            <div>
              <h3>{notes.length}</h3>
              <p>Notes Uploaded</p>
            </div>
          </div>

        </div>

        <div className="my-notes-section">

          <div className="section-heading">

            <div>
              <h2>My Uploaded Notes</h2>
              <p>
                Notes you have shared with other students.
              </p>
            </div>

            <Link
              to="/upload"
              className="upload-profile-btn"
            >
              + Upload Notes
            </Link>

          </div>

          {notes.length > 0 ? (
            <div className="profile-notes-grid">

              {notes.map((note) => (
                <div
                  className="profile-note-card"
                  key={note._id}
                >

                  <div className="profile-note-top">

                    <div className="profile-file-icon">
                      📄
                    </div>

                    <span className="profile-subject-tag">
                      {note.subject}
                    </span>

                  </div>

                  <h3>{note.title}</h3>

                  <p>
                    {note.description}
                  </p>

                  <div className="profile-note-details">

                    <span>
                      📚 Semester {note.semester}
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

                  <div className="profile-note-actions">

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

                    <button
                      type="button"
                      className="delete-note-btn"
                      onClick={() =>
                        handleDelete(note._id)
                      }
                      disabled={deletingId === note._id}
                    >
                      {deletingId === note._id
                        ? "Deleting..."
                        : "Delete"}
                    </button>

                  </div>

                </div>
              ))}

            </div>
          ) : (
            <div className="no-profile-notes">

              <div>📭</div>

              <h3>
                You haven't uploaded any notes yet
              </h3>

              <p>
                Share your study materials with other
                students.
              </p>

              <Link
                to="/upload"
                className="upload-profile-btn"
              >
                Upload Your First Note
              </Link>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Profile;