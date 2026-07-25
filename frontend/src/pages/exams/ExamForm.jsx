import { useState } from "react";
import { generateExam } from "../../services/examService";

import Card from "../ui/Card";
import Button from "../ui/Button";

const ExamForm = ({ setExam  }) => {

  const [loading, setLoading] = useState(false);

  const [subject, setSubject] = useState("");

  const [topics, setTopics] = useState("");

  const [difficulty, setDifficulty] = useState("Easy");

  const [duration, setDuration] = useState(30);

  const handleGenerate = async () => {
    console.log("Button clicked");
    setLoading(true);

    try {

      const payload = {

        subject,

        topics: topics
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        difficulty,

        duration,

        include_answers: false,

        question_distribution: {
          mcq: 10,
          theory: 5,
          coding: 2,
        },

      };

      const response = await generateExam(payload);

      console.log("Full Response:", response);
      console.log("Response Data:", response.data);

      setExam(response.data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  };

  return (

    <Card>

     <button onClick={handleGenerate} disabled={loading}>
            {loading ? "Generating Exam..." : "Generate Exam"}
        </button>

        {loading && (
            <p> AI is generating your exam. Please wait...</p>
        )}

      <div className="space-y-4">

        <input
          className="w-full p-3 rounded bg-slate-700"
          placeholder="Subject"
          value={subject}
          onChange={(e)=>setSubject(e.target.value)}
        />

        <input
          className="w-full p-3 rounded bg-slate-700"
          placeholder="Topics (comma separated)"
          value={topics}
          onChange={(e)=>setTopics(e.target.value)}
        />

        <select
          className="w-full p-3 rounded bg-slate-700"
          value={difficulty}
          onChange={(e)=>setDifficulty(e.target.value)}
        >

          <option>Easy</option>

          <option>Medium</option>

          <option>Hard</option>

        </select>

        <input
          type="number"
          className="w-full p-3 rounded bg-slate-700"
          value={duration}
          onChange={(e)=>setDuration(Number(e.target.value))}
        />

        <Button
          onClick={handleGenerate}
        >

          {loading
            ? "Generating..."
            : "Generate Exam"}

        </Button>

      </div>

    </Card>

  );

};

export default ExamForm;