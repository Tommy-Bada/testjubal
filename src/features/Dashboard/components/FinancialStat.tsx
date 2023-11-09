import Image from "next/image";
import { noTransactionIcon } from "@/image";
export default function FinancialStat() {
  return (
    <div className="p-[2rem]">
      <div className="flex justify-between p-[1rem]">
        <p className="text-[1.6rem] text-jubalGrey">Financial Statistics</p>
        <div className="flex items-center">
          <p className="text-[1.2rem] mr-[1rem] text-jubalGrey">Deposit</p>
          <div className="bg-jubalDashboardGreen w-[2.5rem] h-[4px]"></div>
        </div>
        <div className="flex items-center">
          <p className="text-[1.2rem] mr-[1rem] text-jubalGrey">Transfer</p>
          <div className="bg-jubalDashboardRed w-[2.5rem] h-[4px]"></div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-[2rem] mt-[3rem]">
        <Image
          src={noTransactionIcon}
          alt="Financial Status"
          height="150"
          width="150"
        />
      </div>
      <p className="text-[1.6rem] text-jubalGrey text-center">
        Make a transaction to see your statistics.
      </p>
    </div>
  );
}
