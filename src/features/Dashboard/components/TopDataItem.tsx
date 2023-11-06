import { config } from "@/config";
import Image from "next/image";
interface TopDataItemProps {
  image: string;
  text: string;
  number: string;
  background: string;
}

export default function TopDataItem({
  image,
  text,
  number,
  background,
}: TopDataItemProps) {
  return (
    <div className="w-[32%] bg-white p-[2rem] mr-[2rem] rounded-[1rem]">
      <div
        style={{ backgroundColor: background }}
        className="w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center p-[1.2rem]"
      >
        <Image src={config.siteBaseUrl+"/"+image} alt={`${image} icon`} width="30" height="30" />
      </div>
      <p className="text-[1.6rem] font-[700] my-[2rem] text-jubalNav">{text}</p>
      <p className="text-[1.4rem] text-jubalFooterText">{number}</p>
    </div>
  );
}
