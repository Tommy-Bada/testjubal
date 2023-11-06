import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCheckLogin } from "@/hooks/app.hooks";
import { parseCookies } from "nookies";

export default function Home() {
  const authToken = parseCookies().aToken;
  console.log({ authToken });

  const router = useRouter();
  const isLogged = useCheckLogin();

  useEffect(() => {
    if (isLogged || !!authToken) {
      router.push("/talent/dashboard");
    }
  }, []);

}