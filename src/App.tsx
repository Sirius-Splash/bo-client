import './App.css'
import Auth from './components/auth/index';
import Social from './components/social/index';
import Notfound from './components/notfound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/auth/index";
import DirectMessageSender from "./components/chat/DMSender";
import DirectMessageList from "./components/chat/DMList";

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
  )
    <>
      <Auth />
      <DirectMessageList />
      <DirectMessageSender />
    </>
  );
}

export default App;
