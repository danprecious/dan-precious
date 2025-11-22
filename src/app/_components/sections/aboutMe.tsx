import React from "react";
import SubText from "../utilities/subText";
import { grotesque } from "@/app/layout";
import { StaggeredOnViewText } from "../utilities/StaggeredText";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="h-full w-full min-h-[90vh] lg:px- px-3 my-20 flex flex-col items-center">
      <div className="w-full flex-c-center">
        <h1
          className={`lg:text-[4rem] text-[2rem]  text-center font-bold text-gradient-b ${grotesque.className}`}
        >
          <StaggeredOnViewText
            stagger={0.02}
            duration={0.2}
            text="Meet Dan Precious..."
          />
        </h1>
      </div>

      <div className="flex flex-col my-10 lg:w-[90%] ">
        <div className="w-full border  min-h-[30vh] px-5 py-5 flex flex-col justify-center">
          <SubText styles="font-bold text-[2rem] text-gradient-r" text="BIO" />
          <p className="text-justify text-foreground/70">
            I’m Kayode Dan Precious — The Simple Engineer. I build clean,
            scalable web experiences with Next.js, React, and modern backend
            tools. My approach is straightforward: understand the problem,
            remove the noise, and deliver solutions that work beautifully and
            reliably. <br /> I try to always use the right tools for the job —
            nothing over-engineered, nothing unnecessary. I focus on clarity,
            performance, and building solutions that create real business
            impact. I move fast, learn deeply, and take full ownership of every
            project I touch. <br /> Simplicity isn’t my style — it’s my
            engineering philosophy.
          </p>
        </div>

        <div className="flex my-5 flex-col lg:flex-row">
          <div className="lg:w-[65%] border lg:h-[70vh] w-full lg:px-5 lg:py-10 px-3 py-8  mr-5">
            <SubText
              styles="font-bold text-[2rem] text-gradient-r"
              text="WHY WORK WITH ME"
            />

            <div className="my-5">
              <strong className="">
                Deep Technical Range with Real Project Experience:
              </strong>
              <p className="mt-2 text-foreground/70">
                From building full-stack Next.js apps and Express.js backends to
                crafting dashboards, e-commerce systems, and real-time features,
                shipping production-ready solutions.
              </p>
            </div>
            <div className="my-5">
              <strong className="">
                Relentless Problem Solver & Fast Adaptability:
              </strong>
              <p className="mt-2 text-foreground/70">
                Whether it’s digging into WebSockets, optimizing API behavior,
                fixing tricky deployment issues, or mastering new UI/UX
                patterns, I’m the type of engineer who figures things out
                quickly and thoroughly.
              </p>
            </div>
            <div className="my-5">
              <strong className="">High Ownership & Delivery Mindset:</strong>
              <p className="mt-2 text-foreground/70">
                I take projects from idea to completion, handle both frontend
                and backend with confidence, and continuously improve. I treat
                every build, client work, agency projects, or personal platforms
                like Staakx with the same level of responsibility and quality.
              </p>
            </div>
          </div>
          <div className="lg:w-[35%] border lg:h-[70vh] w-full p-5 ">
            <div className="h-full overflow-hidden   rounded-[1.5em] border">
              <Image
                src="/images/profile2.jpg"
                width={1000}
                height={1000}
                alt="Kayode Dan Precious Image"
                className="object-cover h-full w-full grayscale-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
