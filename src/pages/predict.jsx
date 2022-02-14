import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";

const Predict = () => {
  return (
    <>
      <Head>
        <title>今週の重賞予想</title>
      </Head>
      <div className="h-auto bg-green-300">
        <Header />
        <div className="flex py-10">
          <Sidevar />
          <div className="md:text-4xl mx-10 text-pink-400 font-bold w-4/5">
            今週の重賞
            <div className="md:text-2xl my-10 text-blue-600">
              <h1 className="border-2 h-[120px] py-10 px-5 hover:underline">
                <Link href="../race1">
                  <a>フェブラリーS(G1)15:40/1600m</a>
                </Link>
              </h1>
              <h2 className="border-2 h-[120px] py-10 px-5 hover:underline">
                <Link href="../race2">
                  <a>小倉大賞典(G3)15:30/2000m</a>
                </Link>
              </h2>
              <h3 className="border-2 h-[120px] py-10 px-5 hover:underline">
                <Link href="../race2">
                  <a>ダイヤモンドS(G3)15:45/3400m</a>
                </Link>
              </h3>
              <h4 className="border-2 h-[120px] py-10 px-5 hover:underline">
                <Link href="../race2">
                  <a>京都牝馬S(G3)15:35/1400m</a>
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Predict;
