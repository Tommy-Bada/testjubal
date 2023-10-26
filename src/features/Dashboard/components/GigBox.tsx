import GigItem from "./GigItem";

export default function GigBox() {
  return (
    <div className="bg-jubalDashboardBackground w-[49%] p-[2.4rem] rounded-[2rem]">
      <div className="flex ">
        <p className="text-[1.6rem] text-jubalViolet p-[1rem]">
          Recommeded Gigs
        </p>
        <p className="text-[1.6rem] text-jubalViolet p-[1rem]">Recent Gigs</p>
        <p className="text-[1.6rem] text-jubalViolet p-[1rem]">Liked Gigs</p>
      </div>
      <div className="overflow-y-auto h-[80vh]">
        <GigItem
          profileImage="dashboard/placeholder.svg"
          title="Lead Sound Designer"
          name="Hexagon Music"
          startPrice="5000"
          endPrice="10000"
          location="Australia"
        />
        <GigItem
          profileImage="dashboard/placeholder.svg"
          title="Lead Sound Designer"
          name="Hexagon Music"
          startPrice="5000"
          endPrice="10000"
          location="USA"
        />
        <GigItem
          profileImage="dashboard/placeholder.svg"
          title="Lead Sound Designer"
          name="Hexagon Music"
          startPrice="5000"
          endPrice="10000"
          location="Australia"
        />
        <GigItem
          profileImage="dashboard/placeholder.svg"
          title="Lead Sound Designer"
          name="Hexagon Music"
          startPrice="5000"
          endPrice="10000"
          location="USA"
        />
        <GigItem
          profileImage="dashboard/placeholder.svg"
          title="Lead Sound Designer"
          name="Hexagon Music"
          startPrice="5000"
          endPrice="10000"
          location="Australia"
        />
        <GigItem
          profileImage="dashboard/placeholder.svg"
          title="Lead Sound Designer"
          name="Hexagon Music"
          startPrice="5000"
          endPrice="10000"
          location="USA"
        />
      </div>
    </div>
  );
}
