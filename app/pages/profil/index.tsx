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
        <title>Photographie Portfolio - Profil</title>
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
          <h2 className="text-4xl font-medium pb-4 text-center">Über mich</h2>
          <div className="rounded-lg p-5 flex flex-col md:flex-row md:gap-4 space-y-8 md:space-y-0">
            {/* Erster div */}
            <div className="flex-1 p-4 rounded flex items-center">
              {" "}
              {/* Hier hinzugefügt */}
              <div>
                <h4 className="pb-4 font-bold">
                  Fotografieren ist für mich...
                </h4>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore, excepturi soluta beatae sequi, natus ex minima
                  molestias ratione provident nihil animi nam id quia obcaecati,
                  nostrum quaerat magni voluptates vitae! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            {/* Zweiter div */}
            <div className="flex-1 p-4 rounded ">
              <Image
                src="/photography-bg-crop.jpg"
                alt="Profil Bild"
                width={400}
                height={400}
                className="rounded-lg mx-auto"
              />
            </div>
          </div>

          <h2 className="text-4xl font-medium pt-16 pb-12 text-center">
            Referenzen
          </h2>
          <div className="rounded-lg p-5 flex flex-col md:flex-row md:gap-4 space-y-8 md:space-y-0">
            {/* Erster div */}
            <div className="flex-1 p-4 rounded flex items-center">
              {" "}
              {/* Hier hinzugefügt */}
              <div>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore, excepturi soluta beatae sequi, natus ex minima
                  molestias ratione provident nihil animi nam id quia obcaecati,
                  nostrum quaerat magni voluptates vitae! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </p>
                <p className="pt-6">Max Mustermann, Glücklicher Kunde</p>
              </div>
            </div>
            {/* Zweiter div */}
            <div className="flex-1 p-4 rounded ">
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, excepturi soluta beatae sequi, natus ex minima
                molestias ratione provident nihil animi nam id quia obcaecati,
                nostrum quaerat magni voluptates vitae! Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
              <p className="pt-6">Maria Musterfrau, Glückliche Kundin</p>
            </div>
            {/* Dritter div */}
            <div className="flex-1 p-4 rounded ">
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, excepturi soluta beatae sequi, natus ex minima
                molestias ratione provident nihil animi nam id quia obcaecati,
                nostrum quaerat magni voluptates vitae! Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
              <p className="pt-6">Max Mustermann, Glücklicher Kunde</p>
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
