import "../styles/globals.css";

import AuthContextProvider from "../context/AuthContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
