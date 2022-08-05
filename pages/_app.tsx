import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#eb601e" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
