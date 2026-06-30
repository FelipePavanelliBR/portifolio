import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import Atmosphere from "./components/Atmosphere"
import Home from "./pages/Home"
import Software from "./pages/Software"
import Games from "./pages/Games"
import Videography from "./pages/Videography"
import Graphics from "./pages/Graphics"
import Animation from "./pages/Animation"
import ThreeDModeling from "./pages/ThreeDModeling"
import Hypoxia from "./pages/Hypoxia"
import BeatBop from "./pages/BeatBop"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Atmosphere />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/software" element={<Software/>} />
        <Route path="/games" element={<Games/>} />
        <Route path="/videography" element={<Videography/>} />
        <Route path="/graphics" element={<Graphics/>} />
        <Route path="/animation" element={<Animation/>} />
        <Route path="/3d-modeling" element={<ThreeDModeling/>} />
        <Route path="/hypoxia" element={<Hypoxia/>} />
        <Route path="/beatbop" element={<BeatBop/>} />
      </Routes>
    </Router>
  )
}

export default App
