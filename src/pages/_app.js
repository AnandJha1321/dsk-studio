import "@/styles/globals.css";
import Head from "next/head";
import sharing192 from '@/assets/sharing192.png'

export default function App({ Component, pageProps }) {

  const defaultTitle = "DSK Makeover & Academy";
  const pageTitle = pageProps.title ? `${pageProps.title} - ${defaultTitle}` : defaultTitle;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="A well-known makeup studio in Bhayandar East, offering services from makeup application to training aspiring makeup artists."
        />
        <meta property="og:title" content="DSK Makeover & Academy" />
        <meta property="og:image" content={sharing192} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
