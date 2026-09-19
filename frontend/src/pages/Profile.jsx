import React, { useState } from "react";
import "../styles/profile.css";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Your Name",
    email: "your@email.com",
    department: "Computer Science and Engineering",
    year: "3rd Year",
    semester: "5th Semester",
    bio: "Student and note sharing enthusiast.",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">

      {/* Header */}

      <div className="profile-header">
        <div>
          <h1>My Profile</h1>
          <p>View and manage your profile information.</p>
        </div>
      </div>

      {/* Profile Card */}

      <div className="profile-card">

        {/* Profile Top */}

        <div className="profile-top">

          <div className="profile-avatar">
            {profile.name.charAt(0).toUpperCase()}
          </div>

          <div className="profile-basic">
            <h2>{profile.name}</h2>
            <p>{profile.email}</p>
            <span>{profile.department}</span>
          </div>

          {!isEditing && (
            <button
              className="edit-profile-btn"
              onClick={() => setIsEditing(true)}
            >
              ✏️ Edit Profile
            </button>
          )}

        </div>

        {/* Divider */}

        <div className="profile-divider"></div>

        {/* Information */}

        <div className="profile-information">

          <h3>Personal Information</h3>

          <div className="profile-grid">

            {/* Name */}

            <div className="profile-field">
              <label>Full Name</label>

              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.name}</p>
              )}
            </div>

            {/* Email */}

            <div className="profile-field">
              <label>Email Address</label>

              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.email}</p>
              )}
            </div>

            {/* Department */}

            <div className="profile-field">
              <label>Department</label>

              {isEditing ? (
                <input
                  type="text"
                  name="department"
                  value={profile.department}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.department}</p>
              )}
            </div>

            {/* Year */}

            <div className="profile-field">
              <label>Year</label>

              {isEditing ? (
                <select
                  name="year"
                  value={profile.year}
                  onChange={handleChange}
                >
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
              ) : (
                <p>{profile.year}</p>
              )}
            </div>

            {/* Semester */}

            <div className="profile-field">
              <label>Semester</label>

              {isEditing ? (
                <select
                  name="semester"
                  value={profile.semester}
                  onChange={handleChange}
                >
                  <option>1st Semester</option>
                  <option>2nd Semester</option>
                  <option>3rd Semester</option>
                  <option>4th Semester</option>
                  <option>5th Semester</option>
                  <option>6th Semester</option>
                  <option>7th Semester</option>
                  <option>8th Semester</option>
                </select>
              ) : (
                <p>{profile.semester}</p>
              )}
            </div>

          </div>

          {/* Bio */}

          <div className="profile-field bio-field">
            <label>Bio</label>

            {isEditing ? (
              <textarea
                name="bio"
                rows="4"
                value={profile.bio}
                onChange={handleChange}
              ></textarea>
            ) : (
              <p>{profile.bio}</p>
            )}
          </div>

          {/* Save Buttons */}

          {isEditing && (
            <div className="profile-edit-actions">

              <button
                className="cancel-profile-btn"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>

              <button
                className="save-profile-btn"
                onClick={handleSave}
              >
                Save Changes
              </button>

            </div>
          )}

        </div>

      </div>

      {/* Statistics */}

      <div className="profile-stats">

        <div className="stat-card">
          <span className="stat-icon">📚</span>
          <div>
            <h3>3</h3>
            <p>Notes Uploaded</p>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">⬇️</span>
          <div>
            <h3>0</h3>
            <p>Downloads</p>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">📅</span>
          <div>
            <h3>2026</h3>
            <p>Joined</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Profile;

