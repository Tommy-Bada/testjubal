import SideBar from "@/features/Dashboard/components/SideBar";
<<<<<<< HEAD
import TalentHeader from "@/features/Dashboard/components/TalentHeader";
import ManagerTopData from "@/features/Dashboard/components/ManagerTopData";
import ToDoList from "@/features/Dashboard/components/ToDoList";
import ManagerGigBox from "@/features/Dashboard/components/ManagerGigBox";

export default function Dashboard() {
  return (
    <div className="flex lg:bg-gradient-to-r from-[#3F288339] to-[#2DA5A439] lg:py-[3rem] lg:px-[5rem] bg-white">
      <SideBar />
      <div className=" w-[100%] lg:w-[76%] bg-white p-[2rem] lg:p-[2.5rem] ml-0 lg:ml-[24%] rounded-[2rem] ">
        <TalentHeader />
        <ManagerTopData />
        <div className="flex justify-between w-[100%]">
          <ManagerGigBox />
          <ToDoList />
        </div>
=======
import DashboardHeader from "@/features/Dashboard/components/DashboardHeader";

export default function Manager() {
  return (
    <div className="flex bg-gradient-to-r from-[#3F288339] to-[#2DA5A439] py-[3rem] px-[5rem]">
      <SideBar />
      <div className="w-[76%] bg-white p-[2.5rem] ml-[24%] rounded-[2rem] ">
        <DashboardHeader />
        {/* <MangagerTopData /> */}
        <div className="flex justify-between"></div>
>>>>>>> 67eec19139fd2da9645c708843b0128bfbe1c1cf
      </div>
    </div>
  );
}
