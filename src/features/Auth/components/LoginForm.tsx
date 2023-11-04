/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { Switch } from "@material-tailwind/react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import FacebookGoogleBtn from "./FacebookGoogleBtn";
import FormSeperator from "./FormSeperator";

export default function LoginForm() {
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
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="bg-gradient-to-r from-jubalGradientBlue to-jubalGradientGreen rounded-2xl mt-[5rem] sm:my-0 sm:w-[80%] lg:w-[40%]">
      <div className="bg-white rounded-2xl p-[2rem] text-jubalGrey my-[3rem] sm:my-[6rem] lg:my-0 lg:p-[3rem] lg:w-[100%] relative -right-8 -top-8 sm:-right-12 sm:-top-12 z-0">
        <h2 className="text-[2.4rem] font-[700]">Welcome Back!</h2>
        <form className="mt-[2rem]">
          <div className="mb-[2rem] ">
            <label className="text-[1.6rem]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
              placeholder="example@thejubal.com"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-[1.3rem] text-red-700">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="mb-[2rem] ">
            <label className="text-[1.6rem]" htmlFor="password">
              Password
            </label>
            <div className="flex px-[1.4rem] py-[1rem] w-[100%] border-jubalFormBorder border-[2px] rounded-lg   mt-[1rem]">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className=" w-[100%]  text-[1.6rem] focus:outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <Image
                src="/eye.svg"
                alt="eye icon"
                height="24"
                width="24"
                onClick={togglePasswordVisibility}
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-[1.3rem] text-red-700">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <Button
            className={`${
              formik.isValid ? "bg-jubalViolet" : "bg-jubalFooterGrey"
            } w-[100%] normal-case text-[1.6rem] py-[1.2rem]`}
            type="submit"
            disabled={!formik.isValid}
          >
            Login
          </Button>
        </form>
        <div className="flex justify-between my-[2rem]">
          <div className="flex">
            <Switch
              crossOrigin={undefined}
              label="Remember Me"
              ripple={true}
              id="custom-switch-component"
              className="h-full w-full checked:bg-jubalViolet"
              labelProps={{
                className: "text-[1.6rem] ml-[1rem] text-jubalGrey font-[400]",
              }}
              containerProps={{
                className: "w-12 h-6",
              }}
              circleProps={{
                className: "before:hidden left-0.5 border-none",
              }}
            />
          </div>
          <Link href="/forgot-password">
            <p className="text-[1.6rem]">Forgot Password?</p>
          </Link>
        </div>
        <FormSeperator />
        <FacebookGoogleBtn
          iconSrc="/siwFacebook.svg"
          alt="facebook icon"
          buttonText="Log in with Facebook"
        />
        <FacebookGoogleBtn
          iconSrc="/siwGoogle.svg"
          alt="google icon"
          buttonText="Log in with Google"
        />
        <p className="text-center my-[2rem] text-[1.6rem]">
          If you don&apos;t have an account{" "}
          <Link href="/signup">
            <span className="text-jubalViolet ml-2 text-[1.6rem]">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
