import Head from "next/head";
import Link from "next/link";

const Result = () =>{
  return <>
  <Head>
    <title>今週の重賞</title>
  </Head>
    <div>今週の重賞一覧</div>
    <h1 className="text-6xl">
    <Link href="../race1">宝塚記念(G1)/6月27日/15:40</Link>
    </h1>
    {/* <h2>
    <Link href="../race2"></Link>
    </h2> */}
    </>;
};

export default Result;