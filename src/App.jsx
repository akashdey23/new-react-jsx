import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactToast from './components/toast/reactToast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ReactToast />
      </div>
    </>
  )
}

export default App
