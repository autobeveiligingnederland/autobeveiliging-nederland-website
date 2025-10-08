import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import TrackTracePage from './pages/TrackTracePage'
import ElectronicaPage from './pages/ElectronicaPage'
import RamenTintenPage from './pages/RamenTintenPage'
import BluEyePage from './pages/BluEyePage'
import LaserTrackPage from './pages/LaserTrackPage'
import SchadeherstelPage from './pages/SchadeherstelPage'
import ContactPage from './pages/ContactPage'
import SCMPage from './pages/SCMPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/track-trace" element={<TrackTracePage />} />
        <Route path="/elektronica-inbouw" element={<ElectronicaPage />} />
        <Route path="/ramen-tinten" element={<RamenTintenPage />} />
        <Route path="/blu-eye" element={<BluEyePage />} />
        <Route path="/lasertrack" element={<LaserTrackPage />} />
        <Route path="/schadeherstel" element={<SchadeherstelPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/scm-alarmsystemen" element={<SCMPage />} />
      </Routes>
    </Router>
  )
}

export default App
