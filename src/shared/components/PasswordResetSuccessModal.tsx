import Image from "next/image";
import { MouseEventHandler } from "react";
import { Button } from "@material-tailwind/react";

interface PasswordResetSuccessModalProps {
  isVisible: boolean;
}

export default function PasswordResetSuccessModal({
  isVisible,
  handleRemoveModal,
}: PasswordResetSuccessModalProps & { handleRemoveModal: MouseEventHandler }) {
  if (!isVisible) return null;
  return (
    <div className="bg-white fixed inset-0 bg-opacity-50 flex justify-center items-center">
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
          Your Password reset was successful
        </p>
        <div className="flex justify-center mt-[3rem] lg:mt-[5rem]">
          <Button
            variant="filled"
            className="bg-jubalDark text-[1.6rem] normal-case"
            onClick={handleRemoveModal}
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
}
