import Header from "@/shared/components/Header";
import Divisor from "@/shared/components/Divisor";
import Subscribe from "@/shared/components/Subscribe";
import Footer from "@/shared/components/Footer";
import { Button } from "@material-tailwind/react";
import LoginLeft from "@/shared/components/LoginLeft";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div>
      <Header />
      <div
        style={{ background: "url(/loginHero.png)" }}
        className="p-[2rem] sm:flex sm:justify-between sm:items-center sm:px-[5rem] sm:py-[8rem]"
      >
        <LoginLeft />
        <div className="bg-white rounded-2xl p-[2rem] text-jubalFormText my-[3rem] sm:my-0 lg:p-[3rem] lg:w-[40%]">
          <h2 className="text-[2rem]">Forgot Password</h2>
          <form className="mt-[2rem]">
            <div className="mb-[2rem]">
              <label className="text-[1.6rem]">Email</label>
              <input
                name="email"
                type="email"
                className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
                placeholder="example@thejubal.com"
              />
            </div>
            <Link href="/passwordverification">
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
