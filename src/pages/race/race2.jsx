import Head from "next/head";
import Footer from "../../components/Footer";

const Race2 = () => {
  return (
    <>
      <Head>
        <title>//m</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <div className="text-4xl mb-10"></div>
        <div className="mx-20 text-2xl my-10">
          <li>馬場傾向</li>
          <ul></ul>
          <li>馬場状況</li>
          <div className="text-2xl my-10">有力馬一覧</div>
          <div></div>
          <div></div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Race2;
