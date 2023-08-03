import ChatSelectHeader from "./ChatSelect/header";
import Chat from "./DM/Chat";
import React from "react";

interface DMProps {
  currentUserId: number;
  otherUserId: number;
}

const DMs: React.FC<DMProps> = ({ currentUserId, otherUserId }) => {
  return (
    <div className="flex flex-col gap-1">
      <ChatSelectHeader></ChatSelectHeader>

    <Chat
      currentUserId={currentUserId}
      otherUserId={otherUserId}
    />
    </div>
  );
};

export default DMs;
