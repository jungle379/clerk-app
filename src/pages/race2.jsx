import Head from "next/head";
import Footer from "../components/Footer";

const Race2 = () => {
  return (
    <>
      <Head>
        <title>シルクロードS/中京/1200m</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <div className="text-4xl">シルクロードS/中京/1200m</div>
        <li>馬場状況</li>
        <li></li>
        <div className="text-2xl">有力馬一覧</div>
        <div></div>
        <div></div>
        <Footer />
      </div>
    </>
  );
};

export default Race2;
