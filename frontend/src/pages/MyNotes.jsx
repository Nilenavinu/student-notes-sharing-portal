import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/mynotes.css";

function MyNotes() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Data Structures - Unit 1",
      subject: "Data Structures",
      description:
        "Introduction to data structures, arrays, linked lists and basic concepts.",
      date: "18 September 2026",
    },
    {
      id: 2,
      title: "DBMS - SQL Notes",
      subject: "Database Management",
      description:
        "SQL commands, queries, joins, keys and relational database concepts.",
      date: "16 September 2026",
    },
    {
      id: 3,
      title: "Computer Networks - Unit 2",
      subject: "Computer Networks",
      description:
        "Network models, TCP/IP, protocols and data communication concepts.",
      date: "14 September 2026",
    },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <div className="my-notes-page">

      {/* Header */}

      <div className="my-notes-header">
        <div>
          <h1>My Notes</h1>
          <p>Manage the notes you have uploaded.</p>
        </div>

        <Link to="/upload" className="my-upload-btn">
          + Upload Notes
        </Link>
      </div>

      {/* Notes Count */}

      <div className="my-notes-count">
        <h2>Your Uploaded Notes</h2>
        <span>
          {notes.length} {notes.length === 1 ? "note" : "notes"}
        </span>
      </div>

      {/* Notes */}

      {notes.length > 0 ? (
        <div className="my-notes-list">

          {notes.map((note) => (
            <div className="my-note-card" key={note.id}>

              <div className="my-note-icon">
                📄
              </div>

              <div className="my-note-info">

                <div className="my-note-title">
                  <h3>{note.title}</h3>

                  <span className="my-subject-tag">
                    {note.subject}
                  </span>
                </div>

                <p>{note.description}</p>

                <small>
                  Uploaded on {note.date}
                </small>

              </div>

              <div className="my-note-actions">

                <button className="my-view-btn">
                  View
                </button>

                <button className="my-edit-btn">
                  Edit
                </button>

                <button
                  className="my-delete-btn"
                  onClick={() => handleDelete(note.id)}
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>
      ) : (
        <div className="empty-notes">

          <div className="empty-icon">
            📭
          </div>

          <h3>No notes uploaded yet</h3>

          <p>
            Upload your first set of notes and share them with other students.
          </p>

          <Link to="/upload" className="empty-upload-btn">
            Upload Notes
          </Link>

        </div>
      )}

    </div>
  );
}

export default MyNotes;

