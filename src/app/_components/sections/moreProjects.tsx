"use client";

import { projects } from "@/app/utils/constants";
import Link from "next/link";
import { useState } from "react";
import { FaArrowUpFromBracket, FaGithub } from "react-icons/fa6";
import { StaggeredOnViewText } from "../utilities/StaggeredText";
import { grotesque } from "@/app/layout";
import Image from "next/image";

const MoreProjects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [activeCheck, setActiveCheck] = useState<Boolean | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveProject(projects[index]);
  };

  const ActiveProjectComponent: React.FC<{ id: number }> = ({ id }) => {
    return (
      <div
        className={`${
          id !== activeProject.id ? "hidden" : "block"
        }  lg:w-[35%] w-full border-[2px] border-foreground/20 lg:px-8 px-3 py-10 mt-8 h-fit`}
      >
        <div className="text-[2em] font-bold">{activeProject.logo}</div>

        <div className="h-[60%] my-8 p-3 rounded-[1.5em] border">
           <div className="lg:h-full overflow-hidden rounded-[1.5em] border">
              <Image
                src={activeProject.image}
                width={1000}
                height={1000}
                alt={activeProject.logo}
                className="object-cover h-full w-full"
              />
            </div>
        </div>
        <div className="">
          <h3 className="text-[1.5rem] font-bold">{activeProject.title}</h3>
          <p className="text-foreground/70">{activeProject.description}</p>
          <div className="grid-cols-3 w-full grid gap-1 my-5">
            {activeProject.technologies.map((tech) => {
              return (
                <p
                  key={tech.id}
                  className={`${tech.bgColor} w-full text-center text-xs  px-2  text-black py-1`}
                >
                  {tech.title}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="lg:px-14 px-4 ">
      <div className="mb-14">
        <h2
          className={`${grotesque.className} lg:text-[4rem] text-[2rem] lg:w-[50%]  font-bold text-gradient-b`}
        >
          <StaggeredOnViewText
            stagger={0.02}
            duration={0.2}
            text="Projects..."
          />
        </h2>
      </div>

      <div className="lg:flex lg:h-[100vh] h-fit">
        <div className="lg:w-[65%] w-full border-solid border-foreground/10 flex flex-col items-stretch  border-[2px] h-full">
          {projects.map((project, index) => {
            return (
              <div
                key={project.id}
                onMouseEnter={() => handleMouseEnter(index)}
                className={`border py-8 lg:px-5 px-2 h- ${
                  activeProject.id == project.id ? " " : "text-foreground/40"
                }`}
              >
                <div className="flex justify-between">
                  <div className="">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p
                      className={`${
                        activeProject.id == project.id
                          ? "flex text-foreground/70"
                          : "hidden"
                      } mt-4  transition-all`}
                    >
                      {project.description}
                    </p>
                  </div>
                  <div className="flex">
                    <Link className="mx-3" href={project.githubRepo}>
                      <FaGithub />
                    </Link>
                    <Link className="mx-3" href={project.liveSite}>
                      <FaArrowUpFromBracket />
                    </Link>
                  </div>
                </div>
                <div className="lg:hidden w-full ">
                  <ActiveProjectComponent id={project.id} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="lg:w-[35%] w-full border-[2px] border-foreground/20 px-8 py-10 hidden lg:block h-full">
          <div className="text-[2em] font-bold">{activeProject.logo}</div>

          <div className=" lg:h-[40%] my-8 p-3 rounded-[1.5em] border">
            <div className="lg:h-full overflow-hidden rounded-[1.5em] border">
              <Image
                src={activeProject.image}
                width={1000}
                height={1000}
                alt={activeProject.logo}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="">
            <h3 className="text-[1.5rem] font-bold">{activeProject.title}</h3>
            <p className="text-foreground/70">{activeProject.description}</p>
            <div className="grid-cols-4 w-full grid gap-1 my-5">
              {activeProject.technologies.map((tech) => {
                return (
                  <p
                    key={tech.id}
                    className={`${tech.bgColor} w-full text-center text-xs  px-2  text-black py-1`}
                  >
                    {tech.title}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreProjects;
