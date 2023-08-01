import "./App.css";
import Auth from "./components/auth/index";
import DirectMessageSender from "./components/chat/DMSender";
import DirectMessageList from "./components/chat/DMList";

function App() {
  return (
    <>
      <Auth />
      <DirectMessageList />
      <DirectMessageSender />
    </>
  );
}

export default App;
