import Head from "next/head";
import Footer from "../components/Footer";

const Race2 = () => {
  return (
    <>
      <Head>
        <title>金鯱賞/中京/2000m</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <div className="text-4xl mb-10">金鯱賞</div>
        <li>馬場傾向</li>
        <ul></ul>
        <li>馬場状況</li>
        <div className="text-2xl my-10">有力馬一覧</div>
        <div>・ジャックドール/NGH</div>
        <div>・ポタジェ/絶対軸</div>
        <div></div>
        <div></div>
        <Footer />
      </div>
    </>
  );
};

export default Race2;
