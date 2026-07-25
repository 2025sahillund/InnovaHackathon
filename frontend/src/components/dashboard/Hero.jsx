import Button from "../ui/Button";
import Card from "../ui/Card";

const Hero = () => {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700">

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">

        <div className="max-w-2xl">

          <span className="text-sm text-indigo-400 font-medium tracking-wide uppercase">
            Personalized AI Learning
          </span>

          <h1 className="mt-3 text-4xl font-bold text-white leading-tight">
            Continue your preparation with AI assistance
          </h1>

          <p className="mt-5 text-slate-300 leading-7">
            Generate practice exams, attempt mock interviews,
            receive AI-powered evaluations, and follow a
            personalized learning roadmap.
          </p>

          <div className="mt-8 flex gap-4">

            <Button>
              Start Practice
            </Button>

            <Button
              className="
                bg-slate-700
                hover:bg-slate-600
              "
            >
              View Progress
            </Button>

          </div>

        </div>

        <div
          className="
            hidden
            lg:flex
            h-48
            w-48
            rounded-full
            bg-indigo-600/20
            items-center
            justify-center
            border
            border-indigo-500/30
          "
        >

          <div
            className="
              h-28
              w-28
              rounded-full
              bg-indigo-500/40
            "
          />

        </div>

      </div>

    </Card>
  );
};

export default Hero;