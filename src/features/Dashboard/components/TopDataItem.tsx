import Image from "next/image";
interface TopDataItemProps {
  image: string;
  text: string;
  number: string;
}

export default function TopDataItem({ image, text, number }: TopDataItemProps) {
  return (
    <div>
      <Image src={`/${image}`} alt={`${image} icon`} width="40" height="40" />
      <p>{text}</p>
      <p>{number}</p>
    </div>
  );
}
