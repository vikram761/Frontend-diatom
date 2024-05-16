"use client";

import Lottie from "lottie-react";
import ContactAnimation from "../assets/contact.json";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Input from "./Input";
import { useState } from "react";
import { useRouter } from "next/navigation";

const open_sans = Open_Sans({
  subsets: ["latin"],
});

const Contact = () => {
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
        "w-full relative  lg:py-40 md:py-20 py-10 2xl:px-40 lg:px-20 sm:px-10 px-4 flex max-lg:flex-col justify-between items-center gap-4",
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
        transition={{ duration: 0.5, ease: "easeOut",delay:0.1 }}
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
      </motion.form>
    </section>
  );
};

export default Contact;
