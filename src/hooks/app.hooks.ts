import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/app.context";

// Hook to get the app context
export const useApp = () => {
  const [state, dispatch] = useContext<any>(AppContext);

  return [state, dispatch];
};

// Hook to check if the user is logged in
export const useCheckLogin = () => {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    const handleRouteChange = () => {
      const authToken = parseCookies().aToken;
      setIsLogged(!!authToken);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    const authToken = parseCookies().aToken;
    setIsLogged(!!authToken);


    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return isLogged;
};






