import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";

const Words = () => {
  return (
    <>
      <Head>
        <title>絶対に勝つための訓示</title>
      </Head>
      <div className="h-auto bg-green-300">
        <Header />
        <div className="flex py-10">
          <Sidevar />
          <div className="md:text-4xl mx-10 font-extrabold w-4/5">
            競馬で勝つためには
            <li className="md:text-2xl my-10 font-bold">深追いはしない</li>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Words;