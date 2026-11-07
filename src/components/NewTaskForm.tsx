import { useState } from "react";
import type { SubmitEvent } from "react";

type NewTaskFormProps = {
  releaseId: string;
  onAdd: (name: string) => void;
};

export function NewTaskForm({ releaseId, onAdd }: NewTaskFormProps) {
  const [name, setName] = useState("");
  const inputId = `new-task-name-${releaseId}`;

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
    <form className="new-task-form" onSubmit={handleSubmit}>
      <div className="field new-task-form__field">
        <label htmlFor={inputId}>Task name</label>
        <input
          type="text"
          id={inputId}
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="new-task-form__actions">
        <button className="icon-button icon-button--add" type="submit">Add task</button>
      </div>
    </form>
  );
}
