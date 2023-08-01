import React, { useState, useEffect } from "react";
import axios from "axios";

interface Message {
  id: number;
  sender_id: number;
  recipient_id: number;
  chat: string;
  created_at: string;
}

// ***----- DIRECT MESSAGE LIST COMPONENT -----***
const DirectMessageList: React.FC<{
  currentUserId: number;
  otherUserId: number;
}> = ({ currentUserId, otherUserId }) => {
  // state for holding message list
  const [messages, setMessages] = useState<Message[]>([]);

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
    <div className="chat bg-base-100 text-secondary flex flex-col gap-1 my-2">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`chat-bubble ${
            msg.sender_id === currentUserId
              ? "self-end bg-accent text-primary"
              : "self-start bg-neutral text-primary"
          }`}>
          <p>{msg.chat}</p>
          <div className="chat-metadata">
            <p>{msg.sender_id === currentUserId ? "You" : "Them"}</p>
            <p>{new Date(msg.created_at).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DirectMessageList;
