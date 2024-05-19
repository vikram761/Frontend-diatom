"use client";

import Lottie from "lottie-react";
import ContactAnimation from "@/assets/contact.json";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "@/components/Input";

const open_sans = Open_Sans({
  subsets: ["latin"],
});

export default function Home (){
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const router = useRouter();
  const handleGoBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    } else {
      router.back();
    }
  };

  return (
    <section
      className={cn(
        "w-full relative  lg:py-28 md:py-20 py-10 2xl:px-40 lg:px-20 sm:px-10 px-4 flex max-lg:flex-col justify-between items-center gap-4",
        open_sans.className,
      )}
    >
      <motion.div
        className="absolute lg:left-20 sm:left-10 left-0 lg:top-10 top-4 group w-20"
        onClick={handleGoBack}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className="w-16 fill-black group-hover:fill-teal-500 duration-150 delay-150 group-hover:-translate-x-1 cursor-pointer transition-all"
        >
          <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
        </svg>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="lg:w-1/2 w-full max-w-3xl flex items-center lg:justify-start justify-center"
      >
        <Lottie
          animationData={ContactAnimation}
          className="object-cover w-full"
          loop={true}
        />
      </motion.div>
      <motion.form
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="lg:w-1/2 w-full flex flex-col justify-center gap-8 max-w-2xl px-4 py-8"
      >
        <h1 className="text-6xl w-full font-bold league">Contact Us</h1>
        <p className="font-medium ">
          Send Us a message we will get back to you as soon as possible
        </p>
        <Input
          label="Name"
          type="text"
          value={name}
          setValue={setName}
          placeholder="John Doe"
        />
        <Input
          label="Email"
          type="email"
          value={email}
          setValue={setEmail}
          placeholder="johndoe@email.com"
        />
        <label className="flex-col flex gap-2">
          <span className="text-md font-medium pl-2">Message</span>
          <textarea
            typeof="text"
            className="border border-gray-300 px-4 py-3 max-w-2xl rounded-md active:border-gray-700"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us something..."
          />
        </label>
        <button className="text-lg font-medium  px-8 py-4 text-white border border-white bg-black rounded-lg hover:text-black hover:bg-white hover:border hover:border-gray-400 duration-300 delay-150 transition-all">
          Submit
        </button>
        <div className="flex justify-between max-lg:flex-col gap-8">
          <div className="flex lg:flex-col  gap-3 items-end max-lg:justify-between">
            <p className="font-medium text-lg pl-2">Phone number</p>
            <p className="max-lg:pr-4">+91 9XXXXXXXXX</p>
          </div>
          <div className="flex lg:flex-col max-lg:gap-3 max-lg:items-center gap-2 justify-start max-lg:justify-between">
            <p className="font-medium text-lg pl-2">Socials</p>
            <div className=" flex justify-center">
              <Link
                href="https://www.twitter.com/"
                type="button"
                className="mx-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/"
                type="button"
                className="mx-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/"
                type="button"
                className="mx-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/DiAtomTechnologies"
                type="button"
                className="mx-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.form>
    </section>
  );
};




