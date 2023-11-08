/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FacebookGoogleBtn from "./FacebookGoogleBtn";
import FormSeperator from "./FormSeperator";
import { CountryDropdown } from "react-country-region-selector";
import SelectField from "../../../shared/components/SelectField";
import InputField from "../../../shared/components/InputField";
import PasswordField from "../../../shared/components/PasswordField";

export default function SignUpForm({ handleSignUp }: any) {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    formik.setFieldValue("serviceType", selectedValue);
  };

  const formik = useFormik({
    initialValues: {
      serviceType: "",
      name: "",
      email: "",
      phone: "",
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
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="bg-white rounded-2xl p-[2rem] text-jubalGrey my-[3rem] sm:my-0 sm:p-[3rem] sm:mt-[3rem]">
      <h2 className="text-[2.4rem] font-[700]">Sign Up with Jubal</h2>
      <form onSubmit={formik.handleSubmit} className="mt-[3rem]">
        <SelectField
          label="Select Your Service"
          name="ServiceType"
          options={[
            { value: "", label: "--Select Your Service--" },
            { value: "Looking for Talents", label: "Looking for Talents" },
            {
              value: "Looking for Jobs",
              label: "Looking for Music Related jobs",
            },
          ]}
          value={selectedValue}
          onChange={handleSelectChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.serviceType && formik.errors.serviceType
              ? formik.errors.serviceType
              : null
          }
        />

        <InputField
          label="Name"
          name="name"
          type="text"
          placeholder="Please Enter Your Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={
            formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null
          }
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="example@thejubal.com"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
        />

        <InputField
          label="Phone Number"
          name="phone"
          type="text"
          placeholder="909123456"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          error={
            formik.touched.phone && formik.errors.phone
              ? formik.errors.phone
              : null
          }
        />

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
          />

          {formik.touched.country && formik.errors.country ? (
            <div className="text-[1.3rem] text-red-700">
              {formik.errors.country}
            </div>
          ) : null}
        </div>
        <PasswordField
          label="Password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />

        <PasswordField
          label="Confirm Password"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : null
          }
        />

        <Button
          variant="filled"
          className={`${
            formik.isValid ? "bg-jubalViolet" : "bg-jubalFooterGrey"
          } w-[100%] normal-case text-[1.6rem] py-[1.2rem]`}
          onClick={formik.isValid ? handleSignUp : null}
          type="submit"
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
      />
      <FacebookGoogleBtn
        iconSrc="/siwGoogle.svg"
        alt="google icon"
        buttonText="Sign Up with Google"
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
