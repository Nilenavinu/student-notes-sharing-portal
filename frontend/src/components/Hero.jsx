import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-label">WELCOME TO NOTE VAULT</p>

        <h1>
          Share Notes.
          <br />
          <span>Learn Together.</span>
        </h1>

        <p className="hero-description">
          Note Vault is a student-friendly platform where you can upload,
          discover, organize and access study notes anytime, anywhere.
        </p>

        <div className="hero-features">
          <div>✓ Semester-wise Notes</div>
          <div>✓ Subject-based Organization</div>
          <div>✓ Easy Note Sharing</div>
          <div>✓ Quick Downloads</div>
        </div>

        <div className="hero-buttons">
          <a href="/signup" className="primary-btn">
            Get Started
          </a>

          <a href="/notes" className="secondary-btn">
            Browse Notes
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="notebook-card">
          <img
            src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=900"
            alt="Notebook and study materials"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;