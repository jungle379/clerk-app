import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SightS = [
  {
    href: "/sights/sapporo",
    title: "札幌競馬場",
  },
  {
    href: "/sights/hakodate",
    title: "函館競馬場",
  },
  {
    href: "/sights/hukushima",
    title: "福島競馬場",
  },
  {
    href: "/sights/nigata",
    title: "新潟競馬場",
  },
  {
    href: "/sights/tokyo",
    title: "東京競馬場",
  },
  {
    href: "/sights/nakayama",
    title: "中山競馬場",
  },
  {
    href: "/sights/tyuukyo",
    title: "中京競馬場",
  },
  {
    href: "/sights/kyoto",
    title: "京都競馬場(改修中)",
  },
  {
    href: "/sights/hanshin",
    title: "阪神競馬場",
  },
  {
    href: "/sights/kokura",
    title: "小倉競馬場",
  },
];

const Fields = () => {
  return (
    <>
      <Head>
        <title>競馬場ごとの傾向</title>
      </Head>
      <div className="h-full bg-green-300">
        <Header />
        <h1 className="text-4xl my-10 mx-40 font-bold">
          各競馬場ごとの傾向と対策
        </h1>
        <h2 className="mx-40 text-2xl">JRA・中央競馬場</h2>
        {SightS.map((item) => {
          return (
            <div className="mx-40 text-2xl my-5 text-blue-500">
              <a href={item.href}>
                <li>{item.title}</li>
              </a>
            </div>
          );
        })}
        <h2 className="mx-40 text-2xl my-10">地方競馬場</h2>
        <h3 className="mx-40 text-2xl text-blue-500 mt-10">
          <Link href="/">
            <a>地方の競馬場一覧へ</a>
          </Link>
        </h3>
      </div>
      <Footer />
    </>
  );
};

export default Fields;
