import { useLocation, useNavigate } from "react-router-dom";

const InterviewResult = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const result = state?.result;

  if (!result) {
    return (
      <div className="text-white text-center mt-20">
        <h1 className="text-3xl font-bold mb-4">
          No Interview Result Found
        </h1>

        <button
          onClick={() => navigate("/interviews")}
          className="bg-indigo-600 px-6 py-3 rounded-lg"
        >
          Start New Interview
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 text-white">

      <h1 className="text-4xl font-bold mb-8">
        AI Interview Report
      </h1>

      {/* Score Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

        <ScoreCard
          title="Overall"
          score={result.overall_score}
        />

        <ScoreCard
          title="Technical"
          score={result.technical_score}
        />

        <ScoreCard
          title="Communication"
          score={result.communication_score}
        />

        <ScoreCard
          title="Confidence"
          score={result.confidence_score}
        />

      </div>

      {/* Feedback */}

      <Section title="Overall Feedback">
        {result.overall_feedback}
      </Section>

      {/* Strengths */}

      <Section title="Strengths">

        <ul className="list-disc pl-6 space-y-2">
          {result.strengths.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </Section>

      {/* Weaknesses */}

      <Section title="Weaknesses">

        <ul className="list-disc pl-6 space-y-2">
          {result.weaknesses.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </Section>

      {/* Improvements */}

      <Section title="Improvement Suggestions">

        <ul className="list-disc pl-6 space-y-2">
          {result.improvements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </Section>

      <div className="text-center mt-10">

        <button
          onClick={() => navigate("/interviews")}
          className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-xl"
        >
          Take Another Interview
        </button>

      </div>

    </div>
  );
};

function ScoreCard({ title, score }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 text-center">

      <h2 className="text-slate-300 mb-4">
        {title}
      </h2>

      <div className="text-5xl font-bold text-indigo-400">
        {score}
      </div>

      <p className="mt-2 text-slate-400">
        /100
      </p>

    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-6">

      <h2 className="text-2xl font-semibold mb-4">
        {title}
      </h2>

      <div className="text-slate-300 leading-8">
        {children}
      </div>

    </div>
  );
}

export default InterviewResult;