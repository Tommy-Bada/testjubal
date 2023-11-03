import Header from "@/shared/components/Header";
import Divisor from "@/shared/components/Divisor";
import Subscribe from "@/shared/components/Subscribe";
import Footer from "@/shared/components/Footer";
import LoginLeft from "@/features/Auth/components/LoginLeft";
import PasswordVerificationForm from "@/features/Auth/components/PasswordVerificationForm";

export default function PasswordVerification() {
  return (
    <div>
      <Header />
      <div
        style={{ background: "url(/loginHero.png)" }}
        // className="p-[2rem] sm:flex sm:justify-between sm:items-center sm:px-[5rem] sm:py-[8rem]"
        className="pl-[2rem] pr-[4rem] py-[2rem] lg:flex sm:justify-between sm:items-center sm:px-[5rem] sm:py-[8rem]"
      >
        <LoginLeft />
        <PasswordVerificationForm />
      </div>
      <Divisor />
      <Subscribe />
      <Footer />
    </div>
  );
}
