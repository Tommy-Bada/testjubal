import SideBar from "@/features/Dashboard/components/SideBar";
import TalentHeader from "@/features/Dashboard/components/TalentHeader";
import ManagerTopData from "@/features/Dashboard/components/ManagerTopData";
import ToDoList from "@/features/Dashboard/components/ToDoList";
import ManagerGigBox from "@/features/Dashboard/components/ManagerGigBox";

export default function Dashboard() {
  return (
    <div className="flex bg-gradient-to-r from-[#3F288339] to-[#2DA5A439] py-[2rem] px-[3rem] h-[100%]">
      <SideBar />
      <div className="  bg-white p-[2rem] ml-[30rem] rounded-[2rem] w-[100%]">
        <TalentHeader />
        <ManagerTopData />
        <div className="flex justify-between w-[100%]">
          <ManagerGigBox />
          <ToDoList />
        </div>
      </div>
    </div>
  );
}
