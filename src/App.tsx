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
import { useState } from "react";

function App() {
  // state for posting messages
  const [messageContent, setMessageContent] = useState("");
  // state for holding list of messages
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div className="absolute top-0 w-full p-0">
      <div className="w-full navbar bg-base-200 p-0">
        <a className="btn btn-ghost normal-case text-xl">Navbar</a>
      </div>
      <div className="flex">
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
              element={<Tracker number={0} />}
            />

            {/* New Routes Go ABOVE this line */}
            <Route
              path="*"
              element={<Notfound />}
            />
          </Routes>
        </BrowserRouter>
        <DMs
          messageContent={messageContent}
          setMessageContent={setMessageContent}
          messages={messages}
          setMessages={setMessages}
        />
      </div>
    </div>
  );
}

export default App;
