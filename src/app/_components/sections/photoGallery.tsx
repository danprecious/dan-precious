"use client";

import { motion } from "framer-motion";
import SubText from "../utilities/subText";
import { grotesque } from "@/app/utils/font";
import { StaggeredOnViewText } from "../utilities/StaggeredText";

const PhotoGallery = () => {
  const pictures = [
    {
      id: 0,
      src: "",
      orientation: "h-[65vh]",
    },
    {
      id: 1,
      src: "",
      orientation: "h-[35vh]",
    },
    {
      id: 2,
      src: "",
      orientation: "h-[65vh]",
    },
    {
      id: 3,
      src: "",
      orientation: "h-[35vh]",
    },
    {
      id: 4,
      src: "",
      orientation: "h-[65vh]",
    },
    {
      id: 5,
      src: "",
      orientation: "h-[35vh]",
    },
  ];

  return (
    <section className="w-full min-h-[90vh] py-[10em]">
      <div className="px-14">
        <h1
          className={`${grotesque.className} lg:text-[4rem] text-[2rem] lg:w-[50%] font-bold text-gradient-b`}
        >
          {" "}
          <StaggeredOnViewText
            stagger={0.02}
            duration={0.2}
            text=".Beyound Building"
          />
        </h1>
        <div className="lg:w-[50%] my-">
          <SubText
            styles="font-medium my-5 lg:text-[1.2rem] text-xs text-foreground/70"
            text="When I’m not building, I’m exploring systems, simplicity, and sunlight."
          />
          <button className="bg-foreground cursor-pointer w-full text-background px-5 font-semibold py-3  h-fit">
            Connect with me
          </button>
        </div>
      </div>

      <div className="mt-[10em] flex lg:px-14 items-end w-[100%] overflow-hidden lg:block">
        <motion.div
          className="h-full flex  items-end"
          animate={{ x: ["0%", "-120%"] }}
          transition={{
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "mirror", // Loop the animation
            duration: 50, // Duration of one complete cycle
            ease: "linear", // Smooth movement
          }}
        >
          {pictures.map(({ id, orientation, src }) => {
            return (
              <div
                key={id}
                className={`${orientation} min-w-[25em] rounded-[1em] bg-stone-400 mx-8`}
              >
                {/* <Image src={src} alt="" /> */}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoGallery;
