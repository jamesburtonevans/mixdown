import { useState, useEffect } from 'react';
import { sampleReleases } from './sampleData';
import { ReleaseRow } from './components/ReleaseRow';
import { NewReleaseForm } from './components/NewReleaseForm';
import type { Track, Release } from './types';

export function App() {
  const [releases, setReleases] = useState<Release[]>(() => {
    const saved = localStorage.getItem("mixdown-releases");
    if (saved != null) {
      return JSON.parse(saved);
    } else {
      return sampleReleases;
    }
  });

  useEffect(() => {
    const releaseText = JSON.stringify(releases);
    localStorage.setItem("mixdown-releases", releaseText);
  }, [releases]);

  function updateTrack(releaseId: string, trackId: string, changes: Partial<Track>) {
    setReleases((currentReleases) => {
      return currentReleases.map((release) => {
        if (release.id === releaseId) {
          return {
            ...release,
            tracks: release.tracks.map((track) => {
              if (track.id === trackId) {
                return { ...track, ...changes };
              } else {
                return track;
              }
            }),
          };
        } else {
          return release;
        }
      });
    });
  }

  function deleteRelease(releaseId: string) {
    setReleases((currentReleases) => {
      return currentReleases.filter((release) => { return release.id !== releaseId })
    });
  }

  function addRelease(name: string, releaseDate: string) {
    const newRelease: Release = {
      id: crypto.randomUUID(),
      name: name,
      releaseDate: releaseDate === "" ? null: releaseDate,
      tasks: [
        {
          id: crypto.randomUUID(),
          name: "Artwork",
          status: "none"
        },
        {
          id: crypto.randomUUID(),
          name: "Distribute",
          status: "none"
        },
      ],
      tracks: [],
    }

    setReleases((currentReleases) => {
      return [...currentReleases, newRelease];
    });
  }

  function deleteTrack(releaseId: string, trackId: string) {
    setReleases((currentReleases) => {
      return currentReleases.map((release) => {
        if (release.id === releaseId) {
          return {
            ...release,
            tracks: release.tracks.filter((track) => {
              return track.id !== trackId;
            }),
          };
        } else {
          return release;
        }
      });
    });
  }

  return (
    <main className="app">
      <h1 className="app__title">Mixdown</h1>
      <NewReleaseForm onAdd={addRelease} />
      {releases.map((release) => (
        <ReleaseRow
          key={release.id}
          release={release}
          onUpdateTrack={(trackId, changes) =>
            updateTrack(release.id, trackId, changes)
          }
          onDeleteTrack={(trackId) => deleteTrack(release.id, trackId)}
          onDelete={() => deleteRelease(release.id)}
        />
      ))}
    </main>
  )
}
