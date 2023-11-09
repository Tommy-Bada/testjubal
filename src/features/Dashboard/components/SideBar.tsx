import Image from "next/image";
import SideBarItem from "./SideBarItem";
import { useRouter } from "next/router";
import {
  logo,
  dashboardIcon,
  activeDashboardIcon,
  briefcaseIcon,
  briefcaseActiveIcon,
  bankCheckIcon,
  activeBankCheckIcon,
  cardIcon,
  activeCardIcon,
  dashboardMessageIcon,
  activeDashboardEmailIcon,
  settingsIcon,
  activeSettingsIcon,
} from "@/image";

export default function SideBar() {
  const router = useRouter();
  return (
    <div className="w-[max-content] bg-white h-[94%] px-[2rem] py-[2rem] fixed  rounded-[2rem] mr-[2rem]">
      <div className="w-[10rem] mx-[auto] my-[2rem]">
        <Image src={logo} alt="Jubal Logo" width="100" height="50" />
      </div>
      <div className="py-[2rem] px-[3rem]  bg-jubalDashboardBackground rounded-[2rem] h-[86%] flex flex-col justify-between">
        <div>
          <SideBarItem
            image={dashboardIcon}
            activeImage={activeDashboardIcon}
            text="Dashboard"
            link="/dashboard"
            active={router.pathname === "/dashboard"}
          />
          <SideBarItem
            image={briefcaseIcon}
            activeImage={briefcaseActiveIcon}
            text="My Manager"
            link="/manager"
            active={router.pathname === "/manager"}
          />
          <SideBarItem
            image={bankCheckIcon}
            activeImage={activeBankCheckIcon}
            text="My Bank"
            link="/bank"
            active={router.pathname === "/bank"}
          />
          <SideBarItem
            image={cardIcon}
            activeImage={activeCardIcon}
            text="My Profile"
            link="/profile"
            active={router.pathname === "/profile"}
          />
          <SideBarItem
            image={dashboardMessageIcon}
            activeImage={activeDashboardEmailIcon}
            text="My Message"
            link="/message"
            active={router.pathname === "/message"}
          />
        </div>
        <div>
          <SideBarItem
            image={settingsIcon}
            activeImage={activeSettingsIcon}
            text="Settings"
            link="/settings"
            active={router.pathname === "/settings"}
          />
        </div>
      </div>
    </div>
  );
}
