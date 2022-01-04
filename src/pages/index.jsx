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
      <div className="bg-green-300 h-screen">
        <Header />
        <div className="flex">
          <div className="mx-20 w-1/5">
            <h1 className="text-2xl font-bold">外部サイト</h1>
            <h2 className="font-bold my-10 text-blue-500">
              <Link href="https://www.netkeiba.com">
                <a>netkeiba.com</a>
              </Link>
            </h2>
            <h3 className="font-bold my-10 text-blue-500">
              <Link href="https://k-beam.com/">
                <a>血統ビームオフィシャルサイト</a>
              </Link>
            </h3>
            <h4 className="my-10 font-bold text-blue-500">
              <Link href="">
                <a>youtube(JRA公式)</a>
              </Link>
            </h4>
            <div className="font-bold">
              <Link href="../auther">
                <a>サイト作成者について</a>
              </Link>
            </div>
          </div>
          <div className="text-4xl mx-20 font-bold w-4/5">
            記録・分析など
            <div className="flex justify-between text-2xl my-20 px-10">
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
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
