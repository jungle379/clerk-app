import Head from "next/head";
import Link from "next/link";

const ITEMS = [
  {
    href: "/",
    title: "1"
},{
    href: "/",
    title: "2"
},{
    href: "/",
    title: "3"
},{
    href: "/",
    title: "4"
},{
    href: "/",
    title: "5"
},{
  href: "/",
  title: "6"
},{
  href: "/",
  title: "7"
},{
  href: "/",
  title: "8"
},{
  href: "/",
  title: "9"
},{
  href: "/",
  title: "10"
}
];

const Fields = () => {
  return <>
  <Head>
    <title>***</title>
  </Head>
  <h1>***</h1>
  <div>***</div>
  {ITEMS.map(item => {
    return (
      <div><a href={item.href}>
        <li>{item.title}</li>
      </a>
      </div>
    )
  })}
  <h2>地方</h2>
   <Link href="/">***</Link>
    </>;
};

export default Fields
