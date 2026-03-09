"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[1200px] scroll-mt-28 sm:mb-40 px-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {/* Left: Profile image */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-[5px] border-[#f0f0f0] shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
            <Image
              src="/photo.jpg"
              alt="Sindy portrait"
              width={300}
              height={300}
              quality={95}
              className="w-full h-full object-cover object-[50%_15%]"
            />
          </div>
        </motion.div>

        {/* Right: Bio + Skills */}
        <div className="flex flex-col justify-center">
          <motion.p
            className="text-[1.1rem] leading-[1.7] text-[#444] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            After graduating with a degree in{" "}
            <span className="font-medium">Accountancy from NTU</span>, I pivoted
            into tech and completed a{" "}
            <span className="font-medium">Master of IT in Business (AI track)</span>{" "}
            at SMU. I then joined{" "}
            <span className="font-medium">AI Singapore's AIAP programme</span>,
            where I built production-grade LLM systems, RAG pipelines, and
            fine-tuned open-source models.
          </motion.p>

          <motion.p
            className="text-[1.1rem] leading-[1.7] text-[#444] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I have hands-on experience with{" "}
            <span className="font-medium">
              RAG systems, LLM fine-tuning, vector databases, and end-to-end ML
              deployment
            </span>
            . My core stack includes{" "}
            <span className="font-medium">
              Python, LangChain, DSPy, PyTorch, FastAPI, Docker, and Kubernetes
            </span>
            . I also build frontend applications with{" "}
            <span className="font-medium">React, Next.js, TypeScript, and Tailwind</span>.
          </motion.p>

          {/* Skills subsection */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[1.3rem] font-semibold mb-4">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.map((skill, index) => (
                <motion.span
                  className="bg-[#f0f0f0] px-4 py-2 rounded-[20px] text-[0.9rem] font-medium"
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
