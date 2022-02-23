import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Auther = () => {
  return (
    <>
      <Head>
        <title>作者について</title>
      </Head>
      <div className="h-auto bg-green-300">
        <Header />
        <div className="py-10 flex">
          <Sidevar />
          <div className="mx-10 text-2xl font-bold">
            当サイトの作者について
            <div className="mx-10 my-10">SNS</div>
            <div className="text-2xl text-blue-500 ml-20 my-10 flex">
              <FontAwesomeIcon className="h-10 mr-5" icon={faTwitterSquare} />
              <FontAwesomeIcon className="h-10 mr-5" icon={faChevronRight} />
              <Link href="https://twitter.com/hirokimorino">
                <a>twitter</a>
              </Link>
            </div>
            <div className="text-2xl text-blue-700 ml-20 my-10 flex">
              <FontAwesomeIcon className="h-10 mr-5" icon={faFacebookSquare} />
              <FontAwesomeIcon className="h-10 mr-5" icon={faChevronRight} />
              <Link href="https://www.facebook.com/hiroki.morino.9">
                <a>facebook</a>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Auther;
