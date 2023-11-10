import SideBar from "@/features/Dashboard/components/SideBar";
import TalentHeader from "@/features/Dashboard/components/TalentHeader";
import SettingsBox from "@/features/Dashboard/components/SettingsBox";

export default function Settings() {
  return (
    <div className="flex bg-gradient-to-r from-jubalGradientBlueFaded to-jubalGradientGreenFaded py-[2rem] px-[3rem] h-[100%]">
      <SideBar />
      <div className="  bg-white p-[2rem] ml-[30rem] rounded-[2rem] w-[100%]">
        <TalentHeader />
        <div className=" w-[100%] bg-jubalDashboardBackground  mt-[2rem] rounded-[2rem] p-[2rem] ">
          <p className="text-[1.8rem] font-[700] text-jubalGrey mb-[1rem] ">
            Settings
          </p>
          <SettingsBox />
        </div>
      </div>
    </div>
  );
}
