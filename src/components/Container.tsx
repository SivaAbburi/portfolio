import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";
// import MobileMenu from 'components/MobileMenu';

export default function Container(props: { [x: string]: any; children: any }) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Achuth Hadnoor – Developer, writer, maker.",
    description: `Front-end developer, JavaScript enthusiast, and maker.`,
    image: "https://achuth.dev/static/images/banner.png",
    type: "website",
    date: "1-1-2022",
    ...customMeta,
  };
  return (
    <div className="bg-gray-0 dark:bg-gray-900 print:dark:bg-gray-500 px-4 sm:px-10">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://achuth.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://achuth.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Achuth Hadnoor" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@achuth_hadnoor" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/favicons/favicon.ico"
        />
        <link rel="manifest" href="/images/favicons/site.webmanifest" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config',  'UA-177599995-1');
        `,
          }}
        />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <Header />
      <main
        id="skip"
        className="flex flex-col justify-center sm:p-0  max-w-6xl mx-auto print:sm:px-4 print:sm:pt-24"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
