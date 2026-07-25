const Button = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-indigo-600
        hover:bg-indigo-500
        text-white
        px-5
        py-3
        rounded-xl
        transition
        duration-300
        font-medium
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;