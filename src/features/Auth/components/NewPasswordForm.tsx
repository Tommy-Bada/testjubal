/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function NewPasswordForm() {
  useEffect(() => {
    // Trigger an initial validation check when the component mounts
    formik.validateForm();
  }, []);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long")
        .matches(
          /^(?=.*[0-9])(?=.*[!@#$%^&.*])[a-zA-Z0-9!@#$%^&.*]+$/,
          "Password must contain at least one number and one special character (!@#$%^&.*)"
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), undefined], "Passwords must match") // This checks if the value matches the 'password' field
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="bg-gradient-to-r from-[#3F2883] to-[#2DA5A4] rounded-2xl mt-[5rem] sm:my-0 sm:w-[80%] lg:w-[40%]">
      <div className="bg-white rounded-2xl p-[2rem] text-jubalFormText my-[3rem] sm:my-[6rem] lg:my-0 lg:p-[3rem] lg:w-[100%] relative -right-8 -top-8 sm:-right-12 sm:-top-12 z-0">
        <h2 className="text-[2.4rem] font-[700]">Welcome Back!</h2>
        <form className="mt-[2rem]">
          <div className="mb-[2rem] ">
            <label className="text-[1.6rem]" htmlFor="password">
              New Password
            </label>
            <div className="flex px-[1.4rem] py-[1rem] w-[100%] border-jubalFormBorder border-[2px] rounded-lg   mt-[1rem]">
              <input
                id="newPassword"
                name="newPassword"
                type={showPassword ? "text" : "password"}
                className=" w-[100%]  text-[1.6rem] focus:outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newPassword}
              />
              <Image
                src="/eye.svg"
                alt="eye icon"
                height="24"
                width="24"
                onClick={togglePasswordVisibility}
              />
            </div>
            {formik.touched.newPassword && formik.errors.newPassword ? (
              <div className="text-[1.3rem] text-red-700">
                {formik.errors.newPassword}
              </div>
            ) : null}
          </div>
          <div className="mb-[2rem] ">
            <label className="text-[1.6rem]" htmlFor="confirmPassword">
              Confirm New Password
            </label>
            <div className="flex px-[1.4rem] py-[1rem] w-[100%] border-jubalFormBorder border-[2px] rounded-lg   mt-[1rem]">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                className=" w-[100%]  text-[1.6rem] focus:outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              <Image
                src="/eye.svg"
                alt="eye icon"
                height="24"
                width="24"
                onClick={togglePasswordVisibility}
              />
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-[1.3rem] text-red-700">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>
          <Button
            className={`${
              formik.isValid ? "bg-jubalViolet" : "bg-jubalPreSignUp"
            } w-[100%] normal-case text-[1.6rem] py-[1.2rem]`}
            type="submit"
            disabled={!formik.isValid}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
