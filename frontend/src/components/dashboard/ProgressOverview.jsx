import SectionTitle from "../ui/SectionTitle";
import StatCard from "../ui/StatCard";

const stats = [
  {
    title: "Exam Score",
    value: "82%",
  },
  {
    title: "Interview Score",
    value: "74%",
  },
  {
    title: "Roadmap Progress",
    value: "40%",
  },
  {
    title: "Completed Sessions",
    value: "14",
  },
];

const ProgressOverview = () => {
  return (
    <div className="mt-10">

      <SectionTitle
        title="Performance Overview"
        subtitle="Track your learning progress."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
          />
        ))}

      </div>

    </div>
  );
};

export default ProgressOverview;