import { useState } from 'react'
import './App.css'
import me from './assets/me.jpeg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <a href='https://detectai.ossner.com'>The World's Most Accurate* AI Text Detector</a>
    <br></br>
    <br></br>
    <a href='https://ossner.github.io/DTMF'>Why do Buttons Beep?</a>
    <br></br>
    <br></br>
    <a href='https://ossner.github.io/meproulette'>Do you know your MEPs? (outdated)</a>
    <br></br>
    <br></br>
    <a href='https://ossner.github.io/TUMGAD/src/routes'>Algorithms and Datastructures</a>
    <br></br>
    <br></br>
    <a href='https://ossner.github.io/signalizer'>Binary Signal Encoding Visualizer</a>
    </>
  )
}

export default App
