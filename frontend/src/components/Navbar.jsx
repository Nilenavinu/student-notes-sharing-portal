import "./../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar-custom">

      <div className="logo">
        📖 NotesPortal
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Features</li>
      </ul>

      <div className="buttons">

        <button className="login-btn">
          Login
        </button>

        <button className="signup-btn">
          Sign Up
        </button>

      </div>

    </nav>
  );
}

export default Navbar;