import Header from "@/shared/components/Header";
import Divisor from "@/shared/components/Divisor";
import Subscribe from "@/shared/components/Subscribe";
import Footer from "@/shared/components/Footer";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import LoginLeft from "@/shared/components/LoginLeft";
import { Switch } from "@material-tailwind/react";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <Header />
      <div
        style={{ background: "url(/loginHero.png)" }}
        className="p-[2rem] sm:flex sm:justify-between sm:items-center sm:px-[5rem] sm:py-[8rem]"
      >
        <LoginLeft />
        <div className="bg-white rounded-2xl p-[2rem] text-jubalFormText my-[3rem] sm:my-0 lg:p-[3rem] lg:w-[50%]">
          <h2 className="text-[2rem]">Welcome Back!</h2>
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
            <div className="mb-[2rem] ">
              <label className="text-[1.6rem]">Password</label>
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
              Login
            </Button>
          </form>
          <div className="flex justify-between my-[2rem]">
            <p className="text-[1.4rem]">
              <Switch
                crossOrigin={undefined}
                className="bg-jubalViolet mr-[1rem]"
              />
              Remember Me
            </p>
            <Link href="/forgotpassword">
              <p className="text-[1.4rem]">Forgot Password?</p>
            </Link>
          </div>
          <div className="flex justify-between items-center my-[2rem]">
            <div className="w-[35%] h-[2px] bg-jubalFormBorder"></div>
            <p className="text-[1.6rem]">Or</p>
            <div className="w-[35%] h-[2px] bg-jubalFormBorder"></div>
          </div>
          <div className=" flex justify-center items-center px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalViolet my-[2rem]">
            <Image
              src="/siwFacebook.svg"
              alt="facebook icon"
              width="30"
              height="30"
              className="mr-[1rem] w-[2rem] "
            />
            <p className="text-[1.6rem]">Login with Facebook</p>
          </div>
          <div className=" flex justify-center items-center px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalViolet my-[2rem]">
            <Image
              src="/siwGoogle.svg"
              alt="google icon"
              width="30"
              height="30"
              className="mr-[1rem] w-[2rem]"
            />
            <p className="text-[1.6rem]">Login with Google</p>
          </div>
          <p className="text-center my-[2rem] text-[1.6rem]">
            If you don&apos;t have an account{" "}
            <Link href="/signin">
              {" "}
              <span className="text-jubalViolet ml-2 text-[1.6rem]">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </div>
      <Divisor />
      <Subscribe />
      <Footer />
    </div>
  );
}
