import Image from "next/image";
import Transaction from "./Transaction";
export default function TransactionHistory() {
  return (
    <div className=" bg-jubalDashboardBackground w-[50%] p-[3rem] m-[2rem] rounded-[2rem]">
      <div className="flex justify-between items-center mb-[2rem]">
        <p className="text-jubalGrey text-[1.6rem]">Transaction History</p>
        <div className="bg-white rounded-[1rem] flex p-[1rem]">
          <p className="mr-[1rem] text-[1.4rem]">Newest</p>
          <Image
            src="/dashboard/drop-down.svg"
            alt="drop down"
            width="20"
            height="20"
          />
        </div>
      </div>
      <div>
        <Transaction
          profileImage="dashboard/placeholder.svg"
          title="David Akpan"
          type="Widthdrawal"
          amount="5000"
          day="Today"
        />
        <Transaction
          profileImage="dashboard/placeholder.svg"
          title="David Akpan"
          type="Widthdrawal"
          amount="5000"
          day="Today"
        />
        <Transaction
          profileImage="dashboard/placeholder.svg"
          title="David Akpan"
          type="Widthdrawal"
          amount="5000"
          day="Today"
        />
      </div>
    </div>
  );
}
