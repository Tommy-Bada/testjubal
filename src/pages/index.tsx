import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <Link href="/signup">
          <h1 className="text-[2rem] my-4">Sign Up Page</h1>
        </Link>
        <Link href="/login">
          <h1 className="text-[2rem] my-4">Login Page</h1>
        </Link>
        <Link href="/forgot-password">
          <h1 className="text-[2rem] my-4">Forgot Password Page</h1>
        </Link>
        <Link href="/password-verification">
          <h1 className="text-[2rem] my-4">Password Verification Page</h1>
        </Link>
        <Link href="/new-password">
          <h1 className="text-[2rem] my-4">Create New Password Page</h1>
        </Link>
        <h1>Test</h1>
      </div>
    </div>
  );
}
