import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { config } from "@/config";
interface GigItemProps {
  profileImage: string;
  title: string;
  name: string;
  startPrice: string;
  endPrice: string;
  location: string;
  isLiked: boolean;
  handleLike: () => void;
}

export default function GigItem({
  profileImage,
  title,
  name,
  startPrice,
  endPrice,
  location,
  isLiked,
  handleLike,
}: GigItemProps) {
  return (
    <div className="bg-white p-[2rem] rounded-[3rem] my-[1.5rem]">
      <div className="flex items-start justify-between ">
        <div className="flex items-center">
          <Image
            src={config.siteBaseUrl+"/"+profileImage}
            alt={`${profileImage} icon`}
            width="40"
            height="40"
          />
          <div className="ml-[1rem]">
            <p className="text-[1.6rem] font-[700] text-jubalNav">{title}</p>
            <p className="text-[1.3rem] mt-[1rem]">{name}</p>
          </div>
        </div>
        <div onClick={handleLike}>
          <Image
            src={`${
              isLiked ? config.siteBaseUrl+"/dashboard/heart-liked.svg" : "../dashboard/heart.svg"
            }`}
            alt="Like Icon"
            width="30"
            height="30"
          />
        </div>
      </div>
      <hr className="my-[1rem]" />
      <div className="flex mb-[1rem] ">
        <Image
          src={config.siteBaseUrl+"/dashboard/pay.svg"}
          alt="Currency Icon"
          width="22"
          height="16"
        />
        <p className="text-[1.4rem] text-jubalNav ml-[.5rem]">
          {`$${startPrice} - $${endPrice} `}
          <span className="text-[1.4rem] text-jubalFooterText"> / monthly</span>
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image
            src={config.siteBaseUrl+"/dashboard/location.svg"}
            alt="Location Icon"
            width="14"
            height="20"
          />
          <p className="text-[1.4rem] text-jubalNav ml-[.5rem]">{location}</p>
        </div>
        <Button
          variant="filled"
          className="bg-jubalDark text-[1.4rem] normal-case"
        >
          Apply
        </Button>
      </div>
    </div>
  );
}
