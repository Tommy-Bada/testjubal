import Head from "next/head";
import Header from "@/shared/components/Header";
import Divisor from "@/shared/components/Divisor";
import Subscribe from "@/shared/components/Subscribe";
import Footer from "@/shared/components/Footer";
import SignupLeft from "@/features/Auth/components/SignupLeft";
import SignUpForm from "@/features/Auth/components/SignUpForm";
import EmailVerificationModal from "@/features/Auth/components/EmailVerificationModal";
import { useState } from "react";

export default function Signin() {
  const [showModal, setShowModal] = useState(false);
  const handleSignUp = () => {
    setShowModal(true);
  };
  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>
      <Header />
      <div
        style={{ background: "url(/Herobg2.png)" }}
        className="p-[2rem] lg:flex lg:justify-between sm:items-center sm:px-[5rem] sm:py-[8rem]"
      >
        <SignupLeft />
        <SignUpForm handleSignUp={handleSignUp} />
      </div>
      <Divisor />
      <EmailVerificationModal
        isVisible={showModal}
        handleRemoveModal={() => setShowModal(false)}
      />
      <Subscribe />
      <Footer />
    </div>
  );
}
