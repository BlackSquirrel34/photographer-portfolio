import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Tab } from "@headlessui/react";

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
    <div className="flex flex-col h-full bg-[url('/photography-bg-crop.jpg')] bg-top bg-cover">
      {/*     as Head is not flex its basicaly invisible in the layout */}
      <Head>
        <title>Photography Portfolio</title>
        <meta
          name="description"
          content="A photography portfolio web app using the Unsplash API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center h-[90px] px-6">
        <div>Photography Portfolio</div>
        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          Get In Touch
        </Link>
      </header>

      <main className="grow">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-16">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span
                      className={selected ? "text-white" : "text-stone-600"}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full bg-stone-900 bg-opacity-80 max-w-[900px] w-full p-2 sm:p-4 lg:p-8 my-6 lg:my-10">
              <Tab.Panel className="">All Photos</Tab.Panel>
              <Tab.Panel>Oceans</Tab.Panel>
              <Tab.Panel>Forests</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[60px] flex justify-center items-center">
        <p>Photography portfolio</p>
      </footer>
    </div>
  );
}
