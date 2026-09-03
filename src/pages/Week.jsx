import { Navigate, Link, useParams } from "react-router-dom";
import TrackCard from "../components/TrackCard";
import { weeks, sessionPattern } from "../data/curriculum";

export default function Week() {
  const { weekNumber } = useParams();
  const number = Number(weekNumber);
  const week = weeks.find((item) => item.number === number);

  if (!week) return <Navigate to="/curriculum" replace />;

  const prev = weeks.find((item) => item.number === number - 1);
  const next = weeks.find((item) => item.number === number + 1);
  const padded = String(week.number).padStart(2, "0");

  return (
    <div>
      <section className="page-header week-header">
        <div className="week-meta">
          <span className="status-pill">WEEK_{padded}</span>
          <span>MODULE · {week.module.toUpperCase()}</span>
        </div>
        <h1>{week.title}</h1>
        <div className="week-actions">
          <a
            className="btn primary"
            href={`/downloads/week-${padded}.pdf`}
            download
          >
            ↓ Download Week {week.number} Plan
          </a>
          <Link className="btn secondary" to="/curriculum">
            ← Curriculum
          </Link>
        </div>
      </section>

      <section className="dual-track detail-tracks">
        <TrackCard type="CORE" items={week.core} />
        <TrackCard type="STRETCH" items={week.stretch} />
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WEEKLY_FLOW</span>
            <h2>Session plan</h2>
          </div>
        </div>

        <div className="timeline">
          {sessionPattern.map((session) => (
            <article className="timeline-item" key={session.day}>
              <div className="timeline-marker" />
              <div>
                <span>{session.day}</span>
                <h3>{session.title}</h3>
                <p>{session.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block split-section">
        <div className="info-panel">
          <span className="eyebrow">INTERACTIVE_ELEMENTS</span>
          <h2>Challenge / lab focus</h2>
          <ul className="clean-list">
            {week.interactive.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="info-panel deliverable-panel">
          <span className="eyebrow">DELIVERABLE</span>
          <h2>What learners should ship</h2>
          <p>{week.deliverable}</p>
        </div>
      </section>

      <nav className="week-pagination">
        <div>
          {prev ? (
            <Link to={`/week/${prev.number}`}>
              <span>← PREVIOUS</span>
              <strong>Week {String(prev.number).padStart(2, "0")}</strong>
              <small>{prev.title}</small>
            </Link>
          ) : <span />}
        </div>
        <div className="next-page">
          {next ? (
            <Link to={`/week/${next.number}`}>
              <span>NEXT →</span>
              <strong>Week {String(next.number).padStart(2, "0")}</strong>
              <small>{next.title}</small>
            </Link>
          ) : <Link to="/downloads"><span>FINISH →</span><strong>Downloads</strong><small>Get the complete program</small></Link>}
        </div>
      </nav>
    </div>
  );
}
