import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaRobot } from "react-icons/fa";
import { LuGraduationCap, LuBrainCircuit } from "react-icons/lu";
import studioCuveeglowImg from "@/public/studio-cuveeglow.png";
import { ProjectLink } from "./types";
import { StaticImageData } from "next/image";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export type ProjectData = {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: StaticImageData;
  links?: ProjectLink[];
};

export const experiencesData = [
  {
    title: "Co-Founder",
    location: "Aurevia Capital",
    description:
      "Technical Co-founder, built end-to-end ML system for luxury watch price forecasting.",
    icon: React.createElement(FaReact),
    date: "Jun 2025 - Nov 2025",
  },
  {
    title: "Associate AI Engineer - AIAP",
    location: "AI Singapore",
    description:
      "Developed production LLM systems, including an enterprise HR query platform built in collaboration with a global analytics leader and a containerised RAG knowledge assistant.",
    icon: React.createElement(LuBrainCircuit),
    date: "Sep 2024 - May 2025",
  },
  {
    title: "Master of IT in Business (AI track)",
    location: "Singapore Management University",
    description:
      "Focused on NLP, deep learning, visual recognition, and AI planning.\n\nTeaching Assistant for Spreadsheet Modelling & Analytics and Web3 in Digitalised Currencies.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2025",
  },
  {
    title: "Senior Financial Accountant",
    location: "Gospell Digital Technology Co., Shenzhen",
    description:
      "Led financial accounting, budgeting, and analysis supporting leadership decision-making.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2023",
  },
  {
    title: "Bachelor of Accountancy",
    location: "Nanyang Technological University",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2014 - 2017",
  },
] as const;

export const projectsData: ProjectData[] = [
  {
    title: "Kube",
    description:
      "Real-time crypto sentiment analysis pipeline on Kubernetes. Correlates Reddit sentiment with price movements via NATS JetStream and Grafana dashboards.",
    tags: ["Python", "Kubernetes", "Docker", "NATS", "Grafana"],
    links: [
      { label: "GitHub", url: "https://github.com/simplysindy/kube" },
    ],
  },
  {
    title: "Adversarial AI Security",
    description:
      "Research on backdoor attacks in neural networks. Implements WaNet attacks and 4 detection methods: Neural Cleanse, STRIP, TABOR, and ABS.",
    tags: ["Python", "PyTorch", "Neural Networks", "Security"],
    links: [
      { label: "GitHub", url: "https://github.com/simplysindy/adversarial-ai-security-detection" },
    ],
  },
  {
    title: "ISSS608 Visual Analytics",
    description:
      "A comprehensive visual analytics portfolio spanning 10 hands-on exercises and 3 assignments, built with Quarto and deployed to Netlify.\n\nCovers interactive visualisations with ggplot2, ggiraph, and Plotly, geospatial choropleth mapping of Singapore demographics with tmap, network analysis of corporate email communications using igraph, and time-series forecasting of international trade data.\n\nApplied analytical methods including correlation analysis, RFM segmentation, and gradient boosting classification across diverse datasets from epidemiological health records to government procurement flows.",
    tags: ["R", "Quarto", "Tableau", "JavaScript"],
    links: [
      { label: "Live Site", url: "https://simplysindy.netlify.app/" },
      { label: "GitHub", url: "https://github.com/simplysindy/ISSS608-Visual-Analytics" },
    ],
  },
  {
    title: "AI Werewolf",
    description:
      "Discord bot with 5 AI players competing in One Night Ultimate Werewolf. Features natural conversations, role-swapping mechanics, and strategic deduction.",
    tags: ["Python", "Discord.py", "AI Agents", "LLM"],
    links: [
      { label: "GitHub", url: "https://github.com/simplysindy/ai-agents-for-social-deduction-gaming-onuw" },
    ],
  },
  {
    title: "Yanscape",
    description:
      "Beauty advent calendar discovery app. Browse, compare, and find the best advent calendars from top beauty brands.",
    tags: ["React", "TypeScript", "Vite", "Supabase"],
    links: [
      { label: "Live Site", url: "https://yanscape.com" },
    ],
  },
  {
    title: "Studio Cuvee Glow",
    description:
      "A full-stack creative studio platform built with Next.js and TypeScript. Features a modern design system, dynamic project showcases, and an integrated CMS.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: studioCuveeglowImg,
    links: [
      { label: "Live Site", url: "https://studio.cuveeglow.com/" },
      { label: "Journal", url: "https://studio.cuveeglow.com/journal" },
    ],
  },
  {
    title: "EtherShield",
    description:
      "Ethereum wallet risk classifier that scores wallets 0-100 based on transaction patterns. Detects money laundering, phishing, and bot behavior with explainability reports.",
    tags: ["Python", "Streamlit", "ML", "Etherscan API"],
    links: [
      { label: "Live Demo", url: "https://shareappio-ahlwqgisfysvjdbzehjmky.streamlit.app/" },
      { label: "GitHub", url: "https://github.com/simplysindy/ethershield" },
    ],
  },
];

export const skillsData = [
  "Python",
  "PyTorch",
  "LangChain",
  "RAG Systems",
  "LLM Fine-tuning",
  "DSPy",
  "FAISS",
  "Docker",
  "Kubernetes",
  "AWS",
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "FastAPI",
  "PostgreSQL",
  "Supabase",
  "SQL",
  "Git",
] as const;
