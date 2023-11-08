import { ChangeEvent, FocusEvent } from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string | null;
  className?: string;
  errorClassName?: string;
  rows?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  className,
  errorClassName,
  rows,
}) => {
  if (type === "textarea")
    return (
      <div className="w-[100%] mb-[2rem]">
        <label
          className="text-[1.6rem] font-[600] text-jubalGrey"
          htmlFor={name}
        >
          {label}
        </label>
        <br />
        <textarea
          id={name}
          name={name}
          className={`px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem] ${className}}`}
          placeholder="What is the task about?"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          rows={rows}
        ></textarea>
      </div>
    );
  else if (name === "rate")
    return (
      <div className="mb-[2rem] w-[46%]">
        <label
          className="text-[1.6rem] font-[600] text-jubalGrey"
          htmlFor="name"
        >
          Rate{" "}
        </label>
        <div className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem] flex justify-between items-center">
          <input
            id="rate"
            name="rate"
            type="text"
            className=" w-[100%] text-[1.6rem] focus:outline-none "
            placeholder="20"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
          <p className="text-[1.6rem] text-jubalFAQGrey">$/hr</p>
        </div>
        {error && (
          <div className={`text-[1.3rem] text-red-700 ${errorClassName || ""}`}>
            {error}
          </div>
        )}
      </div>
    );
  else
    return (
      <div className={`mb-[2rem] ${className || ""}`}>
        <label className="text-[1.6rem]" htmlFor={name}>
          {label}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          className={`px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem] ${
            className || ""
          }`}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        {error && (
          <div className={`text-[1.3rem] text-red-700 ${errorClassName || ""}`}>
            {error}
          </div>
        )}
      </div>
    );
};

export default InputField;
