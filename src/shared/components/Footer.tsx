import Image from "next/image";

export default function Footer() {
  //

  return (
    <footer className=" w-full bg-jubalDark text-white sm:p-[3rem] lg:flex p-[2rem] text-[1.2rem] lg:p-[5rem]">
      <div className="lg:w-[40%] lg:mr-[5rem]">
        <div>
          <Image
            src="/footerLogo.png"
            alt="jubal logo"
            width="174"
            height="62"
            className="w-[8rem] lg:w-[10rem]"
          />
        </div>
        <p className="my-[2rem] text-justify text-[1.6rem]">
          Jubal is a smart digital marketplace that promotes music & creative
          talents and service providers to offer their services globally.
        </p>
        <div className="flex items-center">
          <div>
            <Image
              src="/facebook.svg"
              alt="facebook icon"
              width="30"
              height="30"
              className="w-[1rem] mr-[2rem]"
            />
          </div>
          <div>
            <Image
              src="/instagram.svg"
              alt="instagram icon"
              width="30"
              height="30"
              className="w-[2rem] mr-[2rem]"
            />
          </div>
          <div>
            <Image
              src="/twitter.svg"
              alt="twitter icon"
              width="30"
              height="30"
              className="w-[2rem] mr-[2rem]"
            />
          </div>
          <div>
            <Image
              src="/youtube.svg"
              alt="youtube icon"
              width="30"
              height="30"
              className="w-[2rem] mr-[2rem]"
            />
          </div>
          <div>
            <Image
              src="/linkedin.svg"
              alt="linkedin icon"
              width="30"
              height="30"
            />
          </div>
        </div>
      </div>
      <div className="sm:flex flex-wrap justify-between lg:mb-[2rem] ">
        <div className="my-[2rem] lg:my-0">
          <h3 className="text-[1.8rem] font-bold">Jubal</h3>
          <ul>
            <li className="sm:my-[1rem] text-[1.4rem]">Why Jubal</li>
            <li className="sm:mb-[1rem] text-[1.4rem]">Post a job</li>
            <li className="sm:mb-[1rem] text-[1.4rem]">Find a job</li>
            <li className="sm:mb-[1rem] text-[1.4rem]">Job Alert</li>
          </ul>
        </div>
        <div className="my-[2rem] lg:my-0">
          <h3 className="text-[1.6rem] font-bold">Resources</h3>
          <ul>
            <li className="sm:my-[1rem] text-[1.4rem] ">Privacy</li>
            <li className="sm:mb-[1rem] text-[1.4rem]">Help Center</li>
            <li className="sm:mb-[1rem] text-[1.4rem]">Browse Music Pros</li>
            <li className="sm:mb-[1rem] text-[1.4rem]">Guides</li>
            <li className="sm:mb-[1rem] text-[1.4rem]">Partner</li>
            <li className=" text-[1.4rem]">Directories</li>
          </ul>
        </div>
        <div className="my-[2rem] lg:my-0">
          <h3 className="text-[1.6rem] font-bold">Company</h3>
          <ul>
            <li className="sm:mb-[1rem] text-[1.4rem]">About Us</li>
            <li className="sm:mb-[1rem] text-[1.4rem]">Contact Us</li>
            <li className="sm:mb-[1rem] text-[1.4rem]">Products</li>
            <li className="sm:mb-[1rem] text-[1.4rem]"> Login</li>
            <li className="sm:mb-[1rem] text-[1.4rem]">Sign Up</li>
            <li className=" text-[1.4rem]">FAQ</li>
          </ul>
        </div>
        <div className="my-[2rem] sm:w-[35%] lg:w-[40%] lg:my-0">
          <h3 className="text-[1.6rem] font-bold">Get in Touch with Us</h3>
          <ul>
            <li className="flex my-[1rem]">
              <Image
                src="/location.svg"
                alt="location icon"
                width="30"
                height="30"
                className="w-[2rem] mr-[1rem]"
              />
              <span className="text-[1.4rem]">
                832 Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </li>
            <li className="flex mb-[1rem]">
              <Image
                src="/phone.svg"
                alt="phone icon"
                width="30"
                height="30"
                className="w-[2rem] mr-[1rem]"
              />
              <span className="text-[1.4rem]">+234 345 123 5566</span>
            </li>
            <li className="flex mb-[1rem]">
              <Image
                src="/email.svg"
                alt="email icon"
                width="30"
                height="30"
                className="w-[2rem] mr-[1rem]"
              />
              <span className="text-[1.4rem]">support@thejubal.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
