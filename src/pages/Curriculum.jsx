import WeekCard from "../components/WeekCard";
import { modules, weeks } from "../data/curriculum";

export default function Curriculum() {
  return (
    <div>
      <section className="page-header">
        <span className="eyebrow">/CURRICULUM</span>
        <h1>12-week roadmap</h1>
        <p>
          Move from HTTP fundamentals to a deployed, observable, production-ready API.
        </p>
      </section>

      {modules.map((module) => {
        const moduleWeeks = weeks.filter((week) => week.module === module.name);
        return (
          <section className="section-block curriculum-module" key={module.id}>
            <div className="module-heading">
              <span>MODULE_0{module.id}</span>
              <div>
                <h2>{module.name}</h2>
                <p>Weeks {module.weeks}</p>
              </div>
            </div>
            <div className="weeks-grid two-col">
              {moduleWeeks.map((week) => (
                <WeekCard week={week} key={week.number} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
