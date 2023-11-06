import SideBar from "@/features/Dashboard/components/client/SideBar";
import DashboardHeader from "@/features/Dashboard/components/client/TalentHeader";
import TopData from "@/features/Dashboard/components/client/TopData";
import NotificationBox from "@/features/Dashboard/components/client/NotificationBox";
import GigBox from "@/features/Dashboard/components/client/GigBox";
import React, { useState } from "react";
import { useRouter } from "next/router";

export interface UserSwitchProps {
  user: string;
  setUser: (user: string) => void;
}

export default function Dashboard() {
  const [user, setUser] = useState<string>("talent");

  return (
    <div className="flex bg-gradient-to-r from-[#3F288339] to-[#2DA5A439] py-[3rem] px-[5rem]">
      <SideBar user={user} setUser={setUser} />
      <div className="w-[100%] bg-white p-[2.5rem] ml-[24%] rounded-[2rem] ">
        <DashboardHeader user={user} setUser={setUser} />
        <TopData />
        <div className="flex justify-between">
          <GigBox />
          <NotificationBox />
        </div>
      </div>
    </div>
  );
}
