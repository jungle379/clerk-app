import Link from "next/link";

const Sidevar = () => (
  <>
    <div className="mx-20 w-1/5 pr-20 h-full border-r-4">
      <h1 className="text-2xl font-bold">外部サイト</h1>
      <h2 className="font-bold my-10 text-blue-700 hover:underline">
        <Link href="https://www.netkeiba.com">
          <a>netkeiba.com</a>
        </Link>
      </h2>
      <h3 className="font-bold my-10 text-blue-700 hover:underline">
        <Link href="https://k-beam.com/">
          <a>血統ビームオフィシャルサイト</a>
        </Link>
      </h3>
      <h4 className="my-10 font-bold text-blue-700 hover:underline">
        <Link href="https://www.youtube.com/user/jraofficial">
          <a>youtube(JRA公式)</a>
        </Link>
      </h4>
      <h5 className="my-10 font-bold text-blue-700 hover:underline">
        <Link href="https://uma-jin.net/new/salon/salon_top">
          <a>UMAJIN 競馬サロン</a>
        </Link>
      </h5>
      <h5 className="my-10 font-bold text-blue-700 hover:underline">
        <Link href="http://blog.livedoor.jp/ganma1123/">
          <a>邪推師GANMA 公式ブログ</a>
        </Link>
      </h5>
      <div className="my-10 font-bold text-blue-700 hover:underline">
        <Link href="/auther">
          <a>作成者について</a>
        </Link>
      </div>
    </div>
  </>
);

export default Sidevar;
