/**
 * **************************************************************************
 * **************************************************************************
 * Author:
 *
 * email:
 *
 * filename: _app.tsx
 *
 * @description: The TSM Dashboard base
 *
 * ***************************************************************************
 * ***************************************************************************
 *
 * @param param0
 * @returns
 *
 * The App Base
 * ? Local Imports
 */

import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import "react-day-picker/dist/style.css";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import { Inter } from "@next/font/google";

import dynamic from "next/dynamic";
const inter = Inter({ subsets: ["latin"] });

import React from "react";
import { NextComponentType } from "next";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider, Hydrate, QueryClient } from "react-query";
import AppProvider from "@/context/app.context";

type CustomAppProps = AppProps & {
  Component: NextComponentType & { auth?: boolean };
};

function MyApp({ Component, pageProps }: CustomAppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 20,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
