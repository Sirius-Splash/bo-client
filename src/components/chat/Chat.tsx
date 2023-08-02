import "../../App.css";
import DirectMessageList from "./DMList";
import DirectMessageSender from "./DMSender";

const Chat = (currentUserId, otherUserId) => {
  return (
    <>
      <DirectMessageList
        currentUserId={currentUserId}
        otherUserId={otherUserId}
      />
      <DirectMessageSender
        currentUserId={currentUserId}
        otherUserId={otherUserId}
      />
    </>
  );
};

export default Chat;
