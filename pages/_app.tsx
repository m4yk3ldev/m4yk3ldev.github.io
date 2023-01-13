import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Montserrat } from "@next/font/google";
const montserrat = Montserrat({
  variable: "--font-montserrat",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-sans mx-2.5`}>
      <Component {...pageProps} />
    </main>
  );
}
