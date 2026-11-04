import type { Track } from "../types";
import { STAGES } from "../types";
import { StatusSelect } from "./StatusSelect"

type TrackRowProps = { track: Track, number: number, onUpdate: (changes: Partial<Track>) => void; };

export function TrackRow({ track, number, onUpdate }: TrackRowProps) {
  return (
    <div className="track-row">
      <div className="track-row__number">{number}</div>
      <div className="track-row__name">{track.name}</div>
      {STAGES.map((stage) => (
        <StatusSelect key={stage} value={track[stage]} label={track.name + " " + stage} onChange={(newStatus) => {onUpdate({ [stage]: newStatus})}} />
      ))}
    </div>
  );
}
