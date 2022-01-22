import Head from "next/head";
import Link from "next/link";

const Tokyo = () => {
  return (
    <>
      <Head>
        <title>京都競馬場について</title>
      </Head>
      <div>
        <h1>京都競馬場</h1>
        <h2>※令和5年春まで改修中のため、後ほど編集予定</h2>
      </div>
      <Link href="/">JRA公式サイトへ</Link>
    </>
  );
};

export default Tokyo;
