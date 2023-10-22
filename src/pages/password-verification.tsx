import Header from "@/shared/components/Header";
import Divisor from "@/shared/components/Divisor";
import Subscribe from "@/shared/components/Subscribe";
import Footer from "@/shared/components/Footer";
import { Button } from "@material-tailwind/react";
import LoginLeft from "@/shared/components/LoginLeft";
import Link from "next/link";

export default function PasswordVerification() {
  return (
    <div>
      <Header />
      <div
        style={{ background: "url(/loginHero.png)" }}
        className="p-[2rem] sm:flex sm:justify-between sm:items-center sm:px-[5rem] sm:py-[8rem]"
      >
        <LoginLeft />
        <div className="bg-white rounded-2xl p-[2rem] text-jubalFormText my-[3rem] sm:my-0 lg:p-[3rem] lg:w-[40%]">
          <h2 className="text-[2rem]">Enter Verification Code</h2>
          <form className="mt-[2rem]">
            <div className="mb-[2rem]">
              <label className="text-[1.6rem]">
                A six-digit verification code was sent to the email you
                registered with Jubal.
              </label>
              <input
                name="email"
                type="number"
                className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
                placeholder="please enter code here"
              />
            </div>
            <Link href="/createnewpassword">
              <Button
                variant="filled"
                className=" bg-jubalViolet w-[100%] normal-case text-[1.6rem] py-[1rem]"
              >
                Submit
              </Button>
            </Link>
          </form>
          <p className="text-center my-[2rem] text-[1.6rem]">
            Didn&apos;t receive the mail?{" "}
            <span className="text-jubalViolet ml-2 text-[1.6rem]">
              Resend mail
            </span>
          </p>
        </div>
      </div>
      <Divisor />
      <Subscribe />
      <Footer />
    </div>
  );
}
