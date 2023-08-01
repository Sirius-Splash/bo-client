<<<<<<< HEAD
import './App.css'
import Auth from './components/auth/index';
import Social from './components/social/index';
import Notfound from './components/notfound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}/>
        <Route path="social" element={<Social />} />

        {/* New Routes Go ABOVE this line */}
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
=======
import PostForm from './components/social/PostForm.tsx'

function App() {
  return (
      <PostForm />
>>>>>>> 851cd16 (worked on postform)
  )
}

export default App
