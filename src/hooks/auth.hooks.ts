import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useApp } from "./app.hooks";
import { loginRequest, signupRequest } from "../features/Auth/api/auth.api";
import { setCookie } from "nookies";

// Login User with react-query
export const useLogin = () => {
  const [, dispatch] = useApp();

  return useMutation(loginRequest, {
    onSuccess: (data) => {
      console.log({ data });

      if (data.access_token) {
        console.log("success: ", data);
        setCookie(null, "aToken", data.access_token, {
          maxAge: 24 * 60 * 60 * 1000, // 24 hrs
          path: "/",
        });
        setCookie(null, "rToken", data.refreshToken, {
          maxAge: 24 * 60 * 60 * 1000, // 24 hrs
          path: "/",
        });
        setCookie(null, "username", data.user.username, {
          maxAge: 24 * 60 * 60 * 1000, // 24 hrs
          path: "/",
        });
        dispatch({
          type: "SET_NOTIFY",
          payload: {
            type: "success",
            // @ts-ignore
            message: "Signed in successfully",
            open: true,
          },
        });
        window.location.href = `/${data.user.role}/dashboard`;
        // window.location.href = "/dashboard";
        // issue with next router redirect
      }
    },
    onError: (error: AxiosError) => {
      console.log("Error1: ", error.response?.data);
      dispatch({
        type: "SET_NOTIFY",
        payload: {
          type: "error",
          // @ts-ignore
          message: error.response?.data?.error || "Something went wrong",
          open: true,
        },
      });
    },
  });
};

// Signup User with react-query
export const useSignup = () => {
  const [, dispatch] = useApp();

  return useMutation(signupRequest, {
    onSuccess: (data) => {
      console.log("success: ", data);
      if (data.access_token) {
        setCookie(null, "aToken", data.access_token, {
          maxAge: 24 * 60 * 60 * 1000, // 24 hrs,
          path: "/",
        });
        setCookie(null, "rToken", data.refreshToken, {
          maxAge: 24 * 60 * 60 * 1000, // 24 hrs,
          path: "/",
        });
        dispatch({
          type: "SET_NOTIFY",
          payload: {
            type: "success",
            // @ts-ignore
            message: "Account created & logged in successfully",
            open: true,
          },
        });

        // window.location.href = `/${data.user.role}/dashboard`;
      }

    },
    onError: (error: AxiosError) => {
      console.log("Error1: ", error.response?.data);
      dispatch({
        type: "SET_NOTIFY",
        payload: {
          type: "error",
          message:
            // @ts-ignore
            error.response?.data?.error ||
            error.message ||
            "Something went wrong",
          open: true,
        },
      });
    },
  });
};
