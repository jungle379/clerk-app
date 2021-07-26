import Link from "next/link";
import Head from "next/head";

const Type = () => {
  return <>
  <Head>
    <title>好走できる種牡馬一覧</title>
  </Head>
    <div>代表種牡馬一覧</div>
    <h1>
    <Link href="../grass">芝</Link>
    </h1>
    <h1>
    <Link href="../sand">ダート</Link>
    </h1>
    </>;
};

export default Type;