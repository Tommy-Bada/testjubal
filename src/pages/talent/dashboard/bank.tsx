import SideBar from "@/features/Dashboard/components/SideBar";
import TalentHeader from "@/features/Dashboard/components/TalentHeader";
import Wallet from "@/features/Dashboard/components/Wallet";
import FinancialStat from "@/features/Dashboard/components/FinancialStat";
import TransactionHistory from "@/features/Dashboard/components/TransactionHistory";

export default function Bank() {
  return (
    <div className="flex bg-gradient-to-r from-[#3F288339] to-[#2DA5A439] py-[2rem] px-[3rem] h-[100%]">
      <SideBar />
      <div className="  bg-white p-[2rem] ml-[30rem] rounded-[2rem] w-[100%]">
        <TalentHeader />
        <div className="flex justify-between w-[100%] ">
          <div className="w-[50%] bg-jubalDashboardBackground p-[2rem] rounded-[2rem] mt-[2rem]">
            <Wallet />
            <FinancialStat />
          </div>
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}
