import Head from "next/head";
import Footer from "../components/Footer";

const Race1 = () => {
  return (
    <>
      <Head>
        <title>弥生賞/中山/2000m</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <div className="text-4xl mx-10 py-10">弥生賞</div>
        <div className="mx-20 text-2xl my-10">
          <li>馬場傾向</li>
          <ul className="px-10"></ul>
          <li>馬場状況</li>
          <ul>重馬場での開催時には上がり最速馬が差し切り勝利</ul>
          <div className="text-2xl my-10">有力馬一覧</div>
          <div>・ジャスティンロック/NGH/紐解き</div>
          <div>・ボーンディスウェイ/NGH</div>
          <div>・ドウデュース/絶対軸</div>
          <div>・ラーグルフ/紐解き</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Race1;
