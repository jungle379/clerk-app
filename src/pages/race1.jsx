import Head from "next/head";
import Footer from "../components/Footer";

const Race1 = () => {
  return (
    <>
      <Head>
        <title>根岸S/東京/1400m</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <div className="text-4xl">根岸S/東京/1400m</div>
        <div className="text-2xl">馬場傾向</div>
        <li>開幕週の東京の砂で行われるが、差し馬に利点がある。</li>
        <div className="text-2xl">有力馬一覧</div>
        <div></div>
        <div></div>
        <Footer />
      </div>
    </>
  );
};

export default Race1;
