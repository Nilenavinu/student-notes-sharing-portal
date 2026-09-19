import { Link } from "react-router-dom";
import "../styles/auth.css";

function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-container">

        <div className="auth-brand">
          <h1>📚 Note Vault</h1>
          <p>
            Create your account and start sharing knowledge.
          </p>
        </div>

        <div className="auth-card">
          <h2>Create Account</h2>

          <p className="auth-subtitle">
            Join Note Vault and start sharing your study materials.
          </p>

          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>

              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>

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
                placeholder="Create a password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                required
              />
            </div>

            <button type="submit" className="auth-button">
              Create Account
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-switch">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Signup;