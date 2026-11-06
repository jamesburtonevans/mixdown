import { useState } from "react";
import type { SubmitEvent } from "react";
import type { Release } from "../types";

type EditReleaseFormProps = {
  release: Release;
  onSave: (name: string, releaseDate: string) => void;
  onCancel: () => void;
};

export function EditReleaseForm({ release, onSave, onCancel }: EditReleaseFormProps) {
  const [name, setName] = useState(release.name);
  const [releaseDate, setReleaseDate] = useState(release.releaseDate ?? "");
  const nameId = `edit-release-name-${release.id}`;
  const dateId = `edit-release-date-${release.id}`;

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = name.trim();
    if (trimmedName === "") {
      return;
    }
    onSave(trimmedName, releaseDate);
  }

  return (
    <form className="edit-release-form" onSubmit={handleSubmit}>
      <div className="edit-release-form__field">
        <label htmlFor={nameId}>Release title</label>
        <input
          type="text"
          id={nameId}
          required
          autoFocus
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="edit-release-form__field">
        <label htmlFor={dateId}>Release date</label>
        <input
          type="date"
          id={dateId}
          value={releaseDate}
          onChange={(event) => setReleaseDate(event.target.value)}
        />
      </div>
      <div className="edit-release-form__actions">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}
