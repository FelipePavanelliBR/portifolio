import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroVideo from "./Hero"

function App() {
  const [count, setCount] = useState(0)

  return (
      <HeroVideo/>
  )
}

export default App
