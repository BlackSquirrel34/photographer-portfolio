import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SubmitBtn from "../../components/form-button";
import { sendMail } from "../api/send/sendmail";
import toast from "react-hot-toast";
// import { Altcha } from "react-altcha";

import Navbar from "../../components/Navbar";

export default function Kontakt() {
  // useful for clearing after submit
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  /*  // Asynchronous function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // Check if the values are not null and are of type string
    // Otherwise typescript will complain:
    // " type FormEntryValue cannot be assigned to string. "
    if (typeof senderEmail !== "string" || typeof message !== "string") {
      console.error("Invalid form data: we need a string!");
      return;
    }

    const data = {
      senderEmail: senderEmail,
      subject: "Kontakformular: Neue Nachricht",
      message: message,
    };
    console.log("Data transmitted from the form");
    console.log(data);

    try {
      const response = await sendMail({
        email: data.senderEmail,
        subject: data.subject,
        text: data.message,
      });

      if (response.success && response.messageId) {
        console.log("Ihre Email wurde gesendet!");
        toast.success("Ihre Email wurde gesendet!"); // Show success message
        // Clear the form fields
        setSenderEmail("");
        setMessage("");
      } else {
        console.error("Failed to send email:", response.message);
        toast.error(
          `Es gab ein Problem beim Senden der Email: ${response.message}`
        ); // Show error message
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Failed to send email:", error);
        console.error(error.message || "An error occurred.");
        toast.error(
          "Es gab ein Problem beim Senden der Email. Bitte versuchen Sie es später."
        ); // Show error message
      } else {
        console.error("An unknown error occurred.");
      }
    }
  }; */

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
          <h2 className="text-4xl font-medium mb-8 text-center">
            Kontakt aufnehmen
          </h2>

          <div className="rounded-lg p-5">
            <p className="mb-5 text-lg">
              Interesse an einer Zusammenarbeit?
              <br></br>
              Ich freue mich darauf, von dir zu hören!
            </p>

            <form
              // onSubmit={handleSubmit}
              className="mt-10 flex flex-col items-center text-black" // Center items in the flex column
            >
              <input
                className="h-14 px-4 rounded-lg borderBlack transition-all w-full max-w-md" // Set a max width for the input
                name="senderEmail"
                type="email"
                required
                maxLength={200}
                placeholder="Deine Email"
              />
              <textarea
                className="h-52 my-3 p-4 rounded-lg transition-all w-full max-w-md" // Set a max width for the textarea
                name="message"
                placeholder="Deine Anfrage an mich"
                required
                maxLength={3000}
              />
              {/* Captcha */}
              <div className="mb-3 w-full max-w-md flex justify-center py-6 text-gray-500">
                {" "}
                {/* Center the captcha div */}
                {/* <Altcha
                    challengeurl={`${process.env.NEXT_PUBLIC_API_BASE_URL}/captcha/challenge`}
                    verifyurl={`${process.env.NEXT_PUBLIC_API_BASE_URL}/captcha/verify`}
                  /> */}
              </div>
              <div className="w-full max-w-md flex justify-center py-4">
                {" "}
                {/* Center the Submit button */}
                <SubmitBtn />
              </div>
            </form>
          </div>
        </motion.div>
      </main>

      <footer className="relative h-[150px]  flex justify-center bg-black items-center uppercase text-lg font-medium z-20">
        <Link href="credits" className="hover:text-gray-300 cursor-pointer">
          Back to home
        </Link>
      </footer>
    </div>
  );
}
