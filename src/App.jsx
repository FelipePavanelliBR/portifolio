import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HeroVideo from "./Hero"
import Hypoxia from "./pages/Hypoxia"
import BeatBop from "./pages/BeatBop"
import OrbitGame from "./pages/OrbitGame"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroVideo/>} />
        <Route path="/hypoxia" element={<Hypoxia/>} />
        <Route path="/beatbop" element={<BeatBop/>} />
        <Route path="/orbit" element={<OrbitGame/>} />
      </Routes>
    </Router>
  )
}

export default App
