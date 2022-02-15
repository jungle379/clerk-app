import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ITEMS = [
  {
    href: "/",
    title: "1つ目のニュース",
  },
  {
    href: "/",
    title: "2つ目のニュース",
  },
  {
    href: "/",
    title: "3つ目のニュース",
  },
  {
    href: "/",
    title: "4つ目のニュース",
  },
  {
    href: "/",
    title: "5つ目のニュース",
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
        <div className="py-10">
          <div className="md:text-4xl mx-20 my-10 text-pink-400 font-bold w-4/5">
            最新のニュース
          </div>
          {ITEMS.map((item) => {
            return (
              <div className="md:text-2xl text-blue-600">
                <a href={item.href}>
                  <div className="border-2 h-[120px] py-10 px-5 hover:underline mx-20 hover:text-red-600">
                    <li>{item.title}</li>
                  </div>
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

export default Latest;
