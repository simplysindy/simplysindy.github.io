"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[80vh] flex flex-col items-center justify-center max-w-[60rem] text-center mb-16 sm:mb-24 scroll-mt-[100rem]"
    >
      {/* Watercolor splash background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] -z-10 opacity-25 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: "url(/splash.png)" }}
      />

      <motion.h1
        className="mb-4 text-[2.5rem] sm:text-[3.5rem] font-semibold !leading-tight gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hello, I'm Sindy.
      </motion.h1>

      <motion.p
        className="mb-8 text-[1.2rem] sm:text-[1.5rem] text-gray-500 max-w-[900px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        AI engineer building RAG systems, LLM applications, and data pipelines.
        Specialising in generative AI & Python.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 text-lg font-medium"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/simplysindy"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
