import Image from "next/image";
import { Button } from "@material-tailwind/react";
interface GigItemProps {
  profileImage: string;
  title: string;
  name: string;
  startPrice: string;
  endPrice: string;
  location: string;
}

export default function GigItem({
  profileImage,
  title,
  name,
  startPrice,
  endPrice,
  location,
}: GigItemProps) {
  return (
    <div className="bg-white p-[2rem] rounded-[3rem] my-[1.5rem]">
      <div className="flex justify-between items-start ">
        <div className="flex items-center">
          <Image
            src={`/${profileImage}`}
            alt={`${profileImage} icon`}
            width="40"
            height="40"
          />
          <div className="ml-[1rem]">
            <p className="text-[1.8rem] font-[700] text-jubalNav">{title}</p>
            <p className="text-[1.4rem] mt-[1rem]">{name}</p>
          </div>
        </div>
        <div>
          <Image
            src="dashboard/heart.svg"
            alt="Like Icon"
            width="36"
            height="36"
          />
        </div>
      </div>
      <hr className="my-[1rem]" />
      <div className="flex mb-[1.5rem] ">
        <Image
          src="dashboard/pay.svg"
          alt="Currency Icon"
          width="22"
          height="16"
        />
        <p className="text-[1.4rem] text-jubalNav ml-[1rem]">
          {`$${startPrice} - $${endPrice} `}
          <span className="text-[1.4rem] text-jubalFooterText"> / monthly</span>
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image
            src="dashboard/location.svg"
            alt="Location Icon"
            width="14"
            height="20"
          />
          <p className="text-[1.4rem] text-jubalNav ml-[1rem]">{location}</p>
        </div>
        <Button
          variant="filled"
          className="bg-jubalDark text-[1.6rem] normal-case"
        >
          Apply
        </Button>
      </div>
    </div>
  );
}
