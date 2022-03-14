import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ITEMS = [
  {
    href: "/seeds/deepimpact",
    title: "ディープインパクト",
  },
  {
    href: "/seeds/Lordkanaloa",
    title: "ロードカナロア",
  },
  {
    href: "/seeds/kizuna",
    title: "キズナ",
  },
  {
    href: "/seeds/epifaneia",
    title: "エピファネイア",
  },
  {
    href: "/seeds/duramente",
    title: "ドゥラメンテ",
  },
  {
    href: "/seeds/maurice",
    title: "モーリス",
  },
  {
    href: "/seeds/hennyhughes",
    title: "ヘニーヒューズ",
  },
  {
    href: "/seeds/kitasanbrack",
    title: "キタサンブラック",
  },
  {
    href: "/seeds/silverstate",
    title: "シルバーステート",
  },
  {
    href: "/seeds/kingman",
    title: "kingman",
  },
  {
    href: "/seeds/american",
    title: "アメリカンペイトリオット",
  },
  {
    href: "/seeds/american",
    title: "オルフェーブル",
  },
  {
    href: "/seeds/american",
    title: "ゴールドシップ",
  },
];

const Type = () => {
  return (
    <>
      <Head>
        <title>代表種牡馬一覧</title>
      </Head>
      <div className="h-auto bg-green-300 pb-10">
        <div className="mb-10">
          <Header />
          <div className="text-4xl font-bold mx-40 my-10">代表種牡馬一覧</div>
          {ITEMS.map((item) => {
            return (
              <div className="text-2xl mt-10 mx-40 text-blue-600 w-[500px]">
                <a href={item.href}>
                  <li>{item.title}</li>
                </a>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Type;
