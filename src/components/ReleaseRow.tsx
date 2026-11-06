import { useState } from "react";
import type { Release, Track, Task } from "../types";
import { STAGES } from "../types";
import { TrackRow } from "./TrackRow";
import { NewTrackForm } from "./NewTrackForm";
import { EditReleaseForm } from "./EditReleaseForm";
import { TaskRow } from "./TaskRow";
import { NewTaskForm } from "./NewTaskForm";
import { ReleaseSummary } from "./ReleaseSummary";


type ReleaseRowProps = {
  release: Release;
  onUpdate: (name: string, releaseDate: string) => void;
  onUpdateTrack: (trackId: string, changes: Partial<Track>) => void;
  onDelete: () => void;
  onDeleteTrack: (trackId: string) => void;
  onAddTrack: (name: string) => void;
  onUpdateTask: (taskId: string, changes: Partial<Task>) => void;
  onDeleteTask: (taskId: string) => void;
  onAddTask: (name: string) => void;
};

export function ReleaseRow({
  release,
  onUpdate,
  onUpdateTrack,
  onDelete,
  onDeleteTrack,
  onAddTrack,
  onUpdateTask,
  onDeleteTask,
  onAddTask,
}: ReleaseRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const headingId = `release-${release.id}-name`;
  const tasksHeadingId = `release-${release.id}-tasks`;
  const bodyId = `release-${release.id}-body`;
  return (
    <section className="release" aria-labelledby={headingId}>
      <header className="release__header">
        <h2 className="release__name" id={headingId}>{release.name}</h2>
        <button
          className="release__toggle"
          type="button"
          aria-expanded={isExpanded}
          aria-controls={bodyId}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Collapse" : "Expand"} {release.name}
        </button>
      </header>

      <p className="release__date">
        Release date:{" "}
        {release.releaseDate === null ? (
          "Not set"
        ) : (
          <time dateTime={release.releaseDate}>
            {new Date(release.releaseDate).toLocaleDateString(undefined, {
              dateStyle: "medium",
              timeZone: "UTC",
            })}
          </time>
        )}
      </p>

      <ReleaseSummary release={release} />

      <div className="release__body" id={bodyId} hidden={!isExpanded}>
        <div className="release__actions">
          {!isEditing && (
            <button className="release__edit" type="button" onClick={() => setIsEditing(true)}>Edit {release.name}</button>
          )}
          <button className="release__delete" type="button" onClick={onDelete}>Delete {release.name}</button>
        </div>
        {isEditing && (
          <EditReleaseForm
            release={release}
            onSave={(name, releaseDate) => {
              onUpdate(name, releaseDate);
              setIsEditing(false);
            }}
            onCancel={() => setIsEditing(false)}
          />
        )}
        <div className="release__table-wrap">
          <table className="release__tracks" aria-labelledby={headingId}>
            <thead>
              <tr>
                <th scope="col" className="release__heading">#</th>
                <th scope="col" className="release__heading">Track</th>
                {STAGES.map((stage) => (
                  <th scope="col" className="release__heading" key={stage}>{stage}</th>
                ))}
                <th scope="col" className="release__heading">Actions</th>
              </tr>
            </thead>
            <tbody>
              {release.tracks.map((track, index) => (
                <TrackRow key={track.id} track={track} number={index + 1} onUpdate={(changes) => onUpdateTrack(track.id, changes)} onDelete={() => onDeleteTrack(track.id)} />
              ))}
            </tbody>
          </table>
        </div>
        <NewTrackForm releaseId={release.id} onAdd={onAddTrack} />

        <section className="release__tasks" aria-labelledby={tasksHeadingId}>
          <h3 id={tasksHeadingId}>Tasks</h3>
          {release.tasks.length === 0 ? (
            <p className="release__no-tasks">No tasks yet.</p>
          ) : (
            <ul className="release__task-list">
              {release.tasks.map((task) => (
                <TaskRow
                  key={task.id}
                  task={task}
                  onUpdate={(changes) => onUpdateTask(task.id, changes)}
                  onDelete={() => onDeleteTask(task.id)}
                />
              ))}
            </ul>
          )}
          <NewTaskForm releaseId={release.id} onAdd={onAddTask} />
        </section>
      </div>
    </section>
  );
}
