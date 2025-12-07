import DashboardHero from "./_components/DashboardHero";
import { DashboardWrapper } from "./_components/DashboardWrapper";

const Dashboard = async () => {
  return (
    <DashboardWrapper>
      <h2 className="font-semibold text-xl">Dashboard</h2>
      <DashboardHero />
    </DashboardWrapper>
  );
};

export default Dashboard;
