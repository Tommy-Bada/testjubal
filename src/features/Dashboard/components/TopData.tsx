import Image from "next/image";
export default function TopData() {
  return (
    <div className="flex bg-jubalDashboardBackground w-[992px] h-[277px] p-[3rem] mt-[2rem] mb-[3rem] shrink-0 rounded-[var(--5,20px)]">
      <div className="relative w-[593px] h-[229px] shrink-0 rounded-[var(--2,8px)] custom-gradient">
        <div className="w-[202px] inline-flex flex-col items-start gap-[var(--4,16px)] m-[4rem] ">
          <div className="text-[2rem] text-[color:var(--White,#FFF)] not-italic font-bold leading-[normal]">
            Welcome,
          </div>
          <div className="text-[2rem] text-[color:var(--White,#FFF)] not-italic font-normal leading-[145%]">
            Mayowa Badmus
          </div>
          <div className="text-[18px] text-[color:var(--White,#FFF)] not-italic font-semibold leading-7">
            Get the best talent in the creative space with Jubal.
          </div>
        </div>
        <div className="post-gig-btn my-[4] mx-[6] bg-jubalYellow flex flex-col justify-center items-center gap-2.5 shadow-[0px_4px_50px_0px_rgba(88,88,88,0.10)] px-6 py-4 rounded-md">
          <div className="text-[16px] text-[color:var(--White,#FFF)] text-center not-italic font-semibold leading-[145%]">
            Post a Gig
          </div>
        </div>
      </div>

      <div className="p-[8px] ml-[16px] bg-white w-[335px] h-[229px] shrink-0 rounded-[var(--2,8px)]">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="p-[17px] bg-jubalGrey flex flex-col justify-between w-[182px] h-[113px] shrink-0 rounded-[var(--2,8px)]">
  
              <div className="flex justify-center w-[var(--6,30px)] pb-[3px] h-[var(--6,30px)] shrink-0 rounded-full bg-jubalGreen">
                <Image
                  src="../dashboard/cash.svg"
                  alt="Jubal Logo"
                  width="16"
                  height="16"
                />
              </div>
              <div className="text-[color:var(--foundation-grey-dark,#727A86)] text-[16px] not-italic font-semibold leading-6">
                Total Gig Spend
              </div>
              <div className="text-[color:var(--black-text-color,#4E4E4E)] text-[16px] not-italic font-bold leading-[normal]">
                ₦ 100,000
              </div>
            </div>
  
            <div className="p-[17px] flex flex-col justify-between bg-jubalGrey w-[129px] h-[113px] shrink-0 rounded-[var(--2,8px)]">
              <div className="flex justify-center w-[var(--6,30px)] pb-[3px] h-[var(--6,30px)] shrink-0 rounded-full bg-jubalRed">
                <Image
                  src="../dashboard/lan.svg"
                  alt="Jubal Logo"
                  width="16"
                  height="16"
                />
              </div>
              <div className="text-[color:var(--foundation-grey-dark,#727A86)] text-[15px] not-italic font-semibold leading-6">
                Total Gig Post
              </div>
              <div className="text-[color:var(--black-text-color,#4E4E4E)] text-[16px] not-italic font-bold leading-[normal]">
                ₦ 100,000
              </div>
            </div>
          </div>
          <div className="p-[17px] flex flex-col justify-around mt-[8px] bg-jubalGrey w-[319px] h-[92px] shrink-0 rounded-[var(--2,8px)]">
            <div className="flex gap-[var(--2,8px)] items-center">
              <div className="flex justify-center w-[var(--6,30px)] pb-[3px] h-[var(--6,30px)] shrink-0 rounded-full bg-jubalYellow">
                <Image
                  src="../dashboard/list-box.svg"
                  alt="Jubal Logo"
                  width="16"
                  height="16"
                />
              </div>
              <div className="text-[color:var(--foundation-grey-dark,#727A86)] text-[16px] not-italic font-semibold leading-6">
                Total Gig Applications
              </div>
            </div>
            <div className="text-[color:var(--black-text-color,#4E4E4E)] text-[16px] not-italic font-bold leading-[normal]">
              ₦ 100,000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
