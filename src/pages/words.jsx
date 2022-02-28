import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";

const Overseas = () => {
  return (
    <>
      <Head>
        <title>海外競馬について</title>
      </Head>
      <div className="h-auto bg-green-300">
        <Header />
        <div className="flex py-10">
          <Sidevar />
          <div className="md:text-4xl mx-10 text-pink-400 font-bold w-4/5">
            海外競馬
            <div className="md:text-2xl my-10 text-black">
              ・海外競馬は3月のドバイ(3/26)までお休みです。
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Overseas;
