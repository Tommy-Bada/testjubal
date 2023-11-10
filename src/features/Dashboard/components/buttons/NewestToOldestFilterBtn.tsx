import Image from "next/image";
import { arrowDownIcon } from "@/image";

interface NewestToOldestFilterBtnProps {
  handleFilter: () => void;
}

export default function NewestToOldestFilterBtn({
  handleFilter,
}: NewestToOldestFilterBtnProps) {
  return (
    <div
      className="flex items-center bg-white p-[1rem] rounded-[1rem]"
      onClick={handleFilter}
    >
      <p className="text-[1.6rem] text-jubalViolet p-[1rem]">Newest</p>
      <Image src={arrowDownIcon} alt="arrow icon" width="20" height="20" />
    </div>
  );
}
