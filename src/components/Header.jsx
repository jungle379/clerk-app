import Image from "next/image";
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

const Header = () => (
  <>
    <div className="flex justify-between">
      <div className="text-6xl font-bold text-pink-500 mx-40 my-10 py-[15px]">
        Welcome to Horse Racing Memo
      </div>
      <div className="flex mr-20 my-20">
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
