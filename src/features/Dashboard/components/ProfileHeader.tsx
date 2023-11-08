import { config } from "@/config";
import Image from "next/image";
import { Images } from "@/shared/components/Images";

export default function ProfileHeader() {
  return (
    <div className="flex items-center ">
      <div className="relative">
        <Image
          src={Images.tomiwaImage}
          alt="Image of Tomiwa"
          width="114"
          height="114"
          className="object-cover rounded-[50%] w-[20.4rem] h-[16rem] border-[0.3rem] border-jubalViolet"
        />
        <Image
          src={Images.cameraIcon}
          alt="camera icon"
          width="36"
          height="36"
          className="absolute bottom-1 right-1 "
        />
      </div>
      <div className="ml-[5rem]">
        <p className="text-[1.8rem] text-jubalGrey font-[700] mb-[1rem]">
          Complete Your profile
        </p>
        <p className="text-[1.8rem] text-jubalGrey font-[400]">
          Adding all necessary information including portfolios can improve your
          chances to be considered by Clients
        </p>
      </div>
    </div>
  );
}
