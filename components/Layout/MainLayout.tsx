import Head from "next/head";
import Script from "next/script";
import { FC, useEffect } from "react";
import favicon from "../../assert/image/logo.svg";
interface Props {
  title: string;
  children: JSX.Element;
}
const MainLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href={favicon.src} />
        <link rel="shortcut icon" type="image/jpg" href={favicon.src}/>
        <title>{title}</title>
      </Head>
      <Script
        strategy={"afterInteractive"}
        src={`https://www.googletagmanager.com/gtag/js?id=G-9DN35DFS38`}
      />
      <Script
        id={"gtag-id"}
        strategy={"afterInteractive"}
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9DN35DFS38');
        `,
        }}
      ></Script>
      {children}
    </>
  );
};
export default MainLayout;
