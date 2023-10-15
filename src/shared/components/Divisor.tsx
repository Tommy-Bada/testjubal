import Image from "next/image";

export default function Divisor() {
  return (
    <div className="flex justify-between py-[2rem] px-[1rem] sm:p-[3rem] lg:p-[5rem]">
      <div>
        <Image
          src="/divisorLogo.svg"
          alt="jubal logo"
          width="100"
          height="30"
          className="w-[4rem] sm:w-[5rem] lg:w-[10rem]"
        />
      </div>
      <div>
        <Image
          src="/divisorLogo.svg"
          alt="jubal logo"
          width="100"
          height="30"
          className="w-[4rem]  sm:w-[5rem] lg:w-[10rem]"
        />
      </div>
      <div>
        <Image
          src="/divisorLogo.svg"
          alt="jubal logo"
          width="100"
          height="30"
          className="w-[4rem]  sm:w-[5rem] lg:w-[10rem]"
        />
      </div>
      <div>
        <Image
          src="/divisorLogo.svg"
          alt="jubal logo"
          width="100"
          height="30"
          className="w-[4rem]  sm:w-[5rem] lg:w-[10rem]"
        />
      </div>
    </div>
  );
}
