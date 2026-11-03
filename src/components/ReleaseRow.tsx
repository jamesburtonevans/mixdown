import type { Release, Track } from "../types";
import { TrackRow } from "./TrackRow";


type ReleaseRowProps = { release: Release, onUpdateTrack: (trackId: string, changes: Partial<Track>) => void };

export function ReleaseRow({ release, onUpdateTrack }: ReleaseRowProps) {
  return (
    <div>
      <div>{release.name}</div>
      {release.tracks.map((track, index) => (
        <TrackRow key={track.id} track={track} number={index + 1} onUpdate={(changes) => onUpdateTrack(track.id, changes)} />
      ))}
    </div>
  );
}
