import Head from "next/head";
import Footer from "../components/Footer";

const Race1 = () => {
  return (
    <>
      <Head>
        <title>東京新聞杯/東京/1600m</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <div className="text-4xl">東京新聞杯/東京/1600m</div>
        <div className="text-2xl">馬場傾向</div>
        <div className="text-2xl">有力馬一覧</div>
        <div></div>
        <div></div>
        <div></div>
        <Footer />
      </div>
    </>
  );
};

export default Race1;
