import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../components/Navbar";

export default function Profil() {
  return (
    <div className="h-full bg-black">
      {/*     as Head is not flex its basicaly invisible in the layout */}
      <Head>
        <title>Photographie Portfolio - Angebot</title>
        <meta
          name="description"
          content="A photography portfolio web app using the Unsplash API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* without relative z-index is not applied  */}
      <main className="relative pt-[90px] pb-[30px] z-20 min-h-screen flex justify-center">
        <motion.div
          className="pt-28 pb-16 text-center w-full max-w-[900px] lg:w-[900px] md:w-[min(100%,38rem)] mx-auto"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <h2 className="text-4xl font-medium pb-16 text-center">
            Fotographie-Pakete die ich anbiete
          </h2>
          <div className="rounded-lg p-5 flex flex-col md:flex-row md:gap-4 space-y-8 md:space-y-0">
            {/* Erster div */}
            <div className="flex-1 p-4 rounded">
              {" "}
              {/* Hier hinzugefügt */}
              <div>
                <h4 className="pb-4 font-bold">Basis</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Sed do eiusmod tempor incididunt</li>
                  <li>Ut enim ad minim veniam</li>
                  <li>Duis aute irure dolor in reprehenderit</li>
                </ul>
              </div>
            </div>
            {/* Zweiter div */}
            <div className="flex-1 p-4 rounded">
              <h4 className="pb-4 font-bold">Pro</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Sed do eiusmod tempor incididunt</li>
                <li>Ut enim ad minim veniam</li>
                <li>Ut enim ad minim veniam</li>
                <li>Duis aute irure dolor in reprehenderit</li>
              </ul>
            </div>
            {/* Dritter div */}
            <div className="flex-1 p-4 rounded ">
              <h4 className="pb-4 font-bold">Deluxe</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Ut enim ad minim veniam</li>
                <li>Sed do eiusmod tempor incididunt</li>
                <li>Ut enim ad minim veniam</li>
                <li>Duis aute irure dolor in reprehenderit</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="relative h-[150px] flex justify-center bg-black items-center uppercase text-lg font-medium z-20">
        <Link href="credits" className="hover:text-gray-300 cursor-pointer">
          Back to home
        </Link>
      </footer>
    </div>
  );
}
