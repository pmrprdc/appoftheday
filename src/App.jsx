import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons1 from './components/Buttons1'
import Buttons2 from './components/Buttons2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>How old are you?</h1>
    <Buttons1 />
    <br></br>
    <Buttons2 />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button>Convert</button>
        <button onClick={() => setCount((count) => count + 1)}>
        Reset
        </button>
        
      </div>
     
    </>
  )
}

export default App
