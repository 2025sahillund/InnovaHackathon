import { useState } from "react";
import { generateExam } from "../../services/examService";

const ExamForm = ({ setExam }) => {
  const [subject, setSubject] = useState("Python");
  const [topics, setTopics] = useState("Functions,OOP,Recursion");
  const [difficulty, setDifficulty] = useState("Medium");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);

    try {
      const payload = {
        subject,
        topics: topics.split(",").map((t) => t.trim()),
        difficulty,
        duration: 30,
        include_answers: false,
        question_distribution: {
          mcq: 10,
          coding: 2,
          theory: 5,
        },
      };

      const response = await generateExam(payload);

      console.log(response);

      setExam(response.data.exam);
    } catch (error) {
      console.error(error);
      alert("Failed to generate exam.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6">
        Generate Practice Exam
      </h2>

      <div className="space-y-4">
        <input
          className="w-full p-3 rounded bg-slate-700"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
        />

        <input
          className="w-full p-3 rounded bg-slate-700"
          value={topics}
          onChange={(e) => setTopics(e.target.value)}
          placeholder="Topics"
        />

        <select
          className="w-full p-3 rounded bg-slate-700"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg w-full"
        >
          {loading ? "Generating..." : "Generate Exam"}
        </button>
      </div>
    </div>
  );
};

export default ExamForm;