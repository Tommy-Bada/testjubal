import Image from "next/image";

interface NextBtnProps {
  handleClick: () => void;
}

export default function NextBtn({ handleClick }: NextBtnProps) {
  return (
    <div className="flex items-center" onClick={handleClick}>
      <p className="text-[1.4rem] text-jubalViolet font-[600] mr-[.8rem]">
        Next
      </p>
      <Image
        src="/dashboard/arrow-right.svg"
        alt="arrow icon"
        width="20"
        height="20"
      />
    </div>
  );
}
