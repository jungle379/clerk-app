import Head from "next/head";
import Link from "next/link";

const Result = () =>{
  return <>
  <Head>
    <title>今週の重賞</title>
  </Head>
    <div>今週の重賞一覧</div>
    <h2>
    <Link href="../race1">スプリンターズS(G1)・芝1200m/10月3日/15:35</Link>
    </h2>
    {/* <h2>
    <Link href="../race2">関屋記念(G3)・芝1600m/15:45/18頭</Link>
    </h2> */}
    </>;
};

export default Result;