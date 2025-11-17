import Head from "next/head";
import Image, { StaticImageData } from "next/image";
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

// import images
import backgroundImage from "../public/photography-bg-crop.jpg";
// oceans
import ocean1 from "../public/andrzej-kryszpiniuk-4wFqHZ1ONnM-unsplash.jpg";
import ocean2 from "../public/ivan-bandura-2FEE6BR343k-unsplash.jpg";
import ocean3 from "../public/silas-baisch-K785Da4A_JA-unsplash.jpg";
import ocean4 from "../public/gatis-marcinkevics-a5uptAdUmjE-unsplash.jpg";
import ocean5 from "../public/cristian-palmer-XexawgzYOBc-unsplash.jpg";
// forests
import forest1 from "../public/degleex-ganzorig-wQImoykAwGs-unsplash.jpg";
import forest2 from "../public/sergei-a--heLWtuAN3c-unsplash.jpg";
import forest3 from "../public/michael-krahn-_ReQ6GSqSaM-unsplash.jpg";
import forest4 from "../public/gustav-gullstrand-d6kSvT2xZQo-unsplash.jpg";
import forest5 from "../public/filip-zrnzevic-QsWG0kjPQRY-unsplash.jpg";
import forest6 from "../public/casey-horner-4rDCa5hBlCs-unsplash.jpg";
// portraits
import portrait1 from "../public/albert-dera-ILip77SbmOE-unsplash.jpg";
import portrait2 from "../public/filipp-romanovski-CGKYNN3uuVo-unsplash.jpg";
import portrait3 from "../public/jake-nackos-IF9TK5Uy-KI-unsplash.jpg";
import portrait4 from "../public/imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg";

import { useRef } from "react";
import { forwardRefWithAs } from "@headlessui/react/dist/utils/render";
import TabContent from "../components/TabContent";
import Navbar from "../components/Navbar";

type ImageT = {
  src: string;
  thumb: string;
  width: number;
  height: number;
  alt: string;
  blurDataUrl?: string;
};

const ocean_images = [ocean1, ocean2, ocean3, ocean4, ocean5];
const forest_images = [forest1, forest2, forest3, forest4, forest5, forest6];
const portrait_images = [portrait1, portrait2, portrait3, portrait4];
const appended_images = [...ocean_images, ...forest_images, ...portrait_images];

// Fisher-Yates shuffle
function shuffleArray(array: StaticImageData[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(appended_images); // Shuffle in place

const all_shuffled_images: StaticImageData[] = appended_images; // Now correctly typed

const tabs = [
  {
    key: "all",
    display: "Alle",
    images: all_shuffled_images,
  },
  {
    key: "oceans",
    display: "Meer",
    images: ocean_images,
  },
  {
    key: "forests",
    display: "Wald",
    images: forest_images,
  },
  {
    key: "portrait",
    display: "Porträt",
    images: portrait_images,
  },
];
export default function Home() {
  const lightboxRef = useRef<LightGallery | null>(null);
  const navbarHeight = "90px";

  return (
    <div className="h-full bg-black">
      {/*     as Head is not flex its basicaly invisible in the layout */}
      <Head>
        <title>Photographie Portfolio</title>
        <meta
          name="description"
          content="A photography portfolio web app using the Unsplash API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        className="fixed left-0 top-[230px] mb-[60px] z-0 w-full object-cover"
        style={{ height: `calc(100vh - ${navbarHeight})` }} // Dynamische Höhe
        src={backgroundImage}
        alt="photographer"
        placeholder="blur"
        priority
      />

      <div
        className="fixed left-0 top-[90px] w-full z-10 from-stone-900 bg-gradient-to-t"
        style={{ height: `calc(100vh - ${navbarHeight})` }}
      ></div>

      <Navbar />

      {/* without relative z-index is not applied  */}
      <main className="relative pt-[90px] z-20 min-h-screen">
        <div className="flex flex-col items-center h-full mt-4">
          <Tab.Group>
            <Tab.List className="flex items-center gap-16 mx-3">
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
            <Tab.Panels className="h-full bg-opacity-80 max-w-[900px] w-full py-2 px-2 sm:px-4 lg:px-8 lg:py-6">
              <TabContent images={all_shuffled_images} />
              <TabContent images={ocean_images} />
              <TabContent images={forest_images} />
              <TabContent images={portrait_images} />
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="relative h-[150px]  flex justify-center bg-black items-center uppercase text-lg font-medium z-20">
        <Link href="credits" className="hover:text-gray-300 cursor-pointer">
          Image Credits
        </Link>
      </footer>
    </div>
  );
}
