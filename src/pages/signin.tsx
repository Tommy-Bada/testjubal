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
        style={{ background: "url(/heroBg.png)" }}
        className="p-[2rem] sm:flex sm:justify-between sm:items-center sm:px-[5rem] sm:py-[8rem]"
      >
        <SignupLeft />
        <div className="bg-white rounded-2xl p-[2rem] text-jubalFormText">
          <h2 className="text-[1.8rem]">Sign Up with Jubal</h2>
          <form className="mt-[2rem]">
            <div className="mb-[2rem]">
              <label>Select Your Service</label>
              <select className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem]">
                <option>--Select Your Service--</option>
                <option>Looking for Talents</option>
                <option>Looking for Music Related jobs</option>
              </select>
            </div>
            <div className="mb-[2rem]">
              <label>Email</label>
              <input
                name="email"
                type="email"
                className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem]"
                placeholder="example@thejubal.com"
              />
            </div>
            <div className="mb-[2rem]">
              <label>Phone Number</label>
              <input
                name="phone"
                type="number"
                className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem]"
                placeholder="909123456"
              />
            </div>
            <div className="mb-[2rem]">
              <label>Country</label>
              <select className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem]">
                <option>Nigeria</option>
              </select>
            </div>
            <div className="mb-[2rem]">
              <label>Password</label>
              <input
                name="password"
                type="password"
                className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem]"
                placeholder="********"
              />
            </div>
            <div className="mb-[2rem]">
              <label>Confirm Password</label>
              <input
                name="password"
                type="password"
                className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem]"
                placeholder="********"
              />
            </div>
            <Button variant="filled" className="bg-jubalDark w-[100%]">
              Sign Up
            </Button>
          </form>
          <div className="flex justify-between items-center my-[2rem]">
            <div className="w-[30%] h-[2px] bg-jubalFormBorder"></div>
            <p>Or</p>
            <div className="w-[30%] h-[2px] bg-jubalFormBorder"></div>
          </div>
          <div className=" flex justify-center items-center px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalViolet mt-[1rem]">
            <Image
              src="/siwFacebook.svg"
              alt="facebook icon"
              width="30"
              height="30"
              className="mr-[1rem] w-[2rem]"
            />
            <p>Sign Up with Facebook</p>
          </div>
          <div className=" flex justify-center items-center px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalViolet mt-[1rem]">
            <Image
              src="/siwGoogle.svg"
              alt="google icon"
              width="30"
              height="30"
              className="mr-[1rem] w-[2rem]"
            />
            <p>Sign Up with Google</p>
          </div>
          <p className="text-center my-[2rem]">
            If you already have an account{" "}
            <span className="text-jubalViolet ml-2">Login</span>
          </p>
        </div>
      </div>
      <Divisor />
      <Subscribe />
      <Footer />
    </div>
  );
}
