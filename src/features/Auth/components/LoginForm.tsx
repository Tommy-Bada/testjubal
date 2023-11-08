import { useState, useEffect } from "react";
import { Button, Input } from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import FacebookGoogleBtn from "./FacebookGoogleBtn";
import FormSeperator from "./FormSeperator";
import { useRouter } from "next/router";
import { useCheckLogin } from "@/hooks/app.hooks";
import { useLogin } from "@/hooks/auth.hooks";
import { config } from "@/config";
import InputField from "@/shared/components/InputField";
import PasswordField from "@/shared/components/PasswordField";



interface IFormValues {
  email: string;
  password: string;
}
export default function LoginForm() {
  const router = useRouter();
  const isLogged = useCheckLogin();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    if (isLogged) {
      router.push("/client/dashboard");
    }
  }, []);

  const { mutate: login, isLoading, error } = useLogin();

  const handleSubmit = (values: IFormValues) => {
    login({ email: values.email, password: values.password });
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
      handleSubmit(values);
    },
  });

  return (
    <div className="bg-gradient-to-r from-jubalGradientBlue to-jubalGradientGreen rounded-2xl mt-[5rem] sm:my-0 sm:w-[80%] lg:w-[40%]">
      <div className="bg-white rounded-2xl p-[2rem] text-jubalGrey my-[3rem] sm:my-[6rem] lg:my-0 lg:p-[3rem] lg:w-[100%] relative -right-8 -top-8 sm:-right-12 sm:-top-12 z-0">
        <h2 className="text-[2.4rem] font-[700]">Welcome Back!</h2>
        <form className="mt-[2rem] " onSubmit={formik.handleSubmit}>
          <InputField
            label="Email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="example@thejubal.com"
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null
            }
          />
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
          <Button
            className={`${
              formik.isValid ? "bg-jubalViolet" : "bg-jubalFooterGrey"
            } w-[100%] normal-case text-[1.6rem] py-[1.2rem]`}
            disabled={!formik.isValid}
            onClick={() => formik.handleSubmit()}
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
              className="w-full h-full checked:bg-jubalViolet"
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
          onClick={() =>
            router.push(config.apiBaseUrl+"/api/v1/auth/facebook")
          }
        />
        <FacebookGoogleBtn
          iconSrc="/siwGoogle.svg"
          alt="google icon"
          buttonText="Log in with Google"
          onClick={() =>
            router.push(config.apiBaseUrl+"/api/v1/auth/google")
          }
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
