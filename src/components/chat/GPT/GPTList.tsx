import React from "react";
import "../../../App.css";

interface Message {
  id: number;
  ai_chat_id: number;
  is_ai: number;
  message: string;
  created_at: string;
}

// ***----- DIRECT MESSAGE LIST COMPONENT -----***
const GPTList: React.FC<{
  messages: Message[];
}> = ({ messages }) => {
  // state for holding message list

  // any time either the userId or the otherUserId changes, the list of messages should be reloaded
  // REPLACE ENDPOINT W SOMETHING LIKE: `/DirectMessage?currentUserId1=${currentUserId}&otherUserId2=${otherUserId}`

  return (
    <div className="chat bg-base-100 text-secondary flex flex-col gap-1 mb-2 border-2 border-secondary h-96">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`chat-bubble ${
            msg.is_ai === 0
              ? "self-end bg-accent text-primary"
              : "self-start bg-neutral text-primary"
          }`}>
          <p>{msg.message}</p>
          <div className="chat-metadata">
            <p>{msg.is_ai === 0 ? "You" : "Them"}</p>
            <p>{new Date(msg.created_at).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GPTList;
