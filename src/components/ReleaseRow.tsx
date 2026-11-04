import type { Release, Track } from "../types";
import { TrackRow } from "./TrackRow";


type ReleaseRowProps = { release: Release, onUpdateTrack: (trackId: string, changes: Partial<Track>) => void };

export function ReleaseRow({ release, onUpdateTrack }: ReleaseRowProps) {
  return (
    <div className="release">
      <div className="release__name">{release.name}</div>
      <div className="release__tracks">
        {release.tracks.map((track, index) => (
          <TrackRow key={track.id} track={track} number={index + 1} onUpdate={(changes) => onUpdateTrack(track.id, changes)} />
        ))}
      </div>
    </div>
  );
}
