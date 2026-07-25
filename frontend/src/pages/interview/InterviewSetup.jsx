import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/ui/Card";
import SectionTitle from "../../components/ui/SectionTitle";
import { generateInterview } from "../../services/interviewService";

const InterviewSetup = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: "Python Developer",
    company: "Google",
    experience: "Fresher",
    difficulty: "Medium",
    type: "Mixed",
    questions: 5,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleStart = async () => {
  try {
    const response = await generateInterview(formData);

    navigate("/interviews/session", {
      state: {
        questions: response.data.questions,
      },
    });

  } catch (error) {
    console.error("ERROR:", error);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
    }

    if (error.request) {
      console.log("Request:", error.request);
    }

    alert("Failed to generate interview.");
  }
};

  return (
    <div className="max-w-3xl mx-auto py-10">
      <SectionTitle
        title="AI Mock Interview"
        subtitle="Practice technical and HR interviews powered by AI."
      />

      <Card>
        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="text-slate-300 block mb-2">
              Role
            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3 text-white"
            >
              <option>Python Developer</option>
              <option>Flutter Developer</option>
              <option>Full Stack Developer</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
            </select>
          </div>

          <div>
            <label className="text-slate-300 block mb-2">
              Company
            </label>

            <select
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3 text-white"
            >
              <option>Google</option>
              <option>Amazon</option>
              <option>Microsoft</option>
              <option>TCS</option>
              <option>Infosys</option>
              <option>Accenture</option>
            </select>
          </div>

          <div>
            <label className="text-slate-300 block mb-2">
              Experience
            </label>

            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3 text-white"
            >
              <option>Fresher</option>
              <option>1 Year</option>
              <option>2 Years</option>
              <option>3+ Years</option>
            </select>
          </div>

          <div>
            <label className="text-slate-300 block mb-2">
              Difficulty
            </label>

            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3 text-white"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div>
            <label className="text-slate-300 block mb-2">
              Interview Type
            </label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3 text-white"
            >
              <option>Technical</option>
              <option>HR</option>
              <option>Mixed</option>
            </select>
          </div>

          <div>
            <label className="text-slate-300 block mb-2">
              Number of Questions
            </label>

            <select
              name="questions"
              value={formData.questions}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3 text-white"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>

        </div>

        <button
          onClick={handleStart}
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 transition rounded-xl py-3 text-white font-semibold"
        >
          Start Interview
        </button>
      </Card>
    </div>
  );
};

export default InterviewSetup;