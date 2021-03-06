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
          <div className="md:text-4xl mx-10 font-bold w-4/5">
            今週の重賞
            <div className="md:text-2xl my-10 text-blue-600">
              <h1 className="border-2 h-[120px] py-10 px-5 hover:underline">
                <Link href="../race/race1">
                  <a>阪神大賞典(G2)15:45/3000m</a>
                </Link>
              </h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Predict;
