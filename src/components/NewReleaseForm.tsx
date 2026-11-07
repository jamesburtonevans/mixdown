import { useState } from "react";
import type { SubmitEvent } from "react";

type NewReleaseFormProps = {
  onAdd: (name: string, releaseDate: string) => void;
}

export function NewReleaseForm({ onAdd }: NewReleaseFormProps) {
  const [name, setName] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = name.trim();
    if (trimmedName === "") { return };
    onAdd(trimmedName, releaseDate);
    setName("");
    setReleaseDate("");
  }

  return (
    <form className="new-release-form" onSubmit={handleSubmit}>
      <div className="field new-release-form__field">
        <label htmlFor="new-release-name">Release title</label>
        <input type="text" id="new-release-name" required value={name} onChange={(event) => setName(event.target.value)}/>
      </div>
      <div className="field new-release-form__field">
        <label htmlFor="new-release-release-date">Release date</label>
        <input type="date" id="new-release-release-date" value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
      </div>
      <div className="new-release-form__actions">
        <button className="icon-button icon-button--add" type="submit">Create</button>
      </div>
    </form>
  );
}
