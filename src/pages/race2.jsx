import Head from "next/head";
import Footer from "../components/Footer";

const Race2 = () => {
  return (
    <>
      <Head>
        <title>きさらぎ賞/中京/2000m</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <div className="text-4xl">きさらぎ賞/中京/2000m</div>
        <li>馬場傾向</li>
        <li></li>
        <li>馬場状況</li>
        <div className="text-2xl">有力馬一覧</div>
        <div>リューベック</div>
        <div></div>
        <div></div>
        <Footer />
      </div>
    </>
  );
};

export default Race2;
