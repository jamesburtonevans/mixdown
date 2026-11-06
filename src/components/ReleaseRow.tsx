import type { Release, Track } from "../types";
import { STAGES } from "../types";
import { TrackRow } from "./TrackRow";

type ReleaseRowProps = {
  release: Release;
  onUpdateTrack: (trackId: string, changes: Partial<Track>) => void;
  onDelete: () => void;
};

export function ReleaseRow({ release, onUpdateTrack, onDelete }: ReleaseRowProps) {
  const headingId = `release-${release.id}-name`;
  return (
    <section className="release" aria-labelledby={headingId}>
      <h2 className="release__name" id={headingId}>{release.name}</h2>
      <button className="release__delete" type="button" onClick={onDelete}>Delete {release.name}</button>
      <table className="release__tracks" aria-labelledby={headingId}>
        <thead>
          <tr>
            <th scope="col" className="release__heading">#</th>
            <th scope="col" className="release__heading">Track</th>
            {STAGES.map((stage) => (
              <th scope="col" className="release__heading" key={stage}>{stage}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {release.tracks.map((track, index) => (
            <TrackRow key={track.id} track={track} number={index + 1} onUpdate={(changes) => onUpdateTrack(track.id, changes)} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
