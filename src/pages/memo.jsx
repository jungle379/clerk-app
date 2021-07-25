import Link from "next/link";
import Head from "next/head";

const Memo = () => {
  return <>
  <Head>
    <title>種目別好走馬Index</title>
  </Head>
    <div>勝利馬メモ</div>
    <h1>
    <Link href="../grass">芝</Link>
    </h1>
    <h1>
    <Link href="../sand">ダート</Link>
    </h1>
    </>;
};

export default Memo;