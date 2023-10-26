/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { useEffect } from "react";

export default function ForgotPasswordForm() {
  useEffect(() => {
    // Trigger an initial validation check when the component mounts
    formik.validateForm();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="bg-white rounded-2xl p-[2rem] text-jubalFormText my-[3rem] sm:my-0 lg:p-[3rem] lg:w-[40%]">
      <h2 className="text-[2.4rem] font-[700]">Forgot Password</h2>
      <form onSubmit={formik.handleSubmit} className="mt-[3rem]">
        <div className="mb-[2rem]">
          <label className="text-[1.6rem]">Email</label>
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
        <Link href="/password-verification">
          <Button
            variant="filled"
            className={`${
              formik.isValid ? "bg-jubalViolet" : "bg-jubalPreSignUp"
            } w-[100%] normal-case text-[1.6rem] py-[1.2rem]`}
            type="submit"
            disabled={!formik.isValid}
          >
            Submit
          </Button>
        </Link>
      </form>
      <p className="text-center my-[2rem] text-[1.6rem]">
        Didn&apos;t receive the mail?{" "}
        <span className="text-jubalViolet ml-2 text-[1.6rem]">Resend mail</span>
      </p>
    </div>
  );
}
