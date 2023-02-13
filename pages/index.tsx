import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import requests from "@/utils/requests";
import { Movie } from "@/typings";

interface Props {
  topRated: Movie[];
  sf: Movie[];
  action: Movie[];
  comedy: Movie[];
  drama: Movie[];
  fantasy: Movie[];
}
const Home = ({ topRated, sf, action, comedy, drama, fantasy }: Props) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-[#333] to-[#141414]">
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

export const getServerSideProps = async () => {
  const [top, sf, action, comedy, drama, fantasy] = await Promise.all([
    fetch(requests.top).then((res) => res.json()),
    fetch(requests.sf).then((res) => res.json()),
    fetch(requests.action).then((res) => res.json()),
    fetch(requests.comedy).then((res) => res.json()),
    fetch(requests.drama).then((res) => res.json()),
    fetch(requests.fantasy).then((res) => res.json()),
  ]);

  console.log(top);
  return {
    props: {
      topRated: top.results,
      sf: sf.results,
      action: action.results,
      comedy: comedy.results,
      drama: drama.results,
      fantasy: fantasy.results,
    },
  };
};

export default Home;
