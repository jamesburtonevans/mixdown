import type { Release } from "../types";

type ReleaseRowProps = { release: Release };

export function ReleaseRow({ release }: ReleaseRowProps) {
  return (
    <div>
      <div>{release.name}</div>
      {release.tracks.map((track) => (
        <div key={track.id}>{track.name}</div>
      ))}
    </div>
  );
}
