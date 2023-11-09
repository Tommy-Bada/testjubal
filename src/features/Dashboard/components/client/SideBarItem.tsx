import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface SideBarItemProps {
  image: string | StaticImageData;
  text: string;
  link: string;
  active: boolean;
}
export default function SideBarItem({
  image,
  text,
  link,
  active,
}: SideBarItemProps) {
  return (
    <div
      className={`inline-flex flex-col mt-[2rem] justify-center gap-[var(--2,8px)] rounded-[var(--2,8px)] w-full ${
        active ? "bg-jubalViolet" : ""
      }`}
    >
      <div className="flex items-center my-[4px] mx-[4px] gap-[var(--3,12px)]">
        <Image src={image} alt={`${image} icon`} width="36" height="36" />
        <Link href={link}>
          <p
            className={`${
              active ? " text-white" : "text-jubalViolet"
            } text-[1.8rem] ml-[1.2rem]`}
          >
            {text}
          </p>
        </Link>
      </div>
    </div>
  );
}
