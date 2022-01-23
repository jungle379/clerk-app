import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

// Header component using <SignedIn> & <SignedOut>.
//
// The SignedIn and SignedOut components are used to control rendering depending
// on whether or not a visitor is signed in.
//
// https://docs.clerk.dev/frontend/react/signedin-and-signedout
const ClerkFeatures = () => (
  <Link href="/user">
    <a className="">
      <img src="/icons/layout.svg" />
      <div>
        <img src="/icons/arrow-right.svg" />
      </div>
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
      <div>
        <div className="md:text-6xl font-bold text-pink-500 mx-40 my-5 py-[20px]">
          Welcome to Horse Racing Memo
        </div>
        <div className="md:text-2xl font-bold text-pink-500 mx-40 mb-5 py-[10px]">
          〜勝つための競馬メモ〜
        </div>
      </div>
      <div className="flex mr-10 my-20">
        <div className="mx-5">
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
