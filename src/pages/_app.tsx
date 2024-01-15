import type { AppProps } from 'next/app'

import Head from "next/head";

import '../styles/global.scss'

import '../components/Carousel/css/base.scss'
import '../components/Carousel/css/embla.scss'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Edutismo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
