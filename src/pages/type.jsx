import Link from "next/link";
import Head from "next/head";

const Type = () => {
  return <>
  <Head>
    <title>好走できる種牡馬一覧</title>
  </Head>
    <div>代表種牡馬一覧(種付け費用順)</div>
    <div><Link href="/">ロードカナロア</Link></div>
    <div><Link href="/">キズナ</Link></div>
    <div><Link href="">エピファネイア</Link></div>
    <div><Link href="">ドゥラメンテ</Link></div>
    </>;
};

export default Type