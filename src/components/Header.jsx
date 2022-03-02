import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const ClerkFeatures = () => (
  <Link href="/user">
    <a className="text-blue-600 hover:text-red-500 hover:underline">
      アカウント管理ページへ
      {/* <img src="/icons/arrow-right.svg" /> */}
    </a>
  </Link>
);

const SignupLink = () => (
  <Link href="/sign-up">
    <a className="">
      <img src="/icons/user-plus.svg" />
      <div className="">
        <img src="/icons/arrow-right.svg" />
      </div>
    </a>
  </Link>
);

const Header = () => (
  <>
    <div className="flex justify-between border-b-4">
      <div className="w-3/4">
        <div className="md:text-6xl font-bold text-pink-500 mx-20 my-5 py-[20px] px-40">
          Horse Racing Memo
        </div>
        <div className="md:text-2xl font-bold text-pink-500 mx-20 mb-5 py-[10px] px-80">
          〜勝つための競馬メモ〜
        </div>
      </div>
      <div className="flex mr-10 my-20 h-20">
        <div className="pr-5">
          <SignedIn>
            <ClerkFeatures />
          </SignedIn>
          <SignedOut>
            <SignupLink />
          </SignedOut>
        </div>
        <div className="mx-5">
          <SignedOut>
            <Link href="/sign-in">Sign in</Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  </>
);

export default Header;
