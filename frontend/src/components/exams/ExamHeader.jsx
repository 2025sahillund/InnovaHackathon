import Card from "../ui/Card";

const ExamHeader = ({ exam }) => {
  return (
    <Card className="mt-8">

      <h1 className="text-3xl font-bold text-white">
        {exam.title}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">

        <div>
          <p className="text-slate-400 text-sm">Duration</p>
          <p className="text-xl font-semibold">{exam.duration} min</p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">Questions</p>
          <p className="text-xl font-semibold">{exam.total_questions}</p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">Marks</p>
          <p className="text-xl font-semibold">{exam.total_marks}</p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">Status</p>
          <p className="text-green-400 font-semibold">
            Ready
          </p>
        </div>

      </div>

    </Card>
  );
};

export default ExamHeader;