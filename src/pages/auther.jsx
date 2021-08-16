import Head from "next/head";
import Link from "next/link";

const Auther = () =>{
  return <>
  <Head>
    <title>作者について</title>
  </Head>
    <h1>当サイトの作者</h1>
    <h2>
    <Link href="/">Facebook</Link>
    </h2>
    <h2>
    <Link href="/">Twitter</Link>
    </h2>
    </>;
};

export default Auther;