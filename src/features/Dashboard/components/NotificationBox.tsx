import NotificationItem from "./NotificationItem";
import Image from "next/image";

export default function NotificationBox() {
  return (
    <div>
      <div>
        <Image
          src="notification-icon.png"
          alt="Notification Icon"
          width="20"
          height="20"
        />
        <p>Recent Notifications</p>
      </div>
      <div>
        <NotificationItem name="" type="" action="" />
        <NotificationItem name="" type="" action="" />
        <NotificationItem name="" type="" action="" />
        <NotificationItem name="" type="" action="" />
      </div>
    </div>
  );
}
