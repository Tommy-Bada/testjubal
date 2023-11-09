import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function FacebookLoginCallback() {
  const router = useRouter();

  useEffect(() => {
    router.push('/client/dashboard');
  }, [router]);

  return <div></div>;
}
