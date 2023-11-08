import SearchResultItem from "./SearchResultItem";
import { Switch } from "@material-tailwind/react";
import NewestToOldestFilterBtn from "./buttons/NewestToOldestFilterBtn";
import { useState } from "react";
import Image from "next/image";
import { Images } from "@/shared/components/Images";
import PrevBtn from "./buttons/PrevBtn";
import NextBtn from "./buttons/NextBtn";

export default function SearchResult() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="bg-jubalDashboardBackground p-[2rem] rounded-[2rem]">
      <div className="flex justify-between items-center mb-[2rem]">
        <p className="text-[2rem] font-[700] text-jubalNav">Showing 34 jobs</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center mr-[5rem]">
            <Image
              src={isChecked ? Images.checkedBtn : Images.uncheckedBtn}
              alt="check-icon"
              width={30}
              height={30}
              onClick={() => setIsChecked(!isChecked)}
            />
            <p className="text-[1.6rem] mr-[1rem] text-jubalGrey font-[300]">
              Full Time
            </p>
          </div>
          <div className="flex items-center mr-[5rem]">
            <p className="text-[1.6rem] mr-[1rem] text-jubalGrey font-[300]">
              Details
            </p>
            <Switch
              crossOrigin={undefined}
              ripple={true}
              id="custom-switch-component-details"
              className="h-full w-full checked:bg-jubalViolet"
              containerProps={{
                className: "w-12 h-6 ",
              }}
              circleProps={{
                className: "before:hidden left-0.5 border-none",
              }}
            />
          </div>
          <div className="flex items-center mr-[5rem]">
            <p className="text-[1.6rem] mr-[1rem] text-jubalGrey font-[300]">
              Salary
            </p>
            <Switch
              crossOrigin={undefined}
              ripple={true}
              id="custom-switch-component-salary"
              className="h-full w-full checked:bg-jubalViolet"
              containerProps={{
                className: "w-12 h-6 ",
              }}
              circleProps={{
                className: "before:hidden left-0.5 border-none",
              }}
            />
          </div>

          <NewestToOldestFilterBtn handleFilter={() => {}} />
        </div>
      </div>

      <SearchResultItem
        profileImage={Images.gigProfileImage}
        gigRole="Instrumentalist"
        gigCompany="Marlian Music"
        startPrice="2000"
        endPrice="5000"
        location="Lagos"
        isLiked={false}
        handleLike={() => {}}
      />
      <SearchResultItem
        profileImage={Images.gigProfileImage}
        gigRole="Instrumentalist"
        gigCompany="Marlian Music"
        startPrice="2000"
        endPrice="5000"
        location="Lagos"
        isLiked={false}
        handleLike={() => {}}
      />
      <SearchResultItem
        profileImage={Images.gigProfileImage}
        gigRole="Instrumentalist"
        gigCompany="Marlian Music"
        startPrice="2000"
        endPrice="5000"
        location="Lagos"
        isLiked={false}
        handleLike={() => {}}
      />
      <div className="flex justify-center">
        <PrevBtn handleClick={() => {}} />
        <div className="mx-[2rem] flex  bg-jubalLightBlue px-[1.5rem] py-[.2rem] my-[3rem] rounded-[1rem]">
          <p className="px-[2rem] py-[1rem] text-[1.6rem] font-[600] rounded-[1rem] text-white bg-jubalViolet">
            1
          </p>
          <p className="px-[2rem] py-[1rem] text-[1.6rem] font-[600] rounded-[1rem] text-jubalViolet">
            2
          </p>
          <p className="px-[2rem] py-[1rem] text-[1.6rem] font-[600] rounded-[1rem] text-jubalViolet">
            3
          </p>
          <p className="px-[2rem] py-[1rem] text-[1.6rem] font-[600] rounded-[1rem] text-jubalViolet">
            4
          </p>
        </div>
        <NextBtn handleClick={() => {}} />
      </div>
    </div>
  );
}
