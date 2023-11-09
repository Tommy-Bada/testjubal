import Image from "next/image";
import SideBarItem from "./SideBarItem";
import { ImageIcons } from "@/shared/components/ImageIcons";
export default function SideBar() {
  return (
    <div className="w-[18%] bg-white h-[92vh] px-[2rem] py-[3rem] fixed rounded-[2rem]">
      <div className="w-[10rem] mx-[auto] my-[2rem]">
        <Image src={ImageIcons.logo} alt="Jubal Logo" width="100" height="50" />
      </div>
      <div className="p-[3rem]  bg-jubalDashboardBackground rounded-[2rem] h-[85%] flex flex-col justify-between">
        <div>
          <SideBarItem
            active={true}
            image={ImageIcons.dashboardIcon}
            text="Dashboard"
            link="/dashboard"
          />

          <SideBarItem
            active={false}
            image={ImageIcons.briefcaseIcon}
            text="Manage Gigs"
            link="/manage-gigs"
          />

          <SideBarItem
            active={false}
            image={ImageIcons.walletIcon}
            text="My Wallet"
            link="/wallet"
          />

          <SideBarItem
            active={false}
            image={ImageIcons.cardIcon}
            text="My Profile"
            link="/profile"
          />
          <SideBarItem
            active={false}
            image={ImageIcons.dashboardMessageIcon}
            text="My Message"
            link="/message"
          />
        </div>
        <div>
          <SideBarItem
            active={false}
            image={ImageIcons.settingsIcon}
            text="Settings"
            link="/settings"
          />
        </div>
      </div>
    </div>
  );
}
