import DashboardSidebar from "../../components/Shop/DashboardSidebar";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import CreateEvent from "../../components/Shop/CreateEvent.jsx";

function CreateEventPage() {
  return (
    <div>
      <DashboardHeader />
      <div className="w-full flex justify-between items-center">
        <div className="w-[100px] 800px:w-[330px]">
          <DashboardSidebar active={6} />
        </div>
        <div className="w-full">
          <CreateEvent />
        </div>
      </div>
    </div>
  );
}

export default CreateEventPage;
