"use client";

import { motion } from "framer-motion";

const StaggeredText = ({
  text,
  stagger,
  duration,
}: {
  text: string;
  stagger: number;
  duration: number;
}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative overflow-hidden whitespace-nowrap block text-nowrap w-fit leading-[1.2em]"
    >
      <div className="">
        {text.split("").map((letter, index) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              delay: stagger * index,
            }}
            key={index}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((letter, index) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
                color: "oklch(90.5% 0.182 98.111)",
              },
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              delay: stagger * index,
            }}
            key={index}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default StaggeredText;

export const StaggeredOnViewText = ({
  text,
  stagger,
  duration,
}: {
  text: string;
  stagger: number;
  duration: number;
}) => {
  return (
    <motion.div
      initial="initial"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className="relative overflow-hidden whitespace-nowrap block text-nowrap w-fit leading-[1.2em]"
    >
      <div className="">
        {text.split("").map((letter, index) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              visible: {
                y: "-100%",
              },
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              delay: stagger * index,
            }}
            key={index}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((letter, index) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              visible: {
                y: 0,
                color: "oklch(90.5% 0.182 98.111)",
              },
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              delay: stagger * index,
            }}
            key={index}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
