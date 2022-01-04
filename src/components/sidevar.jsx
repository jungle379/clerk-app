import Link from "next/link";

const Sidevar = () => (
  <>
    <div className="mx-20 w-1/5 pr-20 h-auto border-r-4">
      <h1 className="text-2xl font-bold">外部サイト</h1>
      <h2 className="font-bold my-10 text-blue-500">
        <Link href="https://www.netkeiba.com">
          <a>netkeiba.com</a>
        </Link>
      </h2>
      <h3 className="font-bold my-10 text-blue-500">
        <Link href="https://k-beam.com/">
          <a>血統ビームオフィシャルサイト</a>
        </Link>
      </h3>
      <h4 className="my-10 font-bold text-blue-500">
        <Link href="https://www.youtube.com/user/jraofficial">
          <a>youtube(JRA公式)</a>
        </Link>
      </h4>
      <div className="my-10 font-bold text-blue-500">
        <Link href="/auther">
          <a>作成者について</a>
        </Link>
      </div>
    </div>
  </>
);

export default Sidevar;
