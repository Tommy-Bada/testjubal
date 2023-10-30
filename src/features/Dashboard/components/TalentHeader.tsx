import Image from "next/image";

export default function TalentHeader() {
  return (
    <>
      <header className="flex justify-between items-center w-[100%] bg-jubalDashboardBackground h-[6.4rem] p-[2rem] rounded-[12px] ">
        <div className="w-[3.2rem] h-[3.2rem] bg-jubalDark rounded-[50%] flex flex-col items-center justify-center lg:hidden">
          <div className="w-[1.2rem] bg-white h-[2px]"></div>
          <div className="w-[1.2rem] bg-white h-[2px] my-[2px]"></div>
          <div className="w-[1.2rem] bg-white h-[2px]"></div>
        </div>
        <div className="lg:flex bg-jubalViolet rounded-[1rem] px-[1rem] py-[0.5rem] hidden ">
          <Image
            src="dashboard/swap-horizontal.svg"
            alt="Switch Icon"
            width="20"
            height="20"
          />
          <p className="text-white text-[1.8rem] ml-[0.5rem]">
            Switch to Client
          </p>
        </div>
        <div className=" hidden lg:flex justify-between bg-white p-[1rem] rounded-[0.8rem] w-[50%] ">
          <input
            type="text"
            placeholder="Search"
            className="text-[1.6rem] w-[90%] active:outline-none hover:outline-none outline-none"
          />
          <Image
            src="dashboard/search.svg"
            alt="Search Icon"
            width="20"
            height="20"
          />
        </div>
        <div className="flex items-center justify-en">
          <div className="flex justify-center items-center  ">
            <Image
              src="dashboard/profile.png"
              alt="User Icon"
              width="150"
              height="150"
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className=" rounded-[50%] bg-white w-[5rem] h-[5rem] flex justify-center items-center">
            <Image
              src="dashboard/notification.svg"
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
