import { useState } from "react";
import type { Release, Track } from "../types";
import { STAGES } from "../types";
import { TrackRow } from "./TrackRow";
import { NewTrackForm } from "./NewTrackForm";
import { EditReleaseForm } from "./EditReleaseForm";


type ReleaseRowProps = {
  release: Release;
  onUpdate: (name: string, releaseDate: string) => void;
  onUpdateTrack: (trackId: string, changes: Partial<Track>) => void;
  onDelete: () => void;
  onDeleteTrack: (trackId: string) => void;
  onAddTrack: (name: string) => void;
};

export function ReleaseRow({ release, onUpdate, onUpdateTrack, onDelete, onDeleteTrack, onAddTrack }: ReleaseRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  const headingId = `release-${release.id}-name`;
  return (
    <section className="release" aria-labelledby={headingId}>
      <h2 className="release__name" id={headingId}>{release.name}</h2>

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

      {isEditing ? (
        <EditReleaseForm
          release={release}
          onSave={(name, releaseDate) => {
            onUpdate(name, releaseDate);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <button className="release__edit" type="button" onClick={() => setIsEditing(true)}>Edit {release.name}</button>
      )}
      <button className="release__delete" type="button" onClick={onDelete}>Delete {release.name}</button>
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
      <NewTrackForm releaseId={release.id} onAdd={onAddTrack} />
    </section>
  );
}
