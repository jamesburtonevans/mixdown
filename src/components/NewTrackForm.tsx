import { useState } from "react";
import type { SubmitEvent } from "react";

type NewTrackFormProps = {
  releaseId: string;
  onAdd: (name: string) => void;
};

export function NewTrackForm({ releaseId, onAdd }: NewTrackFormProps) {
  const [name, setName] = useState("");
  const inputId = `new-track-name-${releaseId}`;

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = name.trim();
    if (trimmedName === "") {
      return;
    }
    onAdd(trimmedName);
    setName("");
  }

  return (
    <form className="new-track-form" onSubmit={handleSubmit}>
      <div className="new-track-form__field">
        <label htmlFor={inputId}>Track title</label>
        <input
          type="text"
          id={inputId}
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="new-track-form__actions">
        <button type="submit">Add track</button>
      </div>
    </form>
  );
}
