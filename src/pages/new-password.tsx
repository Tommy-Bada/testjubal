import Header from "@/shared/components/Header";
import Divisor from "@/shared/components/Divisor";
import Subscribe from "@/shared/components/Subscribe";
import Footer from "@/shared/components/Footer";
import NewPasswordForm from "@/features/Auth/components/NewPasswordForm";
import LoginLeft from "@/features/Auth/components/LoginLeft";
import PasswordResetSuccessModal from "@/features/Auth/components/PasswordResetSuccessModal";
import { useState } from "react";

export default function CreateNewPassword() {
  const [showModal, setShowModal] = useState(false);
  const handleCreateNewPassword = () => {
    setShowModal(true);
  };
  return (
    <div>
      <Header />
      <div
        style={{ background: "url(/loginHero.png)" }}
        className="p-[2rem] sm:flex sm:justify-between sm:items-center sm:px-[5rem] sm:py-[8rem]"
      >
        <LoginLeft />
        <NewPasswordForm />
      </div>
      <Divisor />
      <Subscribe />
      <Footer />
      <PasswordResetSuccessModal
        isVisible={showModal}
        handleRemoveModal={() => setShowModal(false)}
        text="Your password has been reset successfully"
        buttonText="Proceed"
      />
    </div>
  );
}
