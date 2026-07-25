import QuestionCard from "./QuestionCard";

const ExamQuestions = ({ questions }) => {

  return (
    <div className="mt-8">

      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
        />
      ))}

    </div>
  );
};

export default ExamQuestions;