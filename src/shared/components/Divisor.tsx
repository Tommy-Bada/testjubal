import Image from "next/image";
import { divisor } from "@/image";

export default function Divisor() {
  return (
    <div className="flex justify-between py-[2rem] px-[2rem] sm:p-[3rem] lg:p-[5rem]">
      <div>
        <Image
          src={divisor}
          alt="jubal logo"
          width="100"
          height="30"
          className="w-[5rem] sm:w-[8rem] lg:w-[12rem]"
        />
      </div>
      <div>
        <Image
          src={divisor}
          alt="jubal logo"
          width="100"
          height="30"
          className="w-[5rem] sm:w-[8rem] lg:w-[12rem]"
        />
      </div>
      <div>
        <Image
          src={divisor}
          alt="jubal logo"
          width="100"
          height="30"
          className="w-[5rem] sm:w-[8rem] lg:w-[12rem]"
        />
      </div>
      <div>
        <Image
          src={divisor}
          alt="jubal logo"
          width="100"
          height="30"
          className="w-[5rem] sm:w-[8rem] lg:w-[12rem]"
        />
      </div>
    </div>
  );
}
