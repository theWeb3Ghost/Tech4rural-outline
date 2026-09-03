import { weeks } from "../data/curriculum";

export default function Downloads() {
  return (
    <div>
      <section className="page-header">
        <span className="eyebrow">/DOWNLOADS</span>
        <h1>Course plans</h1>
        <p>
          Download an individual weekly plan or the complete 12-week curriculum.
        </p>
      </section>

      <section className="full-download-card">
        <div>
          <span className="eyebrow">COMPLETE_PROGRAM</span>
          <h2>Tech4Rural Backend Developer Program</h2>
          <p>All 12 weeks · 36 sessions · Core + Stretch tracks · facilitation notes</p>
        </div>
        <a
          className="btn primary"
          href="/downloads/tech4rural-full-curriculum.pdf"
          download
        >
          ↓ Download Full Plan
        </a>
      </section>

      <section className="download-list">
        {weeks.map((week) => {
          const padded = String(week.number).padStart(2, "0");
          return (
            <div className="download-row" key={week.number}>
              <div className="file-icon">PDF</div>
              <div className="download-copy">
                <span>WEEK_{padded}</span>
                <strong>{week.title}</strong>
                <small>{week.module}</small>
              </div>
              <a
                className="download-button"
                href={`/downloads/week-${padded}.pdf`}
                download
              >
                ↓ Download
              </a>
            </div>
          );
        })}
      </section>
    </div>
  );
}
