import Image from "next/image";
import { Button } from "@material-tailwind/react";
interface GigItemProps {
  profileImage: string;
  title: string;
  name: string;
  startPrice: string;
  endPrice: string;
  location: string;
}

export default function GigItem({
  profileImage,
  title,
  name,
  startPrice,
  endPrice,
  location,
}: GigItemProps) {
  return (
    <div>
      <div>
        <div>
          <Image
            src={`/${profileImage}`}
            alt={`${profileImage} icon`}
            width="40"
            height="40"
          />
          <div>
            <p>{title}</p>
            <p>{name}</p>
          </div>
        </div>
        <div>
          <Image src="like-icon.png" alt="Like Icon" width="20" height="20" />
        </div>
      </div>
      <div>
        <Image
          src="currency-icon.png"
          alt="Currency Icon"
          width="20"
          height="20"
        />
        <p>{`${startPrice} - ${endPrice} / monthly`}</p>
      </div>
      <div>
        <div>
          <Image
            src="location-icon.png"
            alt="Location Icon"
            width="20"
            height="20"
          />
          <p>{location}</p>
        </div>
        <Button
          variant="filled"
          className="bg-jubalDark text-[1.6rem] normal-case"
        >
          Apply
        </Button>
      </div>
    </div>
  );
}
