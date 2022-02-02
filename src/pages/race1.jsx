import Head from "next/head";
import Footer from "../components/Footer";

const Race1 = () => {
  return (
    <>
      <Head>
        <title>東京新聞杯/東京/1600m</title>
      </Head>
      <div className="bg-green-300 h-screen">
        <div className="text-4xl">東京新聞杯/東京/1600m</div>
        <div className="text-2xl my-10">馬場傾向</div>
        <div>
          後傾ラップになりがちだがある程度の位置にいないと差しが届かない。3角から下りのため息を入れる余地がない。
        </div>
        <div className="text-2xl my-10">有力馬一覧</div>
        <div>カラテ</div>
        <div>ファインルージュ・NGH</div>
        <div></div>
        <Footer />
      </div>
    </>
  );
};

export default Race1;
