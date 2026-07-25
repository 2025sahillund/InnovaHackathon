import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";

const ActionCard = ({
  title,
  description,
  icon,
  path,
  onClick,
}) => {

  const navigate = useNavigate();
  return (
    <Card
      className="
        cursor-pointer
        hover:bg-slate-700
      "
    >
      <button
        onClick={() => {
            if (onClick) {
            onClick();
            } else if (path) {
            navigate(path);
            }
        }}
        className="w-full text-left"
        >
        <div className="mb-4 text-indigo-400">
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 text-slate-400 leading-6">
          {description}
        </p>
      </button>
    </Card>
  );
};

export default ActionCard;