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
          profileImage="dashboard/talent-avatar.png"
          title="Driston Watson"
          name="Sound Designer"
          rating="5000"
          location="San Francisco, USA"
        />
        <GigItem
          profileImage="dashboard/talent-avatar.png"
          title="Driston Watson"
          name="Sound Designer"
          rating="5000"
          location="San Francisco, USA"
        />
        <GigItem
          profileImage="dashboard/talent-avatar.png"
          title="Driston Watson"
          name="Sound Designer"
          rating="5000"
          location="San Francisco, USA"
        />
        <GigItem
          profileImage="dashboard/talent-avatar.png"
          title="Driston Watson"
          name="Sound Designer"
          rating="5000"
          location="San Francisco, USA"
        />
        <GigItem
          profileImage="dashboard/talent-avatar.png"
          title="Driston Watson"
          name="Sound Designer"
          rating="5000"
          location="San Francisco, USA"
        />
        <GigItem
          profileImage="dashboard/talent-avatar.png"
          title="Driston Watson"
          name="Sound Designer"
          rating="5000"
          location="San Francisco, USA"
        />
        <GigItem
          profileImage="dashboard/talent-avatar.png"
          title="Driston Watson"
          name="Sound Designer"
          rating="5000"
          location="San Francisco, USA"
        />
        <GigItem
          profileImage="dashboard/talent-avatar.png"
          title="Driston Watson"
          name="Sound Designer"
          rating="5000"
          location="San Francisco, USA"
        />
        <GigItem
          profileImage="dashboard/talent-avatar.png"
          title="Driston Watson"
          name="Sound Designer"
          rating="5000"
          location="San Francisco, USA"
        />
 
      </div>
    </div>
  );
}
