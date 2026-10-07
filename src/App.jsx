import { useState } from 'react'
import './App.css'
import Comingsoon from './Pages/Comingsoon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Comingsoon/>
    </>
  )
}

export default App
