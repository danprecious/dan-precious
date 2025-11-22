import { grotesque } from "@/app/utils/font";
import React from "react";
import { FaNodeJs } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiCloudinary,
  SiExpress,
  SiGit,
  SiGithub,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";
import { StaggeredOnViewText } from "../utilities/StaggeredText";

const Technologies = () => {
  const technologies = [
    {
      id: 0,
      title: "NextJs",
      logo: <RiNextjsLine />,
    },
    {
      id: 1,
      title: "ReactJs + Vite",
      logo: <GrReactjs />,
    },
    {
      id: 2,
      title: "NodeJs",
      logo: <FaNodeJs />,
    },
    {
      id: 3,
      title: "Express.js",
      logo: <SiExpress />,
    },
    {
      id: 4,
      title: "Typescript",
      logo: <SiTypescript />,
    },
    {
      id: 5,
      title: "MongoDB",
      logo: <SiMongodb />,
    },
    {
      id: 6,
      title: "Prisma",
      logo: <SiPrisma />,
    },
    {
      id: 7,
      title: "TailwindCSS",
      logo: <SiTailwindcss />,
    },
    {
      id: 8,
      title: "Framer Motion",
      logo: <TbBrandFramerMotion />,
    },
    {
      id: 9,
      title: "Git",
      logo: <SiGit />,
    },
    {
      id: 10,
      title: "Github",
      logo: <SiGithub />,
    },
    {
      id: 11,
      title: "Cloudinary",
      logo: <SiCloudinary />,
    },
  ];

  return (
    <section className="my-10 lg:my-20">
      <div className="w-full flex justify-center">
        <h1
          className={`${grotesque.className} lg:text-[4rem] text-[2rem] flex justify-center lg:w-[50%] text-center  font-bold text-gradient-b`}
        >
          <StaggeredOnViewText
            stagger={0.02}
            duration={0.2}
            text=".Frequent Tech"
          />
        </h1>
      </div>

      <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-2 my-8">
        {technologies.map(({ title, logo, id }) => {
          return (
            <div
              key={id}
              className="grid place-items-center lg:py-[5em] py-[2em] border hover:bg-foreground/80 transition-all duration-1000 hover:text-background"
            >
              <p className="lg:text-[4em] text-[2em] mb-8">{logo}</p>
              <p className="font-bold text-md">{title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
