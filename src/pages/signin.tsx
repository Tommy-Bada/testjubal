import Head from "next/head";
import Header from "@/shared/components/Header";
import Divisor from "@/shared/components/Divisor";
import Subscribe from "@/shared/components/Subscribe";
import Footer from "@/shared/components/Footer";
import SignupLeft from "@/shared/components/SignupLeft";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export default function Signin() {
  return (
    <div>
      <Head>
        <title>Signin</title>
      </Head>
      <Header />
      <div
        style={{ background: "url(/heroBg2.png)" }}
        className="p-[2rem] sm:flex sm:justify-between sm:items-center sm:px-[5rem] sm:py-[8rem]"
      >
        <SignupLeft />
        <div className="bg-white rounded-2xl p-[2rem] text-jubalFormText my-[3rem] sm:my-0 lg:p-[3rem]">
          <h2 className="text-[2rem]">Sign Up with Jubal</h2>
          <form className="mt-[2rem]">
            <div className="mb-[2rem]">
              <label className="text-[1.6rem]">Select Your Service</label>
              <select className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]">
                <option>--Select Your Service--</option>
                <option>Looking for Talents</option>
                <option>Looking for Music Related jobs</option>
              </select>
            </div>
            <div className="mb-[2rem]">
              <label className="text-[1.6rem]">Email</label>
              <input
                name="email"
                type="email"
                className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
                placeholder="example@thejubal.com"
              />
            </div>
            <div className="mb-[2rem]">
              <label className="text-[1.6rem]">Phone Number</label>
              <input
                name="phone"
                type="number"
                className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
                placeholder="909123456"
              />
            </div>
            <div className="mb-[2rem]">
              <label className="text-[1.6rem]">Country</label>
              <select className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]">
                <option>Nigeria</option>
              </select>
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
            <div className="mb-[2rem]">
              <label className="text-[1.6rem]">Confirm Password</label>
              <input
                name="password"
                type="password"
                className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
                placeholder="********"
              />
            </div>
            <Button
              variant="filled"
              className=" bg-jubalPreSignUp w-[100%] normal-case text-[1.6rem] py-[1rem]"
            >
              Sign Up
            </Button>
          </form>
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
            <p className="text-[1.6rem]">Sign Up with Facebook</p>
          </div>
          <div className=" flex justify-center items-center px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalViolet my-[2rem]">
            <Image
              src="/siwGoogle.svg"
              alt="google icon"
              width="30"
              height="30"
              className="mr-[1rem] w-[2rem]"
            />
            <p className="text-[1.6rem]">Sign Up with Google</p>
          </div>
          <p className="text-center my-[2rem] text-[1.6rem]">
            If you already have an account{" "}
            <span className="text-jubalViolet ml-2 text-[1.6rem]">Login</span>
          </p>
        </div>
      </div>
      <Divisor />
      <Subscribe />
      <Footer />
    </div>
  );
}
