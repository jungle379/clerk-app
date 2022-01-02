import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Auther = () => {
  return (
    <>
      <Head>
        <title>作者について</title>
      </Head>
      <div className="h-screen bg-green-300">
        <Header />
        <div>当サイトの作者</div>
        <h1>
          <Link href="https://www.facebook.com/hiroki.morino.9/">
            <a>Facebook</a>
          </Link>
        </h1>
        <h2>
          <Link href="https://twitter.com/hirokimorino">
            <a>Twitter</a>
          </Link>
        </h2>
      </div>
      <Footer />
    </>
  );
};

export default Auther;
