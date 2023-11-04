import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="flex items-center ">
      <div className="relative">
        <Image
          src={process.env.NEXT_PUBLIC_SITE_BASE_URL+"/dashboard/Tomiwa.jpg"}
          alt=""
          width="114"
          height="114"
          className="object-cover rounded-[50%] w-[20.4rem] h-[16rem] border-[0.3rem] border-[#2DA5A4]"
        />
        <Image
          src={process.env.NEXT_PUBLIC_SITE_BASE_URL+"/dashboard/camera.svg"}
          alt=""
          width="36"
          height="36"
          className="absolute bottom-1 right-1 "
        />
      </div>
      <div className="ml-[5rem]">
        <p className="text-[1.8rem] text-jubalFormText font-[700] mb-[1rem]">
          Complete Your profile
        </p>
        <p className="text-[1.8rem] text-jubalFormText font-[400]">
          Adding all necessary information including portfolios can improve your
          chances to be considered by Clients
        </p>
      </div>
    </div>
  );
}
