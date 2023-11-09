import Image from "next/image";
import SideBarItem from "./SideBarItem";
import { useRouter } from "next/router";
import { ImageIcons } from "@/shared/components/ImageIcons";

export default function SideBar() {
  const router = useRouter();
  return (
    <div className="w-[max-content] bg-white h-[94%] px-[2rem] py-[2rem] fixed  rounded-[2rem] mr-[2rem]">
      <div className="w-[10rem] mx-[auto] my-[2rem]">
        <Image src={ImageIcons.logo} alt="Jubal Logo" width="100" height="50" />
      </div>
      <div className="py-[2rem] px-[3rem]  bg-jubalDashboardBackground rounded-[2rem] h-[86%] flex flex-col justify-between">
        <div>
          <SideBarItem
            image={ImageIcons.dashboardIcon}
            activeImage={ImageIcons.activeDashboardIcon}
            text="Dashboard"
            link={"/talent/dashboard/"}
            active={router.pathname === "/dashboard"}
          />
          <SideBarItem
            image={ImageIcons.briefcaseIcon}
            activeImage={ImageIcons.briefcaseActiveIcon}
            text="My Manager"
            link={"/talent/dashboard/manager"}
            active={router.pathname === "/manager"}
          />
          <SideBarItem
            image={ImageIcons.bankCheckIcon}
            activeImage={ImageIcons.activeBankCheckIcon}
            text="My Bank"
            link={"/talent/dashboard/bank"}
            active={router.pathname === "/bank"}
          />
          <SideBarItem
            image={ImageIcons.dashboardCardIcon}
            activeImage={ImageIcons.activeCardIcon}
            text="My Profile"
            link={"/talent/dashboard/profile"}
            active={router.pathname === "/profile"}
          />
          <SideBarItem
            image={ImageIcons.dashboardEmailIcon}
            activeImage={ImageIcons.activeDashboardEmailIcon}
            text="My Message"
            link={"/talent/dashboard/message"}
            active={router.pathname === "/message"}
          />
        </div>
        <div>
          <SideBarItem
            image={ImageIcons.dashboardEmailIcon}
            activeImage={ImageIcons.activeDashboardEmailIcon}
            text="Settings"
            link={"/talent/dashboard/settings"}
            active={router.pathname === "/settings"}
          />
        </div>
      </div>
    </div>
  );
}
