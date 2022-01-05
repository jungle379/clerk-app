import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";

const Recommend = () => {
  return (
    <>
      <Head>
        <title>一押しウマ</title>
      </Head>
      <div className="h-auto bg-green-300">
        <Header />
        <div className="flex">
          <Sidevar />
          <div className="text-4xl mx-10 font-bold w-4/5">一押し推奨馬</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recommend;
