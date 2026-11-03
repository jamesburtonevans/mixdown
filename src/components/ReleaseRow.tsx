import type { Release } from "../types";
import { TrackRow } from "./TrackRow";


type ReleaseRowProps = { release: Release };

export function ReleaseRow({ release }: ReleaseRowProps) {
  return (
    <div>
      <div>{release.name}</div>
      {release.tracks.map((track, index) => (
        <TrackRow key={track.id} track={track} number={index + 1} />
      ))}
    </div>
  );
}
