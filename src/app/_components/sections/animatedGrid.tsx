"use client";
import { motion } from "framer-motion";

export default function AnimatedGrid() {
  const blocks = Array.from({ length: 15 });

  return (
    <div className="relative w-full max-w-4xl mx-auto h-32 grid grid-cols-10 grid-rows-2     gap-1 overflow-hidden">
      {blocks.map((_, i) => (
        <motion.div
          key={i}
          style={{ gridColumn: `span ${Math.floor(Math.random() * 2) + 1}` }}
          className={`rounded-sm ${
            i % 2 === 0 ? "bg-yellow-400" : "bg-gray-600/10"
          }`}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            delay: i * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
