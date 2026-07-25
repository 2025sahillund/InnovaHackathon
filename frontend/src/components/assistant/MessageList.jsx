import ChatBubble from "./ChatBubble";

const MessageList = ({ messages }) => {
  return (
    <>
      {messages.map((msg, index) => (
        <ChatBubble
          key={index}
          sender={msg.sender}
          message={msg.message}
        />
      ))}
    </>
  );
};

export default MessageList;