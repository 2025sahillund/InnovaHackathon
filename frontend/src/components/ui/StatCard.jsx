import Card from "./Card";

const StatCard = ({
  title,
  value,
}) => {
  return (
    <Card>

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-white mt-3">
        {value}
      </h2>

    </Card>
  );
};

export default StatCard;