import SideBar from "@/features/Dashboard/components/SideBar";
import TalentHeader from "@/features/Dashboard/components/TalentHeader";
import MessageList from "@/features/Dashboard/components/MessageList";

export default function Message() {
  return (
    <div className="flex bg-gradient-to-r from-[#3F288339] to-[#2DA5A439] py-[2rem] px-[3rem] h-[100%]">
      <SideBar />
      <div className="  bg-white p-[2rem] ml-[30rem] rounded-[2rem] w-[100%]">
        <TalentHeader />
        <div className="flex justify-between w-[100%] bg-jubalDashboardBackground  mt-[2rem] rounded-[3rem] p-[2rem] ">
          <MessageList />
        </div>
      </div>
    </div>
  );
}
