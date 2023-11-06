import Image from "next/image";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState, useEffect, useContext } from "react";
import FacebookGoogleBtn from "./FacebookGoogleBtn";
import FormSeperator from "./FormSeperator";
import ReactFlagsSelect from "react-flags-select";
import { CountryDropdown } from "react-country-region-selector";
import { useRouter } from "next/router";
import { AppContext } from "@/context/app.context";
import { useSignup } from "@/hooks/auth.hooks";
import { IFormValues } from "@/pages/signup";
export default function SignUpForm({ setShowModal }: any) {
  const router = useRouter();
  const [, dispatch] = useContext<any>(AppContext);
  // console.log({dispatch});

  const { mutate: signup, isLoading, error } = useSignup();
  console.log("Error2: ", error?.response?.data);

  const handleSubmit = (values: IFormValues) => {
    // console.log({values});
    signup(values);
    setShowModal(true);
  };

  useEffect(() => {
    // Trigger an initial validation check when the component mounts
    formik.validateForm();
  }, []);
  // const [selected, setSelected] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const formik = useFormik({
    initialValues: {
      serviceType: "",
      name: "",
      email: "",
      contact: "",
      country: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      serviceType: Yup.string().required("Please Select Your Service"),
      name: Yup.string().required("Please enter your name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
      phone: Yup.string().required("Please enter a phone number"),
      country: Yup.string().required("Please select your country"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long")
        .matches(
          /^(?=.*[0-9])(?=.*[!@#$%^&.*])[a-zA-Z0-9!@#$%^&.*]+$/,
          "Password must contain at least one number and one special character (!@#$%^&.*)"
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match") // This checks if the value matches the 'password' field
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // return;
      handleSubmit(values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="bg-white rounded-2xl p-[2rem] text-jubalGrey my-[3rem] sm:my-0 sm:p-[3rem] sm:mt-[3rem]">
      <h2 className="text-[2.4rem] font-[700]">Sign Up with Jubal</h2>
      <form className="mt-[3rem]">
        <div className="mb-[2rem] ">
          <label className="text-[1.6rem]">Select Your Service</label>
          <select
            className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
            id="serviceType"
            name="serviceType"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.serviceType}
          >
            <option value="">--Select Your Service--</option>
            <option value="Looking for Talents">Looking for Talents</option>
            <option value="Looking for Jobs">
              Looking for Music Related jobs
            </option>
          </select>
          {formik.touched.serviceType && formik.errors.serviceType ? (
            <div className="text-[1.3rem] text-red-700">
              {formik.errors.serviceType}
            </div>
          ) : null}
        </div>
        <div className="mb-[2rem]">
          <label className="text-[1.6rem]" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
            placeholder="Please Enter Your Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-[1.3rem] text-red-700">
              {formik.errors.name}
            </div>
          ) : null}
        </div>
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
        <div className="mb-[2rem]">
          <label className="text-[1.6rem]" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
            placeholder="909123456"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contact}
          />
          {formik.touched.contact && formik.errors.contact ? (
            <div className="text-[1.3rem] text-red-700">
              {formik.errors.contact}
            </div>
          ) : null}
        </div>
        <div className="mb-[2rem] ">
          <label className="text-[1.6rem]" htmlFor="country">
            Country
          </label>
          <CountryDropdown
            name="country"
            id="country"
            value={formik.values.country}
            onChange={(_, e) => formik.handleChange(e)}
            onBlur={formik.handleBlur}
            // className="px-[1.4rem] py-[1rem] w-[100%] rounded-lg border-[2px] border-jubalFormBorder mt-[1rem] text-[1.6rem]"
          />
          {/* <ReactFlagsSelect
            id="country"
            selected={selected}
            searchable={true}
            onSelect={(code) => {
              formik.setFieldValue("country", code); // Update the country field in formik.values
              setSelected(code); // Update the selected state as well
            }} */}
          {/* /> */}
          {formik.touched.country && formik.errors.country ? (
            <div className="text-[1.3rem] text-red-700">
              {formik.errors.country}
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
        <div className="mb-[2rem] ">
          <label className="text-[1.6rem]" htmlFor="confirmPassword">
            Confirm Password
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
          variant="filled"
          className={`${
            formik.isValid ? "bg-jubalViolet" : "bg-jubalFooterGrey"
          } w-[100%] normal-case text-[1.6rem] py-[1.2rem]`}
          onClick={() => formik.handleSubmit()}
          disabled={!formik.isValid}
        >
          Sign Up
        </Button>
      </form>
      <FormSeperator />
      <FacebookGoogleBtn
        iconSrc="/siwFacebook.svg"
        alt="facebook icon"
        buttonText="Sign Up with Facebook"
        onClick={() => router.push(process.env.NEXT_PUBLIC_API_BASE_URL+"/api/v1/auth/google")}
      />
      <FacebookGoogleBtn
        iconSrc="/siwGoogle.svg"
        alt="google icon"
        buttonText="Sign Up with Google"
        onClick={() => router.push(process.env.NEXT_PUBLIC_API_BASE_URL+"/api/v1/auth/google")}
      />
      <p className="text-center my-[2rem] text-[1.6rem]">
        If you already have an account{" "}
        <Link href="/login">
          <span className="text-jubalViolet ml-2 text-[1.6rem]">Login</span>
        </Link>
      </p>
    </div>
  );
}
