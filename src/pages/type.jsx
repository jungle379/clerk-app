import Link from "next/link";
import Head from "next/head";

const Type = (seeds) => {
  return <>
  <Head>
    <title>好走できる種牡馬一覧</title>
  </Head>
  <ul>
  {seeds.map((seed) => (
        <li key={seed.id}>
          <Link href={`/seeds/${encodeURIComponent(seed.slug)}`}>
            <a>{seed.title}</a>
          </Link>
        </li>
      ))}
      </ul>
    </>;
};

export default Type