import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextNProgress color="#eb601e" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
