import GigItem from "./GigItem";
import { useState } from "react";

type Gigs = {
  profileImage: string;
  title: string;
  name: string;
  startPrice: string;
  endPrice: string;
  location: string;
  isLiked: boolean;
};
export default function GigBox() {
  const [gigs, setGigs] = useState<Gigs[]>([
    {
      profileImage: "dashboard/placeholder.svg",
      title: "Lead Sound Designer",
      name: "Hexagon Music",
      startPrice: "5000",
      endPrice: "10000",
      location: "Australia",
      isLiked: false,
    },
    {
      profileImage: "dashboard/placeholder.svg",
      title: "Lead Producer",
      name: "Hexagon Music",
      startPrice: "5000",
      endPrice: "10000",
      location: "Australia",
      isLiked: false,
    },
    {
      profileImage: "dashboard/placeholder.svg",
      title: "Lead Director",
      name: "Hexagon Music",
      startPrice: "5000",
      endPrice: "10000",
      location: "Australia",
      isLiked: false,
    },
    {
      profileImage: "dashboard/placeholder.svg",
      title: "Lead Pianist",
      name: "Hexagon Music",
      startPrice: "5000",
      endPrice: "10000",
      location: "Australia",
      isLiked: false,
    },
    {
      profileImage: "dashboard/placeholder.svg",
      title: "Lead Singer",
      name: "Hexagon Music",
      startPrice: "5000",
      endPrice: "10000",
      location: "Australia",
      isLiked: false,
    },
  ]);

  const recommendedGigs = gigs;
  const recentGigs = gigs;
  const likedGigs: Gigs[] = gigs.filter((gig) => gig.isLiked === true);

  const [isRecommendedGigsSelected, setIsRecommendedGigsSelected] =
    useState(true);
  const [isRecentGigsSelected, setIsRecentGigsSelected] = useState(false);
  const [isLikedGigsSelected, setIsLikedGigsSelected] = useState(false);

  function showRecommendedGigs() {
    setIsRecommendedGigsSelected(true);
    setIsRecentGigsSelected(false);
    setIsLikedGigsSelected(false);
  }

  function showRecentGigs() {
    setIsRecommendedGigsSelected(false);
    setIsRecentGigsSelected(true);
    setIsLikedGigsSelected(false);
  }

  function showLikedGigs() {
    setIsRecommendedGigsSelected(false);
    setIsRecentGigsSelected(false);
    setIsLikedGigsSelected(true);
  }

  function handleLike(title: string) {
    const updatedGigs = gigs.map((gig) =>
      gig.title === title ? { ...gig, isLiked: !gig.isLiked } : gig
    );
    setGigs(updatedGigs);
  }

  return (
    <div className="bg-jubalDashboardBackground w-[49%] p-[2rem] rounded-[2rem]">
      <div className="flex mb-[2rem] ">
        <p
          className={`text-[1.6rem]  py-[1rem] px-[1.5rem] font-[600] cursor-pointer rounded-[1rem] mr-[1rem] ${
            isRecommendedGigsSelected
              ? "text-white bg-jubalViolet"
              : "text-jubalViolet"
          } `}
          onClick={showRecommendedGigs}
        >
          Recommeded Gigs
        </p>
        <p
          className={`text-[1.6rem]  py-[1rem] px-[1.5rem] font-[600] cursor-pointer rounded-[1rem] mr-[1rem] ${
            isRecentGigsSelected
              ? "text-white bg-jubalViolet"
              : "text-jubalViolet"
          } `}
          onClick={showRecentGigs}
        >
          Recent Gigs
        </p>
        <p
          className={`text-[1.6rem]  py-[1rem] px-[1.5rem] font-[600] cursor-pointer rounded-[1rem] mr-[1rem] ${
            isLikedGigsSelected
              ? "text-white bg-jubalViolet"
              : "text-jubalViolet"
          } `}
          onClick={showLikedGigs}
        >
          Liked Gigs
        </p>
      </div>
      <div className="overflow-y-auto h-[80vh]">
        {isRecommendedGigsSelected &&
          recommendedGigs.map((gig, index) => (
            <GigItem
              key={index}
              profileImage={gig.profileImage}
              title={gig.title}
              name={gig.name}
              startPrice={gig.startPrice}
              endPrice={gig.endPrice}
              location={gig.location}
              isLiked={gig.isLiked}
              handleLike={() => {
                handleLike(gig.title);
              }}
            />
          ))}
        {isRecentGigsSelected &&
          recentGigs.map((gig, index) => (
            <GigItem
              key={index}
              profileImage={gig.profileImage}
              title={gig.title}
              name={gig.name}
              startPrice={gig.startPrice}
              endPrice={gig.endPrice}
              location={gig.location}
              isLiked={gig.isLiked}
              handleLike={() => {
                handleLike(gig.title);
              }}
            />
          ))}
        {isLikedGigsSelected &&
          likedGigs.map((gig, index) => (
            <GigItem
              key={index}
              profileImage={gig.profileImage}
              title={gig.title}
              name={gig.name}
              startPrice={gig.startPrice}
              endPrice={gig.endPrice}
              location={gig.location}
              isLiked={gig.isLiked}
              handleLike={() => {
                handleLike(gig.title);
              }}
            />
          ))}
      </div>
    </div>
  );
}
