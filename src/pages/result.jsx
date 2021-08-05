import Head from "next/head";
import Link from "next/link";

const Result = () =>{
  return <>
  <Head>
    <title>今週の重賞</title>
  </Head>
    <div>今週の重賞一覧</div>
    <h1 className="text-6xl">
    <Link href="../race1">エルムS(G3)・ダート1700m/8月8日/15:35</Link>
    </h1>
    {/* <h2>
    <Link href="../race2"></Link>
    </h2> */}
    </>;
};

export default Result;