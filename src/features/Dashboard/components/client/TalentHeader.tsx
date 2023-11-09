import Image from "next/image";
import { UserSwitchProps } from "@/pages/client/dashboard";
import { useRouter } from "next/router";
import { config } from "@/config";
import { ImageIcons } from "@/shared/components/ImageIcons";

export default function DashboardHeader() {
  const router = useRouter();
  function switchUser() {
    router.push("/talent/dashboard/");
  }
  return (
    <div className="flex justify-between items-center w-[100%] bg-jubalDashboardBackground h-[6.4rem] p-[2rem] rounded-[12px] ">
      <div className="flex w-60 bg-jubalViolet rounded-[1rem] px-[1rem] py-[0.5rem]">
        <Image
          src={ImageIcons.swapIcon}
          
          alt="Switch Icon"
          width="20"
          height="20"
        />
        <p
          onClick={switchUser}
          className="text-white cursor-pointer text-[1.8rem] ml-[0.5rem]"
        >
          Switch to Pro
        </p>
      </div>
      <div className="flex justify-between bg-white p-[1rem] rounded-[0.8rem] w-[50%]">
        <input
          type="text"
          placeholder="Search"
          className="text-[1.6rem] w-[90%] active:outline-none hover:outline-none outline-none"
        />
        <Image
          src="../dashboard/search.svg"
          alt="Search Icon"
          width="20"
          height="20"
        />
      </div>
      <div className="flex items-center">
        <Image
          src="../dashboard/profile.svg"
          alt="User Icon"
          width="150"
          height="150"
        />
        <div className=" rounded-[50%] bg-white w-[5rem] h-[5rem] flex justify-center items-center">
          <Image
            src="../dashboard/notification.svg"
            alt="Notification Icon"
            width="20"
            height="20"
          />
        </div>
      </div>
    </div>
  );
}
