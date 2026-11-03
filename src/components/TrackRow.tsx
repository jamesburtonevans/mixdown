import type { Track } from "../types";
import { STAGES } from "../types";
import { StatusSelect } from "./StatusSelect"

type TrackRowProps = { track: Track, number: number };

export function TrackRow({ track, number }: TrackRowProps) {
  return (
    <div>
      <div>{number}</div>
      <div>{track.name}</div>
      {STAGES.map((stage) => (
        <StatusSelect key={stage} value={track[stage]} label={track.name + stage} onChange={(newStatus) => {console.log(track.name, stage, newStatus)}} />
      ))}
    </div>
  );
}
