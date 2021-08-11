import Head from "next/head";
import Link from "next/link";

const ITEMS = [
  {
    href: "/sights/sapporo",
    title: "札幌競馬場"
},{
    href: "/sights/hakodate",
    title: "函館競馬場"
},{
    href: "/sights/hukushima",
    title: "福島競馬場"
},{
    href: "/sights/nigata",
    title: "新潟競馬場"
},{
    href: "/sights/tokyo",
    title: "東京競馬場"
},{
  href: "/sights/nakayama",
  title: "中山競馬場"
},{
  href: "/sights/tyuukyo",
  title: "中京競馬場"
},{
  href: "/sights/kyoto",
  title: "京都競馬場"
},{
  href: "/sights/hanshin",
  title: "阪神競馬場"
},{
  href: "/sights/kokura",
  title: "小倉競馬場"
}
];

const Fields = () => {
  return <>
  <Head>
    <title>競馬場ごとの傾向</title>
  </Head>
  <h1>各競馬場ごとの傾向</h1>
  <h2>JRA・中央競馬場</h2>
  {ITEMS.map(item => {
    return (
      <div><a href={item.href}>
        <li>{item.title}</li>
      </a>
      </div>
    )
  })}
  <h2>地方競馬場</h2>
   <Link href="/">地方の競馬場一覧へ</Link>
    </>;
};

export default Fields
