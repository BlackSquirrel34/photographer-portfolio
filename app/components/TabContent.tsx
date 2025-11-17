import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css";
import classNames from "classnames";
import { useRef } from "react";

import type { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// oceans
import ocean1 from "../public/andrzej-kryszpiniuk-4wFqHZ1ONnM-unsplash.jpg";
import ocean2 from "../public/ivan-bandura-2FEE6BR343k-unsplash.jpg";
import ocean3 from "../public/silas-baisch-K785Da4A_JA-unsplash.jpg";
import ocean4 from "../public/gatis-marcinkevics-a5uptAdUmjE-unsplash.jpg";
import ocean5 from "../public/cristian-palmer-XexawgzYOBc-unsplash.jpg";

// const images = [ocean1, ocean2, ocean3, ocean4, ocean5];

export default function TabContent({ images }: { images: StaticImageData[] }) {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <Tab.Panel className="overflow-auto">
      <Masonry breakpointCols={2} className="flex gap-4" columnClassName="">
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
  );
}
