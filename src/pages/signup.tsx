import Head from "next/head";
import Header from "@/shared/components/Header";
import Divisor from "@/shared/components/Divisor";
import Subscribe from "@/shared/components/Subscribe";
import Footer from "@/shared/components/Footer";
import SignupLeft from "@/features/Auth/components/SignupLeft";
import SignUpForm from "@/features/Auth/components/SignUpForm";
import EmailVerificationModal from "@/features/Auth/components/EmailVerificationModal";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/app.context";
import { useSignup } from "@/hooks/auth.hooks";
import { useRouter } from "next/router";
import { useCheckLogin } from "@/hooks/app.hooks";
import { parseCookies } from "nookies";

export interface IFormValues {
  email: string;
  password: string;
  serviceType: string;
  name: string;
  contact: string;
  country: string;
}
export default function Signup() {
  const authToken = parseCookies().aToken;
  console.log({ authToken });

  const router = useRouter();
  const isLogged = useCheckLogin();

  useEffect(() => {
    if (isLogged || !!authToken) {
      router.push("/talent/dashboard");
    }
  }, []);

  function clearModal() {
    setShowModal(false);
    router.push("talent/dashboard");
  }

  const [showModal, setShowModal] = useState(false);
  console.log("working!");
  const [, dispatch] = useContext<any>(AppContext);
  console.log({ dispatch });
  const { mutate: signup, isLoading, error } = useSignup();
  console.log("Error2: ", error?.response?.data);

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
