import Image from "next/image";
import SideBarItem from "./SideBarItem";
import { UserSwitchProps } from "@/pages/client/dashboard";
export default function SideBar({ user, setUser }: UserSwitchProps) {
  return (
    <div className="w-[18%] bg-white h-[92vh] px-[2rem] py-[3rem] fixed rounded-[2rem]">
      <div className="w-[10rem] mx-[auto] my-[2rem]">
        <Image src="../Logo.png" alt="Jubal Logo" width="100" height="50" />
      </div>
      <div className="p-[3rem]  bg-jubalDashboardBackground rounded-[2rem] h-[85%] flex flex-col justify-between">
        <div>
          <SideBarItem
            active={true}
            image="dashboard/dashboard.svg"
            text="Dashboard"
            link="/dashboard"
          />

          {user === "talent" ? (
          <SideBarItem
          active={false}
          image="dashboard/briefcase.svg"
          text="My Manager"
          link="/manager"
        />
          ) : (
            <SideBarItem
            active={false}
            image="dashboard/briefcase.svg"
            text="Manage Gigs"
            link="/manage-gigs"
          />
          )}
          {user === "talent" ? (
            <SideBarItem
              active={false}
              image="dashboard/bank-check.svg"
              text="My Bank"
              link="/bank"
            />
          ) : (
            <SideBarItem
              active={false}
              image="dashboard/wallet.svg"
              text="My Wallet"
              link="/wallet"
            />
          )}

          <SideBarItem
            active={false}
            image="dashboard/card.svg"
            text="My Profile"
            link="/profile"
          />
          <SideBarItem
            active={false}
            image="dashboard/email.svg"
            text="My Message"
            link="/message"
          />
        </div>
        <div>
          <SideBarItem
            active={false}
            image="dashboard/cogs.svg"
            text="Settings"
            link="/settings"
          />
        </div>
      </div>
    </div>
  );
}
