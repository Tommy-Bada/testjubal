import { config } from "@/config";
import NotificationItem from "./NotificationItem";
import Image from "next/image";
import { ImageIcons } from "@/shared/components/ImageIcons";

export default function NotificationBox() {
  return (
    <div className="bg-jubalDashboardBackground rounded-[2rem] w-[49%] p-[3rem]">
      <div className="flex items-center ">
        <div className=" rounded-[50%] bg-white w-[5rem] h-[5rem] flex justify-center items-center ">
          <Image
            src={ImageIcons.notificationIcon}
            alt="Notification Icon"
            width="20"
            height="20"
          />
        </div>
        <p className="text-jubalNav text-[1.8rem] font-[700] ml-[1rem]">
          Recent Notifications
        </p>
      </div>
      <div className="bg-white px-[2rem] py-[4rem] rounded-[1rem] mt-[2rem]">
        <NotificationItem
          name="Creative Studios"
          type="Message"
          action="Reply"
        />
        <hr />
        <NotificationItem
          name=" Production Designer"
          type="New Gig Application"
          action="View"
        />
        <hr />
        <NotificationItem
          name="Sound Engineer"
          type="New Gig Application"
          action="View"
        />
        <hr />
        <NotificationItem
          name="Creative Studios"
          type="Message"
          action="Reply"
        />
        <hr />
        <NotificationItem
          name="Your Profile is 20% Complete"
          type="Profile"
          action="Complete Profile"
        />
      </div>
    </div>
  );
}
