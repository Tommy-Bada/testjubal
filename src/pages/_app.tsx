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
// import AppThemeProvider from "@/lib/providers/AppThemeProvider";
// import AppQueryProvider from "@/lib/providers/AppQueryProvider";

// import { AuthProvider } from '@/lib/auth.context';

// import { PublicRoute } from '@/lib/route-protection';
// import { ToastProvider } from '@/lib/hooks/useToast';

// const PrivateRoute = dynamic(() => import('../lib/route-protection'), {
//   ssr: false,
// });
const inter = Inter({ subsets: ["latin"] });
// export default function App({ Component, pageProps }: AppProps) {
  // const displayComponent = () => {
  //   if (['/', '/login', '/forgot-password'].includes(appProps.router.pathname))
  //     return (
  //       <PublicRoute>
  //         <Component {...pageProps} />
  //       </PublicRoute>
  //     );

  //   return (
  //     <PrivateRoute>
  //       <Component {...pageProps} />
  //     </PrivateRoute>
  //   );
  // };

  // return (
  //   <AuthProvider>
  //     <AppQueryProvider>
  //       <AppThemeProvider>
  //         <ToastProvider>{displayComponent()}</ToastProvider>
  //         <ToastContainer pauseOnFocusLoss draggable pauseOnHover />
  //       </AppThemeProvider>
  //     </AppQueryProvider>
  //   </AuthProvider>
  // );
//   return (
//     <div>
//       <Component {...pageProps} />
//     </div>
//   );
// }

import React from "react";
// import type { AppProps } from "next/app";
import { NextComponentType } from "next";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider, Hydrate, QueryClient } from "react-query";

// import theme from "../theme";
// import "../styles/globals.css";
// import Layout from "../components/Layout";
import AppProvider from "@/context/app.context";
// import Protected from "../components/Protected/Protected";

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
      {/* <ThemeProvider theme={theme}> */}
        <AppProvider>
          {/* <Layout> */}
            <Component {...pageProps} />
          {/* </Layout> */}
        </AppProvider>
      {/* </ThemeProvider> */}
    </QueryClientProvider>
  );
}

export default MyApp;
