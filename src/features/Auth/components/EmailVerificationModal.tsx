import Image from "next/image";
import { MouseEventHandler } from "react";
import { cancelBtn, emailVerication } from "@/image";

interface EmailVerificationModalProps {
  isVisible: boolean;
}

export default function EmailVerificationModal({
  isVisible,
  handleRemoveModal,
}: EmailVerificationModalProps & { handleRemoveModal: MouseEventHandler }) {
  if (!isVisible) return null;
  return (
    <div className=" bg-jubalModalBackgroundColor fixed inset-0 bg-opacity-70 flex justify-center items-center">
      <div className="bg-white w-[80%] sm:w-[60%] lg:w-[60rem] p-[2rem] rounded-[2rem] lg:p-[3rem] ">
        <div className="flex justify-end" onClick={handleRemoveModal}>
          <Image
            src={cancelBtn}
            alt="cancel icon"
            width="30"
            height="30"
            className="w-[2rem]"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={emailVerication}
            alt="email verification icon"
            width="100"
            height="100"
            className="w-[12rem] lg:w-[15rem]"
          />
        </div>
        <p className="text-center text-[1.6rem] w-[96%] mx-auto lg:text-[2.4rem] lg:w-[70%]">
          A verification mail has been sent to your E-mail
        </p>
        <p className="text-center text-[1.2rem] mt-[3rem] mb-[1rem] lg:text-[1.6rem] lg:mt-[5rem]">
          Didn&apos;t receive the mail?{" "}
          <span className="text-[1.2rem] text-jubalViolet lg:text-[1.6rem]">
            Resend mail
          </span>
        </p>
      </div>
    </div>
  );
}
