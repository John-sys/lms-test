import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Library Managment System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
      <Script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></Script>
    </div>
  );
};

export default Home;
