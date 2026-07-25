const MCQQuestion = ({ question, answer, setAnswer }) => {

  const options = question.options || {};

  return (
    <div className="space-y-4">

      {Object.entries(options).map(([key, value]) => (

        <label
          key={key}
          className="flex items-center gap-3 border rounded-lg p-3 cursor-pointer hover:bg-gray-50"
        >

          <input
            type="radio"
            name={`question-${question.id}`}
            checked={answer === key}
            onChange={() => setAnswer(key)}
          />

          <span>
            <strong>{key}.</strong> {value}
          </span>

        </label>

      ))}

    </div>
  );
};

export default MCQQuestion;