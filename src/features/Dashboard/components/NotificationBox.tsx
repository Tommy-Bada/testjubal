import NotificationItem from "./NotificationItem";
import Image from "next/image";

export default function NotificationBox() {
  return (
    <div className="bg-jubalDashboardBackground rounded-[2rem] w-[49%] p-[2rem]">
      <div className="flex items-center ">
        <div className=" rounded-[50%] bg-white w-[5rem] h-[5rem] flex justify-center items-center ">
          <Image
            src={process.env.NEXT_PUBLIC_SITE_BASE_URL+"/dashboard/notification.svg"}
            alt="Notification Icon"
            width="20"
            height="20"
          />
        </div>
        <p className="text-jubalNav text-[1.6rem] font-[700] ml-[1rem]">
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
          name=" Recording Task"
          type="To-Do List"
          action="View"
        />
        <hr />
        <NotificationItem
          name="Sound Engineer"
          type="New Gig Request"
          action="View"
        />
        <hr />
        <NotificationItem
          name="Creative Design Studios"
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
