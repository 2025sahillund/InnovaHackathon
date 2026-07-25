import Card from "../ui/Card";
import MCQQuestion from "./MCQQuestion";
import TheoryQuestion from "./TheoryQuestion";
import CodingQuestion from "./CodingQuestion";

const QuestionCard = ({
  question,
  answer,
  setAnswer,
  questionNumber,
}) => {

  const type = question.type?.toLowerCase();

  return (
    <Card className="mb-6">

      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-3">

        <h2 className="text-xl font-bold">
          Question {questionNumber}
        </h2>

        <div className="flex gap-2">

          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
            {question.type}
          </span>

          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
            {question.difficulty}
          </span>

          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
            {question.marks} Marks
          </span>

        </div>

      </div>

      {/* Question */}
      <h3 className="text-xl font-semibold mt-5 mb-6">
        {question.question}
      </h3>

      {/* Dynamic Input */}

      {type === "mcq" && (
        <MCQQuestion
          question={question}
          answer={answer}
          setAnswer={setAnswer}
        />
      )}

      {(type === "theory" || type === "short") && (
        <TheoryQuestion
          answer={answer}
          setAnswer={setAnswer}
        />
      )}

      {(type === "coding" || type === "practical") && (
        <CodingQuestion
          answer={answer}
          setAnswer={setAnswer}
        />
      )}

    </Card>
  );

};

export default QuestionCard;