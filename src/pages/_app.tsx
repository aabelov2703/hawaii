import "@/styles/globals.css";

import Layout from "@/components/global/layout";
import { AppContextProvider } from "@/context/appContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}
