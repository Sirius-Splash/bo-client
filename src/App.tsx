import './App.css'
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Planner from './components/planner/Planner.jsx';
import Social from './components/social/index';
import Notfound from './components/notfound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Planner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="social" element={<Social />} />

        {/* New Routes Go ABOVE this line */}
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
