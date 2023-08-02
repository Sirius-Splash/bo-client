import "../../App.css";
import DirectMessageList from "./DMList";
import DirectMessageSender from "./DMSender";

const Chat = (currentUserId, otherUserId) => {
  return (
    <div className="flex-row">
      <DirectMessageList
        currentUserId={currentUserId}
        otherUserId={otherUserId}
      />
      <DirectMessageSender
        currentUserId={currentUserId}
        otherUserId={otherUserId}
      />
    </div>
  );
};

export default Chat;
