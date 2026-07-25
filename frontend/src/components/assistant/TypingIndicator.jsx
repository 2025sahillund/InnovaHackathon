const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-slate-800 px-5 py-4 rounded-2xl">
        <span className="animate-pulse">
          AI is thinking...
        </span>
      </div>
    </div>
  );
};

export default TypingIndicator;