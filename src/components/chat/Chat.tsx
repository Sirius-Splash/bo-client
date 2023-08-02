import "../../App.css";
import DirectMessageList from "./DMList";
import DirectMessageSender from "./DMSender";
import axios from "axios";
import React, { useState, useEffect } from "react";

interface ChatProps {
  currentUserId: number;
  otherUserId: number;
}

const Chat: React.FC<ChatProps> = (currentUserId, otherUserId) => {
  // state for holding message list
  const [messages, setMessages] = useState<string[]>([]);

  // any time either the userId or the otherUserId changes, the list of messages should be reloaded
  // REPLACE ENDPOINT W SOMETHING LIKE: `/DirectMessage?currentUserId1=${currentUserId}&otherUserId2=${otherUserId}`
  useEffect(() => {
    axios
      .get(
        `/DirectMessage?currentUserId1=${currentUserId}&otherUserId2=${otherUserId}`
      )
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentUserId, otherUserId]);

  return (
    <div className="flex-row">
      <DirectMessageList
        currentUserId={currentUserId}
        otherUserId={otherUserId}
        messages={messages}
      />
      <DirectMessageSender
        currentUserId={currentUserId}
        otherUserId={otherUserId}
        setMessages={setMessages}
      />
    </div>
  );
};

export default Chat;
