import MainLayout from "../components/layout/MainLayout";

import Hero from "../components/dashboard/Hero";
import QuickActions from "../components/dashboard/QuickActions";
import ProgressOverview from "../components/dashboard/ProgressOverview";
import AIInsights from "../components/dashboard/AIInsights";

const Dashboard = () => {
  return (
    <MainLayout>

      <Hero />

      <QuickActions />

      <ProgressOverview />

      <AIInsights />

    </MainLayout>
  );
};

export default Dashboard;