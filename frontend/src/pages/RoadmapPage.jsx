import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";
import { generateRoadmap } from "../services/roadmapService";

const skillOptions = [
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "React",
  "Node.js",
  "SQL",
  "MongoDB",
  "Git",
  "Docker",
  "Flutter",
  "Firebase",
  "DSA",
  "Machine Learning",
  "FastAPI",
];

const RoadmapPage = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("Python Developer");
  const [experience, setExperience] = useState("Fresher");
  const [company, setCompany] = useState("Google");
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleSkill = (skill) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const response = await generateRoadmap({
        role,
        experience,
        company,
        skills,
      });

      navigate("/roadmap/result", {
        state: {
          roadmap: response.data,
        },
      });
    } catch (err) {
      console.error(err);
      alert("Failed to generate roadmap.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10">

      <SectionTitle
        title="AI Learning Roadmap"
        subtitle="Generate a personalized roadmap for your dream career."
      />

      <Card className="p-8 mt-8">

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 text-slate-300">
              Target Role
            </label>

            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-lg bg-slate-700 p-3 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-300">
              Dream Company
            </label>

            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-lg bg-slate-700 p-3 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-300">
              Experience
            </label>

            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full rounded-lg bg-slate-700 p-3 text-white"
            >
              <option>Fresher</option>
              <option>0-1 Years</option>
              <option>1-3 Years</option>
              <option>3-5 Years</option>
              <option>5+ Years</option>
            </select>
          </div>

        </div>

        <h3 className="mt-8 text-xl font-semibold">
          Current Skills
        </h3>

        <div className="flex flex-wrap gap-3 mt-5">

          {skillOptions.map((skill) => (

            <button
              key={skill}
              onClick={() => toggleSkill(skill)}
              className={`px-4 py-2 rounded-full transition ${
                skills.includes(skill)
                  ? "bg-indigo-600"
                  : "bg-slate-700 hover:bg-slate-600"
              }`}
            >
              {skill}
            </button>

          ))}

        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-10 w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-xl font-semibold"
        >
          {loading
            ? "Generating Roadmap..."
            : "Generate AI Roadmap"}
        </button>

      </Card>

    </div>
  );
};

export default RoadmapPage;