"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["minimalism", "precision", "clarity"];

export default function AnimatedLine() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000); // change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col justify-between">

      {/* Flowing Motion Line */}


      <div className="w-full flex">

      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-background via-foreground/20 to-foreground/50 rounded-full mb-6"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-background via-foreground/20 to-foreground/50 rounded-full mb-6"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-background via-foreground/20 to-foreground/50 rounded-full mb-6"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-background via-foreground/20 to-foreground/50 rounded-full mb-6"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-background via-foreground/20 to-foreground/50 rounded-full mb-6"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-background via-foreground/20 to-foreground/50 rounded-full mb-6"
          animate={{ x: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-background via-foreground/20 to-foreground/50 rounded-full mb-6"
          animate={{ x: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-background via-foreground/20 to-foreground/50 rounded-full mb-6"
          animate={{ x: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      <div className="w-full flex">

      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-foreground/50 via-foreground/20 to-background rounded-full mb-6"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-foreground/50 via-foreground/20 to-background rounded-full mb-6"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-foreground/50 via-foreground/20 to-background rounded-full mb-6"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-foreground/50 via-foreground/20 to-background rounded-full mb-6"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-foreground/50 via-foreground/20 to-background rounded-full mb-6"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="w-20 h-1 bg-gradient-to-r to-background via-foreground/20 from-foreground/50 rounded-full mb-6"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="w-20 h-1 bg-gradient-to-r to-background via-foreground/20 from-foreground/50 rounded-full mb-6"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="w-20 h-1 bg-gradient-to-r to-background via-foreground/20 from-foreground/50 rounded-full mb-6"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        </div>





      {/* Looping Words */}
      {/* <div className="h-10 relative">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWordIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
            className="absolute text-xl md:text-2xl font-medium"
          >
            {words[currentWordIndex]}
          </motion.span>
        </AnimatePresence>
      </div> */}
    </div>
  );
}
