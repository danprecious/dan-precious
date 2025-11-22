export interface Project {
  id: number;
  title: string;
  description: string;
  githubRepo: string;
  liveSite: string;
  technologies: Array<{ id: number; title: string; bgColor: string }>;
  logo: string;
  image: string;
  shortDescription: string;
}

export const projects: Array<Project> = [
  {
    id: 0,
    title: "HCL – HC Language 360",
    description:
      "A modern website built for a global translation and localization agency, designed to communicate credibility and streamline client onboarding. Built using Next.js (API Routes) and TailwindCSS.",
    githubRepo: "https://github.com/danprecious/hcl360",
    liveSite: "https://www.hclanguage360.com/",
    technologies: [
      {
        id: 0,
        title: "Nextjs",
        bgColor: "bg-amber-200",
      },
      {
        id: 1,
        title: "TailwindCSS",
        bgColor: "bg-red-300",
      },
    ],
    logo: "HCL",
    image: "/images/hcl.png",
    shortDescription:
      "A Next.js-powered website for a global translation agency focused on clarity and onboarding.",
  },
  {
    id: 1,
    title: "VISTAVIBE – Digital Agency",
    description:
      "A conversion-focused digital agency website created to turn visitors into clients. Built with Next.js and TailwindCSS for speed, responsiveness, and clean UI.",
    githubRepo: "https://github.com/danprecious/emginc",
    liveSite: "https://vistavibemarketing.netlify.app/",
    technologies: [
      {
        id: 0,
        title: "Nextjs",
        bgColor: "bg-amber-200",
      },
      {
        id: 1,
        title: "TailwindCSS",
        bgColor: "bg-blue-300",
      },
    ],
    logo: "VISTAVIBE",
    image: "/images/vistavibe.png",
    shortDescription:
      "A conversion-driven digital agency website built with Next.js and TailwindCSS.",
  },
  {
    id: 2,
    title: "JoesFashion",
    description:
      "A stylish, conversion-driven website for a modern fashion brand. Built to showcase products and enhance brand perception using Next.js and TailwindCSS.",
    githubRepo: "https://github.com/danprecious/joesfashion",
    liveSite: "https://joesfashion.vercel.app/",
    technologies: [
      {
        id: 0,
        title: "Nextjs",
        bgColor: "bg-amber-200",
      },
      {
        id: 1,
        title: "TailwindCSS",
        bgColor: "bg-red-300",
      },
    ],
    logo: "JOESFASHION",
    image: "/images/joesfashion.png",
    shortDescription:
      "A modern Next.js fashion brand website designed for conversions and brand visibility.",
  },
  {
    id: 3,
    title: "AGC Website",
    description:
      "A full-stack website for the AGC organization, focused on conversions and engagement. Built using Next.js, Prisma ORM, MongoDB, and TailwindCSS.",
    githubRepo: "https://github.com/danprecious/agc",
    liveSite: "https://agc-six.vercel.app/",
    technologies: [
      {
        id: 0,
        title: "Nextjs",
        bgColor: "bg-amber-200",
      },
      {
        id: 1,
        title: "TailwindCSS",
        bgColor: "bg-blue-300",
      },
      {
        id: 2,
        title: "PrismaORM",
        bgColor: "bg-amber-200",
      },
      {
        id: 3,
        title: "MongoDB",
        bgColor: "bg-sky-500",
      },
    ],
    logo: "AGC",
    image: "/images/agc.png",
    shortDescription:
      "A full-stack Next.js + Prisma + MongoDB website built for the AGC organization.",
  },
];
