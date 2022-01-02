import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Memo = () => {
  return (
    <>
      <Head>
        <title>種目別好走馬Index</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <Header />
        <div>勝利馬メモ</div>
        <h1>
          <Link href="../grass">
            <a>芝</a>
          </Link>
        </h1>
        <h2>
          <Link href="../sand">
            <a>ダート</a>
          </Link>
        </h2>
        <h3>
          <Link href="/">
            <a>障害レース</a>
          </Link>
        </h3>
      </div>
      <Footer />
    </>
  );
};

export default Memo;
