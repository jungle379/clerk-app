import Head from "next/head";
import Link from "next/link";

const Result = () =>{
  return <>
  <Head>
    <title>今週の重賞</title>
  </Head>
    <div>今週の重賞一覧</div>
    <h2>
    <Link href="../race1">小倉記念(G3)・芝2000m/8月15日/15:35</Link></h2>
    {/* <h2>
    <Link href="../race2"></Link>
    </h2> */}
    </>;
};

export default Result;