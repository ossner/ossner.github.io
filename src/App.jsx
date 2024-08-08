import { useState } from 'react'
import './App.css'
import me from './assets/me.jpeg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <a href='https://ossner.github.io/DTMF'>DTMF</a>
    <br></br>
    <a href='https://ossner.github.io/signalizer'>Signal Encoding Visualizer</a>
    <br></br>
    <a href='https://ossner.github.io/meproulette'>Mep Roulette</a>
    <br></br>
    <a href='https://ossner.github.io/TUMGAD'>TUMGAD</a>
    </>
  )
}

export default App
