import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css";
import classNames from "classnames";

import type { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import backgroundImage from "../public/photography-bg-crop.jpg";

import ocean1 from "../public/andrzej-kryszpiniuk-4wFqHZ1ONnM-unsplash.jpg";
import ocean2 from "../public/ivan-bandura-2FEE6BR343k-unsplash.jpg";
import ocean3 from "../public/silas-baisch-K785Da4A_JA-unsplash.jpg";
import ocean4 from "../public/gatis-marcinkevics-a5uptAdUmjE-unsplash.jpg";
import ocean5 from "../public/cristian-palmer-XexawgzYOBc-unsplash.jpg";
import { useRef } from "react";

type ImageT = {
  src: string;
  thumb: string;
  width: number;
  height: number;
  alt: string;
  blurDataUrl?: string;
};

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
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <div className="h-full overflow-auto bg-black">
      {/*     as Head is not flex its basicaly invisible in the layout */}
      <Head>
        <title>Photography Portfolio</title>
        <meta
          name="description"
          content="A photography portfolio web app using the Unsplash API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        className="fixed left-0 top-0 z-0 pt-40 h-full w-full object-cover"
        src={backgroundImage}
        alt="photographer"
        placeholder="blur"
        priority
      />

      <div className="fixed left-0 top-0 w-full h-full z-10 from-stone-900 bg-gradient-to-t"></div>

      <header className="fixed top-0 w-full z-30 flex justify-between bg-black items-center h-[90px] px-2 sm: px-4 md:px-12">
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

      {/* without relative z-index is not applied  */}
      <main className="relative pt-[110px] z-20">
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
                  {images.map((image, index) => (
                    <div className="relative" key={image.src}>
                      <Image
                        key={image.src}
                        src={image}
                        alt="ocean"
                        className="my-4 bg-slate-900"
                        placeholder="blur"
                        // we want to trigger lightgallery
                      />
                      <div
                        className="absolute w-full h-full inset-0 bg-transparent hover:bg-stone-900 hover:bg-opacity-10 hover:cursor-pointer"
                        onClick={() => lightboxRef.current?.openGallery(index)}
                      ></div>
                    </div>
                  ))}
                </Masonry>

                <LightGalleryComponent
                  onInit={(ref) => {
                    if (ref) {
                      lightboxRef.current = ref.instance;
                    }
                  }}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  escKey
                  dynamic
                  dynamicEl={images.map((image) => ({
                    src: image.src,
                    thumb: image.src,
                    subHtml: "<h4>Image title</h4><p>Image description</p>",
                  }))}
                />
              </Tab.Panel>
              <Tab.Panel>Oceans</Tab.Panel>
              <Tab.Panel>Forests</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="relative h-[90px] flex justify-center items-center uppercase text-lg font-medium z-20">
        <p>Photography portfolio</p>
      </footer>
    </div>
  );
}

async function getImages(query: string): Promise<ImageT[]> {
  // refactor this so we differentiate oceans, forests and stuff
  // you cna get this from tabs
  // this function returns an array of ocean-images for the query ocean
  // i guess we can store images directly in the tabs dictionary
  return [];
}
