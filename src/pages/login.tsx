import Header from "@/shared/components/Header";
import Divisor from "@/shared/components/Divisor";
import Subscribe from "@/shared/components/Subscribe";
import Footer from "@/shared/components/Footer";
import LoginLeft from "@/features/Auth/components/LoginLeft";
import LoginForm from "@/features/Auth/components/LoginForm";
import { useRouter } from "next/router";
import { useCheckLogin } from "@/hooks/app.hooks";
import { loginHero } from "@/image";

export default function Login() {
  const router = useRouter();
  const isLogged = useCheckLogin();

  if (isLogged) {
    router.push("/talent/dashboard");
    return;
  }

  return (
    <div>
      <Header />
      <div
        style={{ background: `url(${loginHero}` }}
        className="pl-[2rem] pr-[4rem] py-[2rem] lg:flex sm:justify-between sm:items-center sm:px-[5rem] sm:py-[8rem]"
      >
        <LoginLeft />
        <LoginForm />
      </div>
      <Divisor />
      <Subscribe />
      <Footer />
    </div>
  );
}
