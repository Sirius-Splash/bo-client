import "./App.css";
import Auth from "./components/auth/index";
import Social from "./components/social/index";
import Notfound from "./components/notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DMs from "./components/chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Auth />}
        />
        <Route
          path="social"
          element={<Social />}
        />
        <Route
          path="chat"
          element={<DMs />}
        />

        {/* New Routes Go ABOVE this line */}
        <Route
          path="*"
          element={<Notfound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
