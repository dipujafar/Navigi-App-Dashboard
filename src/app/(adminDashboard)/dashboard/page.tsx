import EarningsChart from "./_components/EarningsChart";
import RecentlyOrders from "./_components/RecentlyOrders";
import StatContainer from "./_components/StatContainer";
import { UserOverview } from "./_components/UserOverview/UserOverview";

const DashboardPage = () => {
  return (
    <div className="lg:space-y-5 space-y-3 ">
      <StatContainer></StatContainer>
      <EarningsChart></EarningsChart>
      <UserOverview></UserOverview>

      <RecentlyOrders />
    </div>
  );
};

export default DashboardPage;
