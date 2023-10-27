import SideBar from "@/features/Dashboard/components/SideBar";
import DashboardHeader from "@/features/Dashboard/components/DashboardHeader";

export default function Manager() {
  return (
    <div className="flex bg-gradient-to-r from-[#3F288339] to-[#2DA5A439] py-[3rem] px-[5rem]">
      <SideBar />
      <div className="w-[76%] bg-white p-[2.5rem] ml-[24%] rounded-[2rem] ">
        <DashboardHeader />
        {/* <MangagerTopData /> */}
        <div className="flex justify-between"></div>
      </div>
    </div>
  );
}
