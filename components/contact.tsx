"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 text-center px-6"
      style={{ width: "100%", maxWidth: "55rem" }}
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
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6">
        Feel free to reach out and I'll get back to you as soon as possible.
      </p>

      <div className="mt-10">
        <a
          href="mailto:simplysindyhua@gmail.com"
          className="inline-block bg-gray-900 text-white px-7 py-3 rounded-full outline-none hover:bg-gray-950 transition-all"
        >
          Send me an email
        </a>
      </div>
    </motion.section>
  );
}
