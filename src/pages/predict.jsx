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
        <div className="text-4xl my-10 mx-20">今週の重賞一覧</div>
        <div className="text-2xl mx-40">
          <h2>
            <Link href="../race1">
              スプリンターズS(G1)・芝1200m/10月3日/15:35
            </Link>
          </h2>
          {/* <h2>
    <Link href="../race2">関屋記念(G3)・芝1600m/15:45/18頭</Link>
    </h2> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Predict;
