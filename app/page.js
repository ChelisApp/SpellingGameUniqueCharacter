import Head from "next/head";
import RepeatedStrings from "../components/RepeatedStrings";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Repeated Strings App</title>
        <meta
          name="description"
          content="Find unique instances of repeated strings or numbers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Find Unique Instances of Repeated Strings or Numbers</h1>
        <RepeatedStrings />
      </main>
    </div>
  );
}
