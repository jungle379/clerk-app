import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";

const Auther = () => {
  return (
    <>
      <Head>
        <title>作者について</title>
      </Head>
      <div className="h-screen bg-green-300">
        <Header />
        <div className="flex">
          <Sidevar />
          <div className="mx-10 text-2xl font-bold">
            当サイトの作者について
            <h1 className="my-10 text-2xl text-blue-700">
              <Link href="https://www.facebook.com/hiroki.morino.9/">
                <a>Facebook</a>
              </Link>
            </h1>
            <h2 className="my-10 text-2xl text-blue-700">
              <Link href="https://twitter.com/hirokimorino">
                <a>Twitter</a>
              </Link>
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Auther;
