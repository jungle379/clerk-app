import Head from "next/head";
import Footer from "../components/Footer";

const Race2 = () => {
  return (
    <>
      <Head>
        <title>きさらぎ賞/中京/2000m</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <div className="text-4xl mb-10">きさらぎ賞/中京/2000m</div>
        <li>馬場傾向</li>
        <li>ディープ系など主要産駒が好走。昨年は3番人気までで決着。</li>
        <li>馬場状況</li>
        <div className="text-2xl my-10">有力馬一覧</div>
        <div>フォースクエア・ヒモ</div>
        <div>セルケト</div>
        <div>ダンテスビュー</div>
        <Footer />
      </div>
    </>
  );
};

export default Race2;
