import Image from "next/image";

export default function DashboardHeader() {
  return (
    <div>
      <div>
        <Image src="switch-icon.png" alt="Switch Icon" width="20" height="20" />
        <p>Switch to Client</p>
      </div>
      <div>
        <input type="text" placeholder="Search" />
        <Image src="search-icon.png" alt="Search Icon" width="20" height="20" />
      </div>
      <div>
        <Image src="user-icon.png" alt="User Icon" width="20" height="20" />
      </div>
      <div>
        <Image
          src="notification-icon.png"
          alt="Notification Icon"
          width="20"
          height="20"
        />
      </div>
    </div>
  );
}
