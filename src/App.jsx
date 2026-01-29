import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Games from "./pages/Games"
import ThreeDModeling from "./pages/ThreeDModeling"
import Videography from "./pages/Videography"
import Hypoxia from "./pages/Hypoxia"
import BeatBop from "./pages/BeatBop"
import OrbitGame from "./pages/OrbitGame"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/games" element={<Games/>} />
        <Route path="/3d-modeling" element={<ThreeDModeling/>} />
        <Route path="/videography" element={<Videography/>} />
        <Route path="/hypoxia" element={<Hypoxia/>} />
        <Route path="/beatbop" element={<BeatBop/>} />
        <Route path="/orbit" element={<OrbitGame/>} />
      </Routes>
    </Router>
  )
}

export default App
