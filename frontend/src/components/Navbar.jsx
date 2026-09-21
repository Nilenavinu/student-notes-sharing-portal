import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        📚 Note Vault
      </Link>

      <div className="nav-links">

        <Link to="/">Home</Link>

        {token ? (
          <>
            <Link to="/notes">Study Notes</Link>

            <Link to="/upload">Upload Notes</Link>

            <Link to="/profile">My Profile</Link>

            <div className="user-section">
              <div className="user-avatar">
                {user?.name
                  ? user.name.charAt(0).toUpperCase()
                  : "U"}
              </div>

              <span className="user-name">
                {user?.name || "Student"}
              </span>
            </div>

            <button
              type="button"
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link to="/signup" className="signup-btn">
              Sign Up
            </Link>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;