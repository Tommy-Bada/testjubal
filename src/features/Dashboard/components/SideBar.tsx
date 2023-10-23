import Image from "next/image";
import SideBarItem from "./SideBarItem";
export default function SideBar() {
  return (
    <div>
      <div>
        <Image src="Logo.png" alt="Jubal Logo" width="150" height="50" />
      </div>
      <div>
        <SideBarItem
          image="DashboardIcon.png"
          text="Dashboard"
          link="/dashboard"
        />
        <SideBarItem
          image="manager-icon.png"
          text="My Manager"
          link="/manager"
        />
        <SideBarItem image="bank-icon.png" text="My Bank" link="/bank" />
        <SideBarItem
          image="my-profile-icon.png"
          text="My Profile"
          link="/profile"
        />
        <SideBarItem
          image="message-icon.png"
          text="My Message"
          link="/message"
        />
        <SideBarItem
          image="settings-icon.png"
          text="Settings"
          link="/settings"
        />
      </div>
    </div>
  );
}
