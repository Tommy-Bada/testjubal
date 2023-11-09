import React from "react";
import Image from "next/image";
import { ChangeEvent, FocusEvent } from "react";
import { useState } from "react";
import { eyeIcon } from "@/image";

interface PasswordInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  value: string;
  error?: string | null;
  name: string;
  label: string;
  className?: string;
  errorClassName?: string;
}

const PasswordField: React.FC<PasswordInputProps> = ({
  onChange,
  onBlur,
  value,
  error,
  name,
  label,
  className,
  errorClassName,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-[2rem] ">
      <label className="text-[1.6rem]" htmlFor={name}>
        {label}
      </label>
      <div
        className={`flex px-[1.4rem] py-[1rem] w-[100%] border-jubalFormBorder border-[2px] rounded-lg mt-[1rem] ${className}`}
      >
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          className=" w-[100%]  text-[1.6rem] focus:outline-none"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        <Image
          src={eyeIcon}
          alt="eye icon"
          height="24"
          width="24"
          onClick={togglePasswordVisibility}
        />
      </div>
      {error && (
        <div className={`text-[1.3rem] text-red-700 ${errorClassName || ""}`}>
          {error}
        </div>
      )}
    </div>
  );
};

export default PasswordField;
