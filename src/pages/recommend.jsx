import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";

const ITEMS = [
  {
    href: "/age/3",
    title: "3歳馬",
  },
  {
    href: "/age/4",
    title: "4歳馬",
  },
  {
    href: "/age/5",
    title: "5歳馬",
  },
  {
    href: "/age/6",
    title: "6歳馬",
  },
  {
    href: "/age/7",
    title: "7歳以上馬",
  },
];

const Recommend = () => {
  return (
    <>
      <Head>
        <title>一押しウマ</title>
      </Head>
      <div className="h-auto bg-green-300">
        <Header />
        <div className="flex my-10">
          <Sidevar />
          <div className="text-4xl mx-10 font-bold w-4/5">
            一押し推奨馬
            <div className="text-2xl font-bold my-10 mx-5">
              年代別推奨馬一覧
            </div>
            {ITEMS.map((item) => {
              return (
                <div className="text-2xl my-10 mx-20 text-blue-600 w-1/6">
                  <a href={item.href}>
                    <li>{item.title}</li>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Recommend;
