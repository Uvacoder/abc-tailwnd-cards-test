import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo-config';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Tailwind para Designers</title>
        <meta
          property="og:title"
          name="Tailwind para Designers"
          content="Guia geral do framework para designers, em português."
          key="title"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <DefaultSeo {...SEO} />
      <body className="bg-white dark:bg-blackish">
        <Component {...pageProps} />
      </body>
    </ThemeProvider>
  );
}

export default MyApp;
