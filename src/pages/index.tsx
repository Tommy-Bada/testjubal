import { useEffect} from "react";
import { useRouter } from "next/router";
import { useCheckLogin } from "@/hooks/app.hooks";
export default function Home() {
  const router = useRouter();
  const isLogged = useCheckLogin();

  useEffect(() => {
    if (isLogged) {
      router.push("/talent/dashboard");
    } else {
      router.push("/login");
    }
  }, [isLogged, router]);
}
