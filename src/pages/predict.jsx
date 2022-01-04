import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Predict = () => {
  return (
    <>
      <Head>
        <title>今週の重賞</title>
      </Head>
      <div className="h-screen bg-green-300">
        <Header />
        <div className="text-4xl my-10 mx-20 text-pink-400 font-bold">
          今週の重賞一覧
        </div>
        <div className="text-2xl mx-40 my-10 text-blue-600">
          <h1 className="border-2 h-[120px] py-10">
            <Link href="../race1">
              <a>中山金杯(G3)15:35</a>
            </Link>
          </h1>
          <h2 className="border-2 h-[120px] py-10">
            <Link href="../race2">
              <a>京都金杯(G3)15:45</a>
            </Link>
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Predict;
