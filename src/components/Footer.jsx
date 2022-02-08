// Footer component
const Footer = () => (
  <>
    <div className="bg-green-300 border-t-2">
      <div className="flex justify-between mt-10 mx-10 px-20">
        <div className="hover:text-red-500">
          <Link href="">
            <a>このサイトについて</a>
          </Link>
        </div>
        <div className="hover:text-red-500">***</div>
        <div className="hover:text-red-500">***</div>
        <div className="hover:text-red-500">***</div>
      </div>
      <div className="py-10 flex justify-center md:text-2xl">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/clerk.svg" alt="Clerk.dev" className="h-[24px]" />
          +
          <img src="/nextjs.svg" alt="Next.js" className="h-[32px]" />
        </a>
      </div>
    </div>
  </>
);

export default Footer;
