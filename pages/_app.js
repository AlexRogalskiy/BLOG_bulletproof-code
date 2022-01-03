// import { useEffect } from "react";
import Head from "next/head";
import { Auth0Provider } from "@auth0/auth0-react";
// import { useRouter } from "next/router";
// import * as fbq from "../utils/pixel.helpers";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  // const router = useRouter();

  // // * Facebook Pixel
  // useEffect(() => {
  //   // This pageview only triggers the first time (it's important for Pixel to have real information)
  //   fbq.pageview();

  //   const handleRouteChange = () => {
  //     fbq.pageview();
  //   };

  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </Auth0Provider>
  );
}
