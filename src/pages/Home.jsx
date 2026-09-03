import { Link } from "react-router-dom";
import WeekCard from "../components/WeekCard";
import { program, modules, weeks, sessionPattern } from "../data/curriculum";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-kicker">
          <span className="status-pill">ACTIVE</span>
          <span>BACKEND_DEVELOPER_PROGRAM</span>
        </div>

        <h1>
          Build APIs.
          <br />
          Test them.
          <br />
          Ship them.
        </h1>

        <p className="hero-copy">{program.overview}</p>

        <div className="hero-actions">
          <Link to="/curriculum" className="btn primary">
            Explore Curriculum →
          </Link>
          <a
            href="/downloads/tech4rural-full-curriculum.pdf"
            download
            className="btn secondary"
          >
            ↓ Download Full Plan
          </a>
        </div>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <span>DURATION</span>
          <strong>{program.duration}</strong>
        </div>
        <div className="stat-card">
          <span>SESSIONS</span>
          <strong>{program.sessions}</strong>
        </div>
        <div className="stat-card">
          <span>OUTPUT</span>
          <strong>{program.capstone}</strong>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">STACK</span>
            <h2>Production-focused tooling</h2>
          </div>
        </div>
        <div className="stack-row">
          {program.stack.map((tech) => (
            <span className="stack-chip" key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PROGRAM_ROADMAP</span>
            <h2>Six modules. Twelve weeks.</h2>
          </div>
        </div>
        <div className="module-list">
          {modules.map((module) => (
            <div className="module-row" key={module.id}>
              <span className="module-number">0{module.id}</span>
              <div>
                <strong>{module.name}</strong>
                <small>Weeks {module.weeks}</small>
              </div>
              <span className="module-line" />
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">LEARNING_MODEL</span>
            <h2>One class. Two levels of challenge.</h2>
          </div>
        </div>
        <div className="dual-track">
          <div className="track-summary">
            <span className="track-badge">CORE_TRACK</span>
            <h3>Build the fundamentals</h3>
            <p>
              Beginners implement the essential version of every real-world
              backend feature with facilitator support.
            </p>
          </div>
          <div className="track-summary">
            <span className="track-badge">STRETCH_TRACK</span>
            <h3>Push toward production</h3>
            <p>
              Intermediate learners tackle harder variants, review code, and
              solve performance, security, and architecture extensions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SESSION_PATTERN</span>
            <h2>Three-day weekly rhythm</h2>
          </div>
        </div>
        <div className="session-grid">
          {sessionPattern.map((session) => (
            <article className="session-card" key={session.day}>
              <span>{session.day}</span>
              <h3>{session.title}</h3>
              <p>{session.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ALL_WEEKS</span>
            <h2>Curriculum index</h2>
          </div>
          <Link to="/curriculum" className="text-link">View full curriculum →</Link>
        </div>
        <div className="weeks-grid">
          {weeks.map((week) => <WeekCard week={week} key={week.number} />)}
        </div>
      </section>

      <section className="final-callout">
        <span className="eyebrow">FINAL_OUTCOME</span>
        <h2>{program.finalOutcome}</h2>
        <a
          className="btn primary"
          href="/downloads/tech4rural-full-curriculum.pdf"
          download
        >
          ↓ Download Complete Curriculum
        </a>
      </section>
    </>
  );
}
