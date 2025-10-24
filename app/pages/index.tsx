import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css";
import classNames from "classnames";

import ocean1 from "../public/andrzej-kryszpiniuk-4wFqHZ1ONnM-unsplash.jpg";
import ocean2 from "../public/ivan-bandura-2FEE6BR343k-unsplash.jpg";
import ocean3 from "../public/silas-baisch-K785Da4A_JA-unsplash.jpg";
import ocean4 from "../public/gatis-marcinkevics-a5uptAdUmjE-unsplash.jpg";
import ocean5 from "../public/cristian-palmer-XexawgzYOBc-unsplash.jpg";

const images = [ocean1, ocean2, ocean3, ocean4, ocean5];

const tabs = [
  {
    key: "all",
    display: "All",
  },
  {
    key: "oceans",
    display: "Oceans",
  },
  {
    key: "forests",
    display: "Forests",
  },
];
export default function Home() {
  return (
    <div className="h-full bg-[url('/photography-bg-crop.jpg')] bg-top bg-cover overflow-auto">
      {/*     as Head is not flex its basicaly invisible in the layout */}
      <Head>
        <title>Photography Portfolio</title>
        <meta
          name="description"
          content="A photography portfolio web app using the Unsplash API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 w-full z-10 flex justify-between bg-black items-center h-[90px] px-2 sm: px-4 md:px-12">
        <span className="uppercase text-lg font-medium">
          Photography Portfolio
        </span>
        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          Get In Touch
        </Link>
      </header>

      <main className="pt-[110px]">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-16">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span
                      className={classNames(
                        "uppercase text-lg",
                        selected ? "text-white" : "text-stone-600"
                      )}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full bg-opacity-80 max-w-[900px] w-full p-2 my-4 sm:p-4 lg:p-8 ">
              <Tab.Panel className="overflow-auto">
                {/*  <Masonry
                  breakpointCols={2}
                  className="flex gap-4"
                  columnClassName=""
                >
                  {images.map((image) => (
                    <Image
                      key={image.src}
                      src={image}
                      alt="ocean"
                      className="my-4"
                      placeholder="blur"
                    />
                  ))}
                </Masonry> */}
              </Tab.Panel>
              <Tab.Panel>Oceans</Tab.Panel>
              <Tab.Panel>Forests</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[90px] flex justify-center items-center uppercase text-lg font-medium">
        <p>Photography portfolio</p>
      </footer>
    </div>
  );
}
