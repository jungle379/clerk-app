import Link from "next/link";
import Head from "next/head";

const ITEMS = [
  {
    href: "/seeds/deepimpact",
    title: "ディープインパクト"
},{
    href: "/seeds/Lordkanaloa",
    title: "ロードカナロア"
},{
    href: "/",
    title: "キズナ"
},{
    href: "/",
    title: "エピファネイア"
},{
    href: "/",
    title: "ドゥラメンテ"
}
];

const Type = () => {
  return <>
  <Head>
    <title>好走できる種牡馬一覧</title>
  </Head>
  <div>代表種牡馬一覧(2021年種付け費用順)</div>
  {ITEMS.map(item => {
    return (
      <div><a href={item.href}>
        <h1>{item.title}</h1>
        </a></div>
    ),
    (
      <div><a href={item.href}>
        <h1>{item.title}</h1></a></div>
    ),(
      <div><a href={item.href}>
        <h1>{item.title}</h1></a></div>
    ),(
      <div><a href={item.href}>
        <h1>{item.title}</h1></a></div>
    ),(
      <div><a href={item.href}>
        <h1>{item.title}</h1></a></div>
    )
  })}
    <div><Link href="/">モーリス</Link></div>
    <div><Link href="/">ヘニーヒューズ</Link></div>
    <div><Link href="/seeds/kitasanbrack">キタサンブラック</Link></div>
    </>;
};

export default Type