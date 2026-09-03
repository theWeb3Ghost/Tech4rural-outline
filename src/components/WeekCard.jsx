import { Link } from "react-router-dom";

export default function WeekCard({ week }) {
  return (
    <Link to={`/week/${week.number}`} className="week-card">
      <div className="week-card-top">
        <span className="eyebrow">WEEK_{String(week.number).padStart(2, "0")}</span>
        <span className="arrow">↗</span>
      </div>
      <h3>{week.title}</h3>
      <p>{week.module}</p>
      <div className="card-tags">
        <span>CORE</span>
        <span>STRETCH</span>
      </div>
    </Link>
  );
}
