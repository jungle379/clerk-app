import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";

const Predict = () => {
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Predict;
