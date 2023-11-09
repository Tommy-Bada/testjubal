import { config } from "@/config";
import Image from "next/image";
import { useRouter } from "next/router";
import { ImageIcons } from "@/shared/components/ImageIcons";

export default function TalentHeader() {
  const router = useRouter();
  function switchUser() {
    router.push("/client/dashboard");
  }
  return (
    <>
      <header className="flex justify-between items-center w-[100%] bg-jubalDashboardBackground h-[6.4rem] p-[2rem] rounded-[12px] ">
        <div className="w-[3.2rem] h-[3.2rem] bg-jubalDark rounded-[50%] flex flex-col items-center justify-center lg:hidden">
          <div className="w-[1.2rem] bg-white h-[2px]"></div>
          <div className="w-[1.2rem] bg-white h-[2px] my-[2px]"></div>
          <div className="w-[1.2rem] bg-white h-[2px]"></div>
        </div>
        <div className="lg:flex bg-jubalViolet rounded-[1rem] px-[1.5rem] cursor-pointer py-[1rem]  hidden ">
          <Image
            src={ImageIcons.swapHorizontal}
            alt="Switch Icon"
            width="20"
            height="20"
          />
          <p
            onClick={switchUser}
            className="text-white text-[1.6rem] ml-[0.5rem]"
          >
            Switch to Client
          </p>
        </div>
        <div className=" hidden lg:flex justify-between bg-white p-[1rem] rounded-[0.8rem] w-[40%] ">
          <input
            type="text"
            placeholder="Search"
            className="text-[1.6rem] w-[90%] active:outline-none hover:outline-none outline-none"
          />
          <Image
            src={"/dashboard/search.svg"}
            alt="Search Icon"
            width="20"
            height="20"
          />
        </div>
        <div className="flex items-center justify-en">
          <div className="flex justify-center items-center mr-[2rem] ">
            <Image
              src={"/dashboard/profile-new.svg"}
              alt="User Icon"
              width="44"
              height="44"
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className=" rounded-[50%] bg-white w-[5rem] h-[5rem] flex justify-center items-center">
            <Image
              src={"/dashboard/notification.svg"}
              alt="Notification Icon"
              width="20"
              height="20"
            />
          </div>
        </div>
      </header>
      <div></div>
    </>
  );
}
