import { useState } from 'react';
import { sampleReleases } from './sampleData';
import { ReleaseRow } from './components/ReleaseRow';

export default function App() {
  const [releases, setReleases] = useState(sampleReleases);
  return (
    <main>
      {releases.map((release) => (
        <ReleaseRow key={release.id} release={release} />
      ))}
    </main>
  )
}
