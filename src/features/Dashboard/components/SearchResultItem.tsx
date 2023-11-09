import Image from "next/image";
import { ImageIcons } from "@/shared/components/ImageIcons";
import {
  icSalaryIcon,
  ilocationIcon,
  heartIcon,
  likedHeartIcon,
} from "@/image";
import { Button } from "@material-tailwind/react";

interface SearchResultItemProps {
  profileImage: string;
  gigRole: string;
  gigCompany: string;
  startPrice: string;
  endPrice: string;
  location: string;
  isLiked: boolean;
  handleLike: () => void;
}

export default function SearchResultItem({
  profileImage,
  gigRole,
  gigCompany,
  startPrice,
  endPrice,
  location,
  isLiked,
  handleLike,
}: SearchResultItemProps) {
  return (
    <div className="bg-white flex items-center justify-between px-[1rem] py-[1.5rem] rounded-[2rem] mb-[1.5rem]">
      <div className="flex items-center justify-between">
        <Image src={profileImage} alt="Profile Image" height="60" width="60" />
        <div className="ml-[1rem]">
          <p className="text-[1.6rem] font-[700] text-jubalNav">{gigRole}</p>
          <p className="text-[1.3rem] mt-[1rem]">{gigCompany}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Image
          src={ImageIcons.icSalary}
          alt="Profile Image"
          height="45"
          width="45"
        />
        <div className="ml-[1rem]">
          <p className="text-jubalGrey text-[1.4rem] font-[600]">{`$${startPrice} - $${endPrice}`}</p>
          <p className="text-jubalFAQGrey text-[1.4rem]">Monthly Salary</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Image
          src={ImageIcons.ilocationIcon}
          alt="Profile Image"
          height="45"
          width="45"
        />
        <div className="ml-[1rem]">
          <p className="text-jubalGrey text-[1.4rem] font-[600]">{location}</p>
          <p className="text-jubalFAQGrey text-[1.4rem]">Location</p>
        </div>
      </div>
      <div className="flex items-center">
        <Button
          variant="outlined"
          className="text-jubalDark border-jubalDark text-[1.4rem] normal-case mr-[1.5rem]"
        >
          Apply Now
        </Button>
        <div onClick={handleLike}>
          <Image
            src={`${isLiked ? ImageIcons.likedHeartIcon : ImageIcons.heartIcon}`}
            alt="Like Icon"
            width="30"
            height="30"
          />
        </div>
      </div>
    </div>
  );
}
