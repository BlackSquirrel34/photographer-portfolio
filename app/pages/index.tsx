import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="h-full bg-[url('/photography-bg-crop.jpg')] bg-top bg-cover">
      <Head>
        <title>Photography Portfolio</title>
        <meta
          name="description"
          content="A photography portfolio web app using the Unsplash API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <p>Placeholder for main</p>
      </main>

      <footer>
        <p>Placeholder for footer</p>
      </footer>
    </div>
  );
}
