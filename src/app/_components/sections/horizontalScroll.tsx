"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "motion/react";
import { projects } from "@/app/utils/constants";
import { grotesque } from "@/app/utils/font";
import { StaggeredOnViewText } from "../utilities/StaggeredText";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpFromBracket, FaGithub } from "react-icons/fa6";

export const GSAPHorizontalScroll = () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // const [hSection, setHSection] = useState<Element | null>(null);
  // const [hContent, setHContent] = useState<Element | null>(null);
  // const [sDistance, setSDistance] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      const horizontalSect = document.querySelector(".horizontal-section");
      const horizontalCont = document.querySelector(".horizontal-content");
      const scrollDistance =
        horizontalCont?.scrollWidth! - horizontalSect?.clientWidth!;

      gsap.to(horizontalCont, {
        x: -scrollDistance!, // Move content left (negative x)
        ease: "none",
        scrollTrigger: {
          trigger: horizontalSect,
          start: "top top", // When top of section hits top of viewport
          end: `+=${scrollDistance}`, // Scroll length = content width
          pin: true, // Pin the section in place while scrolling
          scrub: 1, // Smooth scrubbing effect
          markers: false, // Set to true for debugging
        },
      });
    }
  }, []);

  return (
    <section className="horizontal-section lg:px-10 px-2 mr-[50em] py-5">
      <div className="horizontal-content py-5 ">
        <div className="flex flex-col w-[100%] mr-20 min-w-fit border-red-600">
          <h2
            className={`${grotesque.className} lg:text-[4rem] text-[2rem] w-fit  font-bold text-gradient-b `}
          >
            <StaggeredOnViewText
              stagger={0.02}
              duration={0.5}
              text=".Featured Projects"
            />
          </h2>
          <p className="py-5 max-w-[95vw] text-justify lg:max-w-[40vw] pr-2">
            Sometimes its the frustration when using some stuffs, other times
            the feeling of <span className="">"this could be better"</span> and
            many times, it's the feeling of "I think this would be a good stuff
            to put out there. Whichever it is for you, there's always one
            constant good feeling when building,
          </p>
        </div>

        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className={` lg:min-w-[30em] min-w-[90vw] h-[85%] flex flex-col justify-between mr-14 lg:w-[35vw] w-full border-[2px] border-foreground/20  px-3 py-5 `}
            >
              <div className="text-[1em] font-bold">{project.logo}</div>

              <div className="h-[50%] my-8 p-3 rounded-[1.5em] border">
                <div className="h-full overflow-hidden grayscale-100 hover:grayscale-0  rounded-[1.5em] border">
                  <Image
                    src={project.image}
                    width={1000}
                    height={1000}
                    alt={project.logo}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              <div className="">
                <h3 className="text-[1rem] font-bold">{project.title}</h3>
                <p className="text-foreground/70">{project.description}</p>
                <div className="grid-cols-3 w-full grid gap-1 mt-5">
                  {project.technologies.map((tech) => {
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
                <div className="flex mt-5 items-center">
                  <Link className="mx-3 flex items-center gap-2" href={project.githubRepo}>
                   Github <FaGithub />
                  </Link>
                  <Link className="mx-3 gap-2 flex items-center" href={project.liveSite}>
                   <strong>Visit</strong> <FaArrowUpFromBracket />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export const FRAMERHorizontalScroll = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start", "center", "end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <section ref={sectionRef} style={{ height: "100vh", overflow: "hidden" }}>
      <motion.div
        style={{
          display: "flex",
          height: "100%",
          x, // Apply horizontal scroll
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            style={{
              minWidth: "300px",
              height: "80%",
              marginRight: "20px",
              background: "#ccc",
            }}
          >
            Card {i + 1}
          </div>
        ))}
      </motion.div>
    </section>
  );
};
