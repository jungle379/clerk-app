import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";

const Words = () => {
  return (
    <>
      <Head>
        <title>絶対に勝つために</title>
      </Head>
      <div className="h-auto bg-green-300">
        <Header />
        <div className="flex py-10">
          <Sidevar />
          <div className="md:text-4xl mx-10 font-extrabold w-4/5">
            競馬で勝つためには
            <li className="md:text-2xl my-10 font-bold">
              深追いはしない。そのために線引きを最初に行う
            </li>
            <li className="md:text-2xl my-10 font-bold">幅を広くしない</li>
            <li className="md:text-2xl my-10 font-bold">
              勝つイメージを初戦で付ける。そのために小額からコツコツ始める
            </li>
            <li className="md:text-2xl my-10 font-bold">
              流れを変えようと無茶はしない.流れを変えるためなら見に回す
            </li>
            <li className="md:text-2xl my-10 font-bold">
              単複のみでもプラスは可能。配分の妙味を考えるべし
            </li>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Words;
