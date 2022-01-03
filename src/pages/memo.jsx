import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Memo = () => {
  return (
    <>
      <Head>
        <title>好走馬Index</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <Header />
        <div className="text-4xl font-bold my-10 mx-40">勝利馬メモ</div>
        <div className="text-2xl mx-40 text-blue-500">
          <h1 className="my-10">
            <Link href="../grass">
              <a>芝</a>
            </Link>
          </h1>
          <h2 className="my-10">
            <Link href="../sand">
              <a>ダート</a>
            </Link>
          </h2>
          <h3 className="my-10">
            <Link href="/">
              <a>障害レース</a>
            </Link>
          </h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Memo;
