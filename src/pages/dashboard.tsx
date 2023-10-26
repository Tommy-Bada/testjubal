import SideBar from "@/features/Dashboard/components/SideBar";
import DashboardHeader from "@/features/Dashboard/components/DashboardHeader";
import TopData from "@/features/Dashboard/components/TopData";
import NotificationBox from "@/features/Dashboard/components/NotificationBox";
import GigBox from "@/features/Dashboard/components/GigBox";

export default function Dashboard() {
  return (
    <div className="flex bg-gradient-to-r from-[#3F288339] to-[#2DA5A439] py-[3rem] px-[5rem]">
      <SideBar />
      <div className="w-[76%] bg-white p-[2.5rem] ml-[24%] rounded-[2rem] ">
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
