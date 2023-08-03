import "./App.css";
import Auth from "./components/auth/index";
import Login from "./components/auth/Login.tsx";
import Social from "./components/social/index";
import Notfound from "./components/notfound";
import Planner from "./components/planner/Planner.jsx";
import Tracker from "./components/tracker/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DMs from "./components/chat";

function App() {
  return (
    <div className="absolute bg-neutral top-0 w-full p-0">
      <div className="w-full navbar bg-secondary p-0">
        <a className="btn btn-ghost text-primary hover:bg-accent hover:text-primary normal-case text-xl" href="/">Navbar</a>
        <a className="btn btn-ghost text-primary hover:bg-accent hover:text-primary normal-case text-xl" href="/planner">Workout Planner</a>
        <a className="btn btn-ghost text-primary hover:bg-accent hover:text-primary normal-case text-xl" href="/tracker">Progress Tracker</a>
        <a className="btn btn-ghost text-primary hover:bg-accent hover:text-primary normal-case text-xl" href="/social">Clubhouse</a>
      </div>
      <div className="flex">
        <div className="grow">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Auth />}
              />
              <Route
                path="social"
                element={<Social />}
              />
              <Route
                path="planner"
                element={<Planner />}
              />
              <Route
                path="tracker"
                element={<Tracker number={3} />}
              />
              
              {/* New Routes Go ABOVE this line */}
              <Route
                path="*"
                element={<Notfound />}
              />
            </Routes>
          </BrowserRouter>
        </div>
        <div className="p-4 bg-neutral">
          <DMs />
        </div>
      </div>
    </div>
  );
}

export default App;
