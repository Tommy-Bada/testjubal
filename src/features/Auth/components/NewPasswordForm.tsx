/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PasswordField from "../../../shared/components/PasswordField";

export default function NewPasswordForm({ handleSubmit }: any) {
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
    <div className="bg-gradient-to-r from-jubalGradientBlue to-jubalGradientGreen rounded-2xl mt-[5rem] sm:my-0 sm:w-[80%] lg:w-[40%]">
      <div className="bg-white rounded-2xl p-[2rem] text-jubalGrey my-[3rem] sm:my-[6rem] lg:my-0 lg:p-[3rem] lg:w-[100%] relative -right-8 -top-8 sm:-right-12 sm:-top-12 z-0">
        <h2 className="text-[2.4rem] font-[700]">Welcome Back!</h2>
        <form className="mt-[2rem]" onSubmit={formik.handleSubmit}>
          <PasswordField
            label="New Password"
            name="newPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.newPassword}
            error={
              formik.touched.newPassword && formik.errors.newPassword
                ? formik.errors.newPassword
                : null
            }
          />
          <PasswordField
            label=" Confirm New Password"
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
          {formik.isValid ? (
            <Button
              className="bg-jubalViolet w-[100%] normal-case text-[1.6rem] py-[1.2rem]"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </Button>
          ) : (
            <Button
              className=" bg-jubalFooterGrey w-[100%] normal-case text-[1.6rem] py-[1.2rem]"
              type="submit"
              disabled
            >
              Login
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}
