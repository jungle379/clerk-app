import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";

const Result = () => {
  return (
    <>
      <Head>
        <title>先週の結果</title>
      </Head>
      <div className="h-auto bg-green-300">
        <Header />
        <div className="flex py-10">
          <Sidevar />
          <div className="md:text-4xl mx-10 text-pink-400 font-bold w-4/5">
            先週の結果
            <div className="md:text-2xl my-10 text-blue-600">
              <h1 className="border-2 h-[120px] py-10 px-5 hover:underline">
                <Link href="../race1">
                  <a>中山記念(G3)15:45/1800m</a>
                </Link>
              </h1>
              <h2 className="border-2 h-[120px] py-10 px-5 hover:underline">
                <Link href="../race2">
                  <a>阪急杯(G3)15:35/1400m</a>
                </Link>
              </h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Result;
