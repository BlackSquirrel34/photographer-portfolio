import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css";
import classNames from "classnames";

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

      <header className="fixed top-0 w-full z-10 flex justify-between bg-black items-center h-[90px] px-12">
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
                <Masonry
                  breakpointCols={2}
                  className="flex gap-4"
                  columnClassName=""
                >
                  <img
                    src="/andrzej-kryszpiniuk-4wFqHZ1ONnM-unsplash.jpg"
                    alt="ocean-1"
                    className="my-4
                    "
                  />
                  <img
                    src="ivan-bandura-2FEE6BR343k-unsplash.jpg"
                    alt="ocean-1"
                    className="my-4
                    "
                  />
                  <img
                    src="silas-baisch-K785Da4A_JA-unsplash.jpg"
                    alt="ocean-1"
                    className="my-4
                    "
                  />
                  <img
                    src="gatis-marcinkevics-a5uptAdUmjE-unsplash.jpg"
                    alt="ocean-1"
                    className="my-4
                    "
                  />
                  <img
                    src="cristian-palmer-XexawgzYOBc-unsplash.jpg"
                    alt="ocean-1"
                    className="my-4
                    "
                  />
                </Masonry>
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
