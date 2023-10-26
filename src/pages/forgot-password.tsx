import Header from "@/shared/components/Header";
import Divisor from "@/shared/components/Divisor";
import Subscribe from "@/shared/components/Subscribe";
import Footer from "@/shared/components/Footer";
import ForgotPasswordForm from "@/features/Auth/components/ForgotPasswordForm";
import LoginLeft from "@/features/Auth/components/LoginLeft";

export default function ForgotPassword() {
  return (
    <div>
      <Header />
      <div
        style={{ background: "url(/loginHero.png)" }}
        className="p-[2rem] sm:flex sm:justify-between sm:items-center sm:px-[5rem] sm:py-[8rem]"
      >
        <LoginLeft />
        <ForgotPasswordForm />
      </div>
      <Divisor />
      <Subscribe />
      <Footer />
    </div>
  );
}
