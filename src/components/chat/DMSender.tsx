import React, { useState } from "react";
import axios from "axios";

interface Message {
  id: number;
  sender_id: number;
  recipient_id: number;
  chat: string;
  created_at: string;
}

// ***----- DIRECT MESSAGE SENDER COMPONENT -----***
const DirectMessageSender: React.FC<{
  currentUserId: number;
  otherUserId: number;
}> = ({ currentUserId, otherUserId }) => {
  const [messageContent, setMessageContent] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    axios
      .post(`/DirectMessage`, {
        sender_id: currentUserId,
        recipient_id: otherUserId,
        chat: messageContent,
      })
      .then((res) => {
        setMessageContent("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-base-100 flex justify-center items-center">
      <textarea
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
        className="text-base-100-bold bg-secondary"
      />
      <button
        type="submit"
        className="bg-accent text-primary ml-2 mb-2">
        Send
      </button>
    </form>
  );
};

export default DirectMessageSender;
