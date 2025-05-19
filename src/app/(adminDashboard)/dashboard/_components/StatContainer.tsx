import React from "react";
import { StatCard } from "./StatCard";

const StatContainer = () => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 `}>
      <StatCard
        title="Total Users"
        value="7,265"
        change={{ value: "+11.01%", positive: true }}
        className="bg-[#EDEEFC]"
      />
      <StatCard
        title="Active Users"
        value="2,318"
        change={{ value: "+6.08%", positive: true }}
        className="bg-[#E6F1FD]"
      />
      <StatCard
        title="Total Earnings"
        value="$5,000"
        change={{ value: "+15.03%", positive: true }}
        className="bg-[#EDEEFC]"
      />
    </div>
  );
};

export default StatContainer;
