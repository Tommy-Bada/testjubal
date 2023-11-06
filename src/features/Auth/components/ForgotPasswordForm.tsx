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
    <div
      className="bg-gradient-to-r from-jubalGradientBlue to-jubalGradientGreen rounded-2xl mt-[5rem] sm:my-0 sm:w-[80%] lg:w-[40%]"
      suppressHydrationWarning
    >
      <div className="bg-white rounded-2xl p-[2rem] text-jubalGrey my-[3rem] sm:my-[6rem] lg:my-0 lg:p-[3rem] lg:w-[100%] relative -right-8 -top-8 sm:-right-12 sm:-top-12 z-0">
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
          {formik.isValid ? (
            <Link href="/password-verification">
              <Button
                variant="filled"
                className="bg-jubalViolet w-[100%] normal-case text-[1.6rem] py-[1.2rem]"
                type="submit"
              >
                Submit
              </Button>
            </Link>
          ) : (
            <Button
              variant="filled"
              className="bg-jubalFooterGrey w-[100%] normal-case text-[1.6rem] py-[1.2rem]"
              type="submit"
              disabled
            >
              Submit
            </Button>
          )}
        </form>
        <p className="text-center my-[2rem] text-[1.6rem]">
          Didn&apos;t receive the mail?{" "}
          <span className="text-jubalViolet ml-2 text-[1.6rem]">
            Resend mail
          </span>
        </p>
      </div>
    </div>
  );
}
