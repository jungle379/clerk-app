import Head from "next/head";
import Footer from "../components/Footer";

const Race1 = () => {
  return (
    <>
      <Head>
        <title>フェブラリーS/東京/砂・1600m</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <div className="text-6xl mx-10 py-10">フェブラリーS</div>
        <div className="mx-20 text-2xl my-10">
          <li>馬場傾向</li>
          <ul>逃げ先行が有利ながら差しにも展開が向く。</ul>
          <ul>上がり勝負になり、11番手以下で4角を迎えると最速の足が必要</ul>
          <li>馬場状況</li>
          <ul>土日に雨が想定、従来よりスピード重視される。</ul>
          <div className="text-4xl my-10">有力馬一覧</div>
          <div>・ソリストサンダー・NGH</div>
          <div>・レッドルゼル・絶対軸・最悪データ</div>
          <div>・テイエムサウスダン・紐解き</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Race1;
