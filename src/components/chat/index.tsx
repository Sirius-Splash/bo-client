import Chat from "./Chat";

const DMs = (currentUserId, otherUserId) => {
  return (
    <Chat
      currentUserId={currentUserId}
      otherUserId={otherUserId}
    />
  );
};

export default DMs;
