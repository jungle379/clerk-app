import Link from "next/link";
import Head from "next/head";

const Seeds = () => {
  return (
    <>
      <Head>
        <title>アメリカンペイトリオット</title>
      </Head>
      <div>アメリカンペイトリオット(2021〜)</div>
      <div>
        <li>代表産駒</li>
        <ul>牡馬</ul>
        <ul>3歳</ul>
        <ul>・</ul>
        <ul>4歳</ul>
        <ul>・</ul>
        <ul>牝馬</ul>
        <ul>3歳</ul>
        <ul>4歳</ul>
        <ul>5歳</ul>
      </div>
      <div>特徴</div>
      <li>世界の超一流種牡馬のウォーフロント産駒</li>
      <li>ゴドルフィンの繋養馬</li>
      <li>芝のスプリント力は高い</li>
      <li>日本の砂は合わない</li>
      <li>母父によって短距離、中距離を分ける</li>
      <div>買い要素</div>
      <li>芝1400以下、母父SS系以外</li>
      <li>芝1500以上の2歳戦。母父がSSもしくはキングマンボ系</li>
      <li>ダーレー生産馬を抑える</li>
      <div>消しポイント</div>
      <li>ダート1400以下。母父米国型以外の人気馬は危険</li>
      <div>
        <Link href="/">・JRAページ</Link>
      </div>
    </>
  );
};

export default Seeds;
