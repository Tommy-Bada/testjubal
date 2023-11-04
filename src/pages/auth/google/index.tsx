import { useRouter } from "next/router";
import { useEffect } from "react";

export default function GoogleLoginCallback(){
    const router = useRouter();

    useEffect(() => {
      router.push('/client/dashboard');
    }, []);
    return <div></div>
}