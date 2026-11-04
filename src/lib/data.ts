export const personalInfo = {
  name: "Abdul Rehman",
  role: "Backend Engineer · AI Engineer",
  email: "abdulrehman007033@gmail.com",
  phone: "+92 336 5133797",
  location: "Islamabad, Pakistan",
  github: "https://github.com/abdulrehman706",
  linkedin: "https://www.linkedin.com/in/abdulrehman007034/",
  resume: "/Abdul_Rehman_CV.pdf",
  resumePage: "/resume/",
  heroHeading: { first: "Abdul", last: "Rehman." },
  footerTagline: "Building production APIs, data pipelines, and applied AI systems.",
  ogImage: "/og.png",
  heroDescription:
    "I build production-focused APIs, enterprise applications, data-ingestion pipelines, and applied AI systems. My work spans LLM-enabled workflows, AI agents, embeddings, vector retrieval, Neo4j knowledge graphs, and real-time conversational AI, backed by infrastructure, automation, and pragmatic system design.",
};

export const workExperience = [
  {
    company: "SkyGenic",
    location: "Boston, Massachusetts, USA",
    position: "Research Software Engineer",
    period: "Feb 2026 - Present",
    achievements: [
      "Build backend services and data-ingestion pipelines for medical-research data processing and AI-driven knowledge bases.",
      "Develop Neo4j-based knowledge systems that organise research information for downstream AI integration.",
      "Contribute to backend architecture, DevOps, infrastructure, and workflow automation to support reliable, scalable processing.",
    ],
    stack: ["Python", "Neo4j", "Knowledge graphs", "Data ingestion", "DevOps", "CI/CD"],
  },
  {
    company: "Kneva Tech",
    location: "Islamabad, Pakistan",
    position: "AI Solutions Architect",
    period: "Jan 2026 - Feb 2026",
    achievements: [
      "Built a legal AI chatbot and regulatory-comparison workflows to help users understand requirements across jurisdictions.",
      "Integrated conversational functionality into an online food-delivery application.",
      "Developed a psychiatrist management application using Python and React, integrating an AI agent, embeddings, and ChromaDB contextual retrieval.",
      "Implemented AI-assisted psychiatric-report analysis and automated documentation generation, with no autonomous diagnostic decisions.",
    ],
    stack: ["Python", "React", "LLMs", "AI agents", "Embeddings", "ChromaDB"],
  },
  {
    company: "DevRolin",
    location: "Islamabad, Pakistan",
    position: "AI Engineer",
    period: "Sep 2025 - Jan 2026",
    achievements: [
      "Designed recruitment automation covering job posting, applicant processing, AI scoring, ranking, shortlisting, HR verification, and interview scheduling.",
      "Built a real-time Zoom-integrated AI interviewer with STT, TTS, and LLMs, reducing response latency from about 6 seconds to 0.8 seconds.",
      "Developed sentiment and behavioural analysis features and reusable communication-platform integrations.",
      "Contributed to recruitment workflows associated with a reported hiring-cycle reduction of more than 50%.",
    ],
    stack: ["Python", "LLMs", "STT", "TTS", "Zoom", "NLP", "REST APIs"],
  },
  {
    company: "Xyron Technologies",
    location: "Islamabad, Pakistan",
    position: ".NET Developer",
    period: "Jul 2024 - Aug 2024",
    achievements: [
      "Contributed to Point of Sale (POS) application development and supported functional implementation.",
      "Implemented selected server-side features for XyronAcademy and supported .NET backend APIs and integrations.",
    ],
    stack: ["C#", "ASP.NET / .NET", "SQL Server", "REST APIs"],
  },
  {
    company: "Stertak",
    location: "Pakistan",
    position: "Full-Stack Developer · Dynamics 365 & Power Platform",
    period: "Mar 2023 - Jan 2024",
    achievements: [
      "Developed and maintained frontend and backend application features in Microsoft Dynamics 365 and Power Platform environments.",
      "Supported enterprise integrations and application functionality across the full stack.",
    ],
    stack: ["Dynamics 365", "Power Platform", "JavaScript", "C#"],
  },
];

export const education = [
  {
    institution: "Capital University of Science & Technology",
    location: "Islamabad, Pakistan",
    degree: "Bachelor of Science in Computer Science",
    period: "2022 - 2025",
    achievements: ["Named to the Dean's Honour Roll.", "Placed 3rd in the ExcITe Cup."],
  },
];

export const skills = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "C#", "PHP", "C++"],
  },
  {
    label: "Backend & frontend",
    items: ["REST APIs", "Node.js", "React", "ASP.NET / .NET", "Git", "Testing"],
  },
  {
    label: "Applied AI",
    items: ["LLMs", "AI agents", "Generative AI", "NLP", "Embeddings", "Retrieval systems"],
  },
  {
    label: "Voice & ML",
    items: ["Speech-to-Text", "Text-to-Speech", "Vector databases", "scikit-learn"],
  },
  {
    label: "Data",
    items: ["Neo4j", "Knowledge graphs", "Data ingestion", "ChromaDB", "MySQL", "SQL Server"],
  },
  {
    label: "Cloud & delivery",
    items: ["MongoDB", "Firebase", "Google Cloud", "CI/CD", "DevOps"],
  },
];

export type ProjectArtwork = "interviewer" | "recruitment" | "knowledge" | "clinical";

type SelectedWork = {
  title: string;
  context: string;
  artwork: ProjectArtwork;
  summary: string;
  stack: string[];
  description: string[];
};

export const selectedWork: SelectedWork[] = [
  {
    title: "Real-time AI interviewer",
    context: "Conversational AI · DevRolin",
    artwork: "interviewer",
    summary:
      "A Zoom-integrated AI interviewer that listens, reasons, and speaks back in real time, combining speech-to-text, LLMs, and text-to-speech.",
    stack: ["Python", "Zoom", "STT", "LLMs", "TTS", "NLP"],
    description: [
      "Connected live meeting audio to a streaming STT → LLM → TTS loop so candidates could hold a natural conversation with the interviewer.",
      "Reduced response latency from roughly 6 seconds to 0.8 seconds.",
      "Added sentiment and behavioural analysis on top of the conversation for interview review.",
    ],
  },
  {
    title: "Recruitment automation",
    context: "Workflow automation · DevRolin",
    artwork: "recruitment",
    summary:
      "An end-to-end hiring pipeline that takes a role from job posting to a scheduled interview, with AI scoring and a human verification step.",
    stack: ["Python", "LLMs", "REST APIs", "Scheduling", "Integrations"],
    description: [
      "Automated job posting, applicant processing, AI scoring, ranking, and shortlisting.",
      "Kept HR verification in the loop before candidates moved on to interview scheduling.",
      "Built reusable communication-platform integrations; the workflows were associated with a reported hiring-cycle reduction of more than 50%.",
    ],
  },
  {
    title: "Research knowledge graphs",
    context: "Data platform · SkyGenic",
    artwork: "knowledge",
    summary:
      "Backend services and ingestion pipelines that turn medical-research data into Neo4j knowledge bases ready for downstream AI.",
    stack: ["Python", "Neo4j", "Data ingestion", "DevOps", "CI/CD"],
    description: [
      "Built data-ingestion pipelines that process medical-research information into structured graph data.",
      "Modelled research entities and relationships in Neo4j for AI-driven retrieval and integration.",
      "Contributed to the backend architecture, infrastructure, and automation that keep processing reliable as it scales.",
    ],
  },
  {
    title: "AI-assisted clinical workspace",
    context: "Applied AI · Kneva Tech",
    artwork: "clinical",
    summary:
      "A psychiatrist management application with an AI agent that retrieves patient context and drafts documentation, while clinicians keep every decision.",
    stack: ["Python", "React", "AI agents", "Embeddings", "ChromaDB"],
    description: [
      "Built the application in Python and React, with an AI agent backed by embeddings and ChromaDB contextual retrieval.",
      "Implemented AI-assisted psychiatric-report analysis and automated documentation generation.",
      "Designed the assistant to support clinicians only, with no autonomous diagnostic decisions.",
    ],
  },
];

export const sectionIntro = {
  experience:
    "I combine application engineering with infrastructure and automation, from backend APIs and enterprise apps to LLM-powered agents and real-time voice AI.",
  work: "Selected systems I have built as part of company teams. Details are kept general because the work and source code are private.",
};

export const blogInfo = {
  title: "Blog",
  description: "Notes on backend engineering, applied AI, and automation.",
};

type Award = {
  name: string;
  issuer?: string;
  type: string;
  position: string;
};

export const awards: Award[] = [
  {
    name: "Dean's Honour Roll",
    issuer: "Capital University of Science & Technology",
    type: "Academic",
    position: "Honour Roll",
  },
  {
    name: "ExcITe Cup",
    type: "Competition",
    position: "3rd Position",
  },
];

export const certifications = [
  "Foundations of Data Science",
  "Supervised Learning with scikit-learn",
  "Natural Language Processing (NLP) in Python",
  "Introduction to Data Science in Python",
  "Python for Data Science, AI & Development",
];
