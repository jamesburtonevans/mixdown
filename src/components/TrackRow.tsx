import type { Track } from "../types";
import { STAGES } from "../types";

type TrackRowProps = { track: Track, number: number };

export function TrackRow({ track, number }: TrackRowProps) {
  return (
    <div>
      <div>{number}</div>
      <div>{track.name}</div>
      {STAGES.map((stage) => (
        <span key={stage}>{track[stage]}</span>
      ))}
    </div>
  );
}
