import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { config } from "@/config";
interface GigItemProps {
  profileImage: string;
  title: string;
  name: string;
  rating: string;
  location: string;
}

export default function GigItem({
  profileImage,
  title,
  name,
  rating,
  location,
}: GigItemProps) {
  return (
    <div className="bg-white p-[2rem] rounded-[3rem] my-[1.5rem]">
      <div className="flex items-start justify-between ">
        <div className="flex items-center">
          <Image
            src={`http://localhost:3000/${profileImage}`}
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
            src={config.siteBaseUrl+"/dashboard/heart.svg"}
            alt="Like Icon"
            width="36"
            height="36"
          />
        </div>
      </div>
      <hr className="my-[1rem]" />
      <div className="ratings flex justify-between mb-3 items-center gap-[var(--4,16px)]">
        <div className="flex star w-[106px] h-[17px]">
        <Image
            src={config.siteBaseUrl+"/dashboard/star.svg"}
            alt="Like Icon"
            width="36"
            height="36"
          />
        <Image
            src={config.siteBaseUrl+"/dashboard/star.svg"}
            alt="Like Icon"
            width="36"
            height="36"
          />
        <Image
            src="../dashboard/star.svg"
            alt="Like Icon"
            width="36"
            height="36"
          />
        <Image
            src="../dashboard/star.svg"
            alt="Like Icon"
            width="36"
            height="36"
          />
        <Image
            src="../dashboard/star-white.svg"
            alt="Like Icon"
            width="36"
            height="36"
          />
        </div>
        <div className="value text-[color:var(--black-text-color,#4E4E4E)] text-[18px] not-italic font-bold leading-[normal]">4.8</div>

<Link href={"#"}>
<div className="view-profile w-[111px] h-[21px] text-jubalViolet text-right text-[15px] not-italic font-medium leading-[145%]">
          View Profile
        </div>
</Link>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image
            src="../dashboard/location.svg"
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
          Message
        </Button>
      </div>
    </div>
  );
}
