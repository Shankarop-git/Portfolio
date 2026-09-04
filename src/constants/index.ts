// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  java,
  python,
  springboot,
  flask,
  mysql,
  postgresql,
  firebase,
  scikitlearn,
  googleGenAi,
  fastapi,
  opencv,
  langchain,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Full Stack Developer",
    icon: web,
    description: "Building scalable web applications using React, Spring Boot, Flask, REST APIs, and SQL.",
  },
  {
    title: "AI & Machine Learning",
    icon: mobile,
    description: "Developing intelligent applications using Python, Scikit-learn, Google GenAI, DeepFace, and predictive models.",
  },
  {
    title: "Java Developer",
    icon: backend,
    description: "Creating backend systems with Java, Spring Boot, Servlets, JDBC, Hibernate, and RESTful APIs.",
  },
  {
    title: "Problem Solver",
    icon: creator,
    description: "Strong foundation in DSA, DBMS, OOP, Operating Systems, Computer Networks, and Software Engineering.",
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Scikit-Learn",
    icon: scikitlearn,
  },
  {
    name: "Google GenAI",
    icon: googleGenAi,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Software Development Intern",
    company_name: "Exposys Data Labs",
    icon: python,
    iconBg: "#383E56",
    date: "June 2025 – August 2025",
    points: [
      "Developed Secure File Transfer System using ML Face Authentication.",
      "Implemented AES-GCM encryption and DeepFace authentication.",
      "Built backend APIs using Python and Flask.",
      "Integrated secure authentication and file encryption.",
    ],
  },
  {
    title: "State Level Hackathon",
    company_name: "Jain Institute of Technology",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Built Credit-Point Based Course Recommendation Platform.",
      "Collaborated with a team to design and develop the platform.",
      "Implemented recommendation logic and responsive UI.",
    ],
  },
  {
    title: "AI Research Project",
    company_name: "Drug–Pathogen Molecular Interaction Analysis",
    icon: googleGenAi,
    iconBg: "#383E56",
    date: "2026",
    points: [
      "Developed AI-powered molecular interaction prediction platform.",
      "Implemented ADMET profiling and mutation analysis.",
      "Integrated RDKit, Random Forest, and Google GenAI.",
      "Generated interactive reports and scientific visualizations.",
    ],
  },
  {
    title: "Personal Finance Manager",
    company_name: "SpendWise AI",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Developed a full-stack personal finance application.",
      "Tracked income, managed expenses, and visualized spending habits.",
      "Integrated personalized AI-powered insights for better financial decisions.",
      "Implemented responsive UI with React and Tailwind CSS.",
    ],
  },
  {
    title: "AI Developer Assistant",
    company_name: "IntelliDev AI",
    icon: python,
    iconBg: "#383E56",
    date: "2026",
    points: [
      "Built a full-stack AI-powered developer assistant.",
      "Implemented features to ask technical questions and debug code.",
      "Analyzed repositories and understood unfamiliar project structures.",
      "Integrated FastAPI, LangChain, and LLMs.",
    ],
  },
] as const;

// Core Expertise
export const CORE_EXPERTISE = [
  {
    title: "Full Stack Development",
    icon: "💻",
    description:
      "Building responsive, high-performance web applications using modern frontend and backend technologies.",
    skills: ["React.js", "Java", "Spring Boot", "Python", "Flask", "REST APIs", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  },
  {
    title: "AI & Generative AI",
    icon: "🤖",
    description:
      "Integrating state-of-the-art AI technologies and Large Language Models to power intelligent applications.",
    skills: ["LLMs", "Google Gemini", "LangChain", "FastAPI", "Prompt Engineering", "AI Assistants"],
    color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30",
  },
  {
    title: "Machine Learning & Computer Vision",
    icon: "🧠",
    description:
      "Developing predictive models, data processing pipelines, and computer vision workflows.",
    skills: ["Scikit-Learn", "OpenCV", "DeepFace", "Python", "Predictive Analytics", "RDKit"],
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
  },
  {
    title: "Backend & Database Development",
    icon: "⚡",
    description:
      "Designing robust backend architectures, RESTful APIs, and efficient database management systems.",
    skills: ["Spring Boot", "Flask", "MySQL", "PostgreSQL", "Firebase", "Database Schema Design"],
    color: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
  },
  {
    title: "Problem Solving & DSA",
    icon: "🎯",
    description:
      "Strong CS fundamentals with continuous active practice in Data Structures & Algorithms using Java.",
    skills: ["Data Structures", "Algorithms", "Java OOP", "DBMS", "Operating Systems", "Computer Networks"],
    color: "from-rose-500/20 to-pink-500/20 border-rose-500/30",
  },
] as const;

// Currently Learning & Improving
export const CURRENTLY_LEARNING = [
  {
    topic: "Advanced DSA with Java",
    description: "Solving core algorithmic problems & optimizing space/time complexity",
    icon: "☕",
  },
  {
    topic: "Spring Boot & Backend Microservices",
    description: "Deepening knowledge of scalable enterprise architectures and REST APIs",
    icon: "🌱",
  },
  {
    topic: "Generative AI & LLM Applications",
    description: "Building production-grade AI agents with LangChain & RAG architecture",
    icon: "✨",
  },
  {
    topic: "Machine Learning & Analytics",
    description: "Exploring advanced model tuning & real-world predictive workflows",
    icon: "📊",
  },
  {
    topic: "System Design Fundamentals",
    description: "Studying scalable backend architectures, caching, and database design",
    icon: "🏗️",
  },
] as const;


// Projects
export const PROJECTS = [
  {
    name: "🧬 AI-Based Drug–Pathogen Molecular Interaction Analysis",
    description:
      "An AI-powered full-stack web platform designed to support drug discovery research by predicting drug–pathogen binding affinity and molecular stability using machine learning and chem-informatics techniques. The platform enables researchers to upload molecular data, perform ADMET profiling, analyze mutation impacts, visualize molecular insights, and generate downloadable reports.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Flask", color: "pink-text-gradient" },
      { name: "Scikit-Learn", color: "blue-text-gradient" },
      { name: "Google GenAI", color: "green-text-gradient" },
      { name: "RDKit", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/Shankarop-git/drug-pathogen-interaction",
    live_site_link: "https://drug-pathogen-interaction.vercel.app",
  },
  {
    name: "🤖 IntelliDev AI – AI Developer Assistant",
    description:
      "A full-stack, AI-powered developer assistant designed to make software development more intelligent, productive, and accessible inside a unified workspace. Helps developers ask technical questions, debug code, analyze repositories, understand unfamiliar project structures, and accelerate everyday workflows.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "LangChain", color: "green-text-gradient" },
      { name: "LLM", color: "pink-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/Shankarop-git/IntelliDev-AI",
    live_site_link: "https://intelli-dev-ai-ten.vercel.app",
  },
  {
    name: "💼 SecureTransferWeb – Software Development Internship",
    description:
      "Developed a secure communication system during internship at Exposys Data Labs, gaining hands-on experience in full-stack development, backend API development, database integration, authentication, computer vision, data security, face recognition, and steganography.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "DeepFace", color: "green-text-gradient" },
      { name: "TensorFlow", color: "pink-text-gradient" },
      { name: "AES/RSA", color: "blue-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/Shankarop-git/SecureTransferWeb",
    live_site_link: "https://securetransferweb.onrender.com/",
  },
  {
    name: "📱 PlacementApp – College Placement Management System",
    description:
      "Native Android-based College Placement Management System designed to simplify and digitize campus recruitment. Provides a centralized platform for Admins, TPOs, and Students to manage student profiles, company information, job opportunities, announcements, results, and placement data visualization.",
    tags: [
      { name: "Android", color: "blue-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "XML", color: "pink-text-gradient" },
      { name: "Firebase", color: "blue-text-gradient" },
      { name: "SQLite", color: "green-text-gradient" },
    ],
    image: project4,
    source_code_link: "https://github.com/Shankarop-git/PlacementApp",
    live_site_link: "",
  },
  {
    name: "💸 SpendWise AI – Personal Finance Manager",
    description:
      "Understand Your Money. Spend Smarter. Track your income, manage your expenses, visualize your spending habits, and get personalized AI-powered insights to make better financial decisions.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
      { name: "Full Stack", color: "blue-text-gradient" },
    ],
    image: project5,
    source_code_link: "https://github.com/Shankarop-git/SpendWise",
    live_site_link: "https://frontend-delta-eight-3wzr6yec0v.vercel.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/shankarpatil45/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Shankarop-git",
  },
] as const;

