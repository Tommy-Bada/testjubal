import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import Link from "next/link";
function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const handleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center py-[2rem] sm:p-[3rem] lg:px-[5rem] px-[2rem] relative  bg-white z-20 ">
        <div>
          <Image
            src="/Logo.png"
            alt="jubal logo"
            width="170"
            height="54"
            className="w-[5rem] sm:w-[7rem] lg:w-[10rem]"
          />
        </div>
        <ul className="hidden lg:flex text-jubalNav">
          <li className="mr-[4rem] text-[1.8rem]">Home</li>
          <li className="mr-[4rem] text-[1.8rem]">Find Gigs</li>
          <li className="mr-[4rem] text-[1.8rem]">Who we are</li>
          <li className="text-[1.8rem]">Find Music Pros</li>
        </ul>
        <div className="hidden lg:flex">
          <Link href="/login">
            <Button
              variant="outlined"
              className="mr-[2rem] border-jubalDark text-jubalDark text-[1.6rem] normal-case"
            >
              Login
            </Button>
          </Link>
          <Link href="/signin">
            <Button
              variant="filled"
              className="bg-jubalDark text-[1.6rem] normal-case"
            >
              Sign Up
            </Button>
          </Link>
        </div>
        <div className="lg:hidden block" onClick={handleMobileMenu}>
          <div className="w-[3rem] h-[2px] bg-jubalDark mb-[0.6rem]"></div>
          <div
            className={` h-[2px] bg-jubalDark mb-[0.6rem] transition-all duration-300 ease-out ${
              isMobileOpen ? "w-[2rem]" : "w-[3rem]"
            }`}
          ></div>
          <div
            className={` h-[2px] bg-jubalDark mb-[0.6rem] transition-all duration-300 ease-out ${
              isMobileOpen ? "w-[1rem]" : "w-[3rem]"
            }`}
          ></div>
        </div>
      </header>
      <header
        className={`text-center h-[100vh] w-[100%] p-[5rem] absolute bg-white  lg:hidden z-10 transition-all duration-300 ease-out  ${
          isMobileOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-[-100vh] opacity-0"
        }`}
      >
        <ul className="mb-[5rem] text-jubalNav">
          <li className="mb-[2rem] text-[1.8rem]">Home</li>
          <li className="mb-[2rem] text-[1.8rem]">Find Gigs</li>
          <li className="mb-[2rem] text-[1.8rem]">Who we are</li>
          <li className="mb-[2rem] text-[1.8rem]">Find Music Pros</li>
        </ul>
        <div className="mx-[auto]">
          <Button
            variant="outlined"
            className="mb-[2rem] border-jubalDark text-jubalDark w-[60%] text-[1.6rem] normal-case"
          >
            Login
          </Button>
          <br />
          <Button
            variant="filled"
            className="bg-jubalDark  w-[60%] text-[1.6rem] normal-case"
          >
            Sign Up
          </Button>
        </div>
      </header>
    </>
  );
}
export default Header;
