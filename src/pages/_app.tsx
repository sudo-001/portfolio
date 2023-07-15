import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Carick Atezong</title>
        <link rel="icon" href="/images/logo.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
