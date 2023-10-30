import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface SideBarItemProps {
  image: string;
  activeImage: string;
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
        } px-[2rem] py-[1rem] rounded-[0.8rem]`}
      >
        <Image
          src={`/${active ? activeImage : image}`}
          alt={`${image} icon`}
          width="36"
          height="36"
        />
        <p
          className={`text-[1.8rem] text-${
            active ? "white" : "jubalViolet"
          }  ml-[1.2rem]`}
        >
          {text}
        </p>
      </div>
    </Link>
  );
}
