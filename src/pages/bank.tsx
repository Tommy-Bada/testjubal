import SideBar from "@/features/Dashboard/components/SideBar";
import TalentHeader from "@/features/Dashboard/components/TalentHeader";
import Wallet from "@/features/Dashboard/components/Wallet";
import FinancialStat from "@/features/Dashboard/components/FinancialStat";
import TransactionHistory from "@/features/Dashboard/components/TransactionHistory";

export default function Bank() {
  return (
    <div className="flex lg:bg-gradient-to-r from-[#3F288339] to-[#2DA5A439] lg:py-[3rem] lg:px-[5rem] bg-white">
      <SideBar />
      <div className=" w-[100%] lg:w-[76%] bg-white p-[2rem] lg:p-[2.5rem] ml-0 lg:ml-[24%] rounded-[2rem] ">
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
