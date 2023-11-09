import Header from "@/shared/components/Header";
import Divisor from "@/shared/components/Divisor";
import Subscribe from "@/shared/components/Subscribe";
import Footer from "@/shared/components/Footer";
import NewPasswordForm from "@/features/Auth/components/NewPasswordForm";
import LoginLeft from "@/features/Auth/components/LoginLeft";
import SuccessModal from "@/features/Auth/components/SuccessModal";
import { useState } from "react";
import { loginHero } from "@/image";

export default function CreateNewPassword() {
  const [showModal, setShowModal] = useState(false);
  const handleCreateNewPassword = () => {
    setShowModal(true);
  };
  return (
    <div>
      <Header />
      <div
        style={{ background: `url(${loginHero}` }}
        className="pl-[2rem] pr-[4rem] py-[2rem] lg:flex sm:justify-between sm:items-center sm:px-[5rem] sm:py-[8rem]"
      >
        <LoginLeft />
        <NewPasswordForm handleSubmit={handleCreateNewPassword} />
      </div>
      <Divisor />
      <Subscribe />
      <Footer />
      <SuccessModal
        isVisible={showModal}
        handleRemoveModal={() => setShowModal(false)}
        text="Your password has been reset successfully"
        buttonText="Proceed"
      />
    </div>
  );
}
