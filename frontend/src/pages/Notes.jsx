import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/notes.css";

function Notes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");

  const notes = [
    {
      id: 1,
      title: "Data Structures - Unit 1",
      subject: "Data Structures",
      description: "Introduction to data structures, arrays, linked lists and basic concepts.",
      uploadedBy: "Student",
      date: "Today",
    },
    {
      id: 2,
      title: "DBMS - SQL Notes",
      subject: "Database Management",
      description: "SQL commands, queries, joins, keys and relational database concepts.",
      uploadedBy: "Student",
      date: "Yesterday",
    },
    {
      id: 3,
      title: "Computer Networks - Unit 2",
      subject: "Computer Networks",
      description: "Network models, TCP/IP, protocols and data communication concepts.",
      uploadedBy: "Student",
      date: "2 days ago",
    },
    {
      id: 4,
      title: "Operating Systems - Unit 1",
      subject: "Operating Systems",
      description: "Introduction to operating systems, processes and system calls.",
      uploadedBy: "Student",
      date: "3 days ago",
    },
    {
      id: 5,
      title: "Machine Learning Basics",
      subject: "Machine Learning",
      description: "Introduction to machine learning, regression and classification.",
      uploadedBy: "Student",
      date: "4 days ago",
    },
    {
      id: 6,
      title: "HTML and CSS Notes",
      subject: "Web Development",
      description: "HTML elements, CSS properties, layouts and responsive design.",
      uploadedBy: "Student",
      date: "5 days ago",
    },
  ];

  const subjects = [
    "All",
    "Data Structures",
    "Database Management",
    "Computer Networks",
    "Operating Systems",
    "Machine Learning",
    "Web Development",
  ];

  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSubject =
      selectedSubject === "All" || note.subject === selectedSubject;

    return matchesSearch && matchesSubject;
  });

  return (
    <div className="notes-page">

      {/* Header */}

      <div className="notes-header">
        <div>
          <h1>Study Notes</h1>
          <p>Find and explore notes shared by students.</p>
        </div>

        <Link to="/upload" className="upload-notes-btn">
          + Upload Notes
        </Link>
      </div>

      {/* Search and Filter */}

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

      </div>

      {/* Notes Count */}

      <div className="notes-count">
        <h2>
          {selectedSubject === "All" ? "All Notes" : selectedSubject}
        </h2>

        <span>
          {filteredNotes.length}{" "}
          {filteredNotes.length === 1 ? "note" : "notes"}
        </span>
      </div>

      {/* Notes */}

      {filteredNotes.length > 0 ? (
        <div className="notes-grid">

          {filteredNotes.map((note) => (
            <div className="notes-card" key={note.id}>

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
                <span>👤 {note.uploadedBy}</span>
                <span>🕒 {note.date}</span>
              </div>

              <div className="note-actions">
                <button className="view-note-btn">
                  View
                </button>

                <button className="download-note-btn">
                  Download
                </button>
              </div>

            </div>
          ))}

        </div>
      ) : (
        <div className="no-notes">
          <div>📭</div>
          <h3>No notes found</h3>
          <p>Try changing your search or subject filter.</p>
        </div>
      )}

    </div>
  );
}

export default Notes;
