import Image from "next/image";
import { arrowLeftIcon } from "@/image";

interface PrevBtnProps {
  handleClick: () => void;
}

export default function PrevBtn({ handleClick }: PrevBtnProps) {
  return (
    <div className="flex items-center" onClick={handleClick}>
      <Image src={arrowLeftIcon} alt="arrow icon" width="20" height="20" />
      <p className="text-[1.4rem] text-jubalViolet font-[600] ml-[.8rem]">
        Previous
      </p>
    </div>
  );
}
