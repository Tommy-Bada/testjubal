import Image from "next/image";
interface TopDataItemProps {
  image: string;
  text: string;
  number: string;
  background: string;
}
 
// Top Data
export default function TopDataItem({
  image,
  text,
  number,
  background,
}: TopDataItemProps) {
  return (
    <div className="w-[32%] bg-white p-[3rem]">
      <div
        style={{ backgroundColor: background }}
        className="w-[5rem] h-[5rem] rounded-[50%] flex justify-center items-center p-[1.2rem]"
      >
        <Image src={`${image}`} alt={`${image} icon`} width="30" height="30" />
      </div>
      <p className="text-[1.8rem] font-[700] my-[2rem] text-jubalNav">{text}</p>
      <p className="text-[1.6rem] text-jubalFooterText">{number}</p>
    </div>
  );
}
