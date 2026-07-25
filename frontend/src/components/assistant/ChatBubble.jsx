const ChatBubble = ({ sender, message }) => {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-4`}
    >
      <div
        className={`max-w-3xl rounded-2xl px-5 py-4 whitespace-pre-wrap ${
          isUser
            ? "bg-indigo-600 text-white"
            : "bg-slate-800 text-slate-100"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;