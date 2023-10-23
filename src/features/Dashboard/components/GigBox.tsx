import GigItem from "./GigItem";

export default function GigBox() {
  return (
    <div>
      <div>
        <p>Recommeded Gigs</p>
        <p>Recent Gigs</p>
        <p>Liked Gigs</p>
      </div>
      <div>
        <GigItem
          profileImage=""
          title=""
          name=""
          startPrice="5000"
          endPrice="10000"
          location="Australia"
        />
        <GigItem
          profileImage=""
          title=""
          name=""
          startPrice="5000"
          endPrice="10000"
          location="USA"
        />
      </div>
    </div>
  );
}
