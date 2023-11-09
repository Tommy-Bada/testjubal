import { number } from "yup";
import Contact from "./Contact";
import FAQs from "./FAQs";
import { Switch } from "@material-tailwind/react";
import { useState } from "react";
import Image from "next/image";
<<<<<<< HEAD
import { ImageIcons } from "@/shared/components/ImageIcons";
=======
import {
  settingsEmailIcon,
  settingsLocationIcon,
  settingsPhoneIcon,
  logoutIcon,
} from "@/image";
>>>>>>> 715000f27ed646488bb90ebe41a56bde9128213f
import Button from "@material-tailwind/react";

export default function SettingsBox() {
  interface FAQsProps {
    question: string;
    answer: string;
  }
  const [isHelpAndSupportClicked, setIsHelpAndSupportClicked] =
    useState<Boolean>(true);
  const [isPlatformSettingsClicked, setIsPlatformSettingsClicked] =
    useState<Boolean>(false);
  const [isBankAccountClicked, setIsBankAccountClicked] =
    useState<Boolean>(false);
  const [isLogoutClicked, setIsLogoutClicked] = useState<Boolean>(false);

  const handleHelpAndSupportClick = () => {
    setIsHelpAndSupportClicked(true);
    setIsPlatformSettingsClicked(false);
    setIsBankAccountClicked(false);
    setIsLogoutClicked(false);
  };

  const handlePlatformSettingsClick = () => {
    setIsHelpAndSupportClicked(false);
    setIsPlatformSettingsClicked(true);
    setIsBankAccountClicked(false);
    setIsLogoutClicked(false);
  };

  const handleBankAccountClick = () => {
    setIsHelpAndSupportClicked(false);
    setIsPlatformSettingsClicked(false);
    setIsBankAccountClicked(true);
    setIsLogoutClicked(false);
  };

  const handleLogoutClick = () => {
    setIsHelpAndSupportClicked(false);
    setIsPlatformSettingsClicked(false);
    setIsBankAccountClicked(false);
    setIsLogoutClicked(true);
  };

  const faqs: FAQsProps[] = [
    {
      question: "What is Jubal, and how does it work",
      answer:
        " Jubal is a comprehensive marketplace software designed to facilitate online transactions between buyers and sellers. It provides a platform where businesses can list their products or services, and customers can browse, compare, and make purchases. Jubal handles payment processing, user authentication, and other essential features to create a seamless online marketplace experience.",
    },
  ];

  return (
    <div className="bg-white rounded-[2rem] p-[2rem] h-[100%]">
      <div className="flex mb-[3rem]">
        <p
          className={`${
            isHelpAndSupportClicked
              ? "text-white  bg-jubalViolet"
              : "bg-white text-jubalViolet"
          } text-[1.4rem]  py-[0.8rem] px-[1.2rem] mr-[1.3rem] rounded-[.6rem] font-[600] cursor-pointer`}
          onClick={handleHelpAndSupportClick}
        >
          Help & Support
        </p>
        <p
          className={`${
            isPlatformSettingsClicked
              ? "text-white  bg-jubalViolet"
              : "bg-white text-jubalViolet"
          } text-[1.4rem]  py-[0.8rem] px-[1.2rem] mr-[1.3rem] rounded-[.6rem] font-[600] cursor-pointer`}
          onClick={handlePlatformSettingsClick}
        >
          Platform Settings
        </p>
        <p
          className={`${
            isBankAccountClicked
              ? "text-white  bg-jubalViolet"
              : "bg-white text-jubalViolet"
          } text-[1.4rem]  py-[0.8rem] px-[1.2rem] mr-[1.3rem] rounded-[.6rem] font-[600] cursor-pointer`}
          onClick={handleBankAccountClick}
        >
          Bank Account
        </p>
        <p
          className={`${
            isLogoutClicked
              ? "text-white  bg-jubalViolet"
              : "bg-white text-jubalViolet"
          } text-[1.4rem]  py-[0.8rem] px-[1.2rem] mr-[1.3rem] rounded-[.6rem] font-[600] cursor-pointer`}
          onClick={handleLogoutClick}
        >
          Logout
        </p>
      </div>

      <div>
        {isHelpAndSupportClicked && (
          <div>
            <h1 className=" text-[2rem] text-jubalGrey font-[700] mb-[2rem]">
              Let&apos;s stay connected
            </h1>
            <p className="text-[1.4rem] text-[#727A86] w-[50%]">
              It&apos;s never been easier to get in touch with Flex. Call us, or
              send an email and we&apos;ll get back to you as soon as possible!
            </p>
            <div className="flex my-[3rem]">
              <Contact
                image={settingsEmailIcon}
                title="Email"
                text="contact@jubalglobal.com"
              />
              <Contact
                image={settingsPhoneIcon}
                title="Phone"
                text="+234 812 345 6789"
              />
              <Contact
                image={settingsLocationIcon}
                title="Office"
                text="1437 Sanusi Fafunwa St, Victoria Island 106104, Lagos."
              />
            </div>
            <h1 className=" text-[2rem] text-jubalGrey font-[700] mt-[3rem] mb-[2rem]">
              FAQs
            </h1>
            <div>
              {faqs.map((item, index) => (
                <FAQs
                  number={index + 1}
                  question={item.question}
                  answer={item.answer}
                  key={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        {isPlatformSettingsClicked && (
          <div>
            <h1 className="text-jubalFooterGrey font-[700] text-[2rem] mb-[2.5rem]">
              Newsletter
            </h1>
            <div className="mb-[2.5rem]">
              <Switch
                crossOrigin={undefined}
                label="Subscribe to Newsletter"
                ripple={true}
                id="switch-to-newsletter"
                className="w-full h-full checked:bg-jubalViolet"
                labelProps={{
                  className:
                    "text-[1.6rem] ml-[1rem] text-jubalFooterGrey font-[400]",
                }}
                containerProps={{
                  className: "w-12 h-6",
                }}
                circleProps={{
                  className: "before:hidden left-0.5 border-none",
                }}
              />
            </div>
            <div className="mb-[2.5rem]">
              <Switch
                crossOrigin={undefined}
                label="Monthly Product Update"
                ripple={true}
                id="switch-to-prodcuct-update"
                className="w-full h-full checked:bg-jubalViolet"
                labelProps={{
                  className:
                    "text-[1.6rem] ml-[1rem] text-jubalFooterGrey font-[400]",
                }}
                containerProps={{
                  className: "w-12 h-6",
                }}
                circleProps={{
                  className: "before:hidden left-0.5 border-none",
                }}
              />
            </div>
            <div className="mb-[2.5rem]">
              <Switch
                crossOrigin={undefined}
                label="New Launches and Projects"
                ripple={true}
                id="switch-to-new-launches"
                className="w-full h-full checked:bg-jubalViolet"
                labelProps={{
                  className:
                    "text-[1.6rem] ml-[1rem] text-jubalFooterGrey font-[400]",
                }}
                containerProps={{
                  className: "w-12 h-6",
                }}
                circleProps={{
                  className: "before:hidden left-0.5 border-none",
                }}
              />
            </div>

            <h1 className="text-jubalFooterGrey font-[700] text-[2rem] my-[3rem]">
              Account Settings
            </h1>

            <div className="mb-[2.5rem]">
              <Switch
                crossOrigin={undefined}
                label="Email me when someone view application"
                ripple={true}
                id="switch-to-view-application"
                className="w-full h-full checked:bg-jubalViolet"
                labelProps={{
                  className:
                    "text-[1.6rem] ml-[1rem] text-jubalFooterGrey font-[400]",
                }}
                containerProps={{
                  className: "w-12 h-6",
                }}
                circleProps={{
                  className: "before:hidden left-0.5 border-none",
                }}
              />
            </div>
            <div className="mb-[2.5rem]">
              <Switch
                crossOrigin={undefined}
                label="Email me when someone sends message through my application"
                ripple={true}
                id="switch-to-message-application"
                className="w-full h-full checked:bg-jubalViolet"
                labelProps={{
                  className:
                    "text-[1.6rem] ml-[1rem] text-jubalFooterGrey font-[400]",
                }}
                containerProps={{
                  className: "w-12 h-6",
                }}
                circleProps={{
                  className: "before:hidden left-0.5 border-none",
                }}
              />
            </div>
            <div className="mb-[2.5rem]">
              <Switch
                crossOrigin={undefined}
                label="Email me when someone sends a payment"
                ripple={true}
                id="switch-to-send-payment"
                className="w-full h-full checked:bg-jubalViolet"
                labelProps={{
                  className:
                    "text-[1.6rem] ml-[1rem] text-jubalFooterGrey font-[400]",
                }}
                containerProps={{
                  className: "w-12 h-6",
                }}
                circleProps={{
                  className: "before:hidden left-0.5 border-none",
                }}
              />
            </div>
          </div>
        )}
      </div>
      <div>
        {isBankAccountClicked && (
          <div>
            <p className="text-[1.4rem] text-jubalNav">
              In order to withdraw from Jubal Wallet you need to link an active
              bank account
            </p>
            <form className="mt-[3rem]">
              <div className="mb-[2rem] w-[46%]">
                <label className="text-[1.4rem] font-[600]">Bank</label>
                <select
                  className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.4rem]"
                  id="selectBank"
                  name="selectBank"
                >
                  <option>Select Bank</option>
                  <option value="1 Year">First Bank</option>
                  <option value="1 Years">Wema Bank</option>
                  <option value="1 Years">United Bank of Africa</option>
                </select>
              </div>
              <div className="mb-[2rem] w-[46%]">
                <label
                  className="text-[1.4rem] font-[600]"
                  htmlFor="accountNumber"
                >
                  Account Number
                </label>
                <input
                  id="accountNumber"
                  name="accountNumber"
                  type="text"
                  className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.4rem]"
                  placeholder="Please Enter Your Account Number"
                />
              </div>
            </form>
          </div>
        )}
      </div>
      <div>
        {isLogoutClicked && (
          <div>
            <h1 className="text-jubalFooterGrey font-[700] text-[2rem] my-[3rem]">
              Logout
            </h1>
            <div className="flex items-center">
              <Image
                src={ImageIcons.logoutIcon}
                alt="logout icon"
                height="40"
                width="40"
              />
              <p className="text-jubalFooterGrey text-[1.6rem] ml-[1rem]">
                Logout Of your Jubal account
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
