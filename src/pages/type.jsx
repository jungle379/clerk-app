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
    title: "ドゥラメンテ(22年から種付け無し)",
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
    href: "/seeds/kitasanbrack",
    title: "シルバーステート",
  },
  {
    href: "/seeds/kitasanbrack",
    title: "キングマン",
  },
];

const Type = () => {
  return (
    <>
      <Head>
        <title>好走できる種牡馬一覧</title>
      </Head>
      <div className="h-full bg-green-300">
        <Header />
        <div className="text-4xl font-bold mx-40 my-10">
          代表種牡馬一覧(2021年種付け費用順)
        </div>
        {ITEMS.map((item) => {
          return (
            <div className="text-2xl mt-10 mx-40 text-blue-500">
              <a href={item.href}>
                <li>{item.title}</li>
              </a>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Type;
