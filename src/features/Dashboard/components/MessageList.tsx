import Image from "next/image";
import { searchIcon, placeholderImage } from "@/image";
import MessageItem from "./MessageItem";

export default function MessageList() {
  return (
    <div className="bg-white p-[2rem] rounded-[2rem] w-[35%]">
      <div className=" hidden lg:flex justify-between bg-jubalDashboardBackground p-[1rem] rounded-[0.8rem]">
        <input
          type="text"
          placeholder="Search"
          className="text-[1.6rem] w-[90%] active:outline-none hover:outline-none outline-none bg-jubalDashboardBackground"
        />
        <Image src={searchIcon} alt="Search Icon" width="20" height="20" />
      </div>
      <div className="mt-[3rem]">
        <MessageItem
          profileImage={placeholderImage}
          name="Killian James"
          textOrTyping="Hello"
          time="10:00 PM"
        />
        <hr className="mt-[1rem] mb-[3rem]" />
        <MessageItem
          profileImage={placeholderImage}
          name="Killian James"
          textOrTyping="Hello"
          time="10:00 PM"
        />
        <hr className="mt-[1rem] mb-[3rem]" />
        <MessageItem
          profileImage={placeholderImage}
          name="Killian James"
          textOrTyping="Hello"
          time="10:00 PM"
        />
      </div>
    </div>
  );
}
