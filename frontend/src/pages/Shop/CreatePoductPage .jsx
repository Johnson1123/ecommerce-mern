import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSidebar from "../../components/Shop/DashboardSidebar";
import CreateProduct from "../../components/Shop/CreateProduct.jsx";

function CreatePoductPage() {
  return (
    <div>
      <DashboardHeader />
      <div className="w-full flex justify-between items-center">
        <div className="w-[100px] 800px:w-[330px]">
          <DashboardSidebar active={4} />
        </div>
        <div className="w-full">
          <CreateProduct />
        </div>
      </div>
    </div>
  );
}

export default CreatePoductPage;
