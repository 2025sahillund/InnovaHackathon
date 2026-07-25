import {
  FileText,
  MessageSquare,
  Route,
  Bot,
} from "lucide-react";

import ActionCard from "./ActionCard";
import SectionTitle from "../ui/SectionTitle";

const QuickActions = () => {
  return (
    <div className="mt-10">

      <SectionTitle
        title="Quick Actions"
        subtitle="Access your AI learning tools."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <ActionCard
          title="Practice Exams"
          description="Generate AI-powered exams based on subject, difficulty and topics."
          icon={<FileText size={32} />}
          path="/exams"
        />

        <ActionCard
          title="Mock Interviews"
          description="Practice role-based interview questions with AI."
          icon={<MessageSquare size={32} />}
          path="/interviews"
        />

        <ActionCard
          title="Learning Roadmap"
          description="Generate a personalized roadmap for your learning goals."
          icon={<Route size={32} />}
            path="/roadmap"
        />

        <ActionCard
          title="AI Assistant"
          description="Ask technical questions and receive AI guidance."
          icon={<Bot size={32} />}
            path="/assistant"
        />

      </div>

    </div>
  );
};

export default QuickActions;