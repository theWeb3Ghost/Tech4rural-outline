import { NavLink, Link } from "react-router-dom";
import { weeks } from "../data/curriculum";

function NavItem({ to, children, end = false }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
    >
      {children}
    </NavLink>
  );
}

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link to="/" className="brand">
          <span className="brand-mark">&gt;_</span>
          <span>
            <strong>TECH4RURAL</strong>
            <small>backend_program</small>
          </span>
        </Link>

        <div className="sidebar-section">
          <span className="sidebar-label">PROGRAM</span>
          <NavItem to="/" end>Overview</NavItem>
          <NavItem to="/curriculum">Curriculum</NavItem>
          <NavItem to="/downloads">Downloads</NavItem>
        </div>

        <div className="sidebar-section weeks-nav">
          <span className="sidebar-label">WEEKS</span>
          {weeks.map((week) => (
            <NavItem key={week.number} to={`/week/${week.number}`}>
              <span className="week-index">
                {String(week.number).padStart(2, "0")}
              </span>
              <span className="week-nav-title">{week.title}</span>
            </NavItem>
          ))}
        </div>

        <div className="sidebar-footer">
          <span className="status-dot" />
          CURRICULUM_STATUS: ACTIVE
        </div>
      </aside>

      <div className="main-shell">
        <header className="topbar">
          <div>
            <span className="terminal-path">~/tech4rural/backend-program</span>
          </div>
          <a
            className="top-download"
            href="/downloads/tech4rural-full-curriculum.pdf"
            download
          >
            ↓ Full Plan
          </a>
        </header>

        <main className="content">{children}</main>
      </div>
    </div>
  );
}
