import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSidebar from "../../components/Shop/DashboardSidebar";
import AllShopEvent from "../../components/Shop/AllShopEvent.jsx";

function AllShopEventPage() {
  return (
    <div>
      <DashboardHeader />
      <div className="w-full flex justify-between items-start">
        <div className="w-[100px] 800px:w-[330px]">
          <DashboardSidebar active={5} />
        </div>
        <div className="w-full flex items-start justify-center">
          <AllShopEvent />
        </div>
      </div>
    </div>
  );
}
export default AllShopEventPage;
