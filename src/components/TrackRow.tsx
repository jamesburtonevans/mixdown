import type { Track } from "../types";
import { STAGES } from "../types";
import { StatusSelect } from "./StatusSelect"

type TrackRowProps = { track: Track, number: number, onUpdate: (changes: Partial<Track>) => void; };

export function TrackRow({ track, number, onUpdate }: TrackRowProps) {
  return (
    <tr className="track-row">
      <td className="track-row__number">{number}</td>
      <th scope="row" className="track-row__name">{track.name}</th>
      {STAGES.map((stage) => (
        <td className="track-row__stage" key={stage}>
          <StatusSelect value={track[stage]} label={track.name + " " + stage} onChange={(newStatus) => {onUpdate({ [stage]: newStatus})}} />
        </td>
      ))}
    </tr>
  );
}
