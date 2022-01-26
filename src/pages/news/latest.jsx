import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidevar from "../../components/sidevar";

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
    href: "/seeds/kitasanbrack",
    title: "シルバーステート",
  },
  {
    href: "/seeds/kitasanbrack",
    title: "kingman",
  },
];

const Latest = () => {
  return (
    <>
      <Head>
        <title>最新のニュース</title>
      </Head>
      <div className="h-auto bg-green-300">
        <Header />
        <div className="flex py-10">
          <Sidevar />
          <div className="md:text-4xl mx-10 text-pink-400 font-bold w-4/5">
            最新のニュース
            {ITEMS.map((item) => {
              return (
                <div className="md:text-2xl my-10 text-blue-600">
                  <a href={item.href}>
                    <div className="border-2 h-[120px] py-10 px-5 hover:underline">
                      <li>{item.title}</li>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Latest;
