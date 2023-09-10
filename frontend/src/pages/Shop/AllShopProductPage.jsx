import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSidebar from "../../components/Shop/DashboardSidebar";
import AllShopProduct from "../../components/Shop/AllShopProduct.jsx";

function AllShopProductPage() {
  return (
    <div>
      <DashboardHeader />
      <div className="w-full flex justify-between items-start">
        <div className="w-[100px] 800px:w-[330px]">
          <DashboardSidebar active={3} />
        </div>
        <div className="w-full flex items-start justify-center">
          <AllShopProduct />
        </div>
      </div>
    </div>
  );
}
export default AllShopProductPage;
