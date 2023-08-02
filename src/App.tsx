import './App.css'
import Planner from './components/planner/Planner.jsx';
import Auth from './components/auth/index';
import Social from './components/social/index';
import Notfound from './components/notfound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Planner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}/>
        <Route path="social" element={<Social />} />

        {/* New Routes Go ABOVE this line */}
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
