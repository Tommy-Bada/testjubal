import Image from "next/image";
import Link from "next/link";
interface SideBarItemProps {
  image: string;
  text: string;
  link: string;
}
export default function SideBarItem({ image, text, link }: SideBarItemProps) {
  return (
    <div>
      <div>
        <Image src={`/${image}`} alt={`${image} icon`} width="40" height="40" />
      </div>
      <Link href={link}>
        <p>{text}</p>
      </Link>
    </div>
  );
}
