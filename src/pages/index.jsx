import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>トップページ</title>
      </Head>
      <div className="h-screen bg-green-300">
        <Header />
        <div className="text-4xl text-center font-bold">記録・分析など</div>
        <div className="flex justify-between text-2xl my-20 mx-20">
          <div>
            <Link href="../predict">
              <a>・今週の予想</a>
            </Link>
          </div>
          <div>
            <Link href="../memo">
              <a>・好走記録</a>
            </Link>
          </div>
          <div>
            <Link href="../type">
              <a>・血統、産駒</a>
            </Link>
          </div>
          <div>
            <Link href="../fields">
              <a>・各競馬場の特徴</a>
            </Link>
          </div>
        </div>
        <div className="mx-20 text-2xl font-bold text-purple-400">
          <Link href="../auther">
            <a>サイト作成者について</a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
