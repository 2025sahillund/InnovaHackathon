const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-slate-800
        border
        border-slate-700
        rounded-2xl
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:border-indigo-500
        hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;