import { useLocation, useNavigate } from "react-router-dom";

const RoadmapResult = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const roadmap = state?.roadmap;

  if (!roadmap) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold mb-4">
          No Roadmap Found
        </h1>

        <button
          onClick={() => navigate("/roadmap")}
          className="bg-indigo-600 px-6 py-3 rounded-lg"
        >
          Generate Roadmap
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-10 text-white">

      <h1 className="text-4xl font-bold">
        {roadmap.title}
      </h1>

      <p className="text-slate-400 mt-3 text-lg">
        Estimated Duration:
        <span className="text-indigo-400 ml-2">
          {roadmap.estimated_duration}
        </span>
      </p>

      {/* Learning Phases */}

      <h2 className="text-3xl font-bold mt-10 mb-6">
        Learning Phases
      </h2>

      <div className="space-y-6">

        {roadmap.phases.map((phase, index) => (

          <div
            key={index}
            className="bg-slate-800 rounded-xl p-6"
          >

            <div className="flex justify-between items-center">

              <h3 className="text-2xl font-semibold">
                {phase.phase}
              </h3>

              <span className="text-indigo-400">
                {phase.duration}
              </span>

            </div>

            <ul className="list-disc pl-6 mt-4 space-y-2">

              {phase.topics.map((topic, i) => (
                <li key={i}>
                  {topic}
                </li>
              ))}

            </ul>

          </div>

        ))}

      </div>

      {/* Projects */}

      <div className="bg-slate-800 rounded-xl p-6 mt-10">

        <h2 className="text-2xl font-bold mb-4">
          Recommended Projects
        </h2>

        <ul className="list-disc pl-6 space-y-2">

          {roadmap.projects.map((project, index) => (
            <li key={index}>
              {project}
            </li>
          ))}

        </ul>

      </div>

      {/* Resources */}

      <div className="bg-slate-800 rounded-xl p-6 mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Learning Resources
        </h2>

        <ul className="list-disc pl-6 space-y-2">

          {roadmap.resources.map((resource, index) => (
            <li key={index}>
              {resource}
            </li>
          ))}

        </ul>

      </div>

      {/* Tips */}

      <div className="bg-slate-800 rounded-xl p-6 mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Career Tips
        </h2>

        <ul className="list-disc pl-6 space-y-2">

          {roadmap.tips.map((tip, index) => (
            <li key={index}>
              {tip}
            </li>
          ))}

        </ul>

      </div>

      <div className="text-center mt-12">

        <button
          onClick={() => navigate("/roadmap")}
          className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-xl"
        >
          Generate Another Roadmap
        </button>

      </div>

    </div>
  );
};

export default RoadmapResult;