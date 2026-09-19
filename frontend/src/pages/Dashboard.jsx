
import React from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  const subjects = [
    "Data Structures",
    "Database Management",
    "Computer Networks",
    "Operating Systems",
    "Machine Learning",
    "Web Development",
  ];

  const recentNotes = [
    {
      title: "Data Structures - Unit 1",
      subject: "Data Structures",
      uploadedBy: "Student",
      date: "Today",
    },
    {
      title: "DBMS - SQL Notes",
      subject: "Database Management",
      uploadedBy: "Student",
      date: "Yesterday",
    },
    {
      title: "Computer Networks - Unit 2",
      subject: "Computer Networks",
      uploadedBy: "Student",
      date: "2 days ago",
    },
  ];

  return (
    <div className="dashboard">

      {/* Welcome Section */}
      <section className="welcome-section">
        <div>
          <h1>Welcome back! 👋</h1>
          <p>
            Find, share and manage your study notes in one place.
          </p>
        </div>

        <Link to="/upload" className="upload-btn">
          + Upload Notes
        </Link>
      </section>

      {/* Search */}
      <section className="search-section">
        <input
          type="text"
          placeholder="Search notes, subjects or topics..."
        />
        <button>Search</button>
      </section>

      {/* Quick Actions */}
      <section className="dashboard-section">
        <h2>Quick Actions</h2>

        <div className="action-grid">
          <Link to="/notes" className="action-card">
            <div className="action-icon">📚</div>
            <h3>Browse Notes</h3>
            <p>Explore notes shared by students.</p>
          </Link>

          <Link to="/upload" className="action-card">
            <div className="action-icon">📤</div>
            <h3>Upload Notes</h3>
            <p>Share your notes with other students.</p>
          </Link>

          <Link to="/notes" className="action-card">
            <div className="action-icon">🔍</div>
            <h3>Find Notes</h3>
            <p>Search for notes by subject or topic.</p>
          </Link>
        </div>
      </section>

      {/* Subjects */}
      <section className="dashboard-section">
        <div className="section-heading">
          <h2>Subjects</h2>
          <Link to="/notes">View All</Link>
        </div>

        <div className="subject-grid">
          {subjects.map((subject, index) => (
            <Link to="/notes" className="subject-card" key={index}>
              <span>📖</span>
              <p>{subject}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Notes */}
      <section className="dashboard-section">
        <div className="section-heading">
          <h2>Recent Notes</h2>
          <Link to="/notes">View All</Link>
        </div>

        <div className="notes-list">
          {recentNotes.map((note, index) => (
            <div className="note-card" key={index}>
              <div className="note-icon">📄</div>

              <div className="note-info">
                <h3>{note.title}</h3>
                <p>{note.subject}</p>
                <small>
                  Uploaded by {note.uploadedBy} • {note.date}
                </small>
              </div>

              <Link to="/notes" className="view-btn">
                View
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Dashboard;

