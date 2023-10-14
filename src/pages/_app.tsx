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

import dynamic from "next/dynamic";
// import AppThemeProvider from "@/lib/providers/AppThemeProvider";
// import AppQueryProvider from "@/lib/providers/AppQueryProvider";

// import { AuthProvider } from '@/lib/auth.context';

// import { PublicRoute } from '@/lib/route-protection';
// import { ToastProvider } from '@/lib/hooks/useToast';

// const PrivateRoute = dynamic(() => import('../lib/route-protection'), {
//   ssr: false,
// });

export default function App({ Component, pageProps }: AppProps) {
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
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
