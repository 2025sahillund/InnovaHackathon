import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

const AIInsights = () => {
  return (
    <div className="mt-10">

      <SectionTitle
        title="AI Insights"
        subtitle="Personalized recommendations based on your learning progress."
      />

      <Card>

        <div className="flex flex-col lg:flex-row justify-between gap-10">

          <div className="flex-1">

            <h3 className="text-xl font-semibold text-white">
              Recommended Focus
            </h3>

            <p className="mt-3 text-slate-400 leading-7">
              Continue strengthening your understanding of
              Object-Oriented Programming and Recursion.
            </p>

            <div className="mt-8 space-y-3">

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="text-slate-400">
                  Difficulty
                </span>

                <span className="text-white font-medium">
                  Medium
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="text-slate-400">
                  Estimated Study Time
                </span>

                <span className="text-white font-medium">
                  30 Minutes
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Next Goal
                </span>

                <span className="text-white font-medium">
                  Complete Python Practice
                </span>
              </div>

            </div>

          </div>

          <div className="flex items-center">

            <Button>

              Generate Recommendation

            </Button>

          </div>

        </div>

      </Card>

    </div>
  );
};

export default AIInsights;