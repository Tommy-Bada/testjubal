import SideBar from "@/features/Dashboard/components/SideBar";
import TalentHeader from "@/features/Dashboard/components/TalentHeader";
import TopData from "@/features/Dashboard/components/DashboardTopData";
import NotificationBox from "@/features/Dashboard/components/NotificationBox";
import GigBox from "@/features/Dashboard/components/GigBox";

export default function Dashboard() {
  return (
    <div className="flex bg-gradient-to-r from-[#3F288339] to-[#2DA5A439] py-[2rem] px-[3rem] h-[100%]">
      <SideBar />
      <div className="  bg-white p-[2rem] ml-[30rem] rounded-[2rem] w-[100%]">
        <TalentHeader />
        <TopData />
        <div className="flex justify-between">
          <GigBox />
          <NotificationBox />
        </div>
      </div>
    </div>
  );
}
