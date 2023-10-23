import TopDataItem from "./TopDataItem";
export default function TopData() {
  return (
    <div className="flex">
      <TopDataItem image="user-icon.png" text="Total Earnings" number="1000" />
      <TopDataItem
        image="user-icon.png"
        text="Total Gigs Completed"
        number="1500"
      />
      <TopDataItem
        image="user-icon.png"
        text="Total Gigs Applied"
        number="3600"
      />
    </div>
  );
}
