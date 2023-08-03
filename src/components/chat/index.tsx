import Chat from "./Chat";
import React from "react";

interface DMProps {
  currentUserId: number;
  otherUserId: number;
}

const DMs: React.FC<DMProps> = ({ currentUserId, otherUserId }) => {
  return (
    <Chat
      currentUserId={currentUserId}
      otherUserId={otherUserId}
    />
  );
};

export default DMs;
