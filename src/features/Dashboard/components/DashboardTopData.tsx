import TopDataItem from "./TopDataItem";
import { multipleCashIcon, completedIcon, appliedIcon } from "@/image";
export default function DashboardTopData() {
  return (
    <div className="flex bg-jubalDashboardBackground justify-between p-[2rem] mt-[2rem] mb-[3rem] rounded-[2rem] ">
      <TopDataItem
        image={multipleCashIcon}
        text="Total Earnings"
        number="1000"
        background="#0F973D"
      />
      <TopDataItem
        image={completedIcon}
        text="Total Gigs Completed"
        number="1500"
        background="#F3A218"
      />
      <TopDataItem
        image={appliedIcon}
        text="Total Gigs Applied"
        number="3600"
        background="#65387F"
      />
    </div>
  );
}
