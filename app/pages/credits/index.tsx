import Head from "next/head";
import Link from "next/link";

import Navbar from "../../components/Navbar";

export default function Credits() {
  return (
    <div className="h-full bg-black">
      {/*     as Head is not flex its basicaly invisible in the layout */}
      <Head>
        <title>Photographie Portfolio - Image Credits</title>
        <meta
          name="description"
          content="A photography portfolio web app using the Unsplash API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* without relative z-index is not applied  */}
      <main className="relative pt-[90px] pb-[30px] z-20 min-h-screen flex justify-center">
        <div className="flex flex-col items-center h-full w-full md:w-1/3 mt-4 px-2 md:px-4">
          <div>
            Hintergrund-Foto von{" "}
            <a href="https://unsplash.com/de/@alexkall?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Alex Kalligas{" "}
            </a>
            auf{" "}
            <a href="https://unsplash.com/de/fotos/person-mit-schwarzer-dslr-kamera--nIpaV-VC1U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
          <div className="text-center">
            <h2 className="text-2xl mb-4 mt-8">Meer</h2>
            <div>
              Foto von{" "}
              <a href="https://unsplash.com/de/@unstable_affliction?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Ivan Bandura
              </a>
              auf{" "}
              <a href="https://unsplash.com/de/fotos/krachende-wellen-5cwigXmGWTo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
            <div>
              Foto von{" "}
              <a href="https://unsplash.com/de/@silasbaisch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Silas Baisch
              </a>{" "}
              auf{" "}
              <a href="https://unsplash.com/de/fotos/blaues-und-klares-gewasser-K785Da4A_JA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
            <div>
              Foto von{" "}
              <a href="https://unsplash.com/de/@unstable_affliction?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Ivan Bandura
              </a>{" "}
              auf{" "}
              <a href="https://unsplash.com/de/fotos/krachende-wellen-5cwigXmGWTo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
            <div>
              Foto von{" "}
              <a href="https://unsplash.com/de/@cristianpalmer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Cristian Palmer
              </a>{" "}
              auf{" "}
              <a href="https://unsplash.com/de/fotos/klares-blaues-gewasser-XexawgzYOBc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
            <div>
              Foto von
              <a href="https://unsplash.com/de/@m_gatus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Gatis Marcinkevics
              </a>{" "}
              auf{" "}
              <a href="https://unsplash.com/de/fotos/seawaves-tapete-a5uptAdUmjE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
            <div>
              Foto von{" "}
              <a href="https://unsplash.com/de/@unstable_affliction?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Ivan Bandura
              </a>{" "}
              auf{" "}
              <a href="https://unsplash.com/de/fotos/blaues-meerwasser-2FEE6BR343k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl mb-4 mt-8">Wald</h2>
            <div>
              Foto von{" "}
              <a href="https://unsplash.com/de/@degleex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Degleex Ganzorig
              </a>{" "}
              auf{" "}
              <a href="https://unsplash.com/de/fotos/wald-tagsuber-wQImoykAwGs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
            <div>
              Foto von{" "}
              <a href="https://unsplash.com/de/@sakulich?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Sergei A
              </a>{" "}
              auf{" "}
              <a href="https://unsplash.com/de/fotos/pine-trees-field-near-mountain-under-sunset--heLWtuAN3c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
            <div>
              Foto von{" "}
              <a href="https://unsplash.com/de/@outoforbit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Gustav Gullstrand
              </a>{" "}
              auf{" "}
              <a href="https://unsplash.com/de/fotos/grune-kiefern-d6kSvT2xZQo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
            <div>
              Foto von{" "}
              <a href="https://unsplash.com/de/@filipz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Filip Zrnzević
              </a>{" "}
              auf{" "}
              <a href="https://unsplash.com/de/fotos/luftaufnahmen-des-waldes-QsWG0kjPQRY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
            <div>
              Foto von{" "}
              <a href="https://unsplash.com/de/@mischievous_penguins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Casey Horner
              </a>{" "}
              auf{" "}
              <a href="https://unsplash.com/de/fotos/low-angle-photography-of-trees-at-daytime-4rDCa5hBlCs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
            <div>
              Foto von{" "}
              <a href="https://unsplash.com/de/@michael_g_krahn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Michael Krahn
              </a>{" "}
              auf{" "}
              <a href="https://unsplash.com/de/fotos/grune-baume-im-wald-tagsuber-_ReQ6GSqSaM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl mb-4 mt-8">Portrait</h2>
            <div>
              Foto von{" "}
              <a href="https://unsplash.com/de/@filipp_roman_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Filipp Romanovski
              </a>{" "}
              auf{" "}
              <a href="https://unsplash.com/de/fotos/woman-in-black-scoop-neck-shirt-CGKYNN3uuVo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
            <div>
              Foto von{" "}
              <a href="https://unsplash.com/de/@imansyahmp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Imansyah Muhamad Putera
              </a>{" "}
              auf{" "}
              <a href="https://unsplash.com/de/fotos/boys-face-close-up-photography-n4KewLKFOZw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
            <div>
              Foto von{" "}
              <a href="https://unsplash.com/de/@jakenackos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Jake Nackos
              </a>{" "}
              auf{" "}
              <a href="https://unsplash.com/de/fotos/frau-im-weissen-rundhalshemd-lachelnd-IF9TK5Uy-KI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
            <div>
              Foto von{" "}
              <a href="https://unsplash.com/de/@albertdera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Albert Dera
              </a>{" "}
              auf{" "}
              <a href="https://unsplash.com/de/fotos/grau-schwarzes-herrenhemd-ILip77SbmOE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative h-[150px]  flex justify-center bg-black items-center uppercase text-lg font-medium z-20">
        <Link href="/" className="hover:text-gray-300 cursor-pointer">
          Back to Home
        </Link>
      </footer>
    </div>
  );
}
