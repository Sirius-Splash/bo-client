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
  messages: string[];
}> = ({ currentUserId, messages }) => {
  return (
    <div className="chat bg-base-100 text-secondary flex flex-col gap-1 mb-2 border-2 border-secondary h-96">
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
