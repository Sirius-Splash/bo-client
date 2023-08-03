import Chat from "./Chat";
import React from "react";

interface DMProps {
  currentUserId: number;
  otherUserId: number;
  setMessages: (messages: string[]) => void;
  messageContent: string;
  setMessageContent: (messageContent: string) => void;
  messages: string[];
}

const DMs: React.FC<DMProps> = ({
  currentUserId,
  otherUserId,
  setMessages,
  messageContent,
  setMessageContent,
  messages,
}) => {
  return (
    <Chat
      currentUserId={currentUserId}
      otherUserId={otherUserId}
      messageContent={messageContent}
      setMessageContent={setMessageContent}
      messages={messages}
      setMessages={setMessages}
    />
  );
};

export default DMs;
