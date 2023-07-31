import React, { useState, useEffect } from "react";
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

    axios.post(/* API endpoint for messages table: something like `/direct_messages */, {
      sender_id: currentUserId,
      recipient_id: otherUserId,
      chat: messageContent
    })
    .then((res) => {
      setMessageContent('')
    })
    .catch((err) => {
      console.error(err)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-primary">
      <textarea value={messageContent} onChange={e => setMessageContent(e.target.value)} className="text-secondary" />
      <button type="submit" className="bg-accent text-primary">Send</button>
    </form>
  )
};

export default DirectMessageSender;
