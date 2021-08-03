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
},{
  href: "/",
  title: "モーリス"
},{
  href: "/",
  title: "ヘニーヒューズ"
},{
  href: "/seeds/kitasanbrack",
  title: "キタサンブラック"
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
        <li>{item.title}</li>
      </a></div>
    )
  })}
    </>;
};

export default Type