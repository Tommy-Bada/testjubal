import { config } from "@/config";
import { ImageIcons } from "@/shared/components/ImageIcons";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface TransactionProps {
  profileImage: StaticImageData;
  title: string;
  type: string;
  amount: string;
  day: string;
}

export default function Transaction({
  profileImage,
  title,
  type,
  amount,
  day,
}: TransactionProps) {
  return (
    <div className="bg-white p-[2rem] justify-between flex rounded-[2rem] mb-[1.5rem]">
      <div className="flex">
        <Image src={profileImage} alt="" width="36" height="36" />
        <div className="ml-[1rem]">
          <p className="text-[1.6rem] font-[700] text-jubalNav">{title}</p>
          <p className="text-[1.2rem] text-jubalGrey my-[1rem]">{type}</p>
          <p className="text-[1.2rem] text-jubalViolet">See Details</p>
        </div>
      </div>
      <div>
        <div className="flex mb-[2rem]">
          <Image
            src={ImageIcons.payIcon}
            alt="Currency Icon"
            width="22"
            height="16"
          />
          <p className="text-[1.4rem] text-jubalNav ml-[1rem]">{`$${amount}`}</p>
        </div>
        <p className="text-[1.4rem] text-right text-jubalFooterText">{day}</p>
      </div>
    </div>
  );
}
