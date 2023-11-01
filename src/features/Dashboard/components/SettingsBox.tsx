import { number } from "yup";
import Contact from "./Contact";
import FAQs from "./FAQs";
export default function SettingsBox() {
  const faqs = [
    {
      question: "What is Jubal, and how does it work",
      answer:
        " Jubal is a comprehensive marketplace software designed to facilitate online transactions between buyers and sellers. It provides a platform where businesses can list their products or services, and customers can browse, compare, and make purchases. Jubal handles payment processing, user authentication, and other essential features to create a seamless online marketplace experience.",
    },
  ];

  return (
    <div className="bg-white rounded-[2rem] p-[2rem]">
      <div className="flex">
        <p className="text-[1.6rem] text-white bg-jubalViolet py-[0.8rem] px-[1.2rem] mr-[1.3rem] rounded-[.6rem] font-[600]">
          Help & Support
        </p>
        <p className="text-[1.6rem] text-jubalViolet py-[0.8rem] px-[1.2rem] mr-[1.3rem] rounded-[.6rem] font-[600]">
          Platform Settings
        </p>
        <p className="text-[1.6rem] text-jubalViolet py-[0.8rem] px-[1.2rem] mr-[1.3rem] rounded-[.6rem] font-[600]">
          Bank Account
        </p>
        <p className="text-[1.6rem] text-jubalViolet py-[0.8rem] px-[1.2rem] rounded-[.6rem] font-[600]">
          Logout
        </p>
      </div>

      <h1 className=" text-[2.4rem] text-jubalFormText font-[700] mt-[3rem] mb-[2rem]">
        Let&apos;s stay connected
      </h1>
      <p className="text-[1.8rem] text-[#727A86] w-[50%]">
        It&apos;s never been easier to get in touch with Flex. Call us, or send
        an email and we&apos;ll get back to you as soon as possible!
      </p>
      <div className="flex my-[3rem]">
        <Contact
          image="dashboard/settings-email.svg"
          title="Email"
          text="contact@jubalglobal.com"
        />
        <Contact
          image="dashboard/settings-phone.svg"
          title="Phone"
          text="+234 812 345 6789"
        />
        <Contact
          image="dashboard/settings-location.svg"
          title="Office"
          text="1437 Sanusi Fafunwa St, Victoria Island 106104, Lagos."
        />
      </div>

      <h1 className=" text-[2.4rem] text-jubalFormText font-[700] mt-[3rem] mb-[2rem]">
        FAQs
      </h1>
      <div>
        {faqs.map((item, index) => (
          <FAQs
            number={index + 1}
            question={item.question}
            answer={item.answer}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
