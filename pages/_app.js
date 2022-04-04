import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";
import AuthContextProvider from "../context/AuthContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <AuthContextProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </AuthContextProvider>
  );
}
