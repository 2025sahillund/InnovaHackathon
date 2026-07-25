import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import ExamPage from "./pages/exams/ExamPage";
import InterviewPage from "./pages/InterviewPage";
import InterviewSession from "./pages/InterviewSession";
import InterviewResult from "./pages/InterviewResult";
import RoadmapPage from "./pages/RoadmapPage";
import RoadmapResult from "./pages/RoadmapResult";
import AssistantPage from "./pages/AssistantPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/exams" element={<ExamPage />} />

        <Route path="/interviews" element={<InterviewPage />} />

        <Route
          path="/interviews/session"
          element={<InterviewSession />}
        />
        <Route
            path="/interviews/result"
            element={<InterviewResult />}
        />
        <Route
          path="/roadmap"
          element={<RoadmapPage />}
        />

        <Route
          path="/roadmap/result"
          element={<RoadmapResult />}
        />
        <Route
            path="/assistant"
            element={<AssistantPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;