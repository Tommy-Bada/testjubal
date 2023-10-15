import { Button } from "@material-tailwind/react";
export default function Subscribe() {
  return (
    <div className="bg-jubalDark text-white p-[2rem] text-[1.2rem] lg:flex lg:p-[5rem]">
      <p className="sm:text-[2.4rem] lg:text-[4.8rem] lg:w-[50%] lg:leading-[5rem] lg:mr-[5rem]">
        Don’t miss our weekly updates about freelancer career
      </p>
      <form className="lg:w-[60%]">
        <input
          type="email"
          placeholder="Enter your email address..."
          className="w-[100%] p-[1rem] bg-transparent border-2 border-white my-[2rem] mb-[1rem] sm:w-[70%] sm:mr-[2rem] lg:w-[100%]"
        />
        <br className=" lg:hidden" />
        <Button className="bg-jubalYellow">Subscribe</Button>
      </form>
    </div>
  );
}
