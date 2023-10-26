import Image from "next/image";
import { string } from "yup";
interface FacebookGoogleBtnProps {
  buttonText: string;
  iconSrc: string;
  alt: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
export default function FacebookGoogleBtn({
  buttonText,
  iconSrc,
  alt,
  onClick,
}: FacebookGoogleBtnProps) {
  return (
    <div
      className=" flex justify-center items-center px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalViolet my-[2rem] hover:cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={iconSrc}
        alt={alt}
        width="30"
        height="30"
        className="mr-[1rem] w-[2rem] "
      />
      <p className="text-[1.6rem]">{buttonText}</p>
    </div>
  );
}
