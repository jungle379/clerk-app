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
        <li>馬場傾向</li>
        <h1>
          開幕が進んだ中京芝にて実施。3角〜4角に緩やかな降り。直線では最後に坂がある
        </h1>
        <li>馬場状況</li>
        <h2>近走を見て判断</h2>
        <div className="text-2xl">有力馬一覧</div>
        <div>メイケイエール/先行？</div>
        <div></div>
        <Footer />
      </div>
    </>
  );
};

export default Race2;
