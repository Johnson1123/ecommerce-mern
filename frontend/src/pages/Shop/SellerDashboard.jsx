import React, { useState } from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader.jsx";
import DashboardSidebar from "../../components/Shop//DashboardSidebar.jsx";

function SellerDashboard() {
  const [active, setActive] = useState();
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between items-center w-full">
        <div className="w-[100px] 800px:w-[330px] ">
          <DashboardSidebar active={1} />
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;
