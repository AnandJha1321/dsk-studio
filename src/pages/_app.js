import "@/styles/globals.css";
import Head from "next/head";
import sharing192 from '@/assets/sharing192.png'

export default function App({ Component, pageProps }) {
  return(
  <>
    <Head>
      <title>DSK Makeover & Academy</title>
      <meta name="description" content="A well Known Makeup up studio in Bhayandar East, from makeup services, makeup shoot to making you 
      a makeup we havve everything you aspire..."/>
      <meta property="og:title" content="DSK Makeover & Academy" />
      <meta property="og:image" content={sharing192} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />;
  </>
  );
}

