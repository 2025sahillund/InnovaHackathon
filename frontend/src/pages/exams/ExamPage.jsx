import { useState } from "react";

import MainLayout from "../../components/layout/MainLayout";
import ExamForm from "../../components/exams/ExamForm";
import QuestionCard from "../../components/exams/QuestionCard";

import { evaluateAnswer } from "../../services/evaluationService";

const ExamPage = () => {
  const [exam, setExam] = useState(null);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleSubmitExam = async () => {
    setLoading(true);

    try {
      const evaluationResults = [];

      for (const question of exam.questions) {
        const userAnswer = answers[question.id] || "";

        const response = await evaluateAnswer({
          question: question.question,
          answer: userAnswer,
        });

        evaluationResults.push({
          questionId: question.id,
          question: question.question,
          type: question.type,
          marks: question.marks,
          userAnswer,
          ...response.data,
        });
      }

      setResults(evaluationResults);

    } catch (err) {
      console.error(err);
      alert("Failed to evaluate exam.");
    }

    setLoading(false);
  };

  return (
    <MainLayout>

      <ExamForm setExam={setExam} />

      {exam && !results && (

        <div className="mt-8 bg-slate-800 rounded-xl p-6">

          <h1 className="text-3xl font-bold">
            {exam.title}
          </h1>

          <div className="mt-4 grid grid-cols-3 gap-4">

            <div>
              <p className="text-slate-400">Duration</p>
              <p>{exam.duration} min</p>
            </div>

            <div>
              <p className="text-slate-400">Questions</p>
              <p>{exam.total_questions}</p>
            </div>

            <div>
              <p className="text-slate-400">Marks</p>
              <p>{exam.total_marks}</p>
            </div>

          </div>

          <div className="mt-8 space-y-6">

            {exam.questions.map((question, index) => (

              <QuestionCard
                key={question.id}
                question={question}
                questionNumber={index + 1}
                answer={answers[question.id]}
                setAnswer={(value) =>
                  setAnswers((prev) => ({
                    ...prev,
                    [question.id]: value,
                  }))
                }
              />

            ))}

          </div>

          <div className="flex justify-end mt-8">

            <button
              disabled={loading}
              onClick={handleSubmitExam}
              className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg font-semibold"
            >
              {loading ? "Evaluating..." : "Submit Exam"}
            </button>

          </div>

        </div>

      )}

      {results && (

        <div className="mt-8 space-y-6">

          <h1 className="text-4xl font-bold">
            Exam Results
          </h1>

          {results.map((result) => (

            <div
              key={result.questionId}
              className="bg-slate-800 rounded-xl p-6"
            >

              <div className="flex justify-between">

                <h2 className="text-xl font-bold">
                  Question {result.questionId}
                </h2>

                <span className="text-green-400 font-bold">
                  Score : {result.score}
                </span>

              </div>

              <p className="mt-5">
                <strong>Question</strong>
              </p>

              <p>{result.question}</p>

              <p className="mt-5">
                <strong>Your Answer</strong>
              </p>

              <p>{result.userAnswer}</p>

              <p className="mt-5">
                <strong>Feedback</strong>
              </p>

              <p>{result.overall_feedback}</p>

              <div className="mt-5">

                <h3 className="font-semibold text-green-400">
                  Strengths
                </h3>

                <ul className="list-disc ml-6">

                  {result.strengths.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}

                </ul>

              </div>

              <div className="mt-5">

                <h3 className="font-semibold text-red-400">
                  Weaknesses
                </h3>

                <ul className="list-disc ml-6">

                  {result.weaknesses.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}

                </ul>

              </div>

              <div className="mt-5">

                <h3 className="font-semibold text-yellow-400">
                  Improvements
                </h3>

                <ul className="list-disc ml-6">

                  {result.improvements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}

                </ul>

              </div>

              <div className="mt-5">

                <h3 className="font-semibold text-blue-400">
                  Ideal Answer
                </h3>

                <p>{result.ideal_answer}</p>

              </div>

            </div>

          ))}

        </div>

      )}

    </MainLayout>
  );
};

export default ExamPage;