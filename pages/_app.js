import { Layout } from '@/components'
import '@/styles/globals.css'
import Head from 'next/head';
import AOS from 'aos';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      debounceDelay: 50,
      once: false,
      mirror: true,
    });
  })


  return (
    <Layout>
      <Head>
        <title>Jadoo - Travel Agency</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
