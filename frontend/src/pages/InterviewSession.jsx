import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { evaluateInterview } from "../services/interviewService";

const InterviewSession = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const questions = location.state?.questions || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Store all answers
  const [answers, setAnswers] = useState(
    Array(questions.length).fill("")
  );

  if (questions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-10 text-white">
        <h1 className="text-3xl font-bold">AI Interview</h1>
        <p>No interview questions found.</p>
      </div>
    );
  }

  const question = questions[currentQuestion];

  // Save current answer
  const handleAnswerChange = (e) => {
    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] = e.target.value;

    setAnswers(updatedAnswers);
  };

  const finishInterview = async () => {
  try {

    const response = await evaluateInterview({
      questions,
      answers,
    });

    navigate("/interviews/result", {
      state: {
        result: response.data,
      },
    });

  } catch (error) {
    console.error(error);
    alert("Failed to evaluate interview.");
  }
};
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 text-white">

      <h1 className="text-4xl font-bold mb-2">
        AI Interview
      </h1>

      <p className="text-slate-400 mb-8">
        Question {currentQuestion + 1} of {questions.length}
      </p>

      {/* Progress */}

      <div className="w-full h-3 bg-slate-700 rounded-full mb-8">
        <div
          className="h-3 bg-indigo-600 rounded-full transition-all duration-300"
          style={{
            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      {/* Question */}

      <div className="bg-slate-800 rounded-xl p-8">

        <p className="text-indigo-400 mb-3">
          {question.type}
        </p>

        <h2 className="text-2xl font-semibold mb-8">
          {question.question}
        </h2>

        {/* Answer */}

        <textarea
          rows={8}
          value={answers[currentQuestion]}
          onChange={handleAnswerChange}
          placeholder="Type your answer here..."
          className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4 text-white resize-none outline-none focus:ring-2 focus:ring-indigo-500"
        />

      </div>

      {/* Navigation */}

      <div className="flex justify-between mt-8">

        <button
          onClick={previousQuestion}
          disabled={currentQuestion === 0}
          className="px-6 py-3 bg-slate-700 rounded-lg disabled:opacity-40"
        >
          Previous
        </button>

       {currentQuestion === questions.length - 1 ? (

            <button
                onClick={finishInterview}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg"
            >
                Finish Interview
            </button>

            ) : (

            <button
                onClick={nextQuestion}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg"
            >
                Next
            </button>

            )}

      </div>

    </div>
  );
};

export default InterviewSession;