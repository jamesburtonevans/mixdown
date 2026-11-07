import { useState } from "react";
import type { SubmitEvent } from "react";
import type { Track } from "../types";
import { STAGES } from "../types";
import { StatusSelect } from "./StatusSelect"

type TrackRowProps = { track: Track, number: number, onUpdate: (changes: Partial<Track>) => void; onDelete: () => void; };

export function TrackRow({ track, number, onUpdate, onDelete }: TrackRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftName, setDraftName] = useState("");

  function startEditing() {
    setDraftName(track.name);
    setIsEditing(true);
  }

  function handleRename(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = draftName.trim();
    if (trimmedName === "") {
      return;
    }
    onUpdate({ name: trimmedName });
    setIsEditing(false);
  }

  return (
    <tr className="track-row">
      <td className="track-row__number">{number}</td>
      <th scope="row" className="track-row__name">
        {isEditing ? (
          <form className="track-row__rename-form" onSubmit={handleRename}>
            <input
              type="text"
              required
              autoFocus
              aria-label={`New name for ${track.name}`}
              value={draftName}
              onChange={(event) => setDraftName(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setIsEditing(false);
                }
              }}
            />
            <button className="button" type="submit">Save</button>
            <button className="button" type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        ) : (
          track.name
        )}
      </th>
      {STAGES.map((stage) => (
        <td className="track-row__stage" key={stage}>
          <StatusSelect value={track[stage]} label={track.name + " " + stage} onChange={(newStatus) => {onUpdate({ [stage]: newStatus})}} />
        </td>
      ))}
      <td className="track-row__actions">
        <div className="track-row__buttons">
          {!isEditing && (
            <button className="icon-button icon-button--edit track-row__rename" type="button" onClick={startEditing}>
              Rename {track.name}
            </button>
          )}
          <button className="icon-button icon-button--delete track-row__delete" type="button" onClick={onDelete}>
            Delete {track.name}
          </button>
        </div>
      </td>
    </tr>
  );
}
