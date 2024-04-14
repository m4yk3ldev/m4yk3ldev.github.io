import Head from "next/head";
import Script from "next/script";
import { FC } from "react";
import favicon from "../../assert/image/logo.svg";
interface Props {
  titleText: string;
  children: JSX.Element;
}
const MainLayout: FC<Props> = ({ titleText = "Bienvenido", children }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href={favicon.src} />
        <link rel="shortcut icon" type="image/jpg" href={favicon.src} />
        <link rel="apple-touch-icon" href={favicon.src} />
        <meta name="title" content={titleText + " | Maykel Tech"} />
        <meta
          name="description"
          content="Soy un desarrollador web con experiencia en HTML, CSS, JavaScript, NodeJS y Python."
        />
        <meta
          name="keywords"
          content="portafolio, desarrollador web, HTML, CSS, JavaScript, frontend, front-end, python"
        />
        <meta name="author" content="Maykel Arias Torres" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maykelarias.tech/" />
        <meta property="og:title" content="Hola, soy Maykel Arias Torres" />
        <meta
          property="og:description"
          content="Soy un desarrollador web con experiencia en HTML, CSS, JavaScript, NodeJS y Python."
        />
        <meta property="og:image" content={favicon.src} />
        <meta property="twitter:card" content={favicon.src} />
        <meta property="twitter:url" content="https://maykelarias.tech/" />
        <meta
          property="twitter:title"
          content="Hola, soy Maykel Arias Torres"
        />
        <meta
          property="twitter:description"
          content="Soy un desarrollador web con experiencia en HTML, CSS, JavaScript, NodeJS y Python."
        />
        <meta property="twitter:image" content={favicon.src} />
        <meta name="google-adsense-account" content="ca-pub-7217165524683704" />
        <title>{titleText} | Maykel Tech</title>
      </Head>
      <Script   strategy={"afterInteractive"} async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7217165524683704" />
     
      {children}
    </>
  );
};
export default MainLayout;
