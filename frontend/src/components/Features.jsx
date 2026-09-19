import FeatureCard from "./FeatureCard";
import "../styles/features.css";

function Features() {
  return (
    <section className="features-section">
      <div className="features-heading">
        <p className="section-label">WHY NOTE VAULT?</p>

        <h2>
          Everything You Need to
          <span> Study Better</span>
        </h2>

        <p>
          A simple platform designed to make sharing and finding study
          materials easier for students.
        </p>
      </div>

      <div className="features-grid">
        <FeatureCard
          icon="📚"
          title="Organized Notes"
          description="Find notes organized by semester, subject and course."
        />

        <FeatureCard
          icon="🔍"
          title="Easy Search"
          description="Quickly search and find the study material you need."
        />

        <FeatureCard
          icon="📤"
          title="Upload Notes"
          description="Share your useful notes and study materials with others."
        />

        <FeatureCard
          icon="🤝"
          title="Learn Together"
          description="Create a shared academic resource and learn from each other."
        />
      </div>
    </section>
  );
}

export default Features;