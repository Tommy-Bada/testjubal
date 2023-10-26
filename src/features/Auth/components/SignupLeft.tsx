import Image from "next/image";

export default function SignupLeft() {
  return (
    <div className="text-white text-[1.8rem]  sm:mr-[4rem] lg:w-[58%]">
      <h1 className="text-[4rem] font-bold leading-tight lg:text-[6rem] ">
        Your{" "}
        <span className="text-jubalLightBlue text-[4rem] lg:text-[6rem]">
          Music & Creative industry career
        </span>{" "}
        starts and grows here!
      </h1>
      <p className="my-[2rem] text-justify text-[1.6rem] lg:text-[2.4rem]">
        Apply in minutes for recent and verified gigs in the industry. You can
        narrow your search based on relevant categories. Earn, Learn, organize
        and manage your career all in one place.
      </p>
      <ul>
        {[
          "Verified gigs posts",
          "Full time & Freelance gigs",
          "Worldwide & Remote Jobs",
          "Bespoke financial services",
          "Productivity tools",
        ].map((item, index) => (
          <div key={index} className="flex my-[1rem]">
            <Image
              src="/check.svg"
              alt="check icon"
              height="20"
              width="20"
              className="mr-[1rem]"
            />
            <p className="text-[1.6rem] lg:text-[2.4rem]">{item}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
