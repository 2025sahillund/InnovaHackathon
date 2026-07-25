const ExamQuestions = ({ questions }) => {

  if (!questions || questions.length === 0) {

    return null;

  }

  return (

    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6">

        Generated Questions

      </h2>

      {questions.map((question, index)=>(

        <div
          key={index}
          className="bg-slate-800 rounded-xl p-6 mb-5"
        >

          <h3 className="font-semibold">

            Q{index+1}. {question.question}

          </h3>

        </div>

      ))}

    </div>

  );

};

export default ExamQuestions;