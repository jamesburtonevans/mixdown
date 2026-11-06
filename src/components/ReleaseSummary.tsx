import type { Release } from "../types";
import { STAGES } from "../types";

type ReleaseSummaryProps = { release: Release };

export function ReleaseSummary({ release }: ReleaseSummaryProps) {
  const trackTotal = release.tracks.length;
  const trackWord = trackTotal === 1 ? "track" : "tracks";

  const taskTotal = release.tasks.length;
  const tasksDone = release.tasks.filter((task) => task.status === "done").length;
  const taskWord = taskTotal === 1 ? "task" : "tasks";

  const headingId = `release-${release.id}-progress`;

  return (
    <section className="release-summary" aria-labelledby={headingId}>
      <h3 id={headingId}>Progress</h3>
      <ul className="release-summary__list">
        {trackTotal === 0 ? (
          <li className="release-summary__item">No tracks yet</li>
        ) : (
          STAGES.map((stage) => {
            const tracksDone = release.tracks.filter((track) => track[stage] === "done").length;
            return (
              <li className="release-summary__item" key={stage}>
                <span className="release-summary__stage">{stage}</span>: {tracksDone} of {trackTotal} {trackWord} done
              </li>
            );
          })
        )}
        {taskTotal === 0 ? (
          <li className="release-summary__item">No tasks yet</li>
        ) : (
          <li className="release-summary__item">
            <span className="release-summary__stage">Tasks</span>: {tasksDone} of {taskTotal} {taskWord} done
          </li>
        )}
      </ul>
    </section>
  );
}
