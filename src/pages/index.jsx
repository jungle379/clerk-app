import Head from "next/head";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ClerkFeatures = () => (
  <Link href="/user">
    <a className="">
      <img src="/icons/layout.svg" />
      <div>
        <h3>Explore features provided by Clerk</h3>
        <p>
          Interact with the user button, user profile, and more to preview what
          your users will see
        </p>
      </div>
      <div className="">
        <img src="/icons/arrow-right.svg" />
      </div>
    </a>
  </Link>
);

const SignupLink = () => (
  <Link href="/sign-up">
    <a className="">
      <img src="/icons/user-plus.svg" />
      <div>
        <h3>Sign up for an account</h3>
        <p>
          Sign up and sign in to explore all the features provided by Clerk
          out-of-the-box
        </p>
      </div>
      <div className="">
        <img src="/icons/arrow-right.svg" />
      </div>
    </a>
  </Link>
);

const Home = () => {
  return (
    <>
      <Head>
        <title>トップページ</title>
      </Head>
      <div className="h-screen bg-green-300">
        <div className="text-6xl font-bold text-center text-pink-500">
          Welcome to Horse RacingMemo
        </div>
        <Header />
        <Link href="../auther">サイト作成者について</Link>
        {/* <div className="">
        <SignedIn>
          <ClerkFeatures />
        </SignedIn>
        <SignedOut>
          <SignupLink />
        </SignedOut>
      </div> */}

        <div className="">
          <h1>記録・分析などなど</h1>
          <div>
            <Link href="../result">・今週の予想</Link>
          </div>
          <div>
            <Link href="../memo">・好走記録</Link>
          </div>
          <div>
            <Link href="../type">・血統、産駒</Link>
          </div>
          <div>
            <Link href="../fields">・各競馬場の特徴</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
