import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { ChangeEvent, useState } from "react";

export default function PasswordVerificationForm() {
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
  const inputRefs: string | any[] = [];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    inputs[index] = value;
    setInputs([...inputs]);

    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].focus();
    }
  };

  const handleBackspace = (e: { key: string }, index: number) => {
    if (e.key === "Backspace" && index > 0) {
      // If backspace is pressed and not in the first input
      inputs[index] = ""; // Clear the current input
      setInputs([...inputs]);
      inputRefs[index - 1].focus(); // Move focus to the previous input
    }
  };

  return (
    <div className="bg-white rounded-2xl p-[2rem] text-jubalFormText my-[3rem] sm:my-0 lg:p-[3rem] lg:w-[40%]">
      <h2 className="text-[2.4rem] font-[700]">Enter Verification Code</h2>
      <form className="mt-[2rem]">
        <label className="text-[1.6rem]">
          A six-digit verification code was sent to the email you registered
          with Jubal.
        </label>
        <div className="flex justify-between space-x- my-[2rem]">
          {inputs.map((input, index) => (
            <input
              key={index}
              type="text"
              className="text-center py-[1rem]  text-[1.4rem] w-[4rem] sm:text-[1.6rem] sm:[5.5rem] border-[2px] border-jubalFormBorder  rounded focus:border-[1px] "
              pattern="\d"
              maxLength={1}
              value={input}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              ref={(ref) => (inputRefs[index] = ref)}
            />
          ))}
        </div>
        {inputs.every((input) => input !== "") ? (
          <Link href="/new-password">
            <Button
              className=" bg-jubalViolet w-[100%] normal-case text-[1.6rem] py-[1.2rem]"
              type="submit"
            >
              Submit
            </Button>
          </Link>
        ) : (
          <Button
            className="bg-jubalPreSignUp w-[100%] normal-case text-[1.6rem] py-[1.2rem]"
            type="submit"
            disabled
          >
            Submit
          </Button>
        )}
      </form>
      <p className="text-center my-[2rem] text-[1.6rem]">
        Didn&apos;t receive the mail?{" "}
        <span className="text-jubalViolet ml-2 text-[1.6rem]">Resend mail</span>
      </p>
    </div>
  );
}
