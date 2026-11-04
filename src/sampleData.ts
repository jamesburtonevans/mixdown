import type { Release } from "./types";

export const sampleReleases: Release[] = [
  {
    id: "001",
    name: "Sample Album 1",
    releaseDate: "2026-11-01",
    tasks: [
      {
        id: "002",
        name: "Artwork",
        status: "in-review"
      },
      {
        id: "003",
        name: "Distribute",
        status: "todo"
      },
    ],
    tracks: [
      {
        id: "004",
        name: "Sample Song 1",
        write: "done",
        record: "done",
        mix: "in-review",
        master: "todo",
      },
      {
        id: "005",
        name: "Sample Song 2",
        write: "done",
        record: "in-progress",
        mix: "todo",
        master: "none",
      },
      {
        id: "006",
        name: "Sample Song 3",
        write: "in-progress",
        record: "todo",
        mix: "none",
        master: "none",
      },
    ],
  },
  {
    id: "007",
    name: "Sample Song 4 - Single",
    releaseDate: "2026-08-23",
    tasks: [
      {
        id: "008",
        name: "Artwork",
        status: "done"
      },
      {
        id: "009",
        name: "Distribute",
        status: "done"
      },
    ],
    tracks: [
      {
        id: "010",
        name: "Sample Song 4",
        write: "done",
        record: "done",
        mix: "done",
        master: "done",
      },
    ],
  },
];
