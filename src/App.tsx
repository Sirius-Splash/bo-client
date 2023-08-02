import './App.css';
import Auth from './components/auth/index';
import Login from './components/auth/Login.tsx'
import Social from './components/social/index';
import Notfound from './components/notfound';
import Planner from './components/planner/Planner.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Auth />}/>
        <Route path="social" element={<Social />} />
        <Route path="planner" element={<Planner />} />

        {/* New Routes Go ABOVE this line */}
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
