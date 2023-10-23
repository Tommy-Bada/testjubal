import Image from "next/image";
import Link from "next/link";
interface SideBarItemProps {
  image: string;
  text: string;
  link: string;
}
export default function SideBarItem({ image, text, link }: SideBarItemProps) {
  return (
    <div className="flex items-center my-[1.6rem]">
      <Image src={`/${image}`} alt={`${image} icon`} width="36" height="36" />
      <Link href={link}>
        <p className="text-[1.8rem] text-jubalViolet ml-[1.2rem]">{text}</p>
      </Link>
    </div>
  );
}
