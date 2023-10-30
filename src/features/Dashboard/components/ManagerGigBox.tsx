import ManagerGigItem from "./ManagerGigItem";

export default function ManagerGigBox() {
  return (
    <div className="bg-white w-[62%] p-[2.4rem] rounded-[2rem]">
      <div className=" flex justify-between">
        <div className="flex">
          <p className="text-[1.6rem] text-jubalViolet p-[1rem]">
            Available Gigs
          </p>
          <p className="text-[1.6rem] text-jubalViolet p-[1rem]">
            Gig Requests
          </p>
          <p className="text-[1.6rem] text-jubalViolet p-[1rem]">Gig History</p>
        </div>
        <div>
          <p className="text-[1.6rem] text-jubalViolet p-[1rem]">Newest</p>
        </div>
      </div>
      <div className="overflow-y-auto h-[80vh] bg-jubalDashboardBackground p-[2rem] rounded-[2rem] mt-[2rem]">
        <ManagerGigItem
          profileImage="dashboard/placeholder.svg"
          title="Lead Sound Designer"
          name="Hexagon Music"
          startPrice="5000"
          endPrice="10000"
          location="Australia"
          action="Active"
          btnColor="#0F973D"
        />
        <ManagerGigItem
          profileImage="dashboard/placeholder.svg"
          title="Lead Sound Designer"
          name="Hexxxagon Music"
          startPrice="5000"
          endPrice="10000"
          location="USA"
          action="Pending"
          btnColor="#00798F"
        />
        <ManagerGigItem
          profileImage="dashboard/placeholder.svg"
          title="Lead Sound Designer"
          name="Hexagon Music"
          startPrice="5000"
          endPrice="10000"
          location="Australia"
          action="Completed"
          btnColor="#F3A218"
        />
        <ManagerGigItem
          profileImage="dashboard/placeholder.svg"
          title="Lead Sound Designer"
          name="Hexagon Music"
          startPrice="5000"
          endPrice="10000"
          location="Australia"
          action="Active"
          btnColor="#0F973D"
        />
        <ManagerGigItem
          profileImage="dashboard/placeholder.svg"
          title="Lead Sound Designer"
          name="Hexxxagon Music"
          startPrice="5000"
          endPrice="10000"
          location="USA"
          action="Pending"
          btnColor="#00798F"
        />
        <ManagerGigItem
          profileImage="dashboard/placeholder.svg"
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
