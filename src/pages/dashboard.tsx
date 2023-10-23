import SideBar from "@/features/Dashboard/components/SideBar";
import DashboardHeader from "@/features/Dashboard/components/DashboardHeader";
import TopData from "@/features/Dashboard/components/TopData";
import NotificationBox from "@/features/Dashboard/components/NotificationBox";
import GigBox from "@/features/Dashboard/components/GigBox";
export default function Dashboard() {
  return (
    <div className="flex">
      <SideBar />
      <div>
        <DashboardHeader />
        <TopData />
        <div className="flex">
          <GigBox />
          <NotificationBox />
        </div>
      </div>
    </div>
  );
}
