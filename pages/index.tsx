import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Next Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="">
        <section></section>
      </main>
    </div>
  );
};

export default Home;
