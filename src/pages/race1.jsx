import Head from "next/head";
import Footer from "../components/Footer";

const Race1 = () => {
  return (
    <>
      <Head>
        <title>中山牝馬S/中山/1800m</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <div className="text-4xl mx-10 py-10">中山牝馬S</div>
        <div className="mx-20 text-2xl my-10">
          <li>馬場傾向</li>
          <ul className="px-10"></ul>
          <li>馬場状況</li>
          <ul></ul>
          <div className="text-2xl my-10">有力馬一覧</div>
          <div>・ドナアトラエンテ/絶対軸</div>
          <div>・クールキャット/紐解き</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Race1;
