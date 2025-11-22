"use client";

import SubText, { myFont } from "../utilities/subText";
import { useState } from "react";
import { grotesque } from "@/app/utils/font";
import AnimatedLine from "./animatedLine";
import StaggeredText from "../utilities/StaggeredText";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const [formOpen, setFormOpen] = useState(false);

  const descriptiveTexts = [
    "The Journey Through Complexities Teaches Us The Art of Simplicity",
    "The boring things look best",
  ];

  const [descriptiveText, setDescriptiveText] = useState(
    "The uneasy journey through complexities teaches us the profound art of simplicity"
  );

  // setDescriptiveText(() => {
  //   return descriptiveTexts[]
  // })

  return (
    <div className="h-full w-full min-h-[90vh] flex lg:items-end lg:py-[5%] pt-[30%] lg:pb-60  lg:px-10 px-5  ">
      <div className="lg:h-[60vh] w-full">
        <div className="lg:w-[80%] w-full relative">
          <p className="absolute bg-yellow-300 text-black font-bold py-1 px-5 top-[-2em] lg:top-0 border-black border-[1px] border-solid -rotate-12">
            MEET
          </p>
          <h1
            className={`font-extrabold lg:text-[10rem] leading-[1em] py-5 text-[3.5em] text-gradient- w-[]  ${grotesque.className} `}
          >
            <span className="lg:text-[8rem] text-[2.9rem]">
              {" "}
              The Simple
            </span>
            <br />
            <StaggeredText duration={0.25} stagger={0.025} text="Engineer" />
            {/* Engineer */}
          </h1>
          {/* <h1 className={`font-bold lg:text-[3rem] py-5 text-[2rem] text-gradient- w-[]`}>The Journey Through Complexities Teaches <br /> Us The Art of Simplicity</h1> */}

          <div className="flex">
            <div className="flex flex-col">
              {/* <div className=""><FaLocationDot /></div> */}

              <SubText
                styles={`${grotesque.className} font-medium lg:text-[1.2rem] text-foreground/70`}
                text={descriptiveText}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col lg:flex-row mt-10 lg:mt-0">
          <div className="lg:w-[60%] flex lg:my-5 my-6">
            <AnimatedLine />
          </div>

          <div
            className={`${grotesque.className} flex lg:justify-end lg:w-[50%] relative items-center lg:my-0`}
          >
            {formOpen && (
              <div className="absolute  py-10 border lg:w-[60%] w-full rounded-lg lg:bottom-30 bottom-16 lg:right-0 bg-background lg:bg-transparent">
                <form
                  className={`flex connectForm flex-col gap-4  items-center justify-center h-full px-4`}
                >
                  <h1
                    className={`lg:text-[2rem] text-[1.5rem] mb-2  font-bold`}
                  >
                    Let's Talk
                  </h1>
                  <input
                    className="border"
                    placeholder="Your name here..."
                  ></input>
                  <input className="border" placeholder="Your email..."></input>
                  <button className="border  w-[60%] py-2 mt-2 hover:bg-background/90 cursor-pointer">
                    Connect
                  </button>
                </form>
              </div>
            )}

            <button
              onClick={() => {
                setFormOpen(!formOpen);
              }}
              className="bg-foreground text-[1.2rem]  text-background px-5 font-semibold py-3  h-fit cursor-pointer hover:bg-foreground/90 z-10"
            >
              {!formOpen ? "Let's Talk" : "Close Form"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
