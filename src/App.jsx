import { useState } from 'react'
import './App.css'
import me from './assets/me.jpeg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <a href='https://ossner.github.io/DTMF'>Why do buttons beep?</a>
    <br></br>
    <br></br>
    <a href='https://ossner.github.io/meproulette'>Do you know your MEPs?</a>
    <br></br>
    <br></br>
    <a href='https://ossner.github.io/TUMGAD/src/routes'>Algorithms and datastructures</a>
    <br></br>
    <br></br>
    <a href='https://ossner.github.io/signalizer'>Binary signal encoding visualizer</a>
    </>
  )
}

export default App
