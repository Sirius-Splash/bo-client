import "../../App.css";
import DirectMessageList from "./DMList";
import DirectMessageSender from "./DMSender";
import axios from "axios";
import React, { useEffect } from "react";

interface ChatProps {
  currentUserId: number;
  otherUserId: number;
  setMessages: (messages: string[]) => void;
  messageContent: string;
  setMessageContent: (messageContent: string) => void;
  messages: string[];
}

const Chat: React.FC<ChatProps> = (
  currentUserId,
  otherUserId,
  setMessages,
  messageContent,
  setMessageContent,
  messages
) => {
  // helper function
  const fetchMessages = (
    endpoint: string,
    currentUserId: number,
    otherUserId: number
  ) => {
    axios
      .get(
        `${endpoint}?currentUserId=${currentUserId}&otherUserId=${otherUserId}`
      )
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // fetch messages on new user id
  useEffect(() => {
    fetchMessages("/social", currentUserId, otherUserId);
    fetchMessages("/planner", currentUserId, otherUserId);
    fetchMessages("/tracker", currentUserId, otherUserId);
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
        messageContent={messageContent}
        setMessageContent={setMessageContent}
      />
    </div>
  );
};

export default Chat;
