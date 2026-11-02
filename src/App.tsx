import { useState } from 'react'
import { sampleReleases } from './sampleData'

export default function App() {
const [releases, setReleases] = useState(sampleReleases)
  return (
    <main>
      {releases.map((release) => (
        <div key={release.id}>{release.name + " | " + release.id}</div>
      ))}
    </main>
  )
}
