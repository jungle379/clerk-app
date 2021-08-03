import Head from "next/head";

const ITEMS = [
  {
    href: "/seeds/deepimpact",
    title: "ディープインパクト"
},{
    href: "/seeds/Lordkanaloa",
    title: "ロードカナロア"
},{
    href: "/seeds/kizuna",
    title: "キズナ"
},{
    href: "/seeds/epifaneia",
    title: "エピファネイア"
},{
    href: "/seeds/duramente",
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