import ManagerGigItem from "./ManagerGigItem";
import NewestToOldestFilterBtn from "./buttons/NewestToOldestFilterBtn";
import Image from "next/image";
import { placeholderImage } from "@/image";

export default function ManagerGigBox() {
  return (
    <div className="bg-white w-[62%] p-[2.4rem] rounded-[2rem]">
      <div className=" flex justify-between items-center">
        <div className="flex">
          <p className="text-[1.6rem] text-jubalViolet p-[1rem]">
            Available Gigs
          </p>
          <p className="text-[1.6rem] text-jubalViolet p-[1rem]">
            Gig Requests
          </p>
          <p className="text-[1.6rem] text-jubalViolet p-[1rem]">Gig History</p>
        </div>
        <NewestToOldestFilterBtn handleFilter={() => {}} />
      </div>
      <div className="overflow-y-auto h-[80vh] bg-jubalDashboardBackground p-[2rem] rounded-[2rem] mt-[2rem]">
        <ManagerGigItem
          profileImage={placeholderImage}
          title="Lead Sound Designer"
          name="Hexagon Music"
          startPrice="5000"
          endPrice="10000"
          location="Australia"
          action="Active"
          btnColor="#0F973D"
        />
        <ManagerGigItem
          profileImage={placeholderImage}
          title="Lead Sound Designer"
          name="Hexxxagon Music"
          startPrice="5000"
          endPrice="10000"
          location="USA"
          action="Pending"
          btnColor="#00798F"
        />
        <ManagerGigItem
          profileImage={placeholderImage}
          title="Lead Sound Designer"
          name="Hexagon Music"
          startPrice="5000"
          endPrice="10000"
          location="Australia"
          action="Completed"
          btnColor="#F3A218"
        />
        <ManagerGigItem
          profileImage={placeholderImage}
          title="Lead Sound Designer"
          name="Hexagon Music"
          startPrice="5000"
          endPrice="10000"
          location="Australia"
          action="Active"
          btnColor="#0F973D"
        />
        <ManagerGigItem
          profileImage={placeholderImage}
          title="Lead Sound Designer"
          name="Hexxxagon Music"
          startPrice="5000"
          endPrice="10000"
          location="USA"
          action="Pending"
          btnColor="#00798F"
        />
        <ManagerGigItem
          profileImage={placeholderImage}
          title="Lead Sound Designer"
          name="Hexagon Music"
          startPrice="5000"
          endPrice="10000"
          location="Australia"
          action="Completed"
          btnColor="#F3A218"
        />
      </div>
    </div>
  );
}
