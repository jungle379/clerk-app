import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidevar from "../components/sidevar";

const Home = () => {
  return (
    <>
      <Head>
        <title>トップページ</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <Header />
        <div className="flex">
          <Sidevar />
          <div className="text-4xl mx-10 font-bold w-4/5">
            記録・分析など
            <div className="flex justify-between text-2xl my-20 px-5">
              <div className="hover:text-red-400">
                <Link href="../predict">
                  <a>・今週の予想</a>
                </Link>
              </div>
              <div className="hover:text-red-400">
                <Link href="../type">
                  <a>・血統、産駒</a>
                </Link>
              </div>
              <div className="hover:text-red-400">
                <Link href="../fields">
                  <a>・各競馬場の特徴</a>
                </Link>
              </div>
            </div>
            <div className="text-2xl hover:text-red-400 font-bold px-5">
              <Link href="../recommend">
                <a>・一押しウマ</a>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
