import { config } from "@/config";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
interface SideBarItemProps {
  image: StaticImageData;
  activeImage: StaticImageData;
  text: string;
  link: string;
  active: boolean;
}
export default function SideBarItem({
  image,
  activeImage,
  text,
  link,
  active,
}: SideBarItemProps) {
  return (
    <Link href={link}>
      <div
        className={`flex items-center my-[1.6rem] bg-${
          active ? "jubalViolet" : "jubalDashboardBackground"
        } px-[1.5rem] py-[1rem] rounded-[0.8rem]`}
      >
        <Image
          src={active ? activeImage : image}
          alt={`${image} icon`}
          width="30"
          height="30"
        />
        <p
          className={`text-[1.6rem] text-${
            active ? "white" : "jubalViolet"
          }  ml-[1.2rem]`}
        >
          {text}
        </p>
      </div>
    </Link>
  );
}
