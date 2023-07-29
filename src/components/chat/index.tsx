import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Message {
  message_id: number;
  sender_id: number;
  recipient_id: number;
  message_content: string;
  timestamp: string;
}

// ***----- DIRECT MESSAGE LIST COMPONENT -----***
const DirectMessageList: React.FC<{ currentUserId: number, otherUserId: number}> = ({ currentUserId, otherUserId }) => {
  // state for holding message list
  const [messages, setMessages] = useState<Message[]>([]);

  // any time either the userId or the otherUserId changes, the list of messages should be reloaded
  useEffect(() => {
    axios.get(/* API endpoint for messages table: something like `/direct_messages?userId1=${currentUserId}&userId2=${otherUserId} */)
      .then((res) => {setMessages(res.data)})
      .catch((err) => {console.error(err)});
  }, [currentUserId, otherUserId]);

  return (
    <div>
      {messages.map(msg => (
        <div key={msg.message_id} className={`chat-bubble ${msg.sender_id === currentUserId ? 'right' : 'left'}`}>
          <p>{msg.message_content}</p>
          <div className="chat-metadata">
            <p>{msg.sender_id === currentUserId ? 'You' : 'Them'</p>
            <p>{new Date(msg.timestamp).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  )
}