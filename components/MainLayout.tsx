import Head from "next/head";
import {useRouter} from "next/router";
import Script from "next/script";
import {FC} from "react";
interface Props {
    title: string;
    children: JSX.Element;
}
const MainLayout: FC<Props> = ({title, children}) => {
    const router = useRouter();
    const url = router.asPath;
    const canonicalURL = "https://maykel.hancly.dev" + url;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Script src="https://app.embed.im/snow.js" defer></Script>
            <Script
        strategy={"afterInteractive"}
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-PJXWP2N`}
      />
      <Script
        id={"gtag-id"}
        strategy={"afterInteractive"}
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        `,
        }}
      ></Script>
            {children}
        </>
    );
};
export default MainLayout;



