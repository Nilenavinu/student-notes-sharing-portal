import { Link } from "react-router-dom";
import "../styles/auth.css";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-container">

        <div className="auth-brand">
          <h1>📚 Note Vault</h1>
          <p>
            Your notes. Your knowledge. Your community.
          </p>
        </div>

        <div className="auth-card">
          <h2>Welcome Back</h2>

          <p className="auth-subtitle">
            Login to access your notes and study materials.
          </p>

          <form>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>

              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="auth-button">
              Login
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-switch">
            Don't have an account?
            <Link to="/signup"> Create Account</Link>
          </p>

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;