import SideBar from "@/features/Dashboard/components/SideBar";
import TalentHeader from "@/features/Dashboard/components/TalentHeader";
import ProfileBox from "@/features/Dashboard/components/ProfileBox";

export default function Dashboard() {
  return (
    <div className="flex bg-gradient-to-r from-[#3F288339] to-[#2DA5A439] py-[2rem] px-[3rem] h-[100%]">
      <SideBar />
      <div className="  bg-white p-[2rem] ml-[30rem] rounded-[2rem] w-[100%]">
        <TalentHeader />
        <div className=" w-[100%] bg-jubalDashboardBackground rounded-[2rem] p-[2rem] mt-[2rem]">
          <p className="text-[1.8rem] font-[700] text-jubalFormText mb-[1rem] ">
            My Profile
          </p>
          <ProfileBox />
        </div>
      </div>
    </div>
  );
}
