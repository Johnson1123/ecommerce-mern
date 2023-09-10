import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSidebar from "../../components/Shop/DashboardSidebar";
import AllCouponsCode from "../../components/Shop/AllCouponsCode.jsx";

function AllShopCouponsCodePage() {
  return (
    <div>
      <DashboardHeader />
      <div className="w-full flex justify-between items-start">
        <div className="w-[100px] 800px:w-[330px]">
          <DashboardSidebar active={9} />
        </div>
        <div className="w-full flex items-start justify-center">
          <AllCouponsCode />
        </div>
      </div>
    </div>
  );
}
export default AllShopCouponsCodePage;
