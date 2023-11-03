import Image from "next/image";
import { MouseEventHandler } from "react";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

interface SuccessModalProps {
  isVisible: boolean;
  buttonText: string;
  text: string;
  link?: string;
  handleRemoveModal: MouseEventHandler;
}

export default function SuccessModal({
  isVisible,
  handleRemoveModal,
  text,
  link,
  buttonText,
}: SuccessModalProps) {
  if (!isVisible) return null;
  return (
    <div className="bg-[#D9D9D9] fixed inset-0 bg-opacity-70 flex justify-center items-center">
      <div className="bg-white w-[80%] sm:w-[60%] lg:w-[60rem] p-[2rem] rounded-[2rem] lg:p-[3rem] ">
        <div className="flex justify-center items-center">
          <Image
            src="/success.svg"
            alt="success icon"
            width="100"
            height="100"
            className="w-[12rem] lg:w-[15rem]"
          />
        </div>
        <p className="text-center text-[1.6rem] w-[96%] mx-auto lg:text-[2.4rem] lg:w-[70%]">
          {text}
        </p>
        <div className="flex justify-center mt-[3rem] lg:mt-[5rem]">
          <Link href={`${link}`}>
            <Button
              variant="filled"
              className="bg-jubalDark text-[1.6rem] normal-case"
              onClick={handleRemoveModal}
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
