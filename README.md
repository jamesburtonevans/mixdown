# Mixdown: Release Tracker

A release tracker for independent musicians. See every track on a single, EP, or album move through production, from writing to distribution, at a glance.

Live demo: *coming soon*
[Design file](https://www.figma.com/design/krb3JIEyzjm6DTVXyNEy5r/Mixdown--Release-Tracker?node-id=1-2&t=EjPOOWgkb8ojkbU4-1)

---

## Why I built this

I produce music, and releasing it means juggling a lot of half-finished steps across many tracks: which songs are mixed, which are mastered, whether the artwork is done, and what's still blocking the release date. Generic to-do apps flatten all of that into one list. Mixdown: Release Tracker organizes work the way a release actually happens: a release contains tracks and release tasks, and each track moves through stages.

## Core idea: the stage view

Each release shows its tracks as rows and its production stages as columns, so you can see at a glance what's done and what's holding things up.

| Track       | Write | Record | Mix | Master |
|-------------|-------|--------|-----|--------|
| Track One   | ✅    | ✅     | ✅  | ⏳     |
| Track Two   | ✅    | ✅     | ⏳  | ⬜     |
| Track Three | ✅    | ⏳     | ⬜  | ⬜     |

## Features

### MVP
- [ ] Create and delete releases, each with a name and target release date
- [ ] Add, rename, and delete tracks within a release
- [ ] Per-track stage view showing each stage as none / to do / in progress / in review / done
- [ ] Release tasks (artwork, distribution, and any others you add)
- [ ] Collapse and expand releases
- [ ] Release progress summary per stage (e.g. "3 of 7 tracks mixed")
- [ ] Data persists in localStorage
- [ ] Deployed

### Later
- [ ] Overdue warnings based on target release date
- [ ] Notes and links per stage (mix file, reference track, distributor page)
- [ ] Filter tracks by stage ("show everything waiting on master")
- [ ] Custom track stages
- [ ] Export/import releases as JSON

## Data model

```ts
type Status = "none" | "todo" | "in-progress" | "in-review" | "done";

type Task = { id: string; name: string; status: Status };

type Track = {
  id: string;
  name: string;
  write: Status;
  record: Status;
  mix: Status;
  master: Status;
};

type Release = {
  id: string;
  name: string;
  releaseDate: string; // ISO date
  tasks: Task[]; // release-wide work: artwork, distribute, ...
  tracks: Track[];
};
```

## Design & accessibility

- Sketched in Excalidraw and then designed in Figma. See the design file link above.
- Status is never conveyed by color alone; each status also has an icon and a text label.
- Fully keyboard operable, with visible focus states.
- Semantic HTML and proper labels on all controls.
- Responsive, with a stage view that adapts to mobile.

## Tech stack

- React + Vite
- TypeScript
- CSS
- localStorage for persistence
- Deployed on Netlify

## Getting started

```bash
git clone https://github.com/jamesburtonevans/mixdown.git
cd mixdown
npm install
npm run dev
```

## About

Built by [James Burton Evans](https://jamesburtonevans.com), product designer and frontend developer.
