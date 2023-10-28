import TopDataItem from "./TopDataItem";
export default function TopData() {
  return (
    <div className="flex bg-jubalDashboardBackground justify-between p-[3rem] mt-[2rem] mb-[3rem] rounded-[2rem] ">
      <TopDataItem
        image="dashboard/cash-multiple.svg"
        text="Total Earnings"
        number="1000"
        background="#0F973D"
      />
      <TopDataItem
        image="dashboard/completed.svg"
        text="Total Gigs Completed"
        number="1500"
        background="#F3A218"
      />
      <TopDataItem
        image="dashboard/applied.svg"
        text="Total Gigs Applied"
        number="3600"
        background="#65387F"
      />
    </div>
  );
}
