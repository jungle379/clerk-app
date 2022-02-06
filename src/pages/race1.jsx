import Head from "next/head";
import Footer from "../components/Footer";

const Race1 = () => {
  return (
    <>
      <Head>
        <title>****賞/**/**m</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <div className="text-4xl mb-10">Race1</div>
        <li>馬場傾向</li>
        <li>馬場状況</li>
        <div className="text-2xl my-10">有力馬一覧</div>
        <Footer />
      </div>
    </>
  );
};

export default Race1;
