import type { Track } from "../types";
import { STAGES } from "../types";
import { StatusSelect } from "./StatusSelect"

type TrackRowProps = { track: Track, number: number, onUpdate: (changes: Partial<Track>) => void; };

export function TrackRow({ track, number, onUpdate }: TrackRowProps) {
  return (
    <div>
      <div>{number}</div>
      <div>{track.name}</div>
      {STAGES.map((stage) => (
        <StatusSelect key={stage} value={track[stage]} label={track.name + " " + stage} onChange={(newStatus) => {onUpdate({ [stage]: newStatus})}} />
      ))}
    </div>
  );
}
