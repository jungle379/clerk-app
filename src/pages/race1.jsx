import Head from "next/head";
import Footer from "../components/Footer";

const Race1 = () => {
  return (
    <>
      <Head>
        <title>阪神大賞典/阪神/3000m</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <div className="text-4xl mx-10 py-10">阪神大賞典</div>
        <div className="mx-20 text-2xl my-10">
          <li>馬場傾向</li>
          <ul className="px-10"></ul>
          <li>馬場状況</li>
          <ul></ul>
          <div className="text-2xl my-10">有力馬一覧</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Race1;
