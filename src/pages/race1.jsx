import Head from "next/head";
import Footer from "../components/Footer";

const Race1 = () => {
  return (
    <>
      <Head>
        <title>中山記念/中山/1800m</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <div className="text-6xl mx-10 py-10">中山記念</div>
        <div className="mx-20 text-2xl my-10">
          <li>馬場傾向</li>
          <ul className="px-10">
            →開幕週だけに内側の先行馬に有利。上がり32秒であれば差しも届く。
          </ul>
          <li>馬場状況</li>
          <div className="text-4xl my-10">有力馬一覧</div>
          <div>・ダノンザキッド/絶対軸/NGH</div>
          <div>・ヒュミドール/NGH</div>
          <div>・</div>
          <div>・</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Race1;
