import EarningsChart from "./_components/EarningsChart";
import { Marketplace } from "./_components/Marketplace";
import RecentlyUser from "./_components/RecentlyUser";
import StatContainer from "./_components/StatContainer";
import TrafficByLocation from "./_components/TrafficChart/TrafficChart";
import { UserOverview } from "./_components/UserOverview/UserOverview";

const DashboardPage = () => {
  return (
    <div className="lg:space-y-5 space-y-3 ">
      <StatContainer></StatContainer>
      <EarningsChart></EarningsChart>
      <UserOverview></UserOverview>
      <div className="flex gap-x-5 flex-col xl:flex-row">
        <div className="flex-1">
          <Marketplace />
        </div>
        <div  className="flex-1">
          <TrafficByLocation />
        </div>
      </div>
      <RecentlyUser />
    </div>
  );
};

export default DashboardPage;
