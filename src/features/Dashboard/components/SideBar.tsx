import Image from "next/image";
import SideBarItem from "./SideBarItem";
export default function SideBar() {
  return (
    <div className="w-[18%] bg-white h-[92vh] px-[2rem] py-[3rem] fixed rounded-[2rem]">
      <div className="w-[10rem] mx-[auto] my-[2rem]">
        <Image src="Logo.png" alt="Jubal Logo" width="100" height="50" />
      </div>
      <div className="p-[3rem]  bg-jubalDashboardBackground rounded-[2rem] h-[85%] flex flex-col justify-between">
        <div>
          <SideBarItem
            image="dashboard/dashboard.svg"
            text="Dashboard"
            link="/dashboard"
          />
          <SideBarItem
            image="dashboard/briefcase.svg"
            text="My Manager"
            link="/manager"
          />
          <SideBarItem
            image="dashboard/bank-check.svg"
            text="My Bank"
            link="/bank"
          />
          <SideBarItem
            image="dashboard/card.svg"
            text="My Profile"
            link="/profile"
          />
          <SideBarItem
            image="dashboard/email.svg"
            text="My Message"
            link="/message"
          />
        </div>
        <div>
          <SideBarItem
            image="dashboard/cogs.svg"
            text="Settings"
            link="/settings"
          />
        </div>
      </div>
    </div>
  );
}
