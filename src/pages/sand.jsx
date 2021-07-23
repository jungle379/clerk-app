import Link from "next/link";
import Head from "next/head"

const Sand = () =>{
  return <>
  <Head>
    <title>砂の勝利馬一覧</title>
  </Head>
    <div>ダートの勝利馬</div>
    <div>
      <li>ハヤヤッコ</li>
      <ul>スレイプニルS・2100m・OP・東京・田辺</ul>
      <ul>大箱の競馬場が得意なのであろうか、４コーナーの終わりまで一番後ろで待機し、後方一期の末脚で差し切った。左の非根幹距離を狙う</ul>
    <Link href="https://db.sp.netkeiba.com/horse/2016104624/">JRAページ</Link>
    </div>
    <div>
      <li>テーオーケインズ</li>
      <ul>帝王賞・2000m・Jpn1・大井・松山</ul>
      <ul>道中を4番手ぐらいで進め、前がきつい展開で４コーナーを迎えるに当たって、１頭分空いた内を掬う形で進出。直線での勢いからはG1を勝利する実力はあった。</ul>
    <Link href="https://db.sp.netkeiba.com/horse/2017101010/">JRAページ</Link>
    </div>
    </>;
};

export default Sand;