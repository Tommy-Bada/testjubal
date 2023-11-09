import TopDataItem from "./TopDataItem";
import { completedIcon } from "@/image";
export default function ManagerTopData() {
  return (
    <div className="flex bg-jubalDashboardBackground justify-between p-[3rem] mt-[2rem] mb-[1rem] rounded-[2rem] ">
      <TopDataItem
        image={completedIcon}
        text="Active Gigs"
        number="5"
        background="#0F973D"
      />
      <TopDataItem
        image={completedIcon}
        text="Total Gigs Completed"
        number="3600"
        background="#F3A218"
      />
      <TopDataItem
        image={completedIcon}
        text="Pending Gigs"
        number="6"
        background="#00798F"
      />
      <TopDataItem
        image={completedIcon}
        text="Total Reviews"
        number="20"
        background="#65387F"
      />
    </div>
  );
}
