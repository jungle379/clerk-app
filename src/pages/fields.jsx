import Head from "next/head";
import Link from "next/link";

const ITEMS = [
  {
    href: "/",
    title: "札幌競馬場"
},{
    href: "/",
    title: "函館競馬場"
},{
    href: "/",
    title: "福島競馬場"
},{
    href: "/",
    title: "新潟競馬場"
},{
    href: "/",
    title: "東京競馬場"
},{
  href: "/",
  title: "中山競馬場"
},{
  href: "/",
  title: "中京競馬場"
},{
  href: "/",
  title: "京都競馬場"
},{
  href: "/",
  title: "阪神競馬場"
},{
  href: "/",
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
