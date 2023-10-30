import TopDataItem from "./TopDataItem";
export default function ManagerTopData() {
  return (
    <div className="flex bg-jubalDashboardBackground justify-between p-[3rem] mt-[2rem] mb-[3rem] rounded-[2rem] ">
      <TopDataItem
        image="dashboard/completed.svg"
        text="Active Gigs"
        number="5"
        background="#0F973D"
      />
      <TopDataItem
        image="dashboard/completed.svg"
        text="Total Gigs Completed"
        number="3600"
        background="#F3A218"
      />
      <TopDataItem
        image="dashboard/completed.svg"
        text="Pending Gigs"
        number="6"
        background="#00798F"
      />
      <TopDataItem
        image="dashboard/completed.svg"
        text="Total Reviews"
        number="20"
        background="#65387F"
      />
    </div>
  );
}
