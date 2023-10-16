import Header from "@/shared/components/Header";
import Divisor from "@/shared/components/Divisor";
import Subscribe from "@/shared/components/Subscribe";
import Footer from "@/shared/components/Footer";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import LoginLeft from "@/shared/components/LoginLeft";

export default function CreateNewPassword() {
  return (
    <div>
      <Header />
      <div
        style={{ background: "url(/loginHero.png)" }}
        className="p-[2rem] sm:flex sm:justify-between sm:items-center sm:px-[5rem] sm:py-[8rem]"
      >
        <LoginLeft />
        <div className="bg-white rounded-2xl p-[2rem] text-jubalFormText my-[3rem] sm:my-0 lg:p-[3rem] lg:w-[40%]">
          <h2 className="text-[2rem]">Create a New Password</h2>
          <form className="mt-[2rem]">
            <div className="mb-[2rem] ">
              <label className="text-[1.6rem]">New Password</label>
              <input
                name="password"
                type="password"
                className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
                placeholder="********"
              />
            </div>
            <div className="mb-[2rem] ">
              <label className="text-[1.6rem]">Confirm New Password</label>
              <input
                name="password"
                type="password"
                className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
                placeholder="********"
              />
            </div>
            <Button
              variant="filled"
              className=" bg-jubalViolet w-[100%] normal-case text-[1.6rem] py-[1rem]"
            >
              Submit
            </Button>
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
