export default function TrackCard({ type, items }) {
  return (
    <section className={`track-card ${type.toLowerCase()}`}>
      <div className="track-card-header">
        <span className="track-badge">{type}_TRACK</span>
        <span>{type === "CORE" ? "Required" : "Advanced"}</span>
      </div>
      <ul className="clean-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
