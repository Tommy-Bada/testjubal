import SideBar from "@/features/Dashboard/components/SideBar";
import DashboardHeader from "@/features/Dashboard/components/DashboardHeader";
import TopData from "@/features/Dashboard/components/TopData";
import NotificationBox from "@/features/Dashboard/components/NotificationBox";
import GigBox from "@/features/Dashboard/components/GigBox";

export default function Dashboard() {
  return (
    <div className="flex lg:bg-gradient-to-r from-[#3F288339] to-[#2DA5A439] lg:py-[3rem] lg:px-[5rem] bg-white">
      <SideBar />
      <div className=" w-[100%] lg:w-[76%] bg-white p-[2rem] lg:p-[2.5rem] ml-0 lg:ml-[24%] rounded-[2rem] ">
        <DashboardHeader />
        <TopData />
        <div className="flex justify-between">
          <GigBox />
          <NotificationBox />
        </div>
      </div>
    </div>
  );
}
