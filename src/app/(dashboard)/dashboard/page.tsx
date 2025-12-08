import DashboardHero from "./_components/DashboardHero";
import DashboardPackage from "./_components/DashboardPackage";
import { DashboardWrapper } from "./_components/DashboardWrapper";

const Dashboard = async () => {
  return (
    <DashboardWrapper>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
      <DashboardHero />
      <DashboardPackage/>
    </DashboardWrapper>
  );
};

export default Dashboard;
