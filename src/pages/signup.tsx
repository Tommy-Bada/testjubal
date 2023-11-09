import Head from "next/head";
import Header from "@/shared/components/Header";
import Divisor from "@/shared/components/Divisor";
import Subscribe from "@/shared/components/Subscribe";
import Footer from "@/shared/components/Footer";
import SignupLeft from "@/features/Auth/components/SignupLeft";
import SignUpForm from "@/features/Auth/components/SignUpForm";
import EmailVerificationModal from "@/features/Auth/components/EmailVerificationModal";
import {useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCheckLogin } from "@/hooks/app.hooks";
import { secondHeroBackground } from "@/image";

export interface IFormValues {
  email: string;
  password: string;
  serviceType: string;
  name: string;
  contact: string;
  country: string;
}

export default function Signup() {
  const router = useRouter();
  const isLogged = useCheckLogin();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isLogged) {
      router.push("/talent/dashboard");
    }
  }, [isLogged, router]);

  function clearModal() {
    setShowModal(false);
    router.push("talent/dashboard");
  }

  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>
      <Header />
      <div
        style={{ background: `url(${secondHeroBackground}` }}
        className="p-[2rem] lg:flex lg:justify-between sm:items-center sm:px-[5rem] sm:py-[8rem]"
      >
        <SignupLeft />
        <SignUpForm setShowModal={setShowModal} />
      </div>
      <Divisor />
      <EmailVerificationModal
        isVisible={showModal}
        handleRemoveModal={clearModal}
      />
      <Subscribe />
      <Footer />
    </div>
  );
}
