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
      <div className="bg-green-300 h-full">
        <Header />
        <div className="text-4xl text-center font-bold">記録・分析など</div>
        <div className="flex justify-between text-2xl my-20 mx-20 px-40">
          <div className="">
            <Link href="../predict">
              <a>・今週の予想</a>
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
        <div className="mx-20 my-20">
          <h1 className="text-4xl font-bold">外部サイト</h1>
          <h2 className="text-2xl font-bold my-10">
            <Link href="https://www.netkeiba.com">
              <a>netkeiba.com</a>
            </Link>
          </h2>
          <h3 className="text-2xl font-bold my-10">
            <Link href="/">
              <a>血統ビーム</a>
            </Link>
          </h3>
          <h4 className="my-10 text-2xl font-bold">
            <Link href="">
              <a>youtube(JRA公式)</a>
            </Link>
          </h4>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
