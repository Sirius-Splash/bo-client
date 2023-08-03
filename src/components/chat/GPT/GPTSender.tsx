import React, { useState } from "react";
import GPT from "./gptRoutes.js";
import "../../App.css";

interface Message {
  id: number;
  ai_chat_id: number;
  is_ai: number;
  message: string;
  created_at: string;
}

// ***----- DIRECT MESSAGE SENDER COMPONENT -----***
const GPTSender: React.FC<{
  chatID: number;
  dmList: Message[];
  setDmList: React.Dispatch<React.SetStateAction<Message[]>>;
}> = ({ chatID, dmList, setDmList}) => {
  const [messageContent, setMessageContent] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setDmList([...dmList, {id: dmList[dmList.length - 1].id, ai_chat_id: chatID, is_ai: 0, message: messageContent, created_at: Date.now().toString()}]);
    setIsSending(true);

    GPT.postGpt(chatID, PLACEHOLDERUSERID, messageContent)
      .then((res) => {
        setMessageContent("");
        setIsSending(false);
        setDmList([...dmList, {id: res.data.id, ai_chat_id: res.data.ai_chat_id, is_ai: res.data.is_ai, message: res.data.message, created_at: res.data.created_at}])
      })
      .catch((err) => {
        console.error(err);
        setIsSending(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-base-100 flex justify-center items-center"
    >
      <textarea
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
        className="text-base-100-bold bg-secondary pl-5"
      />
      <button
        type="submit"
        className="bg-accent text-primary ml-2"
        disabled={isSending}
      >
        {isSending ? 'Loading...' : 'Send'}
      </button>
    </form>
  );
};

export default GPTSender;