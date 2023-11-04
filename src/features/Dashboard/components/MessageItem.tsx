import Image from "next/image";

interface MessageItemProps {
  profileImage: string;
  name: string;
  textOrTyping: string;
  time: string;
  notification?: string;
}

export default function MessageItem({
  profileImage,
  name,
  textOrTyping,
  time,
  notification,
}: MessageItemProps) {
  return (
    <div className="flex justify-between items-center p-[1rem]">
      <div className="flex items-center">
        <Image src={process.env.NEXT_PUBLIC_SITE_BASE_URL+"/"+profileImage} alt="profile image" width="50" height="50" />
        <div className="ml-[1rem]">
          <p className="font-[600] text-[1.6rem] text-jubalFormText">{name}</p>
          <p className="text-[1.2rem]">{textOrTyping}</p>
        </div>
      </div>
      <div>
        <p className="mb-[1rem] text-[1.2rem] text-jubalFooterText">{time}</p>
        <p>{notification}</p>
      </div>
    </div>
  );
}
